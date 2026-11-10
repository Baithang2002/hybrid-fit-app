/**
 * HYBRID FIT - Full-Stack Server
 * Zero external dependencies (uses native Node.js http, https/fetch, fs, path, os)
 * Production ready for Render.com, Railway, VPS, or Local deployment.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Render sets process.env.PORT dynamically (defaults to 3000 locally)
const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;

// Strava API Configuration (from environment variables or defaults)
let STRAVA_CONFIG = {
  clientId: process.env.STRAVA_CLIENT_ID || '',
  clientSecret: process.env.STRAVA_CLIENT_SECRET || '',
  appUrl: process.env.APP_URL || ''
};

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = urlObj.pathname;

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    });
    res.end();
    return;
  }

  // --- API ROUTE: Get Server & Strava Config Status ---
  if (pathname === '/api/config' && req.method === 'GET') {
    return sendJson(res, 200, {
      configured: Boolean(STRAVA_CONFIG.clientId && STRAVA_CONFIG.clientSecret),
      clientId: STRAVA_CONFIG.clientId || '',
      hasSecret: Boolean(STRAVA_CONFIG.clientSecret),
      appUrl: STRAVA_CONFIG.appUrl || `${req.headers['x-forwarded-proto'] || 'http'}://${req.headers.host}`
    });
  }

  // --- API ROUTE: Update Strava Config (Allows setting keys via Web UI) ---
  if (pathname === '/api/config' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      if (body.clientId) STRAVA_CONFIG.clientId = body.clientId.trim();
      if (body.clientSecret) STRAVA_CONFIG.clientSecret = body.clientSecret.trim();
      if (body.appUrl) STRAVA_CONFIG.appUrl = body.appUrl.trim();

      return sendJson(res, 200, {
        success: true,
        message: 'Strava credentials updated successfully!',
        configured: Boolean(STRAVA_CONFIG.clientId && STRAVA_CONFIG.clientSecret)
      });
    } catch (err) {
      return sendJson(res, 400, { error: 'Invalid JSON payload' });
    }
  }

  // --- API ROUTE: Get Strava OAuth Authorize URL ---
  if (pathname === '/api/strava/auth-url' && req.method === 'GET') {
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const protocol = req.headers['x-forwarded-proto'] || (req.connection.encrypted ? 'https' : 'http');
    const baseAppUrl = STRAVA_CONFIG.appUrl || `${protocol}://${host}`;
    const redirectUri = `${baseAppUrl}/api/strava/callback`;

    if (!STRAVA_CONFIG.clientId) {
      return sendJson(res, 400, {
        error: 'Strava Client ID is not configured. Set STRAVA_CLIENT_ID or save it in settings.'
      });
    }

    const authUrl = `https://www.strava.com/oauth/authorize?client_id=${encodeURIComponent(STRAVA_CONFIG.clientId)}` +
      `&response_type=code` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&approval_prompt=auto` +
      `&scope=read,activity:read_all`;

    return sendJson(res, 200, { authUrl, redirectUri });
  }

  // --- API ROUTE: Strava OAuth Callback (Handles code exchange) ---
  if (pathname === '/api/strava/callback' && req.method === 'GET') {
    const code = urlObj.searchParams.get('code');
    const error = urlObj.searchParams.get('error');

    if (error || !code) {
      res.writeHead(302, { Location: `/?strava_error=${encodeURIComponent(error || 'Authorization denied')}` });
      res.end();
      return;
    }

    try {
      // Exchange authorization code for access token using native fetch
      const tokenResponse = await fetch('https://www.strava.com/api/v3/oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: STRAVA_CONFIG.clientId,
          client_secret: STRAVA_CONFIG.clientSecret,
          code: code,
          grant_type: 'authorization_code'
        })
      });

      const tokenData = await tokenResponse.json();

      if (!tokenResponse.ok) {
        console.error('Strava token exchange failed:', tokenData);
        res.writeHead(302, { Location: `/?strava_error=${encodeURIComponent(tokenData.message || 'Token exchange failed')}` });
        res.end();
        return;
      }

      // Safe payload to pass back to client
      const authPayload = encodeURIComponent(JSON.stringify({
        accessToken: tokenData.access_token,
        refreshToken: tokenData.refresh_token,
        expiresAt: tokenData.expires_at,
        athlete: {
          id: tokenData.athlete?.id,
          username: tokenData.athlete?.username,
          firstname: tokenData.athlete?.firstname,
          lastname: tokenData.athlete?.lastname,
          profile: tokenData.athlete?.profile_medium
        }
      }));

      // Redirect back to front-end with token data in URL hash (avoids logging tokens in server logs)
      res.writeHead(302, { Location: `/#strava_auth=${authPayload}` });
      res.end();
      return;
    } catch (err) {
      console.error('Strava callback exception:', err);
      res.writeHead(302, { Location: `/?strava_error=${encodeURIComponent(err.message)}` });
      res.end();
      return;
    }
  }

  // --- API ROUTE: Refresh Strava Access Token ---
  if (pathname === '/api/strava/refresh' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const refreshToken = body.refreshToken;

      if (!refreshToken) {
        return sendJson(res, 400, { error: 'Missing refreshToken in body' });
      }

      const refreshResponse = await fetch('https://www.strava.com/api/v3/oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: STRAVA_CONFIG.clientId,
          client_secret: STRAVA_CONFIG.clientSecret,
          grant_type: 'refresh_token',
          refresh_token: refreshToken
        })
      });

      const refreshData = await refreshResponse.json();
      if (!refreshResponse.ok) {
        return sendJson(res, refreshResponse.status, { error: refreshData.message || 'Failed to refresh token' });
      }

      return sendJson(res, 200, {
        accessToken: refreshData.access_token,
        refreshToken: refreshData.refresh_token,
        expiresAt: refreshData.expires_at
      });
    } catch (err) {
      return sendJson(res, 500, { error: err.message });
    }
  }

  // --- API ROUTE: Fetch Recent Strava Activities & Normalize for Cardio Tracker ---
  if (pathname === '/api/strava/activities' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const accessToken = body.accessToken;

      if (!accessToken) {
        return sendJson(res, 401, { error: 'Missing Strava access token' });
      }

      // Fetch last 15 activities
      const stravaRes = await fetch('https://www.strava.com/api/v3/athlete/activities?per_page=15', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      const activities = await stravaRes.json();
      if (!stravaRes.ok) {
        return sendJson(res, stravaRes.status, { error: activities.message || 'Failed to fetch activities' });
      }

      // Filter and normalize runs & cycling rides
      const normalized = activities
        .filter(act => ['Run', 'Ride', 'VirtualRide', 'Walk'].includes(act.sport_type || act.type))
        .map(act => {
          const isRun = (act.sport_type || act.type) === 'Run';
          const isRide = ['Ride', 'VirtualRide'].includes(act.sport_type || act.type);
          const type = isRun ? 'running' : (isRide ? 'cycling' : 'walk');

          const distKm = parseFloat((act.distance / 1000).toFixed(2));
          const movingMinutes = (act.moving_time / 60);
          const movingHours = (act.moving_time / 3600);

          // Calculate pace (min/km for run, km/h for ride)
          let pace = '--';
          let speed = '--';

          if (distKm > 0 && movingMinutes > 0) {
            const paceMinPerKm = movingMinutes / distKm;
            const pMin = Math.floor(paceMinPerKm);
            const pSec = Math.round((paceMinPerKm - pMin) * 60);
            pace = `${pMin}:${pSec < 10 ? '0' : ''}${pSec}`;
          }

          if (movingHours > 0 && distKm > 0) {
            speed = (distKm / movingHours).toFixed(1);
          }

          // Estimate calories if Strava doesn't supply them
          const calories = act.calories || Math.round(distKm * 70 * (isRun ? 1.036 : 0.48));

          return {
            id: `strava-${act.id}`,
            stravaId: act.id,
            source: 'strava',
            title: act.name,
            date: act.start_date || act.start_date_local,
            type: type,
            distance: distKm,
            durationMins: movingMinutes.toFixed(1),
            pace: pace,
            speed: speed,
            elevationGain: act.total_elevation_gain || 0,
            calories: calories,
            notes: `Synced from Strava: ${act.name} (Elev: ${Math.round(act.total_elevation_gain || 0)}m)`
          };
        });

      return sendJson(res, 200, {
        success: true,
        count: normalized.length,
        activities: normalized
      });
    } catch (err) {
      return sendJson(res, 500, { error: err.message });
    }
  }

  // --- STATIC FILE SERVING ---
  let reqPath = pathname;
  if (reqPath === '/') reqPath = '/index.html';

  const filePath = path.join(BASE_DIR, reqPath);
  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  const localIp = getLocalIp();
  console.log('==================================================');
  console.log('⚡ HYBRID FIT Standalone Server is live!');
  console.log(`🌐 Server Port:       ${PORT}`);
  console.log(`💻 Local:             http://localhost:${PORT}`);
  console.log(`📱 Local Wi-Fi:       http://${localIp}:${PORT}`);
  console.log(`🚀 Ready for Render:  Set PORT or let Render assign it`);
  console.log(`🏃 Strava Integration: Fully supported (/api/strava/*)`);
  console.log('==================================================');
});
