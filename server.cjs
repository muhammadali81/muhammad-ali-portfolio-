var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// server.ts
var server_exports = {};
__export(server_exports, {
  ADMIN_CREDENTIALS: () => ADMIN_CREDENTIALS,
  getAutoReplyForRating: () => getAutoReplyForRating
});
module.exports = __toCommonJS(server_exports);
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
function getAutoReplyForRating(rating, clientName) {
  const firstName = (clientName || "Valued Client").trim().split(" ")[0];
  const stars = Math.max(1, Math.min(5, Math.round(Number(rating) || 5)));
  switch (stars) {
    case 5:
      return `Thank you so much ${firstName} for the stellar 5-star review! It was an absolute pleasure working together on your project. Wishing you massive success, and I look forward to collaborating again on future milestones! \u{1F680}`;
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
var DATA_DIR = import_path.default.join(process.cwd(), "data");
var STORE_PATH = import_path.default.join(DATA_DIR, "store.json");
var defaultStore = {
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
      adminReply: "Thank you so much David for the stellar 5-star review! It was an absolute pleasure working together on the Nova Web Studio showcase. Wishing you massive success, and I look forward to collaborating again on future milestones! \u{1F680}",
      date: new Date(Date.now() - 1e3 * 60 * 60 * 24 * 3).toISOString()
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
      date: new Date(Date.now() - 1e3 * 60 * 60 * 24 * 7).toISOString()
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
      date: new Date(Date.now() - 1e3 * 60 * 60 * 24 * 12).toISOString()
    }
  ],
  feedbackCodes: [
    {
      id: "code-1",
      code: "Ali-TEST",
      assignedTo: "Demo Client / Reviewer",
      isUsed: false,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    },
    {
      id: "code-2",
      code: "Ali-VIP1",
      assignedTo: "VIP Client",
      isUsed: false,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    },
    {
      id: "code-3",
      code: "Ali-DEV2",
      assignedTo: "Game Development Client",
      isUsed: false,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
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
      date: new Date(Date.now() - 1e3 * 60 * 60 * 8).toISOString()
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
      date: new Date(Date.now() - 1e3 * 60 * 60 * 26).toISOString()
    }
  ]
};
function loadStore() {
  try {
    if (!import_fs.default.existsSync(DATA_DIR)) {
      import_fs.default.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (import_fs.default.existsSync(STORE_PATH)) {
      const raw = import_fs.default.readFileSync(STORE_PATH, "utf-8");
      const parsed = JSON.parse(raw);
      const feedbacks = (Array.isArray(parsed.feedbacks) && parsed.feedbacks.length > 0 ? parsed.feedbacks : defaultStore.feedbacks).map((fb) => ({
        ...fb,
        adminReply: fb.adminReply || getAutoReplyForRating(fb.rating, fb.clientName)
      }));
      return {
        siteStats: { ...defaultStore.siteStats, ...parsed.siteStats || {} },
        feedbacks,
        feedbackCodes: Array.isArray(parsed.feedbackCodes) && parsed.feedbackCodes.length > 0 ? parsed.feedbackCodes : defaultStore.feedbackCodes,
        inquiries: Array.isArray(parsed.inquiries) && parsed.inquiries.length > 0 ? parsed.inquiries : defaultStore.inquiries
      };
    } else {
      import_fs.default.writeFileSync(STORE_PATH, JSON.stringify(defaultStore, null, 2), "utf-8");
      return defaultStore;
    }
  } catch (err) {
    console.error("[STORE] Failed to load store, using default:", err);
    return defaultStore;
  }
}
var store = loadStore();
function saveStore() {
  try {
    if (!import_fs.default.existsSync(DATA_DIR)) {
      import_fs.default.mkdirSync(DATA_DIR, { recursive: true });
    }
    import_fs.default.writeFileSync(STORE_PATH, JSON.stringify(store, null, 2), "utf-8");
  } catch (err) {
    console.error("[STORE] Error saving store to disk:", err);
  }
}
var ADMIN_CREDENTIALS = {
  email: process.env.ADMIN_EMAIL || "alimuhammadhvn81@gmail.com",
  password: process.env.ADMIN_PASSWORD || "Ali2007"
};
var PORTFOLIO_KNOWLEDGE = `You are the official AI Assistant for Muhammad Ali\u2019s Portfolio.
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
var aiClient = null;
function getAIClient() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (key) {
      aiClient = new import_genai.GoogleGenAI({ apiKey: key });
    }
  }
  return aiClient;
}
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json({ limit: "10mb" }));
app.use((req, res, next) => {
  console.log(`[SERVER] ${(/* @__PURE__ */ new Date()).toISOString()} - ${req.method} ${req.url}`);
  next();
});
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", time: (/* @__PURE__ */ new Date()).toISOString() });
});
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
    const contents = (conversationHistory || []).slice(-4).map((h) => ({
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
app.get("/api/stats", (_req, res) => {
  try {
    const approvedFeedbacks = store.feedbacks.filter((f) => f.isApproved === true);
    const totalFeedback = approvedFeedbacks.length;
    const averageRating = totalFeedback ? approvedFeedbacks.reduce((sum, item) => sum + (item.rating || 0), 0) / totalFeedback : 5;
    const result = {
      profileViews: store.siteStats.profileViews,
      satisfiedClients: Math.max(store.siteStats.satisfiedClients, totalFeedback),
      unsatisfiedClients: store.siteStats.unsatisfiedClients,
      positiveReactions: store.siteStats.positiveReactions,
      negativeReactions: store.siteStats.negativeReactions,
      totalFeedback,
      averageRating: parseFloat(averageRating.toFixed(1)),
      ratingBreakdown: {
        stars5: approvedFeedbacks.filter((f) => Math.round(f.rating) === 5).length,
        stars4: approvedFeedbacks.filter((f) => Math.round(f.rating) === 4).length,
        stars3: approvedFeedbacks.filter((f) => Math.round(f.rating) === 3).length,
        stars2: approvedFeedbacks.filter((f) => Math.round(f.rating) === 2).length,
        stars1: approvedFeedbacks.filter((f) => Math.round(f.rating) === 1).length
      }
    };
    res.json(result);
  } catch (e) {
    console.error("[SERVER] Error in /api/stats:", e);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});
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
app.post("/api/feedback/verify-code", (req, res) => {
  try {
    const code = (req.body.code || "").trim();
    if (!code.toLowerCase().startsWith("ali-")) {
      return res.status(400).json({ valid: false, error: 'Code must start with "Ali-".' });
    }
    const found = store.feedbackCodes.find(
      (c) => c.code.toLowerCase() === code.toLowerCase()
    );
    if (!found) {
      if (code.toUpperCase().startsWith("ALI-TEST") || code.toUpperCase().startsWith("ALI-DEMO")) {
        const newCode = {
          id: `code-${Date.now()}`,
          code: code.toUpperCase(),
          assignedTo: "Verified Reviewer",
          isUsed: false,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
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
app.post("/api/feedback/submit-verified", (req, res) => {
  try {
    const { rating, comment, code, projectScreenshot, source, clientName, clientEmail, clientPhoto } = req.body;
    const trimmedCode = (code || "").trim();
    const codeIndex = store.feedbackCodes.findIndex(
      (c) => c.code.toLowerCase() === trimmedCode.toLowerCase()
    );
    if (codeIndex === -1 && !trimmedCode.toUpperCase().startsWith("ALI-")) {
      return res.status(400).json({ error: "Invalid or unrecognized feedback code." });
    }
    if (codeIndex !== -1 && store.feedbackCodes[codeIndex].isUsed) {
      return res.status(400).json({ error: "This feedback code has already been used." });
    }
    if (codeIndex !== -1) {
      store.feedbackCodes[codeIndex].isUsed = true;
      store.feedbackCodes[codeIndex].usedAt = (/* @__PURE__ */ new Date()).toISOString();
    }
    const calculatedRating = Number(rating) || 5;
    const finalClientName = clientName || "Verified Client";
    const generatedReply = getAutoReplyForRating(calculatedRating, finalClientName);
    const newFeedback = {
      id: `fb-${Date.now()}`,
      clientName: finalClientName,
      clientEmail: clientEmail || "client@verified.com",
      clientPhoto: clientPhoto || `https://ui-avatars.com/api/?name=${encodeURIComponent(finalClientName)}&background=00d9ff&color=061017`,
      rating: calculatedRating,
      comment: (comment || "").trim(),
      googleVerified: true,
      isApproved: true,
      codeUsed: trimmedCode,
      projectScreenshot,
      source: source || "Portfolio Client",
      adminReply: generatedReply,
      date: (/* @__PURE__ */ new Date()).toISOString()
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
app.get("/api/feedback", (_req, res) => {
  try {
    const approved = store.feedbacks.filter((f) => f.isApproved === true).map((f) => ({
      ...f,
      date: f.date
    }));
    res.json(approved);
  } catch (e) {
    console.error("[SERVER] Fetch feedback error:", e);
    res.status(500).json({ error: "Failed to fetch feedbacks" });
  }
});
app.post("/api/inquiries", (req, res) => {
  try {
    const { name, email, phone, subject, service, budget, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }
    const newInquiry = {
      id: `inq-${Date.now()}`,
      name: (name || "").trim(),
      email: (email || "").trim(),
      phone: (phone || "").trim(),
      subject: (subject || "Portfolio Project Inquiry").trim(),
      service: (service || "General Inquiry").trim(),
      budget: (budget || "$10+ USD").trim(),
      message: (message || "").trim(),
      status: "New",
      date: (/* @__PURE__ */ new Date()).toISOString()
    };
    store.inquiries.unshift(newInquiry);
    saveStore();
    res.json({ success: true, inquiry: newInquiry });
  } catch (e) {
    console.error("[SERVER] Inquiry submission error:", e);
    res.status(500).json({ error: "Failed to submit inquiry" });
  }
});
app.post("/api/admin/login", (req, res) => {
  const { email, password } = req.body;
  if ((email || "").toLowerCase().trim() === ADMIN_CREDENTIALS.email.toLowerCase() && password === ADMIN_CREDENTIALS.password) {
    res.json({
      success: true,
      token: `ma_sess_${Date.now()}`,
      user: {
        name: "Muhammad Ali",
        email: ADMIN_CREDENTIALS.email,
        role: "Administrator",
        status: "Online"
      }
    });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});
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
app.post("/api/admin/codes/generate", (req, res) => {
  try {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let suffix = "";
    for (let i = 0; i < 6; i++) {
      suffix += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const code = `Ali-${suffix}`;
    const newCode = {
      id: `code-${Date.now()}`,
      code,
      assignedTo: req.body.assignedTo || "Client",
      isUsed: false,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    store.feedbackCodes.unshift(newCode);
    saveStore();
    res.json({ success: true, code: newCode });
  } catch (e) {
    console.error("[SERVER] Admin generate code error:", e);
    res.status(500).json({ error: "Failed to generate code" });
  }
});
app.post("/api/admin/codes/:id/toggle", (req, res) => {
  try {
    const codeItem = store.feedbackCodes.find((c) => c.id === req.params.id);
    if (codeItem) {
      codeItem.isUsed = !codeItem.isUsed;
      if (codeItem.isUsed) codeItem.usedAt = (/* @__PURE__ */ new Date()).toISOString();
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
app.delete("/api/admin/codes/:id", (req, res) => {
  try {
    const initialLength = store.feedbackCodes.length;
    store.feedbackCodes = store.feedbackCodes.filter((c) => c.id !== req.params.id);
    if (store.feedbackCodes.length !== initialLength) {
      saveStore();
    }
    res.json({ success: true });
  } catch (e) {
    console.error("[SERVER] Admin delete code error:", e);
    res.status(500).json({ error: "Delete failed" });
  }
});
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
app.post("/api/admin/feedback/:id/approve", (req, res) => {
  try {
    const fb = store.feedbacks.find((f) => f.id === req.params.id);
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
app.post("/api/admin/feedback/:id/reply", (req, res) => {
  try {
    const { reply, regenerate } = req.body || {};
    const fb = store.feedbacks.find((f) => f.id === req.params.id);
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
app.post("/api/admin/feedback/:id/toggle", (req, res) => {
  try {
    const fb = store.feedbacks.find((f) => f.id === req.params.id);
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
app.delete("/api/admin/feedback/:id", (req, res) => {
  try {
    const initialLength = store.feedbacks.length;
    store.feedbacks = store.feedbacks.filter((f) => f.id !== req.params.id);
    if (store.feedbacks.length !== initialLength) {
      saveStore();
    }
    res.json({ success: true });
  } catch (e) {
    console.error("[SERVER] Admin delete feedback error:", e);
    res.status(500).json({ error: "Delete failed" });
  }
});
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
app.put("/api/admin/inquiries/:id/status", (req, res) => {
  try {
    const { status } = req.body;
    const inq = store.inquiries.find((i) => i.id === req.params.id);
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
app.delete("/api/admin/inquiries/:id", (req, res) => {
  try {
    const initialLength = store.inquiries.length;
    store.inquiries = store.inquiries.filter((i) => i.id !== req.params.id);
    if (store.inquiries.length !== initialLength) {
      saveStore();
    }
    res.json({ success: true });
  } catch (e) {
    console.error("[SERVER] Admin delete inquiry error:", e);
    res.status(500).json({ error: "Delete failed" });
  }
});
async function startServer() {
  const mainApp = (0, import_express.default)();
  mainApp.use(import_express.default.json({ limit: "10mb" }));
  mainApp.use(app);
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    mainApp.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    mainApp.use(import_express.default.static(distPath));
    mainApp.get("*", (_req, res) => res.sendFile(import_path.default.join(distPath, "index.html")));
  }
  mainApp.listen(PORT, "0.0.0.0", () => {
    console.log(`[SERVER] Muhammad Ali Portfolio backend running on port ${PORT}`);
  });
}
startServer();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ADMIN_CREDENTIALS,
  getAutoReplyForRating
});
//# sourceMappingURL=server.cjs.map
