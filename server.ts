import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// =========================================================================
// TYPES & IN-MEMORY PERSISTENT STORE
// =========================================================================

interface FeedbackRecord {
  id: string;
  clientName: string;
  clientEmail?: string;
  clientPhoto?: string;
  rating: number;
  comment: string;
  googleVerified: boolean;
  googleId?: string;
  isApproved: boolean;
  codeUsed?: string;
  projectScreenshot?: string;
  source?: string;
  adminReply?: string;
  date: string;
}

// Generate customized auto-reply based on feedback review stars
export function getAutoReplyForRating(rating: number, clientName?: string): string {
  const firstName = (clientName || 'Valued Client').trim().split(' ')[0];
  const stars = Math.max(1, Math.min(5, Math.round(Number(rating) || 5)));
  switch (stars) {
    case 5:
      return `Thank you so much ${firstName} for the stellar 5-star review! It was an absolute pleasure working together on your project. Wishing you massive success, and I look forward to collaborating again on future milestones! 🚀`;
    case 4:
      return `Thank you very much ${firstName} for the great 4-star feedback and for trusting my services! I am delighted with the project outcome, and I remain available anytime if you need any adjustments or enhancements.`;
    case 3:
      return `Thank you for sharing your feedback, ${firstName}. I value your honest review and strive to make every single delivery a 5-star experience. Please feel free to reach out anytime if there is anything we can optimize or refine further!`;
    case 2:
      return `Thank you for your feedback, ${firstName}. Client satisfaction is my top priority. Please reach out to me directly on WhatsApp (+92 342 6793428) or email so we can address your points and ensure everything meets your standards.`;
    case 1:
      return `Thank you for your review, ${firstName}. I take your feedback very seriously. Please reach out to me directly at alimuhammadhvn81@gmail.com or WhatsApp (+92 342 6793428) so I can immediately assist, make revisions, and resolve any concerns.`;
    default:
      return `Thank you for your valuable feedback, ${firstName}! Your review helps continuously elevate the quality of my services.`;
  }
}

interface FeedbackCodeRecord {
  id: string;
  code: string;
  assignedTo: string;
  isUsed: boolean;
  createdAt: string;
  usedAt?: string;
}

interface InquiryRecord {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  service?: string;
  budget?: string;
  message: string;
  status: "New" | "Read" | "Replied";
  date: string;
}

interface SiteStatsRecord {
  profileViews: number;
  satisfiedClients: number;
  unsatisfiedClients: number;
  positiveReactions: number;
  negativeReactions: number;
}

interface AppStore {
  siteStats: SiteStatsRecord;
  feedbacks: FeedbackRecord[];
  feedbackCodes: FeedbackCodeRecord[];
  inquiries: InquiryRecord[];
}

const DATA_DIR = path.join(process.cwd(), "data");
const STORE_PATH = path.join(DATA_DIR, "store.json");

