import React, { useState, useEffect, useRef } from 'react';

interface AIVoiceSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  actionLinks?: { type: 'whatsapp' | 'call' | 'email'; label: string; url: string }[];
}

type AssistantState = 'IDLE' | 'LISTENING' | 'SPEAKING';

// Verified Muhammad Ali Portfolio Knowledge Base for 100% accurate, Instant Zero-Latency matching
const VERIFIED_KNOWLEDGE = {
  whatsapp: "+92 342 6793428",
  whatsappUrl: "https://wa.me/923426793428",
  callNumber: "+92 330 0358799",
  callUrl: "tel:+923300358799",
  email: "alimuhammadhvn81@gmail.com",
  emailUrl: "mailto:alimuhammadhvn81@gmail.com",
  name: "Muhammad Ali",
  education: "Muhammad is currently pursuing his BS in Computer Science at Iqra Post Graduate College (2025–Present). Previously, he completed his FSc in Computer Science from Pak Wattan School & College of Science in 2024, and Matric in Science from Al Arqam Academy of Excellence in 2022.",
  languages: "Muhammad’s listed languages are Urdu, English, and Hindko.",
  services: "Muhammad offers 4 major service divisions: 1. Web Development (React, Node, Nova Web Studio agency showcase), 2. Game & AI App Development (Colour Block strategy game, Pak AI assistant, Learn Play education hub), 3. Pixel Forge Graphic Design (Logo Design, executive & mobile shop Visiting Cards, Banners), and 4. 2D & 3D Architecture (2D Smart Flooring plans, 3D House exterior & interior renders).",
  skills: "His verified technical skills include HTML, CSS, JavaScript, React, Node.js, Python, C++, Game Development (Godot, Unity), AI Development (Gemini, Speech recognition), Pixel Forge Graphic Design (Logos, Visiting Cards, Banners), 2D Smart Floor CAD mapping, 3D Architectural Rendering, and Tailwind CSS.",
  projects: "Muhammad's portfolio features 4 main categories with 4-photo sub-division galleries: 1. Web Development (Nova Web Studio), 2. Game & AI Development (Colour Block, Pak AI, Learn Play), 3. Pixel Forge Graphic Design (Logos, Executive & Mobile Shop Visiting Cards, Promotional Banners), and 4. 2D & 3D Architecture (2D Smart Flooring CAD blueprints and 3D House Design renders).",
  hireMe: "You can hire Muhammad Ali through the interactive Hire Me section by selecting an entire service or choosing specific photo slots across all 4 categories (Web, Game/AI, Pixel Forge, 2D/3D Architecture) with budget criteria starting at $10+ USD.",
  inquiry: "You can submit project inquiries via the secure Inquiry form, choosing your project category, budget range ($10+ USD minimum), and custom requirements for fast direct response.",
  pricing: "Muhammad’s project budget criteria is $10 or above ($10+ minimum). Final pricing depends on project scope, complexity, and custom features. You can contact him directly on WhatsApp at +92 342 6793428 or call +92 330 0358799 for an instant quote!",
  budget: "Project budget criteria is $10 or above ($10+ USD). Projects start from at least $10 depending on the scope.",
  professionalism: "Yes, Muhammad Ali is highly professional, reliable, and detail-oriented in his work. He focuses on clean code architecture, modern and responsive UI/UX, transparent communication, and 100% client satisfaction.",
  whyHire: "You should hire Muhammad Ali because of his unique hybrid expertise across Web Development, Game & AI applications, Pixel Forge Graphic Design, and 2D/3D Architectural Design. He offers fast turnaround, direct one-on-one communication, and budget-friendly pricing starting from just $10+.",
  about: "Muhammad Ali is a dedicated Computer Science student and software creator specializing in Web Development, Game & AI App Development, Pixel Forge Graphic Design, and 2D/3D Architecture from Pakistan.",
  passion: "Muhammad Ali is deeply passionate about web development, game & AI app development, graphic design, 2D/3D architectural rendering, and modern technology. He is driven by a desire to turn ideas into polished digital experiences through continuous learning, clean software architecture, and disciplined work.",
  workStyle: "Muhammad Ali follows a transparent, 6-step collaborative work process: 1. Discussing requirements, 2. Planning structure & design, 3. Building with clean code, 4. Testing usability, 5. Delivering on time, and 6. Providing post-delivery support.",
  contactAll: "You can message Muhammad on WhatsApp at +92 342 6793428, call him directly at +92 330 0358799, or email alimuhammadhvn81@gmail.com."
};

