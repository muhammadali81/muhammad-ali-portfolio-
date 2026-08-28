import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { initializeApp, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { db } from "./src/db";
import { portfolioStats, feedback, reactions, feedbackCodes } from "./src/db/schema";
import { eq, sql, and } from "drizzle-orm";

dotenv.config();

// Initialize Firebase Admin
if (!getApps().length) {
  initializeApp({
    projectId: process.env.VITE_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID
  });
}

const app = express();
const PORT = 3000;

app.use(express.json());

// =========================================================================
// ADMIN AUTHENTICATION CONFIGURATION
// =========================================================================
export const ADMIN_CREDENTIALS = {
  email: process.env.ADMIN_EMAIL || "alimuhammadhvn81@gmail.com",
  password: process.env.ADMIN_PASSWORD || "Ali2007",
};

// System prompt for Muhammad Ali’s AI Portfolio Assistant
const PORTFOLIO_KNOWLEDGE = `
You are the official AI Assistant for Muhammad Ali’s Portfolio & Software Studio website.

YOUR MANDATE & PURPOSE:
You are strictly designed to assist website visitors by answering questions based solely on the verified information available on Muhammad Ali's website and professional profile.

SCOPE OF TOPICS YOU MUST ANSWER:
1. YOUR WORK & SERVICES:
   - Projects (4 Main Categories & Sub-Divisions):
     1) Web Development: Nova Web Studio agency showcase with live website link (novawebstudio.app) and 4-photo layout.
     2) Game & AI App Development: Colour Block (strategy puzzle game), Pak AI (Urdu/English voice & chat assistant), Learn Play (gamified education portal) — each with 4-photo galleries.
     3) Pixel Forge Graphic Design: Logo Design (corporate, tech emblem, mascot, monogram), Visiting Card (Muhammad Ali executive card, Jhan Mobile Hub gold card, Anshu Mobile Shop blue card, Mobile Zone card), Banner (social media, YouTube/Twitch, e-commerce, exhibition) — each with 4-photo galleries.
     4) 2D & 3D Architecture: 2D Smart Flooring (CAD room spatial mapping & tile distribution), 3D House Design (luxury villa facade, living room interior, night lighting study) — each with 4-photo galleries.
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
   - Education: BS in Computer Science at Iqra Post Graduate College (Currently 3rd Semester, 2025–Present); FSc in Computer Science from Pak Wattan School & College of Science (Completed 2024); Matric in Science from Al Arqam Academy of Excellence (Completed 2022).
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

let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY || "";
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Helper function for local intelligent answer matching when AI API key is missing or service is unavailable
function getLocalFallbackAnswer(question: string): string {
  const qLower = (question || "").toLowerCase().trim();

  // Explicit out-of-scope check for common random / general questions
  if (
    qLower.includes("football") ||
    qLower.includes("soccer") ||
    qLower.includes("cricket team") ||
    qLower.includes("poem") ||
    qLower.includes("poetry") ||
    qLower.includes("capital of") ||
    qLower.includes("recipe") ||
    qLower.includes("weather in") ||
    qLower.includes("president") ||
    qLower.includes("prime minister") ||
    qLower.includes("movie") ||
    qLower.includes("song") ||
    qLower.includes("joke") ||
    qLower.includes("tell me a story")
  ) {
    return "Unfortunately, I am unable to answer you.";
  }

  // Greetings / Small talk relevant to portfolio
  if (
    qLower.includes("salam") ||
    qLower.includes("hello") ||
    qLower.includes("hi") ||
    qLower.includes("hey") ||
    qLower.includes("kaise ho") ||
    qLower.includes("kese ho") ||
    qLower.includes("how are you") ||
    qLower.includes("good morning") ||
    qLower.includes("good evening")
  ) {
    return "Walaikum Assalam and hello! I am Muhammad Ali’s AI Assistant. How can I assist you with your project, inquiry, or technical questions regarding Muhammad Ali’s portfolio today?";
  }

  // Passion / Drive / Vision / Goals
  if (
    qLower.includes("passionat") ||
    qLower.includes("passion") ||
    qLower.includes("drive") ||
    qLower.includes("vision") ||
    qLower.includes("goal") ||
    qLower.includes("inspire") ||
    qLower.includes("creative approach")
  ) {
    return "Muhammad Ali is deeply passionate about web development, game & AI app development, 2D graphic design, and modern technology. His goal is to create practical digital products, deliver dependable freelance services, and continually refine his software engineering skills.";
  }

  // Work Dealings / Client Approach / Communication / Work Style
  if (
    qLower.includes("deal") ||
    qLower.includes("client") ||
    qLower.includes("work style") ||
    qLower.includes("approach") ||
    qLower.includes("process") ||
    qLower.includes("collaborat") ||
    qLower.includes("communicate") ||
    qLower.includes("method")
  ) {
    return "Muhammad Ali follows a transparent, 6-step work process: Discussing client requirements, Planning the project structure, Building with clean code, Testing for usability, Delivering on time, and providing ongoing Support.";
  }

  // Education & Qualifications
  if (
    qLower.includes("education") ||
    qLower.includes("study") ||
    qLower.includes("college") ||
    qLower.includes("school") ||
    qLower.includes("matric") ||
    qLower.includes("fsc") ||
    qLower.includes("iqra") ||
    qLower.includes("degree") ||
    qLower.includes("qualification") ||
    qLower.includes("padhai")
  ) {
    return "Muhammad Ali is currently pursuing his BS in Computer Science at Iqra Post Graduate College (2025–Present). He completed his FSc in Computer Science from Pak Wattan School and College of Science (2024), and Matric in Science from Al Arqam Academy of Excellence (2022).";
  }

  // Languages
  if (
    qLower.includes("language") ||
    qLower.includes("zaban") ||
    qLower.includes("speak") ||
    qLower.includes("bolte")
  ) {
    return "Muhammad Ali speaks English, Urdu, and Hindko fluently.";
  }

  // Services & Work
  if (
    qLower.includes("service") ||
    qLower.includes("offer") ||
    qLower.includes("what can you do") ||
    qLower.includes("work") ||
    qLower.includes("build") ||
    qLower.includes("develop") ||
    qLower.includes("web") ||
    qLower.includes("game") ||
    qLower.includes("app") ||
    qLower.includes("graphic") ||
    qLower.includes("design") ||
    qLower.includes("architecture") ||
    qLower.includes("kam")
  ) {
    return "Muhammad Ali offers 4 core service divisions: 1. Web Development (Nova Web Studio), 2. Game & AI App Development (Colour Block, Pak AI, Learn Play), 3. Pixel Forge Graphic Design (Logos, Visiting Cards, Banners), and 4. 2D & 3D Architecture (2D Smart Flooring, 3D House Design).";
  }

  // Hire Me Section & Inquiry
  if (
    qLower.includes("hire") ||
    qLower.includes("inquiry") ||
    qLower.includes("how to order") ||
    qLower.includes("book")
  ) {
    return "You can hire Muhammad Ali or submit a project inquiry directly on the website with $10+ USD budget criteria. Choose an entire service or select a specific sub-division photo slot, or message him directly on WhatsApp at +92 342 6793428.";
  }

  // Contact / Phone / WhatsApp / Email
  if (
    qLower.includes("contact") ||
    qLower.includes("phone") ||
    qLower.includes("call") ||
    qLower.includes("whatsapp") ||
    qLower.includes("number") ||
    qLower.includes("email") ||
    qLower.includes("rabta") ||
    qLower.includes("reach") ||
    qLower.includes("message")
  ) {
    return "You can message Muhammad Ali on WhatsApp at +92 342 6793428, call him directly at +92 330 0358799, or email alimuhammadhvn81@gmail.com.";
  }

  // Projects & Portfolio
  if (
    qLower.includes("project") ||
    qLower.includes("portfolio") ||
    qLower.includes("nova") ||
    qLower.includes("color blocks") ||
    qLower.includes("colour block") ||
    qLower.includes("pak ai") ||
    qLower.includes("learn play") ||
    qLower.includes("pixel forge") ||
    qLower.includes("visiting card") ||
    qLower.includes("smart flooring") ||
    qLower.includes("3d house") ||
    qLower.includes("sample") ||
    qLower.includes("demo")
  ) {
    return "Muhammad Ali's portfolio features 4 major categories with 4-photo sub-division galleries: Web Development (Nova Web Studio), Game & AI App Development (Colour Block, Pak AI, Learn Play), Pixel Forge Graphic Design (Logos, Executive & Mobile Shop Visiting Cards, Banners), and 2D & 3D Architecture (2D Smart Flooring & 3D House Design).";
  }

  // Technical Skills / Stack
  if (
    qLower.includes("skill") ||
    qLower.includes("tech") ||
    qLower.includes("stack") ||
    qLower.includes("coding") ||
    qLower.includes("programming") ||
    qLower.includes("react") ||
    qLower.includes("python") ||
    qLower.includes("node") ||
    qLower.includes("typescript") ||
    qLower.includes("godot") ||
    qLower.includes("unity") ||
    qLower.includes("canva")
  ) {
    return "His core technical skills include HTML, CSS, JavaScript, React, Node.js, Python, C++, Game Development (Godot, Unity), AI Development, and Graphic Design (Canva).";
  }

  // Price / Rates / Budget / Cost
  if (
    qLower.includes("price") ||
    qLower.includes("cost") ||
    qLower.includes("rate") ||
    qLower.includes("fee") ||
    qLower.includes("budget") ||
    qLower.includes("kitna") ||
    qLower.includes("charge") ||
    qLower.includes("dollar") ||
    qLower.includes("$")
  ) {
    return "Muhammad Ali's project budget criteria starts from $10 and above ($10+ USD). Final pricing depends on your project scope. You can reach out on WhatsApp at +92 342 6793428 or call +92 330 0358799 for an instant quote.";
  }

  // Professionalism / Trust / Experience
  if (
    qLower.includes("professional") ||
    qLower.includes("quality") ||
    qLower.includes("trust") ||
    qLower.includes("reliable") ||
    qLower.includes("why hire") ||
    qLower.includes("kaisa hai") ||
    qLower.includes("experience") ||
    qLower.includes("work ethic")
  ) {
    return "Yes, Muhammad Ali is highly professional, reliable, and detail-oriented. He delivers clean code, modern responsive designs, and punctual updates with 100% dedication to client satisfaction.";
  }

  // Bio / Intro / Who is
  if (
    qLower.includes("who is") ||
    qLower.includes("about") ||
    qLower.includes("muhammad ali") ||
    qLower.includes("intro") ||
    qLower.includes("background") ||
    qLower.includes("kon") ||
    qLower.includes("ali")
  ) {
    return "Muhammad Ali is a dedicated Computer Science student and software creator specializing in Web Development, Game & AI App Development, and 2D Graphic Design from Pakistan.";
  }

  // Website / Site
  if (
    qLower.includes("website") ||
    qLower.includes("site") ||
    qLower.includes("page")
  ) {
    return "This website is the official portfolio of Muhammad Ali, highlighting his projects, skills, education, client feedback, and direct contact options.";
  }

  // Timelines / Turnaround
  if (
    qLower.includes("time") ||
    qLower.includes("duration") ||
    qLower.includes("kitne din") ||
    qLower.includes("fast") ||
    qLower.includes("deadline")
  ) {
    return "Project timelines depend on complexity and scope. Muhammad ensures rapid turnaround and clear milestone delivery. Contact him on WhatsApp at +92 342 6793428 to discuss your exact timeline.";
  }

  // Strict Fallback for any unsupported / unrelated question
  return "Unfortunately, I am unable to answer you.";
}

// Fallback Gemini model pipeline in case of high demand (503) or rate limits (429)
const GEMINI_MODELS = [
  "gemini-3.7-flash",
  "gemini-3.1-flash-lite",
  "gemini-3.1-pro-preview",
  "gemini-2.0-flash-exp",
  "gemini-1.5-flash",
  "gemini-1.5-pro",
  "gemini-flash-latest",
];

async function generateWithModelFallback(ai: GoogleGenAI, contents: any[], systemInstruction: string = PORTFOLIO_KNOWLEDGE): Promise<string | null> {
  let lastError = null;
  for (const model of GEMINI_MODELS) {
    try {
      if (lastError) await new Promise(resolve => setTimeout(resolve, 800));

      const response = await ai.models.generateContent({
        model,
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
          maxOutputTokens: 500,
        },
      });
      if (response && response.text) {
        return response.text;
      }
    } catch (err: any) {
      lastError = err;
      // Silently fall back for common transient errors (503, 429, 404)
      if (err?.status !== 503 && err?.status !== 429 && err?.status !== 404) {
        console.warn(`[Gemini API] Model '${model}' failed: ${err?.message || 'unknown error'}`);
      }
    }
  }
  
  console.error("All Gemini model fallbacks failed. Final error:", lastError?.status || lastError?.message || lastError);
  return null;
}

// Voice Support AI query endpoint
app.post("/api/voice-support", async (req, res) => {
  try {
    const { question, conversationHistory } = req.body;

    if (!question || typeof question !== "string") {
      res.status(400).json({ error: "A valid question string is required." });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      const fallbackText = getLocalFallbackAnswer(question);
      res.json({ answer: fallbackText });
      return;
    }

    const ai = getAIClient();

    // Build contents from history if available
    const contents: any[] = [];
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

    // If all online model candidates fail (e.g. 503 high demand spike), use intelligent local fallback answer
    const fallbackText = getLocalFallbackAnswer(question);
    res.json({
      answer: fallbackText,
      fallbackUsed: true,
    });
  } catch (error: any) {
    console.error("Error in /api/voice-support handler:", error);
    const fallbackText = getLocalFallbackAnswer(req.body?.question || "");
    res.json({
      answer: fallbackText,
      fallbackUsed: true,
    });
  }
});

// =========================================================================
// DATABASE & AUTH API ENDPOINTS
// =========================================================================

// Get Portfolio Stats
app.get("/api/stats", async (_req, res) => {
  console.log("[API] GET /api/stats requested");
  try {
    const statsResult = await db.select().from(portfolioStats).where(eq(portfolioStats.id, 1));
    let baseStats = statsResult.length > 0 ? statsResult[0] : null;
    
    if (!baseStats) {
      console.log("[API] Stats record not found, creating id:1");
      const [newStats] = await db.insert(portfolioStats).values({ id: 1 }).returning();
      baseStats = newStats;
    }

    // Live aggregations for real-time accuracy
    const allFeedbacks = (await db.select().from(feedback)) || [];
    console.log(`[API] Found ${allFeedbacks.length} feedbacks for live aggregation`);

    const ratingBreakdown = {
      stars5: allFeedbacks.filter(f => f && f.rating === 5).length,
      stars4: allFeedbacks.filter(f => f && f.rating === 4).length,
      stars3: allFeedbacks.filter(f => f && f.rating === 3).length,
      stars2: allFeedbacks.filter(f => f && f.rating === 2).length,
      stars1: allFeedbacks.filter(f => f && f.rating === 1).length,
    };

    const feedbackStatusBreakdown = {
      published: allFeedbacks.filter(f => f && f.isApproved).length,
      pending: allFeedbacks.filter(f => f && !f.isApproved).length,
      archived: 0,
    };

    // Recalculate satisfied/unsatisfied counts live based on ratings
    const liveSatisfied = allFeedbacks.filter(f => f && f.rating >= 4).length;
    const liveUnsatisfied = allFeedbacks.filter(f => f && f.rating <= 2).length;
    
    const responseData = {
      ...baseStats,
      satisfiedClients: liveSatisfied,
      unsatisfiedClients: liveUnsatisfied,
      totalFeedback: allFeedbacks.filter(f => f && f.isApproved).length,
      ratingBreakdown,
      feedbackStatusBreakdown,
    };

    console.log("[API] Sending stats response:", JSON.stringify(responseData).substring(0, 100) + "...");
    res.json(responseData);
  } catch (error) {
    console.error("[API ERROR] Error fetching stats:", error);
    res.status(500).json({ error: "Failed to fetch stats", details: error instanceof Error ? error.message : String(error) });
  }
});

// Update Profile View Count
app.post("/api/stats/view", async (_req, res) => {
  try {
    await db.update(portfolioStats)
      .set({ profileViews: sql`${portfolioStats.profileViews} + 1` })
      .where(eq(portfolioStats.id, 1));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to update view count" });
  }
});

// Submit Feedback (Google Verified + Ali- Code)
app.post("/api/feedback/submit-verified", async (req, res) => {
  try {
    const { token, rating, comment, code, projectScreenshot } = req.body;
    
    // 1. Verify Code First
    if (!code || !code.toLowerCase().startsWith("ali-")) {
      res.status(400).json({ error: "A valid feedback code starting with 'Ali-' is required." });
      return;
    }

    const [dbCode] = await db.select().from(feedbackCodes).where(sql`LOWER(${feedbackCodes.code}) = LOWER(${code})`);
    if (!dbCode || dbCode.status !== "Active") {
      res.status(400).json({ error: "This feedback code is invalid or has already been used." });
      return;
    }

    // 2. Verify Firebase Token
    const decodedToken = await getAuth().verifyIdToken(token);
    const { name, email, picture, uid } = decodedToken;

    // 3. Generate AI Auto-Reply based on feedback situation
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
      
      const userMessage = `Client Name: ${name}\nRating: ${rating} stars\nClient Comment: "${comment}"`;
      
      const generatedText = await generateWithModelFallback(ai, [{ role: "user", parts: [{ text: userMessage }] }], systemPrompt);
      if (generatedText) {
        autoReply = generatedText.trim();
        // Simple heuristic to check if it's cut off (doesn't end with punctuation)
        const lastChar = autoReply.slice(-1);
        if (!['.', '!', '?'].includes(lastChar) && autoReply.length > 20) {
          autoReply += "...";
        }
      }
    } catch (err) {
      console.error("AI Auto-reply generation error:", err);
      console.warn("AI Auto-reply generation failed, using default.");
    }

    // 4. Save Feedback
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

    // 5. Mark Code as Used
    await db.update(feedbackCodes)
      .set({ status: "Used", usedAt: new Date() })
      .where(eq(feedbackCodes.id, dbCode.id));

    // 6. Update stats
    const isSatisfied = rating >= 4;
    const isUnsatisfied = rating <= 2;

    await db.update(portfolioStats)
      .set({ 
        totalFeedback: sql`${portfolioStats.totalFeedback} + 1`,
        averageRating: sql`((${portfolioStats.averageRating} * ${portfolioStats.totalFeedback}) + ${rating}) / (${portfolioStats.totalFeedback} + 1)`,
        satisfiedClients: isSatisfied ? sql`${portfolioStats.satisfiedClients} + 1` : portfolioStats.satisfiedClients,
        unsatisfiedClients: isUnsatisfied ? sql`${portfolioStats.unsatisfiedClients} + 1` : portfolioStats.unsatisfiedClients
      })
      .where(eq(portfolioStats.id, 1));

    res.json({ success: true, feedback: newFeedback });
  } catch (error) {
    console.error("Error submitting verified feedback:", error);
    res.status(401).json({ error: "Authentication failed or database error" });
  }
});

// Get Public Feedbacks
app.get("/api/feedback", async (_req, res) => {
  try {
    const feedbacks = await db.select()
      .from(feedback)
      .where(eq(feedback.isApproved, true))
      .orderBy(sql`${feedback.date} DESC`);
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch feedbacks" });
  }
});

// Post Reaction (Like/Dislike)
app.post("/api/reactions", async (req, res) => {
  try {
    const { type, token } = req.body;
    let userId = null;

    if (token) {
      const decodedToken = await getAuth().verifyIdToken(token);
      userId = decodedToken.uid;
    }

    await db.insert(reactions).values({
      type,
      userId,
      ipAddress: req.ip
    });

    if (type === 'like') {
      await db.update(portfolioStats)
        .set({ positiveReactions: sql`${portfolioStats.positiveReactions} + 1` })
        .where(eq(portfolioStats.id, 1));
    } else {
      await db.update(portfolioStats)
        .set({ negativeReactions: sql`${portfolioStats.negativeReactions} + 1` })
        .where(eq(portfolioStats.id, 1));
    }

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to post reaction" });
  }
});

// Admin Login
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

  // Authentication successful
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

// Verify Admin Session Token
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

// Get All Generated Codes
app.get("/api/admin/codes", async (_req, res) => {
  try {
    const codes = await db.select().from(feedbackCodes).orderBy(sql`${feedbackCodes.createdAt} DESC`);
    res.json({ success: true, codes });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch codes" });
  }
});

// Generate Code (starts with Ali-, valid until feedback is published)
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

// Delete / Revoke Code
app.delete("/api/admin/codes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.delete(feedbackCodes).where(eq(feedbackCodes.id, parseInt(id)));
    res.json({ success: true, message: "Code removed." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete code" });
  }
});

// Verify Feedback Code Validity
app.post("/api/feedback/verify-code", async (req, res) => {
  try {
    const { code } = req.body;
    if (!code || !code.toLowerCase().startsWith("ali-")) {
      res.status(400).json({ valid: false, error: "Code must start with 'Ali-'" });
      return;
    }

    const [found] = await db.select().from(feedbackCodes).where(sql`LOWER(${feedbackCodes.code}) = LOWER(${code})`);
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

// Get All Feedbacks (Admin)
app.get("/api/admin/feedback", async (_req, res) => {
  try {
    const feedbacks = await db.select()
      .from(feedback)
      .orderBy(sql`${feedback.date} DESC`);
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch feedbacks" });
  }
});

// Reply to Feedback (Admin)
app.post("/api/admin/feedback/:id/reply", async (req, res) => {
  try {
    const { id } = req.params;
    const { reply } = req.body;
    await db.update(feedback)
      .set({ adminReply: reply })
      .where(eq(feedback.id, parseInt(id)));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to reply to feedback" });
  }
});

// Delete Feedback (Admin)
app.delete("/api/admin/feedback/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.delete(feedback).where(eq(feedback.id, parseInt(id)));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete feedback" });
  }
});

// Approve Feedback (Admin)
app.post("/api/admin/feedback/:id/approve", async (req, res) => {
  try {
    const { id } = req.params;
    await db.update(feedback)
      .set({ isApproved: true })
      .where(eq(feedback.id, parseInt(id)));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to approve feedback" });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    
    // SPA route for /admin to serve the main App (which now contains AdminApp)
    app.get(["/admin", "/admin/*"], (_req, res) => {
      res.sendFile(path.join(process.cwd(), "index.html"));
    });

    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));

    app.get(["/admin", "/admin/*"], (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });

    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