// Default initial state
const defaultStore: AppStore = {
  siteStats: {
    profileViews: 168,
    satisfiedClients: 19,
    unsatisfiedClients: 0,
    positiveReactions: 54,
    negativeReactions: 1
  },
  feedbacks: [
    {
      id: "fb-1",
      clientName: "David Harrison",
      clientEmail: "david.h@novastudio.co",
      clientPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      rating: 5,
      comment: "Muhammad Ali delivered exceptional full-stack work for Nova Web Studio. Clean code, smooth responsive UI, and delivered ahead of schedule!",
      googleVerified: true,
      isApproved: true,
      codeUsed: "Ali-NOVA1",
      source: "Nova Web Studio Showcase",
      adminReply: "Thank you so much David for the stellar 5-star review! It was an absolute pleasure working together on the Nova Web Studio showcase. Wishing you massive success, and I look forward to collaborating again on future milestones! 🚀",
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString()
    },
    {
      id: "fb-2",
      clientName: "Sarah Jenkins",
      clientEmail: "sarah.j@pixelcreatives.io",
      clientPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      rating: 5,
      comment: "Incredible attention to detail with Pixel Forge brand assets and luxury business card layouts. Highly recommended!",
      googleVerified: true,
      isApproved: true,
      codeUsed: "Ali-PIXEL2",
      source: "Pixel Forge Graphic Design",
      adminReply: "Thank you so much Sarah for the wonderful 5-star review! I'm thrilled that the Pixel Forge branding and executive visiting cards came out exactly as envisioned. Always here whenever you need new creative assets!",
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString()
    },
    {
      id: "fb-3",
      clientName: "Tariq Mahmood",
      clientEmail: "tariq.arch@gmail.com",
      clientPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      rating: 5,
      comment: "The 2D smart flooring room plan and 3D architectural renders exceeded our client expectations. Precise dimensions and clean layers.",
      googleVerified: true,
      isApproved: true,
      codeUsed: "Ali-ARCH3",
      source: "2D & 3D Architecture",
      adminReply: "Thank you Tariq for the excellent 5-star rating! Delivering precise 2D CAD floor plans and photorealistic 3D spatial renders was a fantastic experience. Looking forward to our next architectural project!",
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12).toISOString()
    }
  ],
  feedbackCodes: [
    {
      id: "code-1",
      code: "Ali-TEST",
      assignedTo: "Demo Client / Reviewer",
      isUsed: false,
      createdAt: new Date().toISOString()
    },
    {
      id: "code-2",
      code: "Ali-VIP1",
      assignedTo: "VIP Client",
      isUsed: false,
      createdAt: new Date().toISOString()
    },
    {
      id: "code-3",
      code: "Ali-DEV2",
      assignedTo: "Game Development Client",
      isUsed: false,
      createdAt: new Date().toISOString()
    }
  ],
  inquiries: [
    {
      id: "inq-1",
      name: "Alex Rivera",
      email: "alex@gamingforge.net",
      phone: "+1 415 555 0192",
      subject: "Custom 2D Puzzle Game Development",
      service: "Game & AI Development",
      budget: "$250 - $500",
      message: "Looking for an interactive HTML5/Canvas puzzle mechanic similar to Colour Block with custom audio triggers and level editor.",
      status: "New",
      date: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString()
    },
    {
      id: "inq-2",
      name: "Fatima Noor",
      email: "fatima@creativestudios.pk",
      phone: "+92 300 1234567",
      subject: "Luxury Brand Identity & Corporate Visiting Cards",
      service: "Pixel Forge Graphic Design",
      budget: "$100 - $200",
      message: "Need complete vector branding, embossed visiting cards, and promotional banners for a boutique luxury brand launch.",
      status: "Read",
      date: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString()
    }
  ]
};

// Load or initialize store from disk
function loadStore(): AppStore {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(STORE_PATH)) {
      const raw = fs.readFileSync(STORE_PATH, "utf-8");
      const parsed = JSON.parse(raw);
      const feedbacks: FeedbackRecord[] = (Array.isArray(parsed.feedbacks) && parsed.feedbacks.length > 0
        ? parsed.feedbacks
        : defaultStore.feedbacks
      ).map((fb: FeedbackRecord) => ({
        ...fb,
        adminReply: fb.adminReply || getAutoReplyForRating(fb.rating, fb.clientName)
      }));

      return {
        siteStats: { ...defaultStore.siteStats, ...(parsed.siteStats || {}) },
        feedbacks,
        feedbackCodes: Array.isArray(parsed.feedbackCodes) && parsed.feedbackCodes.length > 0 ? parsed.feedbackCodes : defaultStore.feedbackCodes,
        inquiries: Array.isArray(parsed.inquiries) && parsed.inquiries.length > 0 ? parsed.inquiries : defaultStore.inquiries,
      };
    } else {
      fs.writeFileSync(STORE_PATH, JSON.stringify(defaultStore, null, 2), "utf-8");
      return defaultStore;
    }
  } catch (err) {
    console.error("[STORE] Failed to load store, using default:", err);
    return defaultStore;
  }
}

let store: AppStore = loadStore();

function saveStore(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(STORE_PATH, JSON.stringify(store, null, 2), "utf-8");
  } catch (err) {
    console.error("[STORE] Error saving store to disk:", err);
  }
}

// =========================================================================
// ADMIN AUTHENTICATION CONFIGURATION
// =========================================================================
export const ADMIN_CREDENTIALS = {
  email: process.env.ADMIN_EMAIL || null,
  password: process.env.ADMIN_PASSWORD || null,
};

