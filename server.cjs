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
  ADMIN_CREDENTIALS: () => ADMIN_CREDENTIALS
});
module.exports = __toCommonJS(server_exports);
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
var import_app = require("firebase-admin/app");
var import_auth = require("firebase-admin/auth");

// src/db/index.ts
var import_node_postgres = require("drizzle-orm/node-postgres");
var import_pg = __toESM(require("pg"), 1);

// src/db/schema.ts
var schema_exports = {};
__export(schema_exports, {
  feedback: () => feedback,
  feedbackCodes: () => feedbackCodes,
  portfolioStats: () => portfolioStats,
  reactions: () => reactions
});
var import_pg_core = require("drizzle-orm/pg-core");
var portfolioStats = (0, import_pg_core.pgTable)("portfolio_stats", {
  id: (0, import_pg_core.serial)("id").primaryKey(),
  profileViews: (0, import_pg_core.integer)("profile_views").default(0),
  satisfiedClients: (0, import_pg_core.integer)("satisfied_clients").default(0),
  unsatisfiedClients: (0, import_pg_core.integer)("unsatisfied_clients").default(0),
  totalFeedback: (0, import_pg_core.integer)("total_feedback").default(0),
  averageRating: (0, import_pg_core.doublePrecision)("average_rating").default(0),
  positiveReactions: (0, import_pg_core.integer)("positive_reactions").default(0),
  negativeReactions: (0, import_pg_core.integer)("negative_reactions").default(0),
  updatedAt: (0, import_pg_core.timestamp)("updated_at").defaultNow()
});
var feedback = (0, import_pg_core.pgTable)("feedback", {
  id: (0, import_pg_core.serial)("id").primaryKey(),
  clientName: (0, import_pg_core.text)("client_name").notNull(),
  clientEmail: (0, import_pg_core.text)("client_email").notNull(),
  clientPhoto: (0, import_pg_core.text)("client_photo"),
  rating: (0, import_pg_core.integer)("rating").notNull(),
  comment: (0, import_pg_core.text)("comment").notNull(),
  source: (0, import_pg_core.text)("source").default("Direct"),
  date: (0, import_pg_core.timestamp)("date").defaultNow(),
  googleVerified: (0, import_pg_core.boolean)("google_verified").default(false),
  googleId: (0, import_pg_core.text)("google_id"),
  adminReply: (0, import_pg_core.text)("admin_reply"),
  isApproved: (0, import_pg_core.boolean)("is_approved").default(true),
  codeUsed: (0, import_pg_core.text)("code_used"),
  projectScreenshot: (0, import_pg_core.text)("project_screenshot")
});
var feedbackCodes = (0, import_pg_core.pgTable)("feedback_codes", {
  id: (0, import_pg_core.serial)("id").primaryKey(),
  code: (0, import_pg_core.text)("code").notNull().unique(),
  assignedTo: (0, import_pg_core.text)("assigned_to"),
  notes: (0, import_pg_core.text)("notes"),
  status: (0, import_pg_core.text)("status").default("Active"),
  // 'Active', 'Used', 'Revoked'
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow(),
  usedAt: (0, import_pg_core.timestamp)("used_at")
});
var reactions = (0, import_pg_core.pgTable)("reactions", {
  id: (0, import_pg_core.serial)("id").primaryKey(),
  userId: (0, import_pg_core.text)("user_id"),
  // Firebase UID if logged in
  type: (0, import_pg_core.text)("type").notNull(),
  // 'like' or 'dislike'
  ipAddress: (0, import_pg_core.text)("ip_address"),
  createdAt: (0, import_pg_core.timestamp)("created_at").defaultNow()
});

// src/db/index.ts
var { Pool } = import_pg.default;
var createPool = () => {
  return new Pool({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DB_NAME,
    max: 10,
    connectionTimeoutMillis: 15e3
  });
};
var pool = createPool();
var db = (0, import_node_postgres.drizzle)(pool, { schema: schema_exports });