// Instant Knowledge Matcher Function (Zero Latency Instant Response)
function getInstantAnswer(question: string): { text: string; actionLinks?: Message['actionLinks'] } | null {
  const q = question.toLowerCase().trim();

  // Out of scope / Irrelevant questions check
  if (
    q.includes("football") ||
    q.includes("soccer") ||
    q.includes("cricket team") ||
    q.includes("poem") ||
    q.includes("poetry") ||
    q.includes("capital of") ||
    q.includes("recipe") ||
    q.includes("weather in") ||
    q.includes("president") ||
    q.includes("prime minister") ||
    q.includes("movie") ||
    q.includes("song") ||
    q.includes("joke") ||
    q.includes("tell me a story")
  ) {
    return {
      text: "Unfortunately, I am unable to answer you."
    };
  }

  // Greetings / Salutations (Urdu & English)
  if (q === "salam" || q.includes("assalam") || q.includes("salaam") || q.startsWith("hi") || q.startsWith("hello") || q.includes("hey") || q.includes("kaise ho") || q.includes("kese ho") || q.includes("how are you")) {
    return {
      text: "Walaikum Assalam and hello! I am Muhammad Ali’s professional AI Assistant. I can help you with portfolio information, project inquiries, technical development questions, and instant hiring quotes.",
      actionLinks: [
        { type: 'whatsapp', label: '💬 Chat on WhatsApp (+92 342 6793428)', url: VERIFIED_KNOWLEDGE.whatsappUrl },
        { type: 'call', label: '📞 Call (+92 330 0358799)', url: VERIFIED_KNOWLEDGE.callUrl }
      ]
    };
  }

  // Passion / Goals / Drive
  if (q.includes("passionat") || q.includes("passion") || q.includes("drive") || q.includes("vision") || q.includes("creative approach") || q.includes("goal")) {
    return {
      text: VERIFIED_KNOWLEDGE.passion,
      actionLinks: [
        { type: 'whatsapp', label: '💬 Discuss Your Project on WhatsApp', url: VERIFIED_KNOWLEDGE.whatsappUrl }
      ]
    };
  }

  // Client Dealings / Work Style / Collaboration / Approach
  if (q.includes("deal with client") || q.includes("work style") || q.includes("deal") || q.includes("client") || q.includes("process") || q.includes("collaborat") || q.includes("approach")) {
    return {
      text: VERIFIED_KNOWLEDGE.workStyle,
      actionLinks: [
        { type: 'whatsapp', label: '💬 Start a Project on WhatsApp', url: VERIFIED_KNOWLEDGE.whatsappUrl },
        { type: 'call', label: '📞 Direct Call (+92 330 0358799)', url: VERIFIED_KNOWLEDGE.callUrl }
      ]
    };
  }

  // Professionalism / Work Quality / Reliability / Trust
  if (q.includes("professional") || q.includes("quality") || q.includes("trust") || q.includes("reliable") || q.includes("dedicated") || q.includes("good in") || q.includes("good at") || q.includes("kaisa hai") || q.includes("kaisa kam") || q.includes("work ethic") || q.includes("experience") || q.includes("honest")) {
    return {
      text: VERIFIED_KNOWLEDGE.professionalism,
      actionLinks: [
        { type: 'whatsapp', label: '💬 Discuss Your Project on WhatsApp', url: VERIFIED_KNOWLEDGE.whatsappUrl },
        { type: 'call', label: '📞 Call Directly (+92 330 0358799)', url: VERIFIED_KNOWLEDGE.callUrl }
      ]
    };
  }

  // Why Hire Muhammad Ali / Benefits
  if (q.includes("why hire") || q.includes("why choose") || q.includes("benefit") || q.includes("advantage") || q.includes("hire him") || q.includes("hire muhammad") || q.includes("reason")) {
    return {
      text: VERIFIED_KNOWLEDGE.whyHire,
      actionLinks: [
        { type: 'whatsapp', label: '💬 Start a Project on WhatsApp ($10+)', url: VERIFIED_KNOWLEDGE.whatsappUrl },
        { type: 'call', label: '📞 Call (+92 330 0358799)', url: VERIFIED_KNOWLEDGE.callUrl }
      ]
    };
  }

  // Who is Muhammad Ali / Identity / About
  if (q.includes("who is") || q.includes("about muhammad") || q.includes("about him") || q.includes("intro") || q.includes("background") || q.includes("kon hai") || q.includes("tell me about") || q.includes("introduce")) {
    return {
      text: `${VERIFIED_KNOWLEDGE.about} He is currently continuing his BS in Computer Science at Iqra Post Graduate College and builds custom solutions starting from $10+.`,
      actionLinks: [
        { type: 'whatsapp', label: '💬 Contact Muhammad on WhatsApp', url: VERIFIED_KNOWLEDGE.whatsappUrl },
        { type: 'call', label: '📞 Call: +92 330 0358799', url: VERIFIED_KNOWLEDGE.callUrl }
      ]
    };
  }

  // WhatsApp specific
  if (q.includes("whatsapp") || q.includes("whats app") || (q.includes("chat") && !q.includes("gpt"))) {
    return {
      text: `Muhammad’s official WhatsApp number is +92 342 6793428. You can click below to start a chat directly.`,
      actionLinks: [
        { type: 'whatsapp', label: '💬 Open WhatsApp (+92 342 6793428)', url: VERIFIED_KNOWLEDGE.whatsappUrl },
        { type: 'call', label: '📞 Call (+92 330 0358799)', url: VERIFIED_KNOWLEDGE.callUrl }
      ]
    };
  }

  // Call / Phone number specific
  if (q.includes("call") || q.includes("phone") || q.includes("number") || q.includes("mobile") || q.includes("dial")) {
    return {
      text: `You can call Muhammad directly at +92 330 0358799, or reach him on WhatsApp at +92 342 6793428.`,
      actionLinks: [
        { type: 'call', label: '📞 Direct Call: +92 330 0358799', url: VERIFIED_KNOWLEDGE.callUrl },
        { type: 'whatsapp', label: '💬 WhatsApp: +92 342 6793428', url: VERIFIED_KNOWLEDGE.whatsappUrl }
      ]
    };
  }

  // Contact in general / Hire
  if (q.includes("contact") || q.includes("hire") || q.includes("reach") || q.includes("email") || q.includes("touch") || q.includes("rabta") || q.includes("order") || q.includes("kaise order")) {
    return {
      text: VERIFIED_KNOWLEDGE.contactAll,
      actionLinks: [
        { type: 'whatsapp', label: '💬 WhatsApp (+92 342 6793428)', url: VERIFIED_KNOWLEDGE.whatsappUrl },
        { type: 'call', label: '📞 Call (+92 330 0358799)', url: VERIFIED_KNOWLEDGE.callUrl },
        { type: 'email', label: '✉️ Send Email', url: VERIFIED_KNOWLEDGE.emailUrl }
      ]
    };
  }

  // Budget / Pricing / Cost criteria
  if (q.includes("budget") || q.includes("price") || q.includes("cost") || q.includes("rate") || q.includes("fee") || q.includes("charge") || q.includes("10$") || q.includes("$10") || q.includes("kitna") || q.includes("paisa") || q.includes("rupee") || q.includes("dollar")) {
    return {
      text: VERIFIED_KNOWLEDGE.pricing,
      actionLinks: [
        { type: 'whatsapp', label: '💬 Get Instant Quote on WhatsApp ($10+)', url: VERIFIED_KNOWLEDGE.whatsappUrl },
        { type: 'call', label: '📞 Call: +92 330 0358799', url: VERIFIED_KNOWLEDGE.callUrl }
      ]
    };
  }

  // Project Timeline / Delivery Time
  if (q.includes("time") || q.includes("timeline") || q.includes("delivery") || q.includes("kitne din") || q.includes("duration") || q.includes("deadline")) {
    return {
      text: "Project delivery time depends on scope and features. Basic tasks can be delivered within 24–48 hours, while full web or app projects take a few days to weeks. Fast turnaround is guaranteed.",
      actionLinks: [
        { type: 'whatsapp', label: '💬 Discuss Timeline on WhatsApp', url: VERIFIED_KNOWLEDGE.whatsappUrl },
        { type: 'call', label: '📞 Call (+92 330 0358799)', url: VERIFIED_KNOWLEDGE.callUrl }
      ]
    };
  }

  // Education / College / School / Degree
  if (q.includes("education") || q.includes("study") || q.includes("college") || q.includes("school") || q.includes("degree") || q.includes("matric") || q.includes("fsc") || q.includes("iqra") || q.includes("post graduate") || q.includes("parhai") || q.includes("qualification")) {
    return {
      text: VERIFIED_KNOWLEDGE.education
    };
  }

  // Languages
  if (q.includes("language") || q.includes("zaban") || q.includes("speak") || q.includes("urdu") || q.includes("english") || q.includes("hindko")) {
    return {
      text: VERIFIED_KNOWLEDGE.languages
    };
  }

  // Services
  if (q.includes("service") || q.includes("offer") || q.includes("provide") || (q.includes("what") && q.includes("do")) || q.includes("khidmaat")) {
    return {
      text: VERIFIED_KNOWLEDGE.services,
      actionLinks: [
        { type: 'whatsapp', label: '💬 Discuss a Project on WhatsApp', url: VERIFIED_KNOWLEDGE.whatsappUrl }
      ]
    };
  }

  // Skills / Tech stack
  if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("programming") || q.includes("coding") || q.includes("python") || q.includes("react") || q.includes("c++") || q.includes("game")) {
    return {
      text: VERIFIED_KNOWLEDGE.skills
    };
  }

  // Hire Me Section
  if (q.includes("hire me") || q.includes("how to hire") || q.includes("hire process")) {
    return {
      text: VERIFIED_KNOWLEDGE.hireMe,
      actionLinks: [
        { type: 'whatsapp', label: '💬 Hire on WhatsApp (+92 342 6793428)', url: VERIFIED_KNOWLEDGE.whatsappUrl },
        { type: 'email', label: '✉️ Send Email Inquiry', url: VERIFIED_KNOWLEDGE.emailUrl }
      ]
    };
  }

  // Inquiry Section
  if (q.includes("inquiry") || q.includes("submit message") || q.includes("send message") || q.includes("contact form")) {
    return {
      text: VERIFIED_KNOWLEDGE.inquiry,
      actionLinks: [
        { type: 'whatsapp', label: '💬 Direct WhatsApp (+92 342 6793428)', url: VERIFIED_KNOWLEDGE.whatsappUrl },
        { type: 'email', label: '✉️ Direct Email', url: VERIFIED_KNOWLEDGE.emailUrl }
      ]
    };
  }

  // Projects / Portfolio work / My Work Section
  if (q.includes("project") || q.includes("portfolio") || q.includes("work") || q.includes("game") || q.includes("nova") || q.includes("block") || q.includes("architecture") || q.includes("pixel forge") || q.includes("visiting card") || q.includes("pak ai") || q.includes("learn play")) {
    return {
      text: VERIFIED_KNOWLEDGE.projects,
      actionLinks: [
        { type: 'whatsapp', label: '💬 Discuss Projects on WhatsApp', url: VERIFIED_KNOWLEDGE.whatsappUrl }
      ]
    };
  }

  return null;
}

