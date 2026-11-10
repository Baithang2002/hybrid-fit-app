/**
 * Hybrid Strength & Cardio Tracker App
 * Built for 6-Day PPL + 5-10km Running/Cycling Hybrid Athlete Split
 * Features:
 *  - 2-Way Strava Sync: Push Gym Workouts to Strava + Pull 5-10km GPS Runs/Rides
 */

// --- Default 6-Day Routine Data ---
const DEFAULT_ROUTINE = [
  {
    id: "day-1",
    dayNum: 1,
    title: "Pull A: Back Width & Forearms",
    subtitle: "Yesterday's Focus - Lats, Mid-Back, Biceps & Grip",
    cardioNote: "Active recovery or rest. Light 15 min walk/easy spin only.",
    badge: "Pull Day",
    color: "emerald",
    exercises: [
      {
        id: "p1-ex1",
        name: "Deadlift / Barbell Rack Pull",
        target: "Posterior Chain, Lower & Mid Back",
        reps: "6-8",
        tips: "Keep bar close to shins, brace core, push the floor away.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p1-ex2",
        name: "Lat Pulldown (Wide Grip)",
        target: "Latissimus Dorsi (Back Width)",
        reps: "10-12",
        tips: "Pull elbows down towards your hips; avoid swinging back.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p1-ex3",
        name: "Chest-Supported Row / DB Row",
        target: "Rhomboids, Mid-Traps & Lats",
        reps: "10-12",
        tips: "Squeeze shoulder blades together at peak contraction.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p1-ex4",
        name: "Cable Face Pulls",
        target: "Rear Delts, Rotator Cuff, Upper Traps",
        reps: "15",
        tips: "Pull towards eyes with external rotation; great for posture.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p1-ex5",
        name: "Incline Dumbbell Bicep Curl",
        target: "Biceps (Long Head)",
        reps: "10-12",
        tips: "Set bench to 60°. Keep elbows back for deep stretch.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p1-ex6",
        name: "Hammer Curls (Dumbbell)",
        target: "Brachialis & Forearms",
        reps: "12-15",
        tips: "Neutral palms grip builds thick arm width and forearm strength.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p1-ex7",
        name: "Barbell Wrist Curls / Roller",
        target: "Forearm Flexors & Grip Strength",
        reps: "15-20",
        tips: "Rest forearms on bench, curl wrists upward with high control.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      }
    ]
  },
  {
    id: "day-2",
    dayNum: 2,
    title: "Push A: Chest Strength + Delts + Triceps",
    subtitle: "Today's Lift + 3-5 km Easy Cardio",
    cardioNote: "Cardio: 3-5 km Easy Zone 2 Run or 15-20 mins Cycling. Running pace should be conversational.",
    badge: "Push Day",
    color: "sky",
    exercises: [
      {
        id: "p2-ex1",
        name: "Barbell / Flat Dumbbell Bench Press",
        target: "Chest (Mid/Lower Pectorals), Triceps",
        reps: "8-10",
        tips: "Retract scapula, arch slightly, drive feet into the floor.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p2-ex2",
        name: "Standing Overhead Press (OHP)",
        target: "Anterior Deltoids & Core",
        reps: "8-10",
        tips: "Tight glutes and abs to protect spine as bar passes chin.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p2-ex3",
        name: "Incline Dumbbell Press (30°-45°)",
        target: "Upper Clavicular Chest",
        reps: "10-12",
        tips: "Touch chest lightly, press up without clanking bells.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p2-ex4",
        name: "Dumbbell Lateral Raises",
        target: "Lateral Deltoids (Shoulder Width)",
        reps: "15",
        tips: "Slight forward lean, lead with elbows, control negative.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p2-ex5",
        name: "Tricep Rope Pushdowns",
        target: "Triceps (Lateral Head)",
        reps: "12-15",
        tips: "Lock elbows at sides and spread rope apart at bottom.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p2-ex6",
        name: "Overhead Dumbbell Tricep Extension",
        target: "Triceps (Long Head)",
        reps: "12",
        tips: "Deep elbow stretch behind neck without flaring elbows excessively.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      }
    ]
  },
  {
    id: "day-3",
    dayNum: 3,
    title: "Legs A: Quad Focus + Core",
    subtitle: "Heavy Leg Day - Running Restricted",
    cardioNote: "NO High-Impact Running today! Allow knee joints and quads full recovery. Light flat cycling max 10 mins.",
    badge: "Leg Day",
    color: "amber",
    exercises: [
      {
        id: "p3-ex1",
        name: "Barbell Back Squat / Hack Squat",
        target: "Quadriceps, Glutes, Adductors",
        reps: "8-10",
        tips: "Keep knees tracking over toes, descend to parallel with controlled tempo.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p3-ex2",
        name: "Leg Press (Foot placement mid-low)",
        target: "Quadriceps Focus",
        reps: "10-12",
        tips: "Do not lock knees completely at top to protect joints.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p3-ex3",
        name: "Bulgarian Split Squats / Walking Lunges",
        target: "Single-Leg Strength & Balance",
        reps: "10 / leg",
        tips: "Essential for runners to fix left/right muscular imbalances.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p3-ex4",
        name: "Leg Extensions",
        target: "Rectus Femoris Isolation",
        reps: "12-15",
        tips: "1 sec pause at top of contraction.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p3-ex5",
        name: "Standing Calf Raises",
        target: "Gastrocnemius (Calves for Running)",
        reps: "15-20",
        tips: "Full stretch at bottom and 2-sec peak hold at top.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p3-ex6",
        name: "Hanging Leg Raises / Plank",
        target: "Core & Hip Flexors",
        reps: "15 reps / 60s",
        tips: "Don't swing; use abs to curl pelvis upward.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      }
    ]
  },
  {
    id: "day-4",
    dayNum: 4,
    title: "Pull B: Back Thickness + 5km Cardio",
    subtitle: "Horizontal Rows, Rear Delts + Moderate Run/Ride",
    cardioNote: "Cardio: 5 km Moderate Tempo Run OR 15-20 km Cycling. Perfect timing because back day leaves legs fresh!",
    badge: "Pull Day",
    color: "emerald",
    exercises: [
      {
        id: "p4-ex1",
        name: "Barbell Bent-Over Row",
        target: "Mid Back, Traps, Rhomboids",
        reps: "8-10",
        tips: "Hinge at 45°, pull bar into lower ribs, hold core tight.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p4-ex2",
        name: "Neutral-Grip Cable Seated Row",
        target: "Lats & Middle Back Thickness",
        reps: "10-12",
        tips: "Keep torso upright, avoid excessive leaning backward.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p4-ex3",
        name: "Straight-Arm Cable Lat Pulldown",
        target: "Lat Isolation & Serratus",
        reps: "12-15",
        tips: "Slight forward lean, sweep bar towards thighs without bending elbows.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p4-ex4",
        name: "Reverse Pec Deck Flyes",
        target: "Posterior Deltoids",
        reps: "15",
        tips: "Keep arms slightly bent, focus on squeezing back of shoulders.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p4-ex5",
        name: "EZ-Bar Preacher Curls",
        target: "Bicep Short Head (Peak)",
        reps: "10-12",
        tips: "Full extension at bottom without hyperextending elbows.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p4-ex6",
        name: "Cross-Body Dumbbell Hammer Curls",
        target: "Brachialis & Brachioradialis",
        reps: "12",
        tips: "Curl dumbbell diagonally across chest towards opposite shoulder.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      }
    ]
  },
  {
    id: "day-5",
    dayNum: 5,
    title: "Push B: Upper Chest & Shoulder Hypertrophy",
    subtitle: "High Volume Upper Body + Arm Density",
    cardioNote: "Optional: Light 3 km shakeout run or 15 mins recovery cycling.",
    badge: "Push Day",
    color: "sky",
    exercises: [
      {
        id: "p5-ex1",
        name: "Incline Barbell Bench Press",
        target: "Upper Chest",
        reps: "8-10",
        tips: "Lower bar to upper collarbone with elbows slightly tucked.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p5-ex2",
        name: "Seated Dumbbell Shoulder Press",
        target: "Anterior & Lateral Delts",
        reps: "10-12",
        tips: "Press smoothly to the top without banging weights.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p5-ex3",
        name: "Cable Chest Flyes (Mid to High)",
        target: "Pectoralis Major Contraction",
        reps: "12-15",
        tips: "Hug a wide barrel motion, pause 1 second at full squeeze.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p5-ex4",
        name: "Lean-Away Cable Lateral Raise",
        target: "Side Deltoids (Constant Tension)",
        reps: "15",
        tips: "Hold onto pole and lean outwards for peak tension curve.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p5-ex5",
        name: "EZ Bar Skull Crushers",
        target: "Triceps Long & Medial Head",
        reps: "10-12",
        tips: "Lower bar towards forehead/bench top, elbows pointed to ceiling.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p5-ex6",
        name: "Parallel Bar Dips / Cable Kickbacks",
        target: "Lower Chest & Triceps",
        reps: "12-15",
        tips: "Keep shoulders depressed, chest slightly pitched forward.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p5-ex7",
        name: "Cable Crunches / Ab Wheel",
        target: "Rectus Abdominis",
        reps: "15",
        tips: "Round spine to flex abs, don't just sit hips down.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      }
    ]
  },
  {
    id: "day-6",
    dayNum: 6,
    title: "Legs B: Posterior Chain + 7-10km Endurance Run",
    subtitle: "Hamstrings, Glutes + Main Weekly Long Cardio",
    cardioNote: "Cardio: 7-10 km Long Run (or 25-30 km Cycling). Can be done morning (run) + evening (weights) or vice versa.",
    badge: "Leg & Cardio Day",
    color: "amber",
    exercises: [
      {
        id: "p6-ex1",
        name: "Romanian Deadlift (RDL)",
        target: "Hamstrings & Glute-Ham Tie-in",
        reps: "8-10",
        tips: "Crucial for runners! Push hips backward until deep hamstring stretch.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p6-ex2",
        name: "Lying or Seated Leg Curls",
        target: "Hamstring Knee Flexion",
        reps: "12-15",
        tips: "Control the 3-second lowering eccentric phase.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p6-ex3",
        name: "Barbell Hip Thrusts / Glute Bridges",
        target: "Gluteus Maximus (Running Propulsion)",
        reps: "10-12",
        tips: "Chin tucked, lock out at top for 2 seconds with posterior pelvic tilt.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      },
      {
        id: "p6-ex4",
        name: "Seated Calf Raises",
        target: "Soleus (Deep Running Calf Muscle)",
        reps: "15-20",
        tips: "The soleus absorbs up to 8x bodyweight during running.",
        sets: [
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false },
          { weight: "", reps: "", completed: false }
        ]
      }
    ]
  },
  {
    id: "day-7",
    dayNum: 7,
    title: "Rest & Active Recovery",
    subtitle: "Muscle Repair, Joint Decompression & Hydration",
    cardioNote: "Zero high-intensity training. 20-30 min gentle walk or light yoga/stretching.",
    badge: "Recovery Day",
    color: "purple",
    exercises: [
      {
        id: "p7-ex1",
        name: "Foam Rolling: IT Bands, Quads & Lats",
        target: "Myofascial Release",
        reps: "5-10 mins",
        tips: "Roll slowly; pause on tender spots for 20-30 seconds.",
        sets: [{ weight: "Bodyweight", reps: "Complete", completed: false }]
      },
      {
        id: "p7-ex2",
        name: "Hamstring & Hip Flexor Dynamic Stretches",
        target: "Hip Mobility for Running Economy",
        reps: "5-10 mins",
        tips: "Deep lunge stretches (Couch stretch), Pigeon pose.",
        sets: [{ weight: "Bodyweight", reps: "Complete", completed: false }]
      },
      {
        id: "p7-ex3",
        name: "Shoulder & Thoracic Spine Mobility",
        target: "Upper Body Posture & Rotator Cuff",
        reps: "5 mins",
        tips: "Thoracic rotations, cat-cow and band pull-aparts.",
        sets: [{ weight: "Bodyweight", reps: "Complete", completed: false }]
      }
    ]
  }
];

// --- Web Audio API Synth Sound Generator ---
class SoundManager {
  constructor() {
    this.audioCtx = null;
    this.soundEnabled = true;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  playBeep(freq = 880, duration = 0.15, type = "sine") {
    if (!this.soundEnabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  playCompleteChime() {
    if (!this.soundEnabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playBeep(freq, 0.35, "triangle");
        }, idx * 100);
      });
      if ("vibrate" in navigator) {
        navigator.vibrate([150, 50, 200]);
      }
    } catch (e) {
      console.warn("Chime error:", e);
    }
  }
}

// --- App State Management ---
class WorkoutApp {
  constructor() {
    this.STORAGE_KEY = "HYBRID_WORKOUT_APP_V1";
    this.STRAVA_AUTH_KEY = "HYBRID_STRAVA_AUTH_V1";
    this.soundManager = new SoundManager();
    
    this.state = this.loadState();
    this.stravaAuth = this.loadStravaAuth();
    
    // Timer state
    this.timer = {
      interval: null,
      totalSeconds: 90,
      remainingSeconds: 90,
      isRunning: false
    };

    this.activeTab = "workout";
    this.selectedDayId = "day-2";
    
    this.initDOM();
    this.bindEvents();
    this.checkUrlForStravaCallback();
    this.updateStravaUi();
    this.render();
  }

  loadState() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.routine || parsed.routine.length === 0) {
          parsed.routine = JSON.parse(JSON.stringify(DEFAULT_ROUTINE));
        }
        if (!parsed.history) parsed.history = [];
        if (!parsed.cardioHistory) parsed.cardioHistory = [];
        return parsed;
      } catch (e) {
        console.error("Failed to parse saved state, resetting:", e);
      }
    }
    return {
      routine: JSON.parse(JSON.stringify(DEFAULT_ROUTINE)),
      history: [],
      cardioHistory: [
        {
          id: "hist-cardio-0",
          date: new Date().toISOString(),
          type: "running",
          distance: 3.0,
          durationMins: 18,
          pace: "6:00",
          speed: "10.0",
          calories: 210,
          notes: "Recorded in Strava App: Today's 3km Run"
        }
      ],
      userProfile: {
        weightKg: 70
      }
    };
  }

  saveState() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error("Storage save failed:", e);
    }
  }

  loadStravaAuth() {
    const saved = localStorage.getItem(this.STRAVA_AUTH_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return null;
      }
    }
    return null;
  }

  saveStravaAuth(data) {
    this.stravaAuth = data;
    if (data) {
      localStorage.setItem(this.STRAVA_AUTH_KEY, JSON.stringify(data));
    } else {
      localStorage.removeItem(this.STRAVA_AUTH_KEY);
    }
    this.updateStravaUi();
  }

  checkUrlForStravaCallback() {
    const hash = window.location.hash;
    if (hash && hash.includes("strava_auth=")) {
      try {
        const rawJson = decodeURIComponent(hash.split("strava_auth=")[1]);
        const authData = JSON.parse(rawJson);
        this.saveStravaAuth(authData);
        window.history.replaceState(null, "", window.location.pathname);
        this.soundManager.playCompleteChime();
        alert(`🎉 Strava Connected!\n\nWelcome ${authData.athlete?.firstname || 'Athlete'}!\nAb aapke gym workouts direct Strava par 'Weight Training' ban kar upload ho sakte hain!`);
      } catch (err) {
        console.error("Failed to parse Strava auth payload:", err);
      }
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get("strava_error")) {
      alert("Strava Connection Error: " + params.get("strava_error"));
      window.history.replaceState(null, "", window.location.pathname);
    }
  }

  initDOM() {
    this.dayNavContainer = document.getElementById("dayNavContainer");
    this.dayHeaderContainer = document.getElementById("dayHeaderContainer");
    this.exercisesContainer = document.getElementById("exercisesContainer");
    this.cardioHistoryContainer = document.getElementById("cardioHistoryContainer");
    this.workoutHistoryContainer = document.getElementById("workoutHistoryContainer");
    this.statsCardsContainer = document.getElementById("statsCardsContainer");

    this.timerTimeDisplay = document.getElementById("timerTimeDisplay");
    this.timerStatusBadge = document.getElementById("timerStatusBadge");
    this.timerProgressRing = document.getElementById("timerProgressRing");
    this.timerStartBtn = document.getElementById("timerStartBtn");
    this.timerResetBtn = document.getElementById("timerResetBtn");

    this.stravaStatusBadge = document.getElementById("stravaStatusBadge");
    this.stravaDisconnectedView = document.getElementById("stravaDisconnectedView");
    this.stravaConnectedView = document.getElementById("stravaConnectedView");
    this.stravaAthleteName = document.getElementById("stravaAthleteName");
    this.stravaAthleteAvatar = document.getElementById("stravaAthleteAvatar");
    this.connectStravaBtn = document.getElementById("connectStravaBtn");
    this.syncStravaBtn = document.getElementById("syncStravaBtn");
    this.disconnectStravaBtn = document.getElementById("disconnectStravaBtn");
    this.stravaConfigBtn = document.getElementById("stravaConfigBtn");
    this.stravaConfigModal = document.getElementById("stravaConfigModal");
    this.closeStravaModalBtn = document.getElementById("closeStravaModalBtn");
    this.stravaConfigForm = document.getElementById("stravaConfigForm");
    this.callbackDomainHint = document.getElementById("callbackDomainHint");

    if (this.callbackDomainHint) {
      this.callbackDomainHint.textContent = window.location.host;
    }
  }

  bindEvents() {
    document.querySelectorAll("[data-tab-target]").forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-tab-target");
        this.switchTab(target);
      });
    });

    const cardioForm = document.getElementById("cardioLogForm");
    if (cardioForm) {
      cardioForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleCardioSubmit();
      });
    }

    const distanceInput = document.getElementById("cardioDistance");
    const hoursInput = document.getElementById("cardioHours");
    const minsInput = document.getElementById("cardioMinutes");
    const secsInput = document.getElementById("cardioSeconds");
    const cardioTypeInputs = document.querySelectorAll('input[name="cardioType"]');

    [distanceInput, hoursInput, minsInput, secsInput].forEach(inp => {
      if (inp) {
        inp.addEventListener("input", () => this.updateLivePace());
      }
    });
    cardioTypeInputs.forEach(radio => {
      radio.addEventListener("change", () => this.updateLivePace());
    });

    document.querySelectorAll(".quick-dist-btn").forEach(chip => {
      chip.addEventListener("click", () => {
        const dist = chip.getAttribute("data-dist");
        if (distanceInput) {
          distanceInput.value = dist;
          this.updateLivePace();
        }
      });
    });

    document.querySelectorAll(".timer-preset-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const seconds = parseInt(btn.getAttribute("data-seconds"), 10);
        this.setTimerPreset(seconds);
      });
    });

    if (this.timerStartBtn) {
      this.timerStartBtn.addEventListener("click", () => {
        this.soundManager.init();
        this.toggleTimer();
      });
    }

    if (this.timerResetBtn) {
      this.timerResetBtn.addEventListener("click", () => {
        this.resetTimer();
      });
    }

    const finishBtn = document.getElementById("finishWorkoutBtn");
    if (finishBtn) {
      finishBtn.addEventListener("click", () => this.finishWorkout());
    }

    const resetTodayBtn = document.getElementById("resetDayBtn");
    if (resetTodayBtn) {
      resetTodayBtn.addEventListener("click", () => {
        if (confirm("Reset all checkmarks and sets for this day?")) {
          this.resetCurrentDaySets();
        }
      });
    }

    const addExBtn = document.getElementById("addCustomExerciseBtn");
    if (addExBtn) {
      addExBtn.addEventListener("click", () => this.promptAddExercise());
    }

    const soundToggle = document.getElementById("soundToggle");
    if (soundToggle) {
      soundToggle.addEventListener("change", (e) => {
        this.soundManager.soundEnabled = e.target.checked;
      });
    }

    const exportBtn = document.getElementById("exportDataBtn");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => this.exportData());
    }

    const importInput = document.getElementById("importFileInput");
    if (importInput) {
      importInput.addEventListener("change", (e) => this.importData(e));
    }

    if (this.connectStravaBtn) {
      this.connectStravaBtn.addEventListener("click", () => this.initiateStravaAuth());
    }

    if (this.syncStravaBtn) {
      this.syncStravaBtn.addEventListener("click", () => this.syncStravaActivities());
    }

    if (this.disconnectStravaBtn) {
      this.disconnectStravaBtn.addEventListener("click", () => {
        if (confirm("Disconnect your Strava account?")) {
          this.saveStravaAuth(null);
        }
      });
    }

    if (this.stravaConfigBtn) {
      this.stravaConfigBtn.addEventListener("click", () => this.openStravaModal());
    }

    if (this.closeStravaModalBtn) {
      this.closeStravaModalBtn.addEventListener("click", () => this.closeStravaModal());
    }

    if (this.stravaConfigForm) {
      this.stravaConfigForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.saveStravaConfig();
      });
    }
  }

  // --- Strava UI & Sync Logic ---
  updateStravaUi() {
    if (!this.stravaStatusBadge) return;

    if (this.stravaAuth && this.stravaAuth.accessToken) {
      this.stravaStatusBadge.textContent = "Connected";
      this.stravaStatusBadge.className = "text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/40";
      
      this.stravaDisconnectedView?.classList.add("hidden");
      this.stravaConnectedView?.classList.remove("hidden");

      if (this.stravaAthleteName) {
        const name = `${this.stravaAuth.athlete?.firstname || ''} ${this.stravaAuth.athlete?.lastname || ''}`.trim() || 'Athlete';
        this.stravaAthleteName.textContent = name;
      }

      if (this.stravaAthleteAvatar && this.stravaAuth.athlete?.profile) {
        this.stravaAthleteAvatar.src = this.stravaAuth.athlete.profile;
        this.stravaAthleteAvatar.classList.remove("hidden");
      }
    } else {
      this.stravaStatusBadge.textContent = "Not Connected";
      this.stravaStatusBadge.className = "text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 font-semibold border border-zinc-700";
      
      this.stravaDisconnectedView?.classList.remove("hidden");
      this.stravaConnectedView?.classList.add("hidden");
    }
  }

  async initiateStravaAuth() {
    try {
      const res = await fetch("/api/strava/auth-url");
      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Please configure your Strava Client ID and Secret first.");
        this.openStravaModal();
        return;
      }

      if (data.authUrl) {
        window.location.href = data.authUrl;
      }
    } catch (err) {
      alert("Failed to start Strava Auth: Make sure the server is running!");
    }
  }

  async ensureValidStravaToken() {
    if (!this.stravaAuth || !this.stravaAuth.accessToken) return null;
    if (this.stravaAuth.expiresAt && Date.now() / 1000 > this.stravaAuth.expiresAt - 60) {
      try {
        const refreshRes = await fetch("/api/strava/refresh", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refreshToken: this.stravaAuth.refreshToken })
        });
        const refreshData = await refreshRes.json();
        if (refreshRes.ok && refreshData.accessToken) {
          this.stravaAuth.accessToken = refreshData.accessToken;
          this.stravaAuth.refreshToken = refreshData.refreshToken;
          this.stravaAuth.expiresAt = refreshData.expiresAt;
          this.saveStravaAuth(this.stravaAuth);
          return refreshData.accessToken;
        }
      } catch (e) {
        console.error("Token refresh failed:", e);
      }
    }
    return this.stravaAuth.accessToken;
  }

  // Upload Gym Workout TO Strava
  async uploadWorkoutToStrava(workoutLog) {
    const token = await this.ensureValidStravaToken();
    if (!token) return;

    try {
      const res = await fetch("/api/strava/upload-workout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessToken: token,
          workout: workoutLog
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        workoutLog.stravaActivityId = data.activityId;
        workoutLog.stravaUrl = data.stravaUrl;
        this.saveState();
        this.renderHistory();
        alert(`🚀 Workout Posted to your Strava Profile!\n\nView on Strava: ${data.stravaUrl}`);
      } else {
        console.warn("Strava upload response:", data);
      }
    } catch (err) {
      console.error("Error uploading workout to Strava:", err);
    }
  }

  // Pull Runs & Rides FROM Strava
  async syncStravaActivities() {
    const token = await this.ensureValidStravaToken();
    if (!token) {
      alert("Please connect with Strava first!");
      return;
    }

    const syncBtn = this.syncStravaBtn;
    const originalText = syncBtn.innerHTML;
    syncBtn.disabled = true;
    syncBtn.innerHTML = `
      <svg class="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
      <span>Syncing...</span>
    `;

    try {
      const res = await fetch("/api/strava/activities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessToken: token })
      });

      const result = await res.json();
      if (!res.ok) {
        alert("Strava Sync Failed: " + (result.error || "Unknown error"));
        return;
      }

      let addedCount = 0;
      result.activities.forEach(act => {
        const alreadyExists = this.state.cardioHistory.some(existing => existing.stravaId === act.stravaId);
        if (!alreadyExists) {
          this.state.cardioHistory.unshift(act);
          addedCount++;
        }
      });

      if (addedCount > 0) {
        this.saveState();
        this.renderStats();
        this.renderHistory();
        this.soundManager.playCompleteChime();

        if (typeof confetti === "function") {
          confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
        }

        alert(`✅ Synced ${addedCount} new GPS run/ride(s) from your Strava app!`);
      } else {
        alert("✅ All your GPS runs/rides are already synced!");
      }
    } catch (err) {
      alert("Error syncing with Strava: " + err.message);
    } finally {
      syncBtn.disabled = false;
      syncBtn.innerHTML = originalText;
    }
  }

  openStravaModal() {
    if (this.stravaConfigModal) {
      this.stravaConfigModal.classList.remove("hidden");
    }
  }

  closeStravaModal() {
    if (this.stravaConfigModal) {
      this.stravaConfigModal.classList.add("hidden");
    }
  }

  async saveStravaConfig() {
    const clientId = document.getElementById("inputStravaClientId")?.value;
    const clientSecret = document.getElementById("inputStravaClientSecret")?.value;

    if (!clientId || !clientSecret) {
      alert("Both Client ID and Client Secret are required.");
      return;
    }

    try {
      const res = await fetch("/api/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientId, clientSecret })
      });
      const data = await res.json();
      if (res.ok) {
        alert("✅ Strava credentials saved! Now click 'Connect with Strava'.");
        this.closeStravaModal();
      } else {
        alert(data.error || "Failed to update configuration.");
      }
    } catch (err) {
      alert("Error saving config: " + err.message);
    }
  }

  // --- Routine & Navigation ---
  switchTab(tabName) {
    this.activeTab = tabName;
    document.querySelectorAll("[data-tab-content]").forEach(section => {
      if (section.getAttribute("data-tab-content") === tabName) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    });

    document.querySelectorAll("[data-tab-target]").forEach(btn => {
      if (btn.getAttribute("data-tab-target") === tabName) {
        btn.classList.add("tab-active", "border-lime-400", "text-lime-400");
        btn.classList.remove("text-zinc-400", "border-transparent");
      } else {
        btn.classList.remove("tab-active", "border-lime-400", "text-lime-400");
        btn.classList.add("text-zinc-400", "border-transparent");
      }
    });

    if (tabName === "history") {
      this.renderHistory();
      this.renderStats();
    }
  }

  render() {
    this.renderDayNav();
    this.renderCurrentDay();
    this.renderTimerDisplay();
    this.renderHistory();
    this.renderStats();
    this.updateLivePace();
  }

  renderDayNav() {
    if (!this.dayNavContainer) return;
    this.dayNavContainer.innerHTML = "";

    this.state.routine.forEach(day => {
      const isSelected = day.id === this.selectedDayId;
      const completedSetsCount = day.exercises.reduce((acc, ex) => {
        return acc + ex.sets.filter(s => s.completed).length;
      }, 0);
      const totalSets = day.exercises.reduce((acc, ex) => acc + ex.sets.length, 0);
      const isAllDone = totalSets > 0 && completedSetsCount === totalSets;

      const btn = document.createElement("button");
      btn.className = `flex-shrink-0 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all flex flex-col items-start gap-0.5 ${
        isSelected
          ? "bg-lime-400/10 border-lime-400 text-lime-400 shadow-sm shadow-lime-400/20"
          : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700"
      }`;

      btn.innerHTML = `
        <div class="flex items-center gap-1.5 w-full">
          <span class="text-xs uppercase tracking-wider font-bold ${isSelected ? 'text-lime-400' : 'text-zinc-400'}">Day ${day.dayNum}</span>
          ${isAllDone ? '<span class="text-[10px] bg-lime-500/20 text-lime-400 px-1.5 py-0.2 rounded-full font-bold">DONE</span>' : ''}
        </div>
        <div class="font-semibold text-xs whitespace-nowrap text-white">${day.badge}</div>
        <div class="text-[11px] text-zinc-400 truncate max-w-[110px]">${completedSetsCount}/${totalSets} sets</div>
      `;

      btn.addEventListener("click", () => {
        this.selectedDayId = day.id;
        this.renderDayNav();
        this.renderCurrentDay();
      });

      this.dayNavContainer.appendChild(btn);
    });
  }

  getCurrentDay() {
    return this.state.routine.find(d => d.id === this.selectedDayId) || this.state.routine[0];
  }

  renderCurrentDay() {
    const day = this.getCurrentDay();
    if (!day) return;

    if (this.dayHeaderContainer) {
      let badgeBg = "bg-sky-500/10 text-sky-400 border-sky-500/30";
      if (day.badge.includes("Pull")) badgeBg = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      if (day.badge.includes("Leg")) badgeBg = "bg-amber-500/10 text-amber-400 border-amber-500/30";
      if (day.badge.includes("Recovery")) badgeBg = "bg-purple-500/10 text-purple-400 border-purple-500/30";

      this.dayHeaderContainer.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider border ${badgeBg}">
              Day ${day.dayNum} • ${day.badge}
            </span>
          </div>
          <div class="text-xs text-zinc-400">
            ${day.exercises.length} Exercises • 6-Day Split
          </div>
        </div>
        <h2 class="text-2xl font-bold text-white tracking-tight">${day.title}</h2>
        <p class="text-zinc-400 text-sm mt-0.5">${day.subtitle}</p>

        <div class="mt-3 p-3 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-800/80 border border-zinc-700/80 flex items-start gap-2.5">
          <div class="p-1.5 rounded-lg bg-lime-400/10 text-lime-400 mt-0.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="text-xs text-zinc-300">
            <span class="font-bold text-lime-400 uppercase tracking-wide mr-1">Cardio Protocol:</span>
            ${day.cardioNote}
          </div>
        </div>
      `;
    }

    if (this.exercisesContainer) {
      this.exercisesContainer.innerHTML = "";
      day.exercises.forEach((ex, exIndex) => {
        const exCard = this.createExerciseCard(day, ex, exIndex);
        this.exercisesContainer.appendChild(exCard);
      });
    }
  }

  createExerciseCard(day, ex, exIndex) {
    const card = document.createElement("div");
    card.className = "glass-card rounded-2xl p-4 sm:p-5 shadow-lg border border-zinc-800/90";

    const completedSets = ex.sets.filter(s => s.completed).length;
    const totalSets = ex.sets.length;

    let setsRowsHtml = "";
    ex.sets.forEach((set, sIndex) => {
      setsRowsHtml += `
        <div class="set-row flex items-center gap-2 sm:gap-3 py-2 px-2.5 rounded-xl transition-colors ${set.completed ? 'completed' : 'bg-zinc-900/50'}" data-set-index="${sIndex}">
          <div class="w-8 text-center text-xs font-bold text-zinc-400">#${sIndex + 1}</div>
          <div class="flex-1 min-w-[70px]">
            <input 
              type="number" 
              placeholder="0" 
              value="${set.weight || ''}" 
              data-field="weight" 
              data-ex-id="${ex.id}" 
              data-set-idx="${sIndex}"
              class="w-full bg-zinc-800/80 border border-zinc-700/60 rounded-lg px-2.5 py-1.5 text-sm text-center text-white focus:outline-none focus:border-lime-400 transition-colors"
            />
          </div>
          <div class="text-xs text-zinc-400 font-medium">kg ×</div>
          <div class="flex-1 min-w-[70px]">
            <input 
              type="number" 
              placeholder="${ex.reps.split('-')[0] || '10'}" 
              value="${set.reps || ''}" 
              data-field="reps" 
              data-ex-id="${ex.id}" 
              data-set-idx="${sIndex}"
              class="w-full bg-zinc-800/80 border border-zinc-700/60 rounded-lg px-2.5 py-1.5 text-sm text-center text-white focus:outline-none focus:border-lime-400 transition-colors"
            />
          </div>
          <div class="text-xs text-zinc-400 font-medium">reps</div>
          <div class="w-10 flex justify-center">
            <button 
              type="button" 
              data-check-btn 
              data-ex-id="${ex.id}" 
              data-set-idx="${sIndex}"
              class="check-btn w-8 h-8 rounded-lg border border-zinc-700 flex items-center justify-center transition-all ${
                set.completed ? 'checked bg-lime-400 text-black border-lime-400 font-bold' : 'bg-zinc-800 text-zinc-400 hover:border-zinc-500'
              }"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="flex items-start justify-between gap-3 mb-3">
        <div>
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="font-bold text-base sm:text-lg text-white">${ex.name}</h3>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
              Target: ${ex.reps} reps
            </span>
          </div>
          <p class="text-xs text-zinc-400 mt-0.5"><span class="text-zinc-400">Muscles:</span> ${ex.target}</p>
        </div>
        <div class="text-right">
          <span class="text-xs font-semibold px-2 py-1 rounded-md ${
            completedSets === totalSets && totalSets > 0
              ? 'bg-lime-500/20 text-lime-400 border border-lime-500/40'
              : 'bg-zinc-800 text-zinc-400'
          }">
            ${completedSets}/${totalSets} Done
          </span>
        </div>
      </div>

      ${ex.tips ? `
        <div class="text-[12px] text-zinc-400 bg-zinc-900/70 rounded-lg p-2.5 mb-3.5 border-l-2 border-lime-400 flex items-start gap-2">
          <span class="text-lime-400 font-bold text-xs">TIP:</span>
          <span>${ex.tips}</span>
        </div>
      ` : ''}

      <div class="flex items-center gap-2 sm:gap-3 text-[11px] uppercase tracking-wider font-semibold text-zinc-400 px-3 mb-1">
        <div class="w-8 text-center">Set</div>
        <div class="flex-1 text-center">Weight</div>
        <div class="w-6"></div>
        <div class="flex-1 text-center">Reps</div>
        <div class="w-6"></div>
        <div class="w-10 text-center">Done</div>
      </div>

      <div class="space-y-1.5" id="sets-container-${ex.id}">
        ${setsRowsHtml}
      </div>

      <div class="flex items-center justify-between gap-2 mt-3 pt-3 border-t border-zinc-800/80">
        <div class="flex items-center gap-2">
          <button 
            type="button" 
            class="text-xs font-medium text-zinc-300 hover:text-white px-2.5 py-1 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 transition-colors"
            data-action="add-set" 
            data-ex-id="${ex.id}"
          >
            + Add Set
          </button>
          ${ex.sets.length > 1 ? `
            <button 
              type="button" 
              class="text-xs font-medium text-red-400/80 hover:text-red-300 px-2.5 py-1 rounded-lg hover:bg-red-500/10 transition-colors"
              data-action="remove-set" 
              data-ex-id="${ex.id}"
            >
              - Remove Set
            </button>
          ` : ''}
        </div>
        <button 
          type="button" 
          class="text-xs text-lime-400 hover:text-lime-300 flex items-center gap-1 font-medium"
          data-action="quick-timer"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Rest Timer
        </button>
      </div>
    `;

    card.querySelectorAll('input[data-field]').forEach(input => {
      input.addEventListener("input", (e) => {
        const field = e.target.getAttribute("data-field");
        const setIdx = parseInt(e.target.getAttribute("data-set-idx"), 10);
        ex.sets[setIdx][field] = e.target.value;
        this.saveState();
      });
    });

    card.querySelectorAll('[data-check-btn]').forEach(btn => {
      btn.addEventListener("click", () => {
        const setIdx = parseInt(btn.getAttribute("data-set-idx"), 10);
        ex.sets[setIdx].completed = !ex.sets[setIdx].completed;
        
        if (ex.sets[setIdx].completed) {
          this.soundManager.playBeep(700, 0.1);
          this.autoTriggerTimer(90);
        }

        this.saveState();
        this.renderDayNav();
        this.renderCurrentDay();
      });
    });

    card.querySelector('[data-action="add-set"]')?.addEventListener("click", () => {
      const lastSet = ex.sets[ex.sets.length - 1];
      ex.sets.push({
        weight: lastSet ? lastSet.weight : "",
        reps: lastSet ? lastSet.reps : "",
        completed: false
      });
      this.saveState();
      this.renderDayNav();
      this.renderCurrentDay();
    });

    card.querySelector('[data-action="remove-set"]')?.addEventListener("click", () => {
      if (ex.sets.length > 1) {
        ex.sets.pop();
        this.saveState();
        this.renderDayNav();
        this.renderCurrentDay();
      }
    });

    card.querySelector('[data-action="quick-timer"]')?.addEventListener("click", () => {
      this.setTimerPreset(90);
      this.startTimer();
      const timerWidget = document.getElementById("restTimerCard");
      if (timerWidget) {
        timerWidget.scrollIntoView({ behavior: "smooth" });
      }
    });

    return card;
  }

  promptAddExercise() {
    const day = this.getCurrentDay();
    const name = prompt("Enter Exercise Name (e.g. Incline Cable Flyes):");
    if (!name || !name.trim()) return;

    const target = prompt("Target Muscles (e.g. Upper Chest, Delts):", "Chest");
    const reps = prompt("Target Reps (e.g. 10-12):", "10-12");

    day.exercises.push({
      id: "custom-" + Date.now(),
      name: name.trim(),
      target: target || "Target Muscle",
      reps: reps || "10-12",
      tips: "Custom exercise added to routine.",
      sets: [
        { weight: "", reps: "", completed: false },
        { weight: "", reps: "", completed: false },
        { weight: "", reps: "", completed: false }
      ]
    });

    this.saveState();
    this.renderDayNav();
    this.renderCurrentDay();
  }

  resetCurrentDaySets() {
    const day = this.getCurrentDay();
    day.exercises.forEach(ex => {
      ex.sets.forEach(s => {
        s.completed = false;
      });
    });
    this.saveState();
    this.renderDayNav();
    this.renderCurrentDay();
  }

  finishWorkout() {
    const day = this.getCurrentDay();
    const completedSets = day.exercises.reduce((acc, ex) => {
      return acc + ex.sets.filter(s => s.completed).length;
    }, 0);

    if (completedSets === 0) {
      alert("Please complete at least one set before finishing the workout!");
      return;
    }

    let totalVolume = 0;
    day.exercises.forEach(ex => {
      ex.sets.forEach(s => {
        if (s.completed && s.weight && s.reps) {
          totalVolume += (parseFloat(s.weight) || 0) * (parseInt(s.reps, 10) || 0);
        }
      });
    });

    const workoutLog = {
      id: "log-" + Date.now(),
      date: new Date().toISOString(),
      dayId: day.id,
      dayNum: day.dayNum,
      title: day.title,
      badge: day.badge,
      completedSets: completedSets,
      totalVolumeKg: totalVolume,
      exercisesSummary: day.exercises.map(ex => ({
        name: ex.name,
        completedSets: ex.sets.filter(s => s.completed).length,
        totalSets: ex.sets.length
      }))
    };

    this.state.history.unshift(workoutLog);
    this.saveState();
    this.soundManager.playCompleteChime();

    if (typeof confetti === "function") {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }

    // Auto-prompt to sync workout to Strava!
    if (this.stravaAuth && this.stravaAuth.accessToken) {
      const askStrava = confirm(
        `🎉 Workout Complete!\n\n${day.title}\nSets: ${completedSets} | Volume: ${totalVolume} kg\n\nKya is workout ko Strava par 'Weight Training' activity ke roop me post karna hai?`
      );
      if (askStrava) {
        this.uploadWorkoutToStrava(workoutLog);
      }
    } else {
      alert(`🎉 Workout Logged Successfully!\n\n${day.title}\nTotal Sets Completed: ${completedSets}\nTotal Volume: ${totalVolume} kg`);
    }

    this.renderStats();
    this.renderHistory();
  }

  // --- Manual Cardio Form Logic ---
  updateLivePace() {
    const type = document.querySelector('input[name="cardioType"]:checked')?.value || "running";
    const dist = parseFloat(document.getElementById("cardioDistance")?.value) || 0;
    const hours = parseInt(document.getElementById("cardioHours")?.value, 10) || 0;
    const mins = parseInt(document.getElementById("cardioMinutes")?.value, 10) || 0;
    const secs = parseInt(document.getElementById("cardioSeconds")?.value, 10) || 0;

    const totalSeconds = (hours * 3600) + (mins * 60) + secs;
    const totalMinutes = totalSeconds / 60;
    const totalHours = totalSeconds / 3600;

    const paceDisplay = document.getElementById("calculatedPaceDisplay");
    const speedDisplay = document.getElementById("calculatedSpeedDisplay");
    const caloriesDisplay = document.getElementById("calculatedCaloriesDisplay");

    if (dist <= 0 || totalSeconds <= 0) {
      if (paceDisplay) paceDisplay.textContent = "--:--";
      if (speedDisplay) speedDisplay.textContent = "--";
      if (caloriesDisplay) caloriesDisplay.textContent = "--";
      return;
    }

    const paceMinPerKm = totalMinutes / dist;
    const pMinutes = Math.floor(paceMinPerKm);
    const pSeconds = Math.round((paceMinPerKm - pMinutes) * 60);
    const paceFormatted = `${pMinutes}:${pSeconds < 10 ? '0' : ''}${pSeconds} /km`;

    const speedKmh = (dist / totalHours).toFixed(1);

    const userWeight = this.state.userProfile?.weightKg || 70;
    const calFactor = type === "running" ? 1.036 : 0.48;
    const estimatedCalories = Math.round(dist * userWeight * calFactor);

    if (paceDisplay) paceDisplay.textContent = type === "running" ? paceFormatted : `${speedKmh} km/h`;
    if (speedDisplay) speedDisplay.textContent = `${speedKmh} km/h`;
    if (caloriesDisplay) caloriesDisplay.textContent = `~${estimatedCalories} kcal`;
  }

  handleCardioSubmit() {
    const type = document.querySelector('input[name="cardioType"]:checked')?.value || "running";
    const dist = parseFloat(document.getElementById("cardioDistance")?.value);
    const hours = parseInt(document.getElementById("cardioHours")?.value, 10) || 0;
    const mins = parseInt(document.getElementById("cardioMinutes")?.value, 10) || 0;
    const secs = parseInt(document.getElementById("cardioSeconds")?.value, 10) || 0;
    const intensity = document.getElementById("cardioIntensity")?.value || "Moderate";
    const notes = document.getElementById("cardioNotes")?.value || "";

    if (!dist || dist <= 0) {
      alert("Please enter a valid distance (e.g. 5 km).");
      return;
    }

    const totalSeconds = (hours * 3600) + (mins * 60) + secs;
    const totalMinutes = totalSeconds / 60;
    const totalHours = totalSeconds / 3600;

    const speedKmh = totalHours > 0 ? (dist / totalHours).toFixed(1) : "0";
    let pace = "--";
    if (totalMinutes > 0 && dist > 0) {
      const paceMinPerKm = totalMinutes / dist;
      const pMin = Math.floor(paceMinPerKm);
      const pSec = Math.round((paceMinPerKm - pMin) * 60);
      pace = `${pMin}:${pSec < 10 ? '0' : ''}${pSec}`;
    }

    const userWeight = this.state.userProfile?.weightKg || 70;
    const calFactor = type === "running" ? 1.036 : 0.48;
    const calories = Math.round(dist * userWeight * calFactor);

    const newCardioLog = {
      id: "cardio-" + Date.now(),
      date: new Date().toISOString(),
      type: type,
      distance: dist,
      durationMins: totalMinutes.toFixed(1),
      pace: pace,
      speed: speedKmh,
      intensity: intensity,
      calories: calories,
      notes: notes
    };

    this.state.cardioHistory.unshift(newCardioLog);
    this.saveState();
    this.soundManager.playCompleteChime();

    document.getElementById("cardioDistance").value = "";
    document.getElementById("cardioHours").value = "";
    document.getElementById("cardioMinutes").value = "";
    document.getElementById("cardioSeconds").value = "";
    document.getElementById("cardioNotes").value = "";
    this.updateLivePace();

    this.renderStats();
    this.renderHistory();

    alert(`🏃‍♂️ Cardio Session Saved!\n${dist} km ${type.toUpperCase()} logged.`);
  }

  // --- Smart Rest Timer Logic ---
  setTimerPreset(seconds) {
    this.pauseTimer();
    this.timer.totalSeconds = seconds;
    this.timer.remainingSeconds = seconds;
    this.renderTimerDisplay();
  }

  autoTriggerTimer(seconds = 90) {
    this.setTimerPreset(seconds);
    this.startTimer();
  }

  toggleTimer() {
    if (this.timer.isRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    if (this.timer.isRunning) return;
    this.timer.isRunning = true;

    if (this.timer.remainingSeconds <= 0) {
      this.timer.remainingSeconds = this.timer.totalSeconds || 90;
    }

    if (this.timerStartBtn) {
      this.timerStartBtn.textContent = "Pause";
      this.timerStartBtn.classList.replace("bg-lime-400", "bg-amber-400");
    }

    if (this.timerStatusBadge) {
      this.timerStatusBadge.textContent = "RESTING";
      this.timerStatusBadge.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-lime-500/20 text-lime-400 border border-lime-500/40 animate-pulse";
    }

    this.timer.interval = setInterval(() => {
      this.timer.remainingSeconds--;

      if (this.timer.remainingSeconds === 3 || this.timer.remainingSeconds === 2 || this.timer.remainingSeconds === 1) {
        this.soundManager.playBeep(600, 0.1);
      } else if (this.timer.remainingSeconds === 0) {
        this.soundManager.playBeep(1000, 0.4, "triangle");
      }

      if (this.timer.remainingSeconds <= 0) {
        this.pauseTimer();
        this.timer.remainingSeconds = 0;
        this.soundManager.playCompleteChime();
        if (this.timerStatusBadge) {
          this.timerStatusBadge.textContent = "READY FOR NEXT SET!";
          this.timerStatusBadge.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40";
        }
      }

      this.renderTimerDisplay();
    }, 1000);
  }

  pauseTimer() {
    this.timer.isRunning = false;
    clearInterval(this.timer.interval);
    this.timer.interval = null;

    if (this.timerStartBtn) {
      this.timerStartBtn.textContent = "Start";
      this.timerStartBtn.classList.replace("bg-amber-400", "bg-lime-400");
    }

    if (this.timerStatusBadge && this.timer.remainingSeconds > 0) {
      this.timerStatusBadge.textContent = "PAUSED";
      this.timerStatusBadge.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-700 text-zinc-300";
    }
  }

  resetTimer() {
    this.pauseTimer();
    this.timer.remainingSeconds = this.timer.totalSeconds;
    this.renderTimerDisplay();
  }

  renderTimerDisplay() {
    const mins = Math.floor(this.timer.remainingSeconds / 60);
    const secs = this.timer.remainingSeconds % 60;
    const formatted = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

    if (this.timerTimeDisplay) {
      this.timerTimeDisplay.textContent = formatted;
    }

    if (this.timerProgressRing) {
      const radius = 42;
      const circumference = 2 * Math.PI * radius;
      const progressRatio = this.timer.totalSeconds > 0
        ? (this.timer.remainingSeconds / this.timer.totalSeconds)
        : 1;
      const strokeDashoffset = circumference - (progressRatio * circumference);
      this.timerProgressRing.style.strokeDashoffset = strokeDashoffset;
    }
  }

  // --- Stats & History Rendering ---
  renderStats() {
    if (!this.statsCardsContainer) return;

    const totalWorkouts = this.state.history.length;
    let totalRunKm = 0;
    let totalCycleKm = 0;

    this.state.cardioHistory.forEach(log => {
      const d = parseFloat(log.distance) || 0;
      if (log.type === "cycling") {
        totalCycleKm += d;
      } else {
        totalRunKm += d;
      }
    });

    let totalWeightVolume = 0;
    this.state.history.forEach(w => {
      totalWeightVolume += (w.totalVolumeKg || 0);
    });

    this.statsCardsContainer.innerHTML = `
      <div class="glass-card p-4 rounded-xl border border-zinc-800">
        <div class="text-xs text-zinc-400 font-medium">Workouts Done</div>
        <div class="text-2xl font-bold text-white mt-1">${totalWorkouts}</div>
        <div class="text-[11px] text-lime-400 mt-1">Gym Sessions</div>
      </div>
      <div class="glass-card p-4 rounded-xl border border-zinc-800">
        <div class="text-xs text-zinc-400 font-medium">Total Running</div>
        <div class="text-2xl font-bold text-lime-400 mt-1">${totalRunKm.toFixed(1)} <span class="text-sm font-normal text-zinc-400">km</span></div>
        <div class="text-[11px] text-zinc-400 mt-1">From Strava GPS</div>
      </div>
      <div class="glass-card p-4 rounded-xl border border-zinc-800">
        <div class="text-xs text-zinc-400 font-medium">Total Cycling</div>
        <div class="text-2xl font-bold text-sky-400 mt-1">${totalCycleKm.toFixed(1)} <span class="text-sm font-normal text-zinc-400">km</span></div>
        <div class="text-[11px] text-zinc-400 mt-1">From Strava GPS</div>
      </div>
      <div class="glass-card p-4 rounded-xl border border-zinc-800">
        <div class="text-xs text-zinc-400 font-medium">Volume Lifted</div>
        <div class="text-2xl font-bold text-amber-400 mt-1">${(totalWeightVolume / 1000).toFixed(1)} <span class="text-sm font-normal text-zinc-400">Ton</span></div>
        <div class="text-[11px] text-zinc-400 mt-1">Weight × Reps</div>
      </div>
    `;
  }

  renderHistory() {
    if (this.workoutHistoryContainer) {
      if (this.state.history.length === 0) {
        this.workoutHistoryContainer.innerHTML = `
          <div class="text-center py-8 text-zinc-400 text-sm">
            No completed workouts yet. Mark sets done and tap "Finish Workout" to log!
          </div>
        `;
      } else {
        this.workoutHistoryContainer.innerHTML = this.state.history.map((log, idx) => {
          const dateStr = new Date(log.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            hour: "2-digit",
            minute: "2-digit"
          });

          return `
            <div class="glass-card p-4 rounded-xl border border-zinc-800 flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                    Day ${log.dayNum} • ${log.badge}
                  </span>
                  <h4 class="font-bold text-white text-base mt-1">${log.title}</h4>
                </div>
                <div class="text-right">
                  <div class="text-xs text-zinc-400">${dateStr}</div>
                  <div class="flex items-center gap-2 mt-1 justify-end">
                    ${log.stravaUrl ? `
                      <a href="${log.stravaUrl}" target="_blank" class="text-xs text-[#FC4C02] hover:underline flex items-center gap-0.5 font-semibold">
                        View on Strava ↗
                      </a>
                    ` : (this.stravaAuth?.accessToken ? `
                      <button class="text-xs text-[#FC4C02] hover:underline font-semibold" onclick="window.app.uploadWorkoutToStrava(window.app.state.history[${idx}])">
                        Post to Strava
                      </button>
                    ` : '')}
                    <button class="text-xs text-red-400 hover:text-red-300" onclick="window.app.deleteWorkoutLog(${idx})">Delete</button>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-4 text-xs text-zinc-300 border-t border-zinc-800/80 pt-2 mt-1">
                <div><span class="text-zinc-400">Sets Completed:</span> <strong class="text-white">${log.completedSets}</strong></div>
                <div><span class="text-zinc-400">Total Volume:</span> <strong class="text-amber-400">${log.totalVolumeKg} kg</strong></div>
              </div>
            </div>
          `;
        }).join("");
      }
    }

    if (this.cardioHistoryContainer) {
      if (this.state.cardioHistory.length === 0) {
        this.cardioHistoryContainer.innerHTML = `
          <div class="text-center py-8 text-zinc-400 text-sm">
            No cardio sessions recorded yet. Record runs in your Strava app and tap 'Sync Activities'!
          </div>
        `;
      } else {
        this.cardioHistoryContainer.innerHTML = this.state.cardioHistory.map((cardio, idx) => {
          const dateStr = new Date(cardio.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            hour: "2-digit",
            minute: "2-digit"
          });
          const isRun = cardio.type === "running";
          const isStrava = cardio.source === "strava";

          return `
            <div class="glass-card p-3.5 rounded-xl border border-zinc-800 flex items-center justify-between gap-3">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center ${isRun ? 'bg-lime-500/10 text-lime-400' : 'bg-sky-500/10 text-sky-400'}">
                  ${isRun 
                    ? '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'
                    : '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
                  }
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-white text-sm capitalize">${cardio.type}</span>
                    <span class="text-xs text-lime-400 font-bold">${cardio.distance} km</span>
                    ${isStrava ? '<span class="text-[9px] bg-[#FC4C02]/20 text-[#FC4C02] font-black px-1.5 py-0.2 rounded uppercase border border-[#FC4C02]/30">Strava GPS</span>' : ''}
                  </div>
                  <div class="text-[11px] text-zinc-400">
                    ${cardio.durationMins} mins • Pace: ${cardio.pace} • ~${cardio.calories} kcal
                  </div>
                  ${cardio.title ? `<div class="text-[10px] text-zinc-500 truncate max-w-[200px] sm:max-w-xs">${cardio.title}</div>` : ''}
                </div>
              </div>
              <div class="text-right">
                <div class="text-[11px] text-zinc-400">${dateStr}</div>
                <button class="text-[11px] text-red-400 hover:text-red-300" onclick="window.app.deleteCardioLog(${idx})">Remove</button>
              </div>
            </div>
          `;
        }).join("");
      }
    }
  }

  deleteWorkoutLog(index) {
    if (confirm("Delete this workout log?")) {
      this.state.history.splice(index, 1);
      this.saveState();
      this.renderHistory();
      this.renderStats();
    }
  }

  deleteCardioLog(index) {
    if (confirm("Delete this cardio log?")) {
      this.state.cardioHistory.splice(index, 1);
      this.saveState();
      this.renderHistory();
      this.renderStats();
    }
  }

  exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `hybrid_workout_backup_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (imported.routine) {
          this.state = imported;
          this.saveState();
          this.render();
          alert("Backup data restored successfully!");
        } else {
          alert("Invalid backup file format.");
        }
      } catch (err) {
        alert("Failed to read JSON file.");
      }
    };
    reader.readAsText(file);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.app = new WorkoutApp();
});