// server.ts
var import_drizzle_orm = require("drizzle-orm");
import_dotenv.default.config();
if (!(0, import_app.getApps)().length) {
  (0, import_app.initializeApp)({
    projectId: process.env.VITE_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID
  });
}
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
app.use((req, res, next) => {
  console.log(`[SERVER] ${(/* @__PURE__ */ new Date()).toISOString()} - ${req.method} ${req.url}`);
  next();
});
var ADMIN_CREDENTIALS = {
  email: process.env.ADMIN_EMAIL || "alimuhammadhvn81@gmail.com",
  password: process.env.ADMIN_PASSWORD || "Ali2007"
};
var PORTFOLIO_KNOWLEDGE = `
You are the official AI Assistant for Muhammad Ali\u2019s Portfolio & Software Studio website.

YOUR MANDATE & PURPOSE:
You are strictly designed to assist website visitors by answering questions based solely on the verified information available on Muhammad Ali's website and professional profile.

SCOPE OF TOPICS YOU MUST ANSWER:
1. YOUR WORK & SERVICES:
   - Projects (4 Main Categories & Sub-Divisions):
     1) Web Development: Nova Web Studio agency showcase with live website link (novawebstudio.app) and 4-photo layout.
     2) Game & AI App Development: Colour Block (strategy puzzle game), Pak AI (Urdu/English voice & chat assistant), Learn Play (gamified education portal) \u2014 each with 4-photo galleries.
     3) Pixel Forge Graphic Design: Logo Design (corporate, tech emblem, mascot, monogram), Visiting Card (Muhammad Ali executive card, Jhan Mobile Hub gold card, Anshu Mobile Shop blue card, Mobile Zone card), Banner (social media, YouTube/Twitch, e-commerce, exhibition) \u2014 each with 4-photo galleries.
     4) 2D & 3D Architecture: 2D Smart Flooring (CAD room spatial mapping & tile distribution), 3D House Design (luxury villa facade, living room interior, night lighting study) \u2014 each with 4-photo galleries.
   - Technical Skills: HTML, CSS, JavaScript, React, Node.js, Express, Python, C++, Game Development (Godot Engine, Unity), AI Development, Pixel Forge Graphic Design, 2D Smart Floor CAD mapping, 3D Architectural Rendering, Tailwind CSS, REST APIs.
   - Services Offered: Web Development, Game & AI App Development, Pixel Forge Graphic Design, 2D & 3D Architecture.
   - Hire Me Section: Interactive service selector allowing clients to hire Muhammad for an entire service category or a specific sub-division photo slot with $10+ USD budget criteria. Direct WhatsApp (+92 342 6793428) and Email booking available.
   - Inquiry Section: Secure inquiry submission form allowing users to select their service category, budget range ($10+ criteria), subject, and custom message for direct delivery to the studio backend.
   - Pricing & Budget: Project budget criteria starts from $10 and above ($10+ USD). Flexible pricing tailored to project requirements.

2. YOUR PASSION & VISION:
   - What drives Muhammad: A deep passion for web development, game and AI application development, graphic design, and modern technology.
   - Creative approach & goals: Turning ideas into polished digital experiences, continuous learning, crafting clean modular software, maintaining high ethical standards, and delivering real value to clients.

3. YOUR DEALINGS & WORK STYLE:
   - Professionalism & Reliability: 100% professional, trustworthy, detail-oriented, and dedicated to delivering clean code and modern responsive designs.
   - Client Dealings & Communication: Clear, honest communication with regular progress updates. Transparent requirements and direct 1-on-1 collaboration.
   - 6-Step Work Process: 1. Discuss -> 2. Plan -> 3. Build -> 4. Test -> 5. Deliver -> 6. Support.
   - Post-Delivery Support: Responsive bug fixes and ongoing support available.

4. YOUR PORTFOLIO & WEBSITE DETAILS:
   - All details presented on the website, including client feedback, profile reach, average rating (4.9/5 stars), and how to submit feedback or inquiries.

5. YOUR BACKGROUND & PROFILE:
   - Education: BS in Computer Science at Iqra Post Graduate College (Currently 3rd Semester, 2025\u2013Present); FSc in Computer Science from Pak Wattan School & College of Science (Completed 2024); Matric in Science from Al Arqam Academy of Excellence (Completed 2022).
   - Location: Havelian, Abbottabad, Pakistan.
   - Languages: English, Urdu, Hindko.
   - Contact Info: WhatsApp (+92 342 6793428), Direct Phone Call (+92 330 0358799), Email (alimuhammadhvn81@gmail.com).

FOLLOW-UP QUESTIONS & NATURAL PHRASING:
- Visitors can phrase questions naturally in different ways (e.g. "How do you work with clients?", "What inspires your work?", "Tell me about your coding skills"). Use the conversation context where appropriate to give continuous, relevant answers.

CRITICAL BOUNDARY RULE:
- YOU MUST NOT INVENT OR HALLUCINATE ANY INFORMATION.
- If a visitor asks a question that is NOT covered by the website/business information, OR is unrelated/irrelevant to Muhammad Ali's work or professional profile, OR is a random/general question outside your purpose (e.g., "What is your favorite football team?", "Write me a love poem", "What is the capital of France?", recipes, world news, general trivia), YOU MUST STRICTLY RESPOND WITH EXACTLY THIS STRING AND NOTHING ELSE:
  "Unfortunately, I am unable to answer you."

SPEECH & TONE FORMATTING:
- Sound warm, articulate, natural, and polite when answering portfolio questions.
- Keep output clean without markdown symbols (* or #) so speech synthesis reads naturally.
`;
var aiClient = null;
function getAIClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY || "";
    aiClient = new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});