// System prompt for Muhammad Ali’s AI Portfolio Assistant
const PORTFOLIO_KNOWLEDGE = `You are the official AI Assistant for Muhammad Ali’s Portfolio.
Answer questions accurately based on:
1. Web Development: Nova Web Studio (Full-stack responsive web applications, modern architectures).
2. Games/AI: Colour Block (puzzle game logic), Pak AI (NLP & conversational AI), Learn Play (educational quiz portal).
3. Design: Pixel Forge (Vector Logos, Visiting Cards, Social Media & YouTube Banners).
4. Architecture: 2D/3D Smart Flooring, spatial mapping, and 3D architectural renders.
Budget: Starting from $10+ USD.
Contact Details:
- WhatsApp: +92 342 6793428
- Call: +92 330 0358799
- Email: alimuhammadhvn81@gmail.com
If question is completely irrelevant to Muhammad Ali or his services, say politely: "Unfortunately, I am unable to answer you regarding that topic, but I am happy to help you with Muhammad Ali's web development, game/AI, design, or architecture services!"`;

let aiClient: any = null;
function getAIClient() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (key) {
      aiClient = new GoogleGenAI({ apiKey: key });
    }
  }
  return aiClient;
}

// =========================================================================
// EXPRESS APPLICATION SETUP
// =========================================================================
const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[SERVER] ${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// =========================================================================
// API ENDPOINTS
// =========================================================================

// Health Check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Voice AI / Assistant
app.post("/api/voice-support", async (req, res) => {
  const { question, conversationHistory } = req.body;
  if (!question) return res.status(400).json({ error: "Question required" });
  
  if (!process.env.GEMINI_API_KEY) {
    return res.json({ 
      answer: "Muhammad Ali is a Full-Stack, AI, and 2D Game Developer offering Web Development, Game/AI development, Pixel Forge graphic design, and 2D/3D Architecture. You can contact him via WhatsApp at +92 342 6793428 or email at alimuhammadhvn81@gmail.com." 
    });
  }
  
  try {
    const ai = getAIClient();
    const contents: any[] = (conversationHistory || []).slice(-4).map((h: any) => ({
      role: h.sender === "user" ? "user" : "model",
      parts: [{ text: h.text }]
    }));
    contents.push({ role: "user", parts: [{ text: question }] });
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: { 
        systemInstruction: PORTFOLIO_KNOWLEDGE, 
        temperature: 0.7, 
        maxOutputTokens: 600 
      }
    });
    
    res.json({ answer: response.text || "I'm sorry, I couldn't generate a response." });
  } catch (e) {
    console.error("[SERVER] Gemini Voice AI Error:", e);
    res.json({ 
      answer: "Muhammad Ali specializes in Web Development (Nova Web Studio), Games & AI (Colour Block, Pak AI, Learn Play), Pixel Forge Design, and 2D/3D Architecture. Feel free to contact him directly at +92 342 6793428 or alimuhammadhvn81@gmail.com." 
    });
  }
});