export default function AIVoiceSupportModal({ isOpen, onClose }: AIVoiceSupportModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'ai',
      text: "Hi! I’m Muhammad Ali’s AI Voice Support Assistant. Ask me anything about his education, skills, projects, services, or contact numbers.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      actionLinks: [
        { type: 'whatsapp', label: '💬 WhatsApp: +92 342 6793428', url: VERIFIED_KNOWLEDGE.whatsappUrl },
        { type: 'call', label: '📞 Call: +92 330 0358799', url: VERIFIED_KNOWLEDGE.callUrl }
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [assistantState, setAssistantState] = useState<AssistantState>('IDLE');
  const [isLoading, setIsLoading] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [statusMessage, setStatusMessage] = useState<string>('Ready to talk or type.');

  const recognitionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Quick action tabs for immediate 1-click answers
  const quickCategories = [
    { label: "⭐ Professionalism", query: "Is Muhammad Ali professional in his work?" },
    { label: "👤 Who is Muhammad Ali?", query: "Who is Muhammad Ali?" },
    { label: "💰 Budget ($10+)", query: "What is your project budget criteria?" },
    { label: "💡 Why Hire?", query: "Why should I hire Muhammad Ali?" },
    { label: "📞 Call Number", query: "What is Muhammad’s call number?" },
    { label: "💬 WhatsApp", query: "What is his WhatsApp number?" },
    { label: "🎓 Education", query: "Tell me about Muhammad’s education" },
    { label: "💼 Services", query: "What services are offered?" },
    { label: "⚡ Skills", query: "What are his technical skills?" },
    { label: "🌐 Languages", query: "What languages does he speak?" },
    { label: "🚀 Projects", query: "What featured projects has he built?" }
  ];

  // Stop voice playback immediately
  const stopVoicePlayback = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (assistantState === 'SPEAKING') {
      setAssistantState('IDLE');
    }
  };

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        try {
          const recognition = new SpeechRecognition();
          recognition.continuous = false;
          recognition.interimResults = false;
          recognition.lang = 'en-US';

          recognition.onstart = () => {
            stopVoicePlayback();
            setAssistantState('LISTENING');
            setStatusMessage('Listening to your voice...');
          };

          recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            setAssistantState('IDLE');
            if (transcript && transcript.trim()) {
              handleSendQuestion(transcript.trim());
            }
          };

          recognition.onerror = (event: any) => {
            console.warn('Speech recognition warning:', event.error);
            setAssistantState('IDLE');
            if (event.error === 'not-allowed') {
              setStatusMessage('Microphone access denied. You can type your question.');
            } else if (event.error === 'no-speech') {
              setStatusMessage('I didn’t catch that. Please tap mic again or type.');
            } else {
              setStatusMessage('Voice input paused. Please type your message.');
            }
          };

          recognition.onend = () => {
            if (assistantState === 'LISTENING') {
              setAssistantState('IDLE');
            }
          };

          recognitionRef.current = recognition;
        } catch (e) {
          console.warn('Speech recognition initialization error:', e);
        }
      }
    }

    return () => {
      stopVoicePlayback();
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (_) {}
      }
    };
  }, []);

  // Auto-speak welcome message on open
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        speakText("Hi! I’m Muhammad Ali’s AI Voice Support Assistant. Ask me anything about his education, skills, projects, services, or contact numbers.");
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Keyboard shortcut: Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Auto scroll chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Clean up audio on modal close
  useEffect(() => {
    if (!isOpen) {
      stopVoicePlayback();
      if (recognitionRef.current && assistantState === 'LISTENING') {
        try {
          recognitionRef.current.stop();
        } catch (_) {}
      }
      setAssistantState('IDLE');
    }
  }, [isOpen]);

  // Real-time Text-to-Speech synthesis
  const speakText = (text: string) => {
    if (!voiceEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setAssistantState('IDLE');
      return;
    }

    stopVoicePlayback();

    // Clean text for speech
    const cleanText = text
      .replace(/[*_~`#>-]/g, ' ')
      .replace(/[•●]/g, ' ')
      .replace(/\[.*?\]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    try {
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.05; // natural swift tempo
      utterance.pitch = 1.0;
      utterance.lang = 'en-US';

      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(v => (v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('Arthur')))) || voices.find(v => v.lang.startsWith('en'));
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onstart = () => {
        setAssistantState('SPEAKING');
        setStatusMessage('AI Assistant is speaking...');
      };

      utterance.onend = () => {
        setAssistantState('IDLE');
        setStatusMessage('Ready for your next question.');
      };

      utterance.onerror = () => {
        setAssistantState('IDLE');
        setStatusMessage('Ready to talk or type.');
      };

      currentUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn('Speech synthesis error:', err);
      setAssistantState('IDLE');
    }
  };

  const toggleMic = () => {
    stopVoicePlayback();

    if (!recognitionRef.current) {
      setStatusMessage('Voice input is not supported in this browser. Please type below.');
      return;
    }

    if (assistantState === 'LISTENING') {
      try {
        recognitionRef.current.stop();
      } catch (_) {}
      setAssistantState('IDLE');
      setStatusMessage('Listening paused.');
    } else {
      try {
        recognitionRef.current.start();
      } catch (err) {
        console.warn('Could not start recognition:', err);
        setStatusMessage('Please allow microphone permissions or type below.');
      }
    }
  };

  // Instant Smart Question Handler
  const handleSendQuestion = async (questionText: string) => {
    if (!questionText.trim()) return;

    stopVoicePlayback();

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: questionText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Step 1: Check instant verified knowledge matcher (ZERO LATENCY - <10ms)
    const instantMatch = getInstantAnswer(questionText);

    if (instantMatch) {
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: instantMatch.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionLinks: instantMatch.actionLinks
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsLoading(false);
      speakText(instantMatch.text);
      return;
    }

    // Step 2: Fallback to Server Gemini API for open-ended queries
    setIsLoading(true);
    setStatusMessage('Searching verified portfolio intelligence...');

    try {
      const res = await fetch('/api/voice-support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: questionText,
          conversationHistory: messages
        })
      });

      const data = await res.json();
      const answerText = data.answer || data.fallbackAnswer || `You can message Muhammad on WhatsApp at ${VERIFIED_KNOWLEDGE.whatsapp} or call ${VERIFIED_KNOWLEDGE.callNumber}.`;

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: answerText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionLinks: [
          { type: 'whatsapp', label: `💬 WhatsApp: ${VERIFIED_KNOWLEDGE.whatsapp}`, url: VERIFIED_KNOWLEDGE.whatsappUrl },
          { type: 'call', label: `📞 Call: ${VERIFIED_KNOWLEDGE.callNumber}`, url: VERIFIED_KNOWLEDGE.callUrl }
        ]
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsLoading(false);
      speakText(answerText);
    } catch (err) {
      console.error('Error in voice query:', err);
      const fallbackText = `You can reach Muhammad directly on WhatsApp at ${VERIFIED_KNOWLEDGE.whatsapp} or call ${VERIFIED_KNOWLEDGE.callNumber}.`;
      const errorMsg: Message = {
        id: `ai-err-${Date.now()}`,
        sender: 'ai',
        text: fallbackText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionLinks: [
          { type: 'whatsapp', label: `💬 WhatsApp: ${VERIFIED_KNOWLEDGE.whatsapp}`, url: VERIFIED_KNOWLEDGE.whatsappUrl },
          { type: 'call', label: `📞 Call: ${VERIFIED_KNOWLEDGE.callNumber}`, url: VERIFIED_KNOWLEDGE.callUrl }
        ]
      };
      setMessages(prev => [...prev, errorMsg]);
      setIsLoading(false);
      speakText(fallbackText);
    }
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      handleSendQuestion(inputText);
    }
  };

  const handleClearHistory = () => {
    stopVoicePlayback();
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'ai',
        text: "Hi! I’m Muhammad Ali’s AI Voice Support Assistant. Ask me anything about his education, skills, projects, services, or contact numbers.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionLinks: [
          { type: 'whatsapp', label: '💬 WhatsApp: +92 342 6793428', url: VERIFIED_KNOWLEDGE.whatsappUrl },
          { type: 'call', label: '📞 Call: +92 330 0358799', url: VERIFIED_KNOWLEDGE.callUrl }
        ]
      }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-2xl animate-fadeIn">
      {/* Background click backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Ultra-Luxury Master Modal Frame */}
      <div 
        className="relative z-10 w-full max-w-2xl bg-[#080c16] border-2 border-[#ff3344]/40 rounded-[26px] shadow-[0_20px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(255,51,68,0.25)] flex flex-col max-h-[92vh] overflow-hidden text-[#f3f4f6]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="voice-assistant-title"
        onClick={e => e.stopPropagation()}
      >
        {/* Luxury Glowing Top Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#ff3344] via-[#00d9ff] to-[#ff3344] animate-pulse" />

        {/* Master Luxury Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4.5 border-b border-white/10 bg-gradient-to-b from-[#131b2c] via-[#0e1422] to-[#0a0f1a]">
          <div className="flex items-center gap-3.5">
            {/* Glowing AI Voice Orb Avatar */}
            <div className={`relative flex items-center justify-center w-12 h-12 rounded-2xl border transition-all duration-300 shadow-lg ${
              assistantState === 'SPEAKING'
                ? 'bg-[#00d9ff]/20 border-[#00d9ff] text-[#00d9ff] shadow-[0_0_25px_rgba(0,217,255,0.4)]'
                : assistantState === 'LISTENING'
                ? 'bg-[#ff3344]/30 border-[#ff3344] text-[#ff3344] scale-105 shadow-[0_0_25px_rgba(255,51,68,0.5)]'
                : 'bg-gradient-to-br from-[#ff3344]/25 to-[#162032] border-[#ff3344]/50 text-[#ff4d5a]'
            }`}>
              {assistantState === 'SPEAKING' ? (
                <span className="text-2xl animate-pulse">🔊</span>
              ) : assistantState === 'LISTENING' ? (
                <span className="text-2xl animate-bounce text-[#ff3344]">🎙️</span>
              ) : (
                <span className="text-2xl">🤖</span>
              )}
              {assistantState !== 'IDLE' && (
                <span className={`absolute -top-1 -right-1 w-4 h-4 rounded-full animate-ping ${
                  assistantState === 'SPEAKING' ? 'bg-[#00d9ff]' : 'bg-[#ff3344]'
                }`} />
              )}
            </div>

            <div>
              <div className="flex items-center gap-2.5">
                <h3 id="voice-assistant-title" className="font-extrabold text-lg sm:text-xl text-white tracking-wide">
                  AI Voice Assistant
                </h3>
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-extrabold uppercase tracking-widest transition-all duration-300 ${
                  assistantState === 'SPEAKING'
                    ? 'bg-[#00d9ff]/25 text-[#00d9ff] border-[#00d9ff]/60 shadow-[0_0_12px_rgba(0,217,255,0.4)]'
                    : assistantState === 'LISTENING'
                    ? 'bg-[#ff3344]/30 text-[#ff3344] border-[#ff3344] animate-pulse shadow-[0_0_12px_rgba(255,51,68,0.5)]'
                    : 'bg-[#ff3344]/20 text-[#ff4d5a] border-[#ff3344]/40'
                }`}>
                  {assistantState === 'SPEAKING' ? 'Speaking' : assistantState === 'LISTENING' ? 'Listening' : 'Instant 24/7'}
                </span>
              </div>
              <p className="text-xs text-[#94a3b8] flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Verified profile info &amp; instantaneous voice response</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Clear Chat Button */}
            <button
              onClick={handleClearHistory}
              title="Reset Conversation"
              className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold border border-white/10 bg-white/5 hover:bg-white/10 text-[#94a3b8] hover:text-white transition cursor-pointer"
            >
              <span>🔄</span> <span>Reset</span>
            </button>

            {/* Voice Mute / Unmute Toggle */}
            <button
              onClick={() => {
                if (assistantState === 'SPEAKING') stopVoicePlayback();
                setVoiceEnabled(!voiceEnabled);
              }}
              title={voiceEnabled ? 'Mute AI Voice' : 'Unmute AI Voice'}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                voiceEnabled
                  ? 'bg-white/5 border-white/15 text-[#cbd5e1] hover:border-[#ff3344]/50 hover:text-white'
                  : 'bg-[#ff3344]/25 border-[#ff3344]/60 text-[#ff4d5a]'
              }`}
            >
              <span>{voiceEnabled ? '🔊' : '🔇'}</span>
              <span className="hidden sm:inline">{voiceEnabled ? 'Voice On' : 'Muted'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/15 bg-white/5 text-[#94a3b8] hover:text-white hover:border-[#ff3344] hover:bg-[#ff3344]/15 transition-all duration-200 text-lg cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Live Audio Status Visualizer Bar */}
        <div className="px-5 sm:px-7 py-2.5 bg-[#0b101c] border-b border-white/5 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2.5 text-xs">
            <span className={`w-2.5 h-2.5 rounded-full ${
              assistantState === 'LISTENING'
                ? 'bg-[#ff3344] animate-ping'
                : assistantState === 'SPEAKING'
                ? 'bg-[#00d9ff] animate-pulse'
                : 'bg-emerald-400'
            }`} />
            <span className="text-[#cbd5e1] font-medium">{statusMessage}</span>
          </div>

          {/* Dynamic Equalizer Waves */}
          <div className="flex items-center gap-2">
            {(assistantState === 'LISTENING' || assistantState === 'SPEAKING') && (
              <div className="flex items-center gap-1 h-4 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/15">
                <span className={`w-1 rounded-full animate-[pulse_0.4s_ease-in-out_infinite] h-3 ${assistantState === 'SPEAKING' ? 'bg-[#00d9ff]' : 'bg-[#ff3344]'}`} />
                <span className={`w-1 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-4.5 ${assistantState === 'SPEAKING' ? 'bg-[#38bdf8]' : 'bg-[#ff4d5a]'}`} />
                <span className={`w-1 rounded-full animate-[pulse_0.3s_ease-in-out_infinite] h-2.5 ${assistantState === 'SPEAKING' ? 'bg-[#00d9ff]' : 'bg-[#ff3344]'}`} />
                <span className={`w-1 rounded-full animate-[pulse_0.5s_ease-in-out_infinite] h-4 ${assistantState === 'SPEAKING' ? 'bg-[#38bdf8]' : 'bg-[#ff4d5a]'}`} />
                <span className={`w-1 rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-2 ${assistantState === 'SPEAKING' ? 'bg-[#00d9ff]' : 'bg-[#ff3344]'}`} />
              </div>
            )}

            {assistantState === 'SPEAKING' && (
              <button
                onClick={stopVoicePlayback}
                className="text-[11px] px-3 py-1 rounded-lg border border-[#ff3344]/60 bg-[#ff3344]/20 text-[#ff4d5a] font-bold hover:bg-[#ff3344]/30 transition cursor-pointer flex items-center gap-1 shadow-sm"
              >
                <span>⏹</span> <span>Stop Voice</span>
              </button>
            )}
          </div>
        </div>

        {/* Conversation Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4.5 min-h-[260px] max-h-[400px] bg-[#060911] scrollbar-thin">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[90%] rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-[#ff3344] to-[#c71728] text-white shadow-lg rounded-br-none font-medium'
                    : 'bg-[#111726] border border-white/10 text-[#e2e8f0] rounded-bl-none shadow-md'
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-2 text-[10px] opacity-80 font-bold">
                  <span className="uppercase tracking-wider flex items-center gap-1.5 text-[#ff4d5a]">
                    {msg.sender === 'user' ? '👤 You' : '⚡ Muhammad Ali AI'}
                  </span>
                  <span className="text-[#94a3b8]">{msg.timestamp}</span>
                </div>

                <div className="whitespace-pre-wrap font-normal leading-relaxed">{msg.text}</div>

                {/* Instant Action Badges (WhatsApp & Call Links) */}
                {msg.actionLinks && msg.actionLinks.length > 0 && (
                  <div className="mt-3.5 pt-3 border-t border-white/10 flex flex-wrap gap-2">
                    {msg.actionLinks.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target={link.type === 'whatsapp' ? '_blank' : undefined}
                        rel={link.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                        className={`text-xs px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 shadow-sm ${
                          link.type === 'whatsapp'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30'
                            : link.type === 'call'
                            ? 'bg-[#00d9ff]/20 text-[#00d9ff] border border-[#00d9ff]/40 hover:bg-[#00d9ff]/30'
                            : 'bg-white/10 text-white border border-white/20 hover:bg-white/15'
                        }`}
                      >
                        <span>{link.label}</span>
                        <span>↗</span>
                      </a>
                    ))}
                  </div>
                )}

                {msg.sender === 'ai' && voiceEnabled && (
                  <div className="mt-3 pt-2 flex items-center justify-between gap-2 text-[11px]">
                    <button
                      onClick={() => speakText(msg.text)}
                      className="text-[#00d9ff] hover:text-white font-semibold flex items-center gap-1 cursor-pointer transition"
                      title="Play voice response again"
                    >
                      <span>🔊 Replay Voice</span>
                    </button>
                    <span className="text-[10px] text-[#64748b] font-mono">100% Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex flex-col items-start">
              <div className="bg-[#111726] border border-[#ff3344]/40 rounded-2xl rounded-bl-none p-4 text-xs text-[#cbd5e1] flex items-center gap-3 shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff3344] animate-ping" />
                <span>Preparing verified instantaneous response...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips Horizontal Bar */}
        <div className="px-5 py-2.5 bg-[#0a0e18] border-t border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-extrabold text-[#7e8b9d] shrink-0 uppercase tracking-wider">
            Quick Ask:
          </span>
          {quickCategories.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleSendQuestion(item.query)}
              disabled={isLoading || assistantState === 'LISTENING'}
              className="text-xs shrink-0 px-3.5 py-1.5 rounded-full bg-[#131b2b] border border-white/10 hover:border-[#ff3344] hover:text-[#ff4d5a] hover:bg-[#1a2336] text-[#cbd5e1] transition-all duration-200 cursor-pointer disabled:opacity-50 font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Luxury Input Console & Voice Controls Footer */}
        <div className="p-4 sm:p-5 bg-gradient-to-t from-[#101522] via-[#0d121c] to-[#090d16] border-t border-white/10 flex flex-col gap-3">
          <form onSubmit={handleSubmitForm} className="flex items-center gap-2.5">
            {/* Luxury Dynamic Voice Mic Button */}
            <button
              type="button"
              onClick={toggleMic}
              disabled={isLoading}
              title={assistantState === 'LISTENING' ? 'Stop Listening' : 'Speak to AI'}
              className={`h-12 px-4 sm:px-5 rounded-xl flex items-center justify-center gap-2 font-black text-xs tracking-wide transition-all duration-300 cursor-pointer ${
                assistantState === 'LISTENING'
                  ? 'bg-gradient-to-r from-[#ff3344] via-[#e61b30] to-[#ff3344] text-white shadow-[0_0_25px_rgba(255,51,68,0.7)] border border-white/50 animate-pulse'
                  : 'bg-[#182032] hover:bg-[#ff3344]/20 border border-[#ff3344]/50 hover:border-[#ff3344] text-[#ff4d5a] shadow-md'
              }`}
            >
              <span className="text-lg">{assistantState === 'LISTENING' ? '🔴' : '🎙️'}</span>
              <span className="hidden xs:inline">{assistantState === 'LISTENING' ? 'Listening...' : 'Voice'}</span>
            </button>

            {/* Smart Text Input Field */}
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="Ask about WhatsApp, Call, Education, Skills, or Services..."
                disabled={isLoading || assistantState === 'LISTENING'}
                className="w-full h-12 px-4.5 rounded-xl bg-[#05080e] border border-white/20 text-white placeholder-[#64748b] text-sm focus:outline-none focus:border-[#ff3344] focus:ring-2 focus:ring-[#ff3344]/30 transition-all duration-200 font-medium"
              />
            </div>

            {/* Luxury Submit Button */}
            <button
              type="submit"
              disabled={isLoading || assistantState === 'LISTENING' || !inputText.trim()}
              className="h-12 px-5 sm:px-7 rounded-xl bg-gradient-to-r from-[#ff3344] via-[#e61b30] to-[#b30e1f] text-white font-extrabold text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(255,51,68,0.6)] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ask</span>
              <span>➔</span>
            </button>
          </form>

          {/* Direct Verified Contact Bar */}
          <div className="flex items-center justify-between text-[11px] text-[#94a3b8] flex-wrap gap-2 pt-2 border-t border-white/5 font-mono">
            <span className="font-semibold text-[#818c9c]">Direct Verified Contacts:</span>
            <div className="flex items-center gap-4">
              <a 
                href={VERIFIED_KNOWLEDGE.callUrl} 
                className="text-[#00d9ff] hover:text-white transition flex items-center gap-1 font-bold"
              >
                <span>📞 Call:</span> <span>+92 330 0358799</span>
              </a>
              <a 
                href={VERIFIED_KNOWLEDGE.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-400 hover:text-white transition flex items-center gap-1 font-bold"
              >
                <span>💬 WhatsApp:</span> <span>+92 342 6793428</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