function getLocalFallbackAnswer(question) {
  const qLower = (question || "").toLowerCase().trim();
  if (qLower.includes("football") || qLower.includes("soccer") || qLower.includes("cricket team") || qLower.includes("poem") || qLower.includes("poetry") || qLower.includes("capital of") || qLower.includes("recipe") || qLower.includes("weather in") || qLower.includes("president") || qLower.includes("prime minister") || qLower.includes("movie") || qLower.includes("song") || qLower.includes("joke") || qLower.includes("tell me a story")) {
    return "Unfortunately, I am unable to answer you.";
  }
  if (qLower.includes("salam") || qLower.includes("hello") || qLower.includes("hi") || qLower.includes("hey") || qLower.includes("kaise ho") || qLower.includes("kese ho") || qLower.includes("how are you") || qLower.includes("good morning") || qLower.includes("good evening")) {
    return "Walaikum Assalam and hello! I am Muhammad Ali\u2019s AI Assistant. How can I assist you with your project, inquiry, or technical questions regarding Muhammad Ali\u2019s portfolio today?";
  }
  if (qLower.includes("passionat") || qLower.includes("passion") || qLower.includes("drive") || qLower.includes("vision") || qLower.includes("goal") || qLower.includes("inspire") || qLower.includes("creative approach")) {
    return "Muhammad Ali is deeply passionate about web development, game & AI app development, 2D graphic design, and modern technology. His goal is to create practical digital products, deliver dependable freelance services, and continually refine his software engineering skills.";
  }
  if (qLower.includes("deal") || qLower.includes("client") || qLower.includes("work style") || qLower.includes("approach") || qLower.includes("process") || qLower.includes("collaborat") || qLower.includes("communicate") || qLower.includes("method")) {
    return "Muhammad Ali follows a transparent, 6-step work process: Discussing client requirements, Planning the project structure, Building with clean code, Testing for usability, Delivering on time, and providing ongoing Support.";
  }
  if (qLower.includes("education") || qLower.includes("study") || qLower.includes("college") || qLower.includes("school") || qLower.includes("matric") || qLower.includes("fsc") || qLower.includes("iqra") || qLower.includes("degree") || qLower.includes("qualification") || qLower.includes("padhai")) {
    return "Muhammad Ali is currently pursuing his BS in Computer Science at Iqra Post Graduate College (2025\u2013Present). He completed his FSc in Computer Science from Pak Wattan School and College of Science (2024), and Matric in Science from Al Arqam Academy of Excellence (2022).";
  }
  if (qLower.includes("language") || qLower.includes("zaban") || qLower.includes("speak") || qLower.includes("bolte")) {
    return "Muhammad Ali speaks English, Urdu, and Hindko fluently.";
  }
  if (qLower.includes("service") || qLower.includes("offer") || qLower.includes("what can you do") || qLower.includes("work") || qLower.includes("build") || qLower.includes("develop") || qLower.includes("web") || qLower.includes("game") || qLower.includes("app") || qLower.includes("graphic") || qLower.includes("design") || qLower.includes("architecture") || qLower.includes("kam")) {
    return "Muhammad Ali offers 4 core service divisions: 1. Web Development (Nova Web Studio), 2. Game & AI App Development (Colour Block, Pak AI, Learn Play), 3. Pixel Forge Graphic Design (Logos, Visiting Cards, Banners), and 4. 2D & 3D Architecture (2D Smart Flooring, 3D House Design).";
  }
  if (qLower.includes("hire") || qLower.includes("inquiry") || qLower.includes("how to order") || qLower.includes("book")) {
    return "You can hire Muhammad Ali or submit a project inquiry directly on the website with $10+ USD budget criteria. Choose an entire service or select a specific sub-division photo slot, or message him directly on WhatsApp at +92 342 6793428.";
  }
  if (qLower.includes("contact") || qLower.includes("phone") || qLower.includes("call") || qLower.includes("whatsapp") || qLower.includes("number") || qLower.includes("email") || qLower.includes("rabta") || qLower.includes("reach") || qLower.includes("message")) {
    return "You can message Muhammad Ali on WhatsApp at +92 342 6793428, call him directly at +92 330 0358799, or email alimuhammadhvn81@gmail.com.";
  }
  if (qLower.includes("project") || qLower.includes("portfolio") || qLower.includes("nova") || qLower.includes("color blocks") || qLower.includes("colour block") || qLower.includes("pak ai") || qLower.includes("learn play") || qLower.includes("pixel forge") || qLower.includes("visiting card") || qLower.includes("smart flooring") || qLower.includes("3d house") || qLower.includes("sample") || qLower.includes("demo")) {
    return "Muhammad Ali's portfolio features 4 major categories with 4-photo sub-division galleries: Web Development (Nova Web Studio), Game & AI App Development (Colour Block, Pak AI, Learn Play), Pixel Forge Graphic Design (Logos, Executive & Mobile Shop Visiting Cards, Banners), and 2D & 3D Architecture (2D Smart Flooring & 3D House Design).";
  }
  if (qLower.includes("skill") || qLower.includes("tech") || qLower.includes("stack") || qLower.includes("coding") || qLower.includes("programming") || qLower.includes("react") || qLower.includes("python") || qLower.includes("node") || qLower.includes("typescript") || qLower.includes("godot") || qLower.includes("unity") || qLower.includes("canva")) {
    return "His core technical skills include HTML, CSS, JavaScript, React, Node.js, Python, C++, Game Development (Godot, Unity), AI Development, and Graphic Design (Canva).";
  }
  if (qLower.includes("price") || qLower.includes("cost") || qLower.includes("rate") || qLower.includes("fee") || qLower.includes("budget") || qLower.includes("kitna") || qLower.includes("charge") || qLower.includes("dollar") || qLower.includes("$")) {
    return "Muhammad Ali's project budget criteria starts from $10 and above ($10+ USD). Final pricing depends on your project scope. You can reach out on WhatsApp at +92 342 6793428 or call +92 330 0358799 for an instant quote.";
  }
  if (qLower.includes("professional") || qLower.includes("quality") || qLower.includes("trust") || qLower.includes("reliable") || qLower.includes("why hire") || qLower.includes("kaisa hai") || qLower.includes("experience") || qLower.includes("work ethic")) {
    return "Yes, Muhammad Ali is highly professional, reliable, and detail-oriented. He delivers clean code, modern responsive designs, and punctual updates with 100% dedication to client satisfaction.";
  }
  if (qLower.includes("who is") || qLower.includes("about") || qLower.includes("muhammad ali") || qLower.includes("intro") || qLower.includes("background") || qLower.includes("kon") || qLower.includes("ali")) {
    return "Muhammad Ali is a dedicated Computer Science student and software creator specializing in Web Development, Game & AI App Development, and 2D Graphic Design from Pakistan.";
  }
  if (qLower.includes("website") || qLower.includes("site") || qLower.includes("page")) {
    return "This website is the official portfolio of Muhammad Ali, highlighting his projects, skills, education, client feedback, and direct contact options.";
  }
  if (qLower.includes("time") || qLower.includes("duration") || qLower.includes("kitne din") || qLower.includes("fast") || qLower.includes("deadline")) {
    return "Project timelines depend on complexity and scope. Muhammad ensures rapid turnaround and clear milestone delivery. Contact him on WhatsApp at +92 342 6793428 to discuss your exact timeline.";
  }
  return "Unfortunately, I am unable to answer you.";
}
var GEMINI_MODELS = [
  "gemini-3.7-flash",
  "gemini-3.1-flash-lite",
  "gemini-3.1-pro-preview",
  "gemini-2.0-flash-exp",
  "gemini-1.5-flash",
  "gemini-1.5-pro",
  "gemini-flash-latest"
];
async function generateWithModelFallback(ai, contents, systemInstruction = PORTFOLIO_KNOWLEDGE) {
  let lastError = null;
  for (const model of GEMINI_MODELS) {
    try {
      if (lastError) await new Promise((resolve) => setTimeout(resolve, 800));
      const response = await ai.models.generateContent({
        model,
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
          maxOutputTokens: 500
        }
      });
      if (response && response.text) {
        return response.text;
      }
    } catch (err) {
      lastError = err;
      if (err?.status !== 503 && err?.status !== 429 && err?.status !== 404) {
        console.warn(`[Gemini API] Model '${model}' failed: ${err?.message || "unknown error"}`);
      }
    }
  }
  console.error("All Gemini model fallbacks failed. Final error:", lastError?.status || lastError?.message || lastError);
  return null;
}
app.post("/api/voice-support", async (req, res) => {
  try {
    const { question, conversationHistory } = req.body;
    if (!question || typeof question !== "string") {
      res.status(400).json({ error: "A valid question string is required." });
      return;
    }
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      const fallbackText2 = getLocalFallbackAnswer(question);
      res.json({ answer: fallbackText2 });
      return;
    }
    const ai = getAIClient();
    const contents = [];
    if (Array.isArray(conversationHistory)) {
      for (const item of conversationHistory.slice(-4)) {
        if (item.sender === "user") {
          contents.push({ role: "user", parts: [{ text: item.text }] });
        } else if (item.sender === "ai") {
          contents.push({ role: "model", parts: [{ text: item.text }] });
        }
      }
    }
    contents.push({ role: "user", parts: [{ text: question }] });
    const generatedText = await generateWithModelFallback(ai, contents);
    if (generatedText) {
      res.json({ answer: generatedText });
      return;
    }
    const fallbackText = getLocalFallbackAnswer(question);
    res.json({
      answer: fallbackText,
      fallbackUsed: true
    });
  } catch (error) {
    console.error("Error in /api/voice-support handler:", error);
    const fallbackText = getLocalFallbackAnswer(req.body?.question || "");
    res.json({
      answer: fallbackText,
      fallbackUsed: true
    });
  }
});
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: (/* @__PURE__ */ new Date()).toISOString() });
});
app.get("/api/stats", async (_req, res) => {
  console.log("[API] GET /api/stats requested");
  try {
    const statsResult = await db.select().from(portfolioStats).where((0, import_drizzle_orm.eq)(portfolioStats.id, 1));
    let baseStats = statsResult.length > 0 ? statsResult[0] : null;
    if (!baseStats) {
      console.log("[API] Stats record not found, creating id:1");
      const [newStats] = await db.insert(portfolioStats).values({ id: 1 }).returning();
      baseStats = newStats;
    }
    const allFeedbacks = await db.select().from(feedback) || [];
    console.log(`[API] Found ${allFeedbacks.length} feedbacks for live aggregation`);
    const ratingBreakdown = {
      stars5: allFeedbacks.filter((f) => f && f.rating === 5).length,
      stars4: allFeedbacks.filter((f) => f && f.rating === 4).length,
      stars3: allFeedbacks.filter((f) => f && f.rating === 3).length,
      stars2: allFeedbacks.filter((f) => f && f.rating === 2).length,
      stars1: allFeedbacks.filter((f) => f && f.rating === 1).length
    };
    const feedbackStatusBreakdown = {
      published: allFeedbacks.filter((f) => f && f.isApproved).length,
      pending: allFeedbacks.filter((f) => f && !f.isApproved).length,
      archived: 0
    };
    const liveSatisfied = allFeedbacks.filter((f) => f && f.rating >= 4).length;
    const liveUnsatisfied = allFeedbacks.filter((f) => f && f.rating <= 2).length;
    const responseData = {
      ...baseStats,
      satisfiedClients: liveSatisfied,
      unsatisfiedClients: liveUnsatisfied,
      totalFeedback: allFeedbacks.filter((f) => f && f.isApproved).length,
      ratingBreakdown,
      feedbackStatusBreakdown
    };
    console.log("[API] Sending stats response:", JSON.stringify(responseData).substring(0, 100) + "...");
    res.json(responseData);
  } catch (error) {
    console.error("[API ERROR] Error fetching stats:", error);
    res.status(500).json({ error: "Failed to fetch stats", details: error instanceof Error ? error.message : String(error) });
  }
});
app.post("/api/stats/view", async (_req, res) => {
  try {
    await db.update(portfolioStats).set({ profileViews: import_drizzle_orm.sql`${portfolioStats.profileViews} + 1` }).where((0, import_drizzle_orm.eq)(portfolioStats.id, 1));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to update view count" });
  }
});
app.post("/api/feedback/submit-verified", async (req, res) => {
  try {
    const { token, rating, comment, code, projectScreenshot } = req.body;
    const rawCode = (code || "").trim();
    if (!rawCode || !rawCode.toLowerCase().startsWith("ali-")) {
      res.status(400).json({ error: "A valid feedback code starting with 'Ali-' is required." });
      return;
    }
    const [dbCode] = await db.select().from(feedbackCodes).where(import_drizzle_orm.sql`LOWER(${feedbackCodes.code}) = LOWER(${rawCode})`);
    if (!dbCode || dbCode.status !== "Active") {
      console.warn(`[SUBMIT] Invalid or used code attempt: ${rawCode}`);
      res.status(400).json({ error: "This feedback code is invalid or has already been used." });
      return;
    }
    let decodedToken;
    try {
      decodedToken = await (0, import_auth.getAuth)().verifyIdToken(token);
    } catch (authErr) {
      console.error("[SUBMIT] Auth verification failed:", authErr.message);
      res.status(401).json({ error: "Google identity verification failed. Please sign in again." });
      return;
    }
    const { name, email, picture, uid } = decodedToken;
    let autoReply = "Thank you for your valuable feedback! I am committed to continuous improvement and appreciate your input.";
    try {
      const ai = getAIClient();
      const systemPrompt = `${PORTFOLIO_KNOWLEDGE}

You are Muhammad Ali, the owner of this software studio. A client named ${name} has just submitted a ${rating}-star review on your portfolio website.
Your task is to generate a professional, warm, and highly personal response (2-3 sentences) that reflects your brand and values.

GUIDELINES FOR YOUR RESPONSE:
1. GRATITUDE: Always start by thanking ${name} by name.
2. CONTEXTUAL AWARENESS: Carefully read the client's comment. If they mention a specific service (Web, Game, AI, Design, or Architecture), acknowledge it.
3. RATING-BASED TONE:
   - 5 STARS: Be enthusiastic and mention you look forward to future collaborations.
   - 3-4 STARS: Be warm, thank them, and ask if there's anything specific you could have done better.
   - 1-2 STARS: Be extremely professional and empathetic. Apologize sincerely, acknowledge any specific complaints mentioned in their comment, and state that you will personally review the issue to ensure it doesn't happen again.
4. PERSONAL TOUCH: Use your professional background (Computer Science student, software creator) if it adds value to the reply.
5. NO HALLUCINATIONS: Do not mention specific projects or features that are not in the client's comment or the portfolio knowledge.
6. COMPLETENESS: Always complete your sentences. Never stop mid-sentence.
7. FORMATTING: Output ONLY the plain text of your response. No quotes, no markdown labels.`;
      const userMessage = `Client Name: ${name}
Rating: ${rating} stars
Client Comment: "${comment}"`;
      const generatedText = await generateWithModelFallback(ai, [{ role: "user", parts: [{ text: userMessage }] }], systemPrompt);
      if (generatedText) {
        autoReply = generatedText.trim();
        const lastChar = autoReply.slice(-1);
        if (![".", "!", "?"].includes(lastChar) && autoReply.length > 20) {
          autoReply += "...";
        }
      }
    } catch (err) {
      console.error("AI Auto-reply generation error:", err);
      console.warn("AI Auto-reply generation failed, using default.");
    }
    const [newFeedback] = await db.insert(feedback).values({
      clientName: name || "Verified User",
      clientEmail: email || "",
      clientPhoto: picture || "",
      rating: rating || 5,
      comment: comment || "",
      googleVerified: true,
      googleId: uid,
      isApproved: true,
      codeUsed: code,
      adminReply: autoReply,
      projectScreenshot: projectScreenshot || null
    }).returning();
    await db.update(feedbackCodes).set({ status: "Used", usedAt: /* @__PURE__ */ new Date() }).where((0, import_drizzle_orm.eq)(feedbackCodes.id, dbCode.id));
    const isSatisfied = rating >= 4;
    const isUnsatisfied = rating <= 2;
    await db.update(portfolioStats).set({
      totalFeedback: import_drizzle_orm.sql`${portfolioStats.totalFeedback} + 1`,
      averageRating: import_drizzle_orm.sql`((${portfolioStats.averageRating} * ${portfolioStats.totalFeedback}) + ${rating}) / (${portfolioStats.totalFeedback} + 1)`,
      satisfiedClients: isSatisfied ? import_drizzle_orm.sql`${portfolioStats.satisfiedClients} + 1` : portfolioStats.satisfiedClients,
      unsatisfiedClients: isUnsatisfied ? import_drizzle_orm.sql`${portfolioStats.unsatisfiedClients} + 1` : portfolioStats.unsatisfiedClients
    }).where((0, import_drizzle_orm.eq)(portfolioStats.id, 1));
    res.json({ success: true, feedback: newFeedback });
  } catch (error) {
    console.error("Error submitting verified feedback:", error);
    res.status(401).json({ error: "Authentication failed or database error" });
  }
});
app.get("/api/feedback", async (_req, res) => {
  try {
    const feedbacks = await db.select().from(feedback).where((0, import_drizzle_orm.eq)(feedback.isApproved, true)).orderBy(import_drizzle_orm.sql`${feedback.date} DESC`);
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch feedbacks" });
  }
});
app.post("/api/reactions", async (req, res) => {
  try {
    const { type, token } = req.body;
    let userId = null;
    if (token) {
      const decodedToken = await (0, import_auth.getAuth)().verifyIdToken(token);
      userId = decodedToken.uid;
    }
    await db.insert(reactions).values({
      type,
      userId,
      ipAddress: req.ip
    });
    if (type === "like") {
      await db.update(portfolioStats).set({ positiveReactions: import_drizzle_orm.sql`${portfolioStats.positiveReactions} + 1` }).where((0, import_drizzle_orm.eq)(portfolioStats.id, 1));
    } else {
      await db.update(portfolioStats).set({ negativeReactions: import_drizzle_orm.sql`${portfolioStats.negativeReactions} + 1` }).where((0, import_drizzle_orm.eq)(portfolioStats.id, 1));
    }
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to post reaction" });
  }
});
app.post("/api/admin/login", (req, res) => {
  const { email, password } = req.body;
  const adminEmail = ADMIN_CREDENTIALS.email.toLowerCase().trim();
  const inputEmail = (email || "").toLowerCase().trim();
  const adminPass = ADMIN_CREDENTIALS.password;
  if (inputEmail !== adminEmail) {
    res.status(401).json({
      success: false,
      error: "Unauthorized: Invalid admin email address."
    });
    return;
  }
  if (password !== adminPass) {
    res.status(401).json({
      success: false,
      error: "Unauthorized: Invalid admin password."
    });
    return;
  }
  const sessionToken = `ma_sess_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  res.json({
    success: true,
    token: sessionToken,
    user: {
      name: "Muhammad Ali",
      email: ADMIN_CREDENTIALS.email,
      role: "Administrator",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      status: "Online"
    }
  });
});
app.get("/api/admin/session", (_req, res) => {
  res.json({
    valid: true,
    user: {
      name: "Muhammad Ali",
      email: ADMIN_CREDENTIALS.email,
      role: "Administrator",
      status: "Online"
    }
  });
});
app.get("/api/admin/codes", async (_req, res) => {
  try {
    const codes = await db.select().from(feedbackCodes).orderBy(import_drizzle_orm.sql`${feedbackCodes.createdAt} DESC`);
    res.json({ success: true, codes });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch codes" });
  }
});
app.post("/api/admin/codes/generate", async (req, res) => {
  try {
    const { assignedTo, notes } = req.body || {};
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let randomSuffix = "";
    for (let i = 0; i < 6; i++) {
      randomSuffix += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const newCodeStr = `Ali-${randomSuffix}`;
    const [newCodeObj] = await db.insert(feedbackCodes).values({
      code: newCodeStr,
      status: "Active",
      assignedTo: assignedTo || "Client",
      notes: notes || "Valid until feedback is published by the client"
    }).returning();
    res.json({
      success: true,
      code: newCodeObj,
      message: `Generated code ${newCodeStr} successfully.`
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate code" });
  }
});
app.delete("/api/admin/codes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.delete(feedbackCodes).where((0, import_drizzle_orm.eq)(feedbackCodes.id, parseInt(id)));
    res.json({ success: true, message: "Code removed." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete code" });
  }
});
app.post("/api/feedback/verify-code", async (req, res) => {
  try {
    const rawCode = (req.body.code || "").trim();
    if (!rawCode || !rawCode.toLowerCase().startsWith("ali-")) {
      res.status(400).json({ valid: false, error: "Code must start with 'Ali-'" });
      return;
    }
    const [found] = await db.select().from(feedbackCodes).where(import_drizzle_orm.sql`LOWER(${feedbackCodes.code}) = LOWER(${rawCode})`);
    if (!found) {
      res.status(404).json({ valid: false, error: "Feedback code not recognized." });
      return;
    }
    if (found.status === "Used") {
      res.status(400).json({ valid: false, error: "This code has already been used and published." });
      return;
    }
    if (found.status === "Revoked") {
      res.status(400).json({ valid: false, error: "This feedback code has expired or been revoked." });
      return;
    }
    res.json({ valid: true, code: found.code, assignedTo: found.assignedTo });
  } catch (error) {
    res.status(500).json({ error: "Verification failed" });
  }
});
app.get("/api/admin/feedback", async (_req, res) => {
  try {
    const feedbacks = await db.select().from(feedback).orderBy(import_drizzle_orm.sql`${feedback.date} DESC`);
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch feedbacks" });
  }
});
app.post("/api/admin/feedback/:id/reply", async (req, res) => {
  try {
    const { id } = req.params;
    const { reply } = req.body;
    await db.update(feedback).set({ adminReply: reply }).where((0, import_drizzle_orm.eq)(feedback.id, parseInt(id)));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to reply to feedback" });
  }
});
app.delete("/api/admin/feedback/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.delete(feedback).where((0, import_drizzle_orm.eq)(feedback.id, parseInt(id)));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete feedback" });
  }
});
app.post("/api/admin/feedback/:id/approve", async (req, res) => {
  try {
    const { id } = req.params;
    await db.update(feedback).set({ isApproved: true }).where((0, import_drizzle_orm.eq)(feedback.id, parseInt(id)));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to approve feedback" });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.get(["/admin", "/admin/*"], (_req, res) => {
      res.sendFile(import_path.default.join(process.cwd(), "index.html"));
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get(["/admin", "/admin/*"], (_req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
    app.get("*", (_req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ADMIN_CREDENTIALS
});
//# sourceMappingURL=server.cjs.map