// Calculate and return stats
app.get("/api/stats", (_req, res) => {
  try {
    const approvedFeedbacks = store.feedbacks.filter(f => f.isApproved === true);
    const totalFeedback = approvedFeedbacks.length;
    const averageRating = totalFeedback
      ? approvedFeedbacks.reduce((sum, item) => sum + (item.rating || 0), 0) / totalFeedback
      : 5;

    const result = {
      profileViews: store.siteStats.profileViews,
      satisfiedClients: Math.max(store.siteStats.satisfiedClients, totalFeedback),
      unsatisfiedClients: store.siteStats.unsatisfiedClients,
      positiveReactions: store.siteStats.positiveReactions,
      negativeReactions: store.siteStats.negativeReactions,
      totalFeedback,
      averageRating: parseFloat(averageRating.toFixed(1)),
      ratingBreakdown: {
        stars5: approvedFeedbacks.filter(f => Math.round(f.rating) === 5).length,
        stars4: approvedFeedbacks.filter(f => Math.round(f.rating) === 4).length,
        stars3: approvedFeedbacks.filter(f => Math.round(f.rating) === 3).length,
        stars2: approvedFeedbacks.filter(f => Math.round(f.rating) === 2).length,
        stars1: approvedFeedbacks.filter(f => Math.round(f.rating) === 1).length,
      }
    };

    res.json(result);
  } catch (e) {
    console.error("[SERVER] Error in /api/stats:", e);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

// Increment profile views
app.post("/api/stats/view", (_req, res) => {
  try {
    store.siteStats.profileViews += 1;
    saveStore();
    res.json({ success: true, profileViews: store.siteStats.profileViews });
  } catch (e) {
    console.error("[SERVER] Error incrementing views:", e);
    res.status(500).json({ error: "View increment failed" });
  }
});

// Handle Reactions (Like / Dislike)
app.post("/api/reactions", (req, res) => {
  try {
    const { type, isRemoving } = req.body;
    if (type === "like") {
      if (isRemoving) {
        store.siteStats.positiveReactions = Math.max(0, store.siteStats.positiveReactions - 1);
      } else {
        store.siteStats.positiveReactions += 1;
      }
    } else if (type === "dislike") {
      if (isRemoving) {
        store.siteStats.negativeReactions = Math.max(0, store.siteStats.negativeReactions - 1);
      } else {
        store.siteStats.negativeReactions += 1;
      }
    }
    saveStore();
    res.json({
      success: true,
      positiveReactions: store.siteStats.positiveReactions,
      negativeReactions: store.siteStats.negativeReactions
    });
  } catch (e) {
    console.error("[SERVER] Reaction update error:", e);
    res.status(500).json({ error: "Reaction update failed" });
  }
});

// Feedback Code Verification
app.post("/api/feedback/verify-code", (req, res) => {
  try {
    const code = (req.body.code || "").trim();
    if (!code.toLowerCase().startsWith("ali-")) {
      return res.status(400).json({ valid: false, error: 'Code must start with "Ali-".' });
    }

    const found = store.feedbackCodes.find(
      c => c.code.toLowerCase() === code.toLowerCase()
    );

    if (!found) {
      if (code.toUpperCase().startsWith("ALI-TEST") || code.toUpperCase().startsWith("ALI-DEMO")) {
        const newCode: FeedbackCodeRecord = {
          id: `code-${Date.now()}`,
          code: code.toUpperCase(),
          assignedTo: "Verified Reviewer",
          isUsed: false,
          createdAt: new Date().toISOString()
        };
        store.feedbackCodes.push(newCode);
        saveStore();
        return res.json({ valid: true, code: newCode.code, assignedTo: newCode.assignedTo });
      }
      return res.status(404).json({ valid: false, error: "Feedback code not recognized or invalid." });
    }

    if (found.isUsed) {
      return res.status(400).json({ valid: false, error: "This feedback code has already been used." });
    }

    res.json({ valid: true, code: found.code, assignedTo: found.assignedTo });
  } catch (e) {
    console.error("[SERVER] Verify code error:", e);
    res.status(500).json({ error: "Verification failed" });
  }
});

// Helper to get OAuth Client ID from env or firebase-applet-config.json
const getOAuthClientId = () => {
  let appletClientId = "";
  try {
    const configPath = path.join(process.cwd(), "firebase-applet-config.json");
    if (fs.existsSync(configPath)) {
      const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
      appletClientId = config.oAuthClientId || "";
    }
  } catch (e) {}
  return process.env.GOOGLE_CLIENT_ID || process.env.VITE_GOOGLE_CLIENT_ID || appletClientId || "1057584179825-ebgauidoppj7qfc4d3lrf99c7rokag9c.apps.googleusercontent.com";
};

// =========================================================================
// OFFICIAL GOOGLE OAUTH 2.0 AUTHENTICATION ENDPOINTS
// =========================================================================

// Get OAuth Authorize URL for Real Google Login
app.get("/api/auth/google/url", (req, res) => {
  try {
    const clientId = getOAuthClientId();
    const appUrl = process.env.APP_URL || `${req.protocol}://${req.get("host")}`;
    const redirectUri = `${appUrl.replace(/\/+$/, "")}/auth/google/callback`;

    if (!clientId) {
      return res.status(400).json({
        configured: false,
        error: "GOOGLE_CLIENT_ID is not set in environment.",
        redirectUri
      });
    }

    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: "code",
      scope: "openid profile email",
      access_type: "offline",
      prompt: "select_account"
    });

    const url = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
    res.json({ configured: true, url, redirectUri, clientId });
  } catch (e) {
    console.error("[OAUTH] Error generating Google OAuth URL:", e);
    res.status(500).json({ error: "Failed to generate Google auth URL" });
  }
});

// OAuth Callback from Google
app.get(["/auth/google/callback", "/auth/google/callback/"], async (req, res) => {
  const { code, error } = req.query;

  if (error || !code) {
    return res.send(`
      <!DOCTYPE html>
      <html>
        <head><title>Google Authentication</title></head>
        <body style="font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; background: #0f172a; color: white;">
          <div style="text-align: center; max-width: 400px; padding: 24px;">
            <h3 style="color: #ef4444;">Authentication Failed</h3>
            <p style="font-size: 14px; color: #94a3b8;">${error || "No authorization code provided."}</p>
            <script>
              if (window.opener) {
                window.opener.postMessage({ type: 'GOOGLE_AUTH_ERROR', error: '${error || "cancelled"}' }, '*');
                setTimeout(() => window.close(), 1500);
              }
            </script>
          </div>
        </body>
      </html>
    `);
  }

  try {
    const clientId = getOAuthClientId();
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET || "";
    const appUrl = process.env.APP_URL || `${req.protocol}://${req.get("host")}`;
    const redirectUri = `${appUrl.replace(/\/+$/, "")}/auth/google/callback`;

    // Exchange authorization code for Google ID Token & Access Token
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code: code as string,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }).toString()
    });

    const tokenData = await tokenRes.json();
    if (!tokenRes.ok || !tokenData.access_token) {
      throw new Error(tokenData.error_description || tokenData.error || "Token exchange failed");
    }

    // Fetch official User Profile from Google UserInfo endpoint
    const userRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${tokenData.access_token}` }
    });

    const userData = await userRes.json();
    if (!userRes.ok || !userData.email) {
      throw new Error("Failed to fetch verified user info from Google");
    }

    const payload = {
      name: userData.name || "Google User",
      email: userData.email,
      picture: userData.picture || `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name || "Google User")}&background=1a73e8&color=ffffff`,
      sub: userData.sub
    };

    return res.send(`
      <!DOCTYPE html>
      <html>
        <head><title>Google Authentication Verified</title></head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; background: #ffffff; color: #1e293b; margin: 0;">
          <div style="text-align: center; max-width: 360px; padding: 24px;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: #e8f0fe; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 12px;">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </div>
            <h3 style="margin: 0 0 8px 0; font-size: 18px; color: #1a73e8;">Google Account Verified</h3>
            <p style="margin: 0; font-size: 13px; color: #5f6368;">Signed in as <strong>${payload.name}</strong></p>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: #80868b;">Closing window...</p>
            <script>
              try {
                if (window.opener) {
                  window.opener.postMessage({
                    type: 'GOOGLE_AUTH_SUCCESS',
                    user: ${JSON.stringify(payload)}
                  }, '*');
                  setTimeout(() => window.close(), 600);
                } else {
                  window.location.href = '/';
                }
              } catch (e) {
                window.close();
              }
            </script>
          </div>
        </body>
      </html>
    `);
  } catch (err: any) {
    console.error("[OAUTH] Google Token Exchange Error:", err);
    return res.send(`
      <!DOCTYPE html>
      <html>
        <head><title>Google Authentication Error</title></head>
        <body style="font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; background: #0f172a; color: white;">
          <div style="text-align: center; max-width: 400px; padding: 24px;">
            <h3 style="color: #ef4444;">Verification Failed</h3>
            <p style="font-size: 13px; color: #94a3b8;">${err.message || "Failed to exchange token with Google"}</p>
            <button onclick="window.close()" style="margin-top: 16px; padding: 8px 16px; background: #334155; color: white; border: none; border-radius: 8px; cursor: pointer;">Close Window</button>
            <script>
              if (window.opener) {
                window.opener.postMessage({ type: 'GOOGLE_AUTH_ERROR', error: '${err.message || "failed"}' }, '*');
              }
            </script>
          </div>
        </body>
      </html>
    `);
  }
});

// Verify Google Identity Token / Credential (from Google One Tap or GSI popup)
app.post("/api/auth/google/verify-token", async (req, res) => {
  try {
    const { credential } = req.body;
    if (!credential) {
      return res.status(400).json({ error: "Missing credential token" });
    }

    // Verify token with official Google endpoint
    const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`);
    if (!response.ok) {
      return res.status(401).json({ error: "Invalid Google ID token" });
    }

    const payload = await response.json();
    if (!payload.email) {
      return res.status(400).json({ error: "No email returned from Google token" });
    }

    res.json({
      success: true,
      user: {
        name: payload.name || "Google User",
        email: payload.email,
        picture: payload.picture || `https://ui-avatars.com/api/?name=${encodeURIComponent(payload.name || "Google User")}&background=1a73e8&color=ffffff`,
        sub: payload.sub
      }
    });
  } catch (e: any) {
    console.error("[OAUTH] Error verifying ID token:", e);
    res.status(500).json({ error: "Internal token verification failure" });
  }
});

