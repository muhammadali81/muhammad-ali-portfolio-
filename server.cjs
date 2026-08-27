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
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var ADMIN_CREDENTIALS = {
  email: process.env.ADMIN_EMAIL || "alimuhammadhvn81@gmail.com",
  password: process.env.ADMIN_PASSWORD || "Ali2007"
};
var generatedCodesStore = [
  { code: "Ali-9K2L8P", createdAt: "Aug 24, 2025", status: "Used", assignedTo: "Ali Raza", usedAt: "Aug 25, 2025", notes: "Corporate Client" },
  { code: "Ali-3M7X1V", createdAt: "Aug 23, 2025", status: "Used", assignedTo: "Sara Khan", usedAt: "Aug 24, 2025", notes: "Agency Project" },
  { code: "Ali-5W8N4Q", createdAt: "Aug 22, 2025", status: "Used", assignedTo: "Usman Ahmed", usedAt: "Aug 23, 2025", notes: "Freelance Contract" },
  { code: "Ali-7B2C9M", createdAt: "Aug 21, 2025", status: "Used", assignedTo: "Hammad Ali", usedAt: "Aug 22, 2025", notes: "Web App" },
  { code: "Ali-4K9P2W", createdAt: "Aug 20, 2025", status: "Used", assignedTo: "Zainab Noor", usedAt: "Aug 20, 2025", notes: "Design Client" },
  { code: "Ali-8H4F2L", createdAt: "Aug 26, 2025", status: "Active", assignedTo: "Hamza Khan", notes: "Valid until feedback is published" },
  { code: "Ali-6D1V9Z", createdAt: "Aug 27, 2025", status: "Active", assignedTo: "New Client", notes: "Valid until feedback is published" },
  { code: "Ali-2R7T5M", createdAt: "Aug 27, 2025", status: "Active", assignedTo: "General Client", notes: "Valid until feedback is published" }
];
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
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-1.5-flash",
  "gemini-2.5-pro"
];
async function generateWithModelFallback(ai, contents) {
  for (const model of GEMINI_MODELS) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents,
        config: {
          systemInstruction: PORTFOLIO_KNOWLEDGE,
          temperature: 0.7,
          maxOutputTokens: 300
        }
      });
      if (response && response.text) {
        return response.text;
      }
    } catch (err) {
      console.warn(`[Gemini API Warning] Model '${model}' call failed (${err?.status || err?.code || 500}). Retrying with fallback model candidate...`);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  }
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
app.get("/api/admin/codes", (_req, res) => {
  res.json({
    success: true,
    codes: generatedCodesStore
  });
});
app.post("/api/admin/codes/generate", (req, res) => {
  const { assignedTo, notes } = req.body || {};
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let randomSuffix = "";
  for (let i = 0; i < 6; i++) {
    randomSuffix += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const newCodeStr = `Ali-${randomSuffix}`;
  const newCodeObj = {
    code: newCodeStr,
    createdAt: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    status: "Active",
    assignedTo: assignedTo || "Client",
    notes: notes || "Valid until feedback is published by the client"
  };
  generatedCodesStore.unshift(newCodeObj);
  res.json({
    success: true,
    code: newCodeObj,
    message: `Generated code ${newCodeStr} successfully.`
  });
});
app.delete("/api/admin/codes/:code", (req, res) => {
  const { code } = req.params;
  generatedCodesStore = generatedCodesStore.filter((c) => c.code !== code);
  res.json({ success: true, message: `Code ${code} removed.` });
});
app.post("/api/feedback/verify-code", (req, res) => {
  const { code } = req.body;
  if (!code || !code.startsWith("Ali-")) {
    res.status(400).json({ valid: false, error: "Code must start with 'Ali-'" });
    return;
  }
  const found = generatedCodesStore.find((c) => c.code.toUpperCase() === code.toUpperCase());
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
});
app.post("/api/feedback/submit", (req, res) => {
  const { code, clientName, clientEmail, rating, comment, source } = req.body;
  if (!code || !code.startsWith("Ali-")) {
    res.status(400).json({ success: false, error: "Valid code starting with 'Ali-' is required." });
    return;
  }
  const codeIndex = generatedCodesStore.findIndex((c) => c.code.toUpperCase() === code.toUpperCase());
  if (codeIndex !== -1) {
    generatedCodesStore[codeIndex].status = "Used";
    generatedCodesStore[codeIndex].usedAt = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    if (clientName) {
      generatedCodesStore[codeIndex].assignedTo = clientName;
    }
  }
  res.json({
    success: true,
    message: "Feedback submitted and published successfully! Code has now been consumed.",
    feedback: {
      id: `fb-${Date.now()}`,
      clientName: clientName || "Verified Client",
      clientEmail: clientEmail || "",
      rating: rating || 5,
      comment: comment || "",
      source: source || "Direct",
      date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      status: "Published",
      codeUsed: code
    }
  });
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.get(["/admin", "/admin/"], (_req, res) => {
      res.redirect("/admin.html");
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get(["/admin", "/admin/", "/admin.html"], (_req, res) => {
      res.sendFile(import_path.default.join(distPath, "admin.html"));
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
