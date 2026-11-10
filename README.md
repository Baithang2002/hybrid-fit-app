# ⚡ HYBRID FIT - 6-Day Workout & Cardio Tracker with Strava Sync

A standalone, production-ready full-stack application built for hybrid athletes balancing **heavy 6-day gym lifting** with **5–10 km running and cycling**, featuring seamless **Strava auto-sync**.

---

## 🚀 How to Deploy on Render (Free 24/7 Hosting)

Render par deploy karne se aap is app ko duniya ke kisi bhi kone se apne mobile phone ya laptop pe access kar sakte hain.

### Step 1: Create a GitHub Repository
Apne computer par terminal kholein aur yeh commands run karein:

```bash
cd C:\Users\nicit\.gemini\antigravity\scratch\hybrid-workout-app
git init
git add .
git commit -m "Initial commit - HYBRID FIT App"
```
Ab GitHub par ek naya repository banayein (e.g. `hybrid-fit-app`) aur push kar dein:
```bash
git remote add origin https://github.com/<your-username>/hybrid-fit-app.git
git branch -M main
git push -u origin main
```

---

### Step 2: Deploy on Render.com
1. Go to [Render.com](https://render.com) and log in (or sign up with GitHub).
2. Click **"New +"** and select **"Web Service"**.
3. Apne GitHub repository (`hybrid-fit-app`) ko connect karein.
4. Render configuration:
   - **Name:** `hybrid-fit-tracker` (ya koi bhi unique name)
   - **Region:** Singapore / Frankfurt / Oregon (koi bhi select karein)
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** `Free`
5. Click **"Deploy Web Service"**!
6. Render aapko ek live public URL dega (e.g., `https://hybrid-fit-tracker.onrender.com`).

---

## 🏃‍♂️ Strava Auto-Sync Setup Guide

Aapke Strava ke sabhi 5–10 km runs aur cycling rides seedha is app me auto-import ho jayenge!

### Step 1: Get Free Strava API Keys (1 Minute)
1. Go to [strava.com/settings/api](https://www.strava.com/settings/api) and log in.
2. Form fill karein:
   - **Application Name:** `Hybrid Fit`
   - **Category:** `Training`
   - **Club:** *(khali chod dein)*
   - **Website:** Aapka Render URL (ya `http://localhost:3000`)
   - **Authorization Callback Domain:**
     - **Render ke liye:** `hybrid-fit-tracker.onrender.com` *(bina https:// ke)*
     - **Local test ke liye:** `localhost:3000`
3. Click **"Create"**.
4. Aapko **Client ID** aur **Client Secret** mil jayenge.

### Step 2: Connect Strava in App
Aapke paas 2 options hain:
- **Option A (Directly in Web App UI):**
  App me **Cardio Tab** par jayein -> **"API Keys"** button par tap karein -> Client ID aur Client Secret paste karke Save karein!
- **Option B (Render Environment Variables):**
  Render Dashboard me **Environment** section me add karein:
  - `STRAVA_CLIENT_ID` = `your_client_id`
  - `STRAVA_CLIENT_SECRET` = `your_client_secret`
  - `APP_URL` = `https://your-app-name.onrender.com`

Ab bas **"Connect with Strava"** par click karein, Strava permission allow karein, aur **"Sync Activities"** tap karke apne runs/rides dekhna start karein!

---

## 💻 Local Run (Offline / Wi-Fi)

Agar Render pe push karne se pehle local chalana ho:
- Double-click **`start.bat`**
- PC Link: `http://localhost:3000`
- Phone Link: `http://<your-wifi-ip>:3000`

---

## 📋 6-Day Hybrid Athlete Routine

| Day | Focus | Target Muscles / Protocol | Cardio Pairing |
| :--- | :--- | :--- | :--- |
| **Day 1** | **Pull A** | Back Width, Biceps & Forearms | Active recovery / rest |
| **Day 2** | **Push A** | Chest Strength, Delts & Triceps | 3–5 km Easy Zone 2 Run / Spin |
| **Day 3** | **Legs A** | Quad-Dominant + Core | **Zero high-impact running** (protect knees) |
| **Day 4** | **Pull B** | Back Thickness, Upper Back & Biceps | 5 km Moderate Tempo Run / 20 km Cycling |
| **Day 5** | **Push B** | Upper Chest, Lateral Delts & Arms | Optional 3 km recovery jog |
| **Day 6** | **Legs B** | Posterior Chain (Hamstrings/Glutes) | 7–10 km Long Run / 30 km Cycling |
| **Day 7** | **Rest** | Active Recovery, Mobility & Hydration | Full rest |