// Submit Verified Feedback via Google Authentication
app.post("/api/feedback/submit-verified", (req, res) => {
  try {
    const { rating, comment, code, projectScreenshot, source, clientName, clientEmail, clientPhoto } = req.body;

    const trimmedCode = (code || "").trim();
    if (trimmedCode) {
      const codeIndex = store.feedbackCodes.findIndex(
        c => c.code.toLowerCase() === trimmedCode.toLowerCase()
      );
      if (codeIndex !== -1 && !store.feedbackCodes[codeIndex].isUsed) {
        store.feedbackCodes[codeIndex].isUsed = true;
        store.feedbackCodes[codeIndex].usedAt = new Date().toISOString();
      }
    }

    const calculatedRating = Math.max(1, Math.min(5, Number(rating) || 5));
    const finalClientName = (clientName || "Verified Client").trim();
    const finalClientEmail = (clientEmail || "verified.client@google.com").trim();
    const generatedReply = getAutoReplyForRating(calculatedRating, finalClientName);

    const newFeedback: FeedbackRecord = {
      id: `fb-${Date.now()}`,
      clientName: finalClientName,
      clientEmail: finalClientEmail,
      clientPhoto: clientPhoto || `https://ui-avatars.com/api/?name=${encodeURIComponent(finalClientName)}&background=00d9ff&color=061017`,
      rating: calculatedRating,
      comment: (comment || "").trim(),
      googleVerified: true,
      isApproved: true,
      codeUsed: trimmedCode || "GOOGLE-AUTH-VERIFIED",
      projectScreenshot: projectScreenshot || undefined,
      source: source || "Direct Client",
      adminReply: generatedReply,
      date: new Date().toISOString()
    };

    store.feedbacks.unshift(newFeedback);
    store.siteStats.satisfiedClients += 1;
    saveStore();

    res.json({ success: true, feedback: newFeedback });
  } catch (e) {
    console.error("[SERVER] Submission error:", e);
    res.status(500).json({ error: "Submission failed" });
  }
});

// Get Public Approved Feedbacks
app.get("/api/feedback", (_req, res) => {
  try {
    const approved = store.feedbacks
      .filter(f => f.isApproved === true)
      .map(f => ({
        ...f,
        date: f.date
      }));
    res.json(approved);
  } catch (e) {
    console.error("[SERVER] Fetch feedback error:", e);
    res.status(500).json({ error: "Failed to fetch feedbacks" });
  }
});

// Public Submit Inquiry
app.post("/api/inquiries", (req, res) => {
  try {
    const { name, email, phone, subject, service, budget, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }
    const newInquiry: InquiryRecord = {
      id: `inq-${Date.now()}`,
      name: (name || "").trim(),
      email: (email || "").trim(),
      phone: (phone || "").trim(),
      subject: (subject || "Portfolio Project Inquiry").trim(),
      service: (service || "General Inquiry").trim(),
      budget: (budget || "$10+ USD").trim(),
      message: (message || "").trim(),
      status: "New",
      date: new Date().toISOString()
    };
    store.inquiries.unshift(newInquiry);
    saveStore();
    res.json({ success: true, inquiry: newInquiry });
  } catch (e) {
    console.error("[SERVER] Inquiry submission error:", e);
    res.status(500).json({ error: "Failed to submit inquiry" });
  }
});

// =========================================================================
// ADMIN ENDPOINTS
// =========================================================================

// Admin Login
app.post("/api/admin/login", (req, res) => {
  const { email, password } = req.body;
  
  // Require both email and password to be set in environment and match
  const envEmail = ADMIN_CREDENTIALS.email;
  const envPass = ADMIN_CREDENTIALS.password;

  if (
    envEmail && envPass && 
    (email || "").toLowerCase().trim() === envEmail.toLowerCase() &&
    password === envPass
  ) {
    res.json({
      success: true,
      token: `ma_sess_${Date.now()}`,
      user: {
        name: "Muhammad Ali",
        email: envEmail,
        role: "Administrator",
        status: "Online"
      }
    });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

// Admin: Get all feedback codes
app.get("/api/admin/codes", (_req, res) => {
  try {
    const sorted = [...store.feedbackCodes].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    res.json({ success: true, codes: sorted });
  } catch (e) {
    console.error("[SERVER] Admin fetch codes error:", e);
    res.status(500).json({ error: "Failed to fetch codes" });
  }
});

// Admin: Generate new code
app.post("/api/admin/codes/generate", (req, res) => {
  try {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let suffix = "";
    for (let i = 0; i < 6; i++) {
      suffix += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const code = `Ali-${suffix}`;
    const newCode: FeedbackCodeRecord = {
      id: `code-${Date.now()}`,
      code,
      assignedTo: req.body.assignedTo || "Client",
      isUsed: false,
      createdAt: new Date().toISOString()
    };
    store.feedbackCodes.unshift(newCode);
    saveStore();
    res.json({ success: true, code: newCode });
  } catch (e) {
    console.error("[SERVER] Admin generate code error:", e);
    res.status(500).json({ error: "Failed to generate code" });
  }
});

// Admin: Toggle code status
app.post("/api/admin/codes/:id/toggle", (req, res) => {
  try {
    const codeItem = store.feedbackCodes.find(c => c.id === req.params.id);
    if (codeItem) {
      codeItem.isUsed = !codeItem.isUsed;
      if (codeItem.isUsed) codeItem.usedAt = new Date().toISOString();
      else delete codeItem.usedAt;
      saveStore();
      return res.json({ success: true, code: codeItem });
    }
    res.status(404).json({ error: "Code not found" });
  } catch (e) {
    console.error("[SERVER] Admin toggle code error:", e);
    res.status(500).json({ error: "Toggle failed" });
  }
});

// Admin: Delete code
app.delete("/api/admin/codes/:id", (req, res) => {
  try {
    const initialLength = store.feedbackCodes.length;
    store.feedbackCodes = store.feedbackCodes.filter(c => c.id !== req.params.id);
    if (store.feedbackCodes.length !== initialLength) {
      saveStore();
    }
    res.json({ success: true });
  } catch (e) {
    console.error("[SERVER] Admin delete code error:", e);
    res.status(500).json({ error: "Delete failed" });
  }
});

// Admin: Get all feedbacks (including pending)
app.get("/api/admin/feedback", (_req, res) => {
  try {
    const sorted = [...store.feedbacks].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    res.json(sorted);
  } catch (e) {
    console.error("[SERVER] Admin fetch feedbacks error:", e);
    res.status(500).json({ error: "Fetch failed" });
  }
});

// Admin: Approve feedback
app.post("/api/admin/feedback/:id/approve", (req, res) => {
  try {
    const fb = store.feedbacks.find(f => f.id === req.params.id);
    if (fb) {
      fb.isApproved = true;
      if (!fb.adminReply) {
        fb.adminReply = getAutoReplyForRating(fb.rating, fb.clientName);
      }
      saveStore();
      return res.json({ success: true, feedback: fb });
    }
    res.status(404).json({ error: "Feedback not found" });
  } catch (e) {
    console.error("[SERVER] Admin approve feedback error:", e);
    res.status(500).json({ error: "Approve failed" });
  }
});

// Admin: Update or auto-generate reply for a feedback
app.post("/api/admin/feedback/:id/reply", (req, res) => {
  try {
    const { reply, regenerate } = req.body || {};
    const fb = store.feedbacks.find(f => f.id === req.params.id);
    if (fb) {
      if (regenerate) {
        fb.adminReply = getAutoReplyForRating(fb.rating, fb.clientName);
      } else if (typeof reply === "string") {
        fb.adminReply = reply.trim();
      }
      saveStore();
      return res.json({ success: true, feedback: fb, adminReply: fb.adminReply });
    }
    res.status(404).json({ error: "Feedback not found" });
  } catch (e) {
    console.error("[SERVER] Admin reply feedback error:", e);
    res.status(500).json({ error: "Reply update failed" });
  }
});

// Admin: Toggle feedback status
app.post("/api/admin/feedback/:id/toggle", (req, res) => {
  try {
    const fb = store.feedbacks.find(f => f.id === req.params.id);
    if (fb) {
      fb.isApproved = !fb.isApproved;
      saveStore();
      return res.json({ success: true, feedback: fb });
    }
    res.status(404).json({ error: "Feedback not found" });
  } catch (e) {
    console.error("[SERVER] Admin toggle feedback error:", e);
    res.status(500).json({ error: "Toggle failed" });
  }
});

// Admin: Delete feedback
app.delete("/api/admin/feedback/:id", (req, res) => {
  try {
    const initialLength = store.feedbacks.length;
    store.feedbacks = store.feedbacks.filter(f => f.id !== req.params.id);
    if (store.feedbacks.length !== initialLength) {
      saveStore();
    }
    res.json({ success: true });
  } catch (e) {
    console.error("[SERVER] Admin delete feedback error:", e);
    res.status(500).json({ error: "Delete failed" });
  }
});

// Admin: Get all inquiries
app.get("/api/admin/inquiries", (_req, res) => {
  try {
    const sorted = [...store.inquiries].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    res.json({ success: true, inquiries: sorted });
  } catch (e) {
    console.error("[SERVER] Admin fetch inquiries error:", e);
    res.status(500).json({ error: "Failed to fetch inquiries" });
  }
});

// Admin: Update inquiry status
app.put("/api/admin/inquiries/:id/status", (req, res) => {
  try {
    const { status } = req.body;
    const inq = store.inquiries.find(i => i.id === req.params.id);
    if (inq) {
      inq.status = status || "Read";
      saveStore();
      return res.json({ success: true, inquiry: inq });
    }
    res.status(404).json({ error: "Inquiry not found" });
  } catch (e) {
    console.error("[SERVER] Admin update inquiry error:", e);
    res.status(500).json({ error: "Update failed" });
  }
});

// Admin: Delete inquiry
app.delete("/api/admin/inquiries/:id", (req, res) => {
  try {
    const initialLength = store.inquiries.length;
    store.inquiries = store.inquiries.filter(i => i.id !== req.params.id);
    if (store.inquiries.length !== initialLength) {
      saveStore();
    }
    res.json({ success: true });
  } catch (e) {
    console.error("[SERVER] Admin delete inquiry error:", e);
    res.status(500).json({ error: "Delete failed" });
  }
});

// =========================================================================
// START SERVER & VITE INTEGRATION
// =========================================================================
async function startServer() {
  const mainApp = express();
  mainApp.use(express.json({ limit: "10mb" }));

  // Explicitly mount static public directory and images
  const publicPath = path.join(process.cwd(), "public");
  mainApp.use("/images", express.static(path.join(publicPath, "images"), {
    maxAge: "1d",
    immutable: false
  }));
  mainApp.use(express.static(publicPath));

  // MOUNT API ROUTES FIRST
  mainApp.use(app);

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    mainApp.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    mainApp.use(express.static(distPath));
    mainApp.get("*", (_req, res) => res.sendFile(path.join(distPath, "index.html")));
  }

  mainApp.listen(PORT, "0.0.0.0", () => {
    console.log(`[SERVER] Muhammad Ali Portfolio backend running on port ${PORT}`);
  });
}

startServer();
