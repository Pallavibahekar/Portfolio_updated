export const personalInfo = {
  name: "Pallavi Bahekar",
  role: "Software Development Engineer",
  tagline: "AI & Full-Stack Developer | Problem Solver | Competitive Coder",
  email: "bahekarpallavi883@gmail.com",
  linkedin: "https://linkedin.com/in/pallavibahekar",
  github: "https://github.com/Pallavibahekar",
  mobile: "+91-957-9501-024",
  leetcode: "https://leetcode.com/pal_2103",
  codechef: "https://www.codechef.com/users/pal_krish",
};

export const education = [
  {
    institution: "Indian Institute of Information Technology, Lucknow",
    degree: "B.Tech – Computer Science & Artificial Intelligence",
    score: "CGPA: 8.7",
    period: "Dec 2021 – July 2025",
    location: "Lucknow, India",
    courses: [
      "DBMS",
      "Web Development",
      "OOPS",
      "Data Structures & Algorithms",
      "Computer Networks",
    ],
  },
  {
    institution: "Progressive Science Junior College",
    degree: "Higher Secondary (Class 12)",
    score: "87.8% | Mathematics: 99/100",
    period: "March 2019 – July 2020",
    location: "Gondia, India",
  },
  {
    institution: "Vivek Mandir School",
    degree: "Secondary Education (Class 10)",
    score: "93.4% | Mathematics: 100/100",
    period: "March 2017 – April 2018",
    location: "Gondia, India",
  },
];

export const skills = {
  languages: ["Java", "Python", "C", "C++", "JavaScript", "SQL"],
  frameworks: ["ReactJS", "NodeJS", "NestJS", "Bootstrap", "Flutter"],
  tools: [
    "Git",
    "MySQL",
    "MongoDB",
    "AWS",
    "Kibana",
    "gRPC",
    "Spanner",
    "Firebase",
    "Unix",
  ],
  softSkills: [
    "Leadership",
    "Event Management",
    "Writing",
    "Public Speaking",
    "Time Management",
  ],
  interests: [
    "Web Development",
    "Competitive Coding",
    "Machine Learning",
    "NLP",
  ],
};

export const experience = [
  {
    company: "PropertyGuru",
    role: "Software Development Engineer",
    period: "Nov 2025 – Present",
    location: "Bangalore, India",
    type: "Full-time",
    color: "from-green-500 to-teal-500",
    logo: "/pg-logo.png",
    logoBg: "bg-white",
    logoSize: "w-10 h-10",
    tech: ["Kibana", "NestJS", "AWS"],
    points: [
      "Led migration of the IPP v5 listing detail endpoint from mapper-based to native v5 index, improving data accuracy and performance via parallel runs and comprehensive validation.",
      "Implemented optimized cron jobs for automated shortlist maintenance, including state-based cleanup and timed removal of expired listings older than 60 days.",
    ],
  },
  {
    company: "Google",
    role: "Software Development Engineer Intern",
    period: "Jan 2025 – July 2025",
    location: "Bangalore, India",
    type: "Internship",
    color: "from-blue-500 to-cyan-500",
    logo: "/google-logo.png",
    logoBg: "bg-white",
    logoSize: "w-8 h-8",
    tech: ["Java", "gRPC", "Spanner"],
    points: [
      "Designed and implemented the Hard Bundles framework in the internal product configuration system using Java, gRPC, and Spanner, enabling dependent SKUs to function as a single unit.",
      "Reduced API calls per quote by 3–5x, improved quoting efficiency by 40%, and enhanced data consistency through versioned bundle timelines and efficient reverse lookups.",
    ],
  },
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    period: "May 2024 – July 2024",
    location: "Hyderabad, India",
    type: "Internship",
    color: "from-orange-500 to-yellow-500",
    logo: "/amazon-logo.png",
    logoBg: "bg-white",
    logoSize: "w-11 h-6",
    tech: ["Java", "TypeScript", "AWS CloudWatch"],
    points: [
      "Enhanced observability of the Alexa AACS service by integrating rule-level metrics and CloudWatch dashboards.",
      "Enabled granular monitoring, reducing incident detection time by 30% and improving service reliability for large-scale Alexa operations.",
    ],
  },
];

export const projects = [
  {
    title: "TimeWise — Smart Grocery App",
    description:
      "Cross-platform grocery shopping app built with Flutter & Firebase. I owned the full frontend, Firebase backend integration, and all external API integrations (YouTube Transcript, Edamam, NewsAPI). Features ML-powered shelf life prediction with dynamic pricing — reducing food waste while saving buyers money.",
    tech: [
      "Flutter",
      "Firebase",
      "Edamam API",
      "NewsAPI",
    ],
    github: "https://github.com/Pallavibahekar/TimeWise",
    features: [
      "Built Firebase Auth — email/password + Google Sign-In with state management",
      "Health alert system — PDF health report parsed to JSON, ingredient safety comparison at checkout",
      "Edamam API for recipe recommendations with full nutritional breakdown & allergen info",
      "Real-time cart with Firestore, promo codes & discount tiers",
    ],
    color: "from-purple-500 to-pink-500",
    badge: "Flutter + Firebase",
    aiSnippet: {
      code: `import 'package:http/http.dart' as http;
import 'dart:convert';

// Edamam API integration: nutrition analysis
Future<Map<String, dynamic>?> analyzeIngredientNutrition(String ingredient) async {
  const appId = 'YOUR_EDAMAM_APP_ID';
  const appKey = 'YOUR_EDAMAM_APP_KEY';
  const endpoint = 'https://api.edamam.com/api/nutrition-details';

  try {
    final response = await http.post(
      Uri.parse('$endpoint?app_id=$appId&app_key=$appKey'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode({'ingr': [ingredient]}),
    );

    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      if (data['totalNutrients'] != null) {
        return data['totalNutrients'];
      }
    }
    print('Failed: \${response.statusCode}');
  } catch (e) {
    print('Error: $e');
  }
  return null;
}`,
      explanation:
        "NLP-powered vendor ranking system built for TimeWise. User reviews are tokenized and scored using a weighted sentiment lexicon — classifying feedback as Positive, Neutral, or Negative. Vendor rankings update dynamically based on aggregated scores, so the best-reviewed sellers always appear first.",
    },
  },
  {
    title: "AI-Powered Portfolio",
    description:
      "A modern, interactive developer portfolio built with React + Vite, featuring an NLP-powered chatbot with TF-IDF scoring, live sentiment analysis demo, and animated UI — built using AI-assisted development.",
    tech: ["ReactJS", "Vite", "Tailwind CSS", "Framer Motion", "NLP", "TF-IDF"],
    github: "https://github.com/Pallavibahekar",
    features: [
      "NLP chatbot with tokenization, stop-word filtering & TF-IDF scoring",
      "Live sentiment analysis demo (keyword-based NLP)",
      "Animated sections with Framer Motion scroll detection",
      "Glassmorphism dark theme with responsive layout",
      "AI-assisted development using GitHub Copilot",
    ],
    color: "from-cyan-500 to-blue-500",
    badge: "AI-Assisted Dev",
    aiSnippet: {
      code: `// NLP Engine — TF-IDF Intent Scoring
function nlpGetResponse(input) {
  const tokens = tokenize(input)
    .filter(t => !STOP_WORDS.has(t));

  let bestScore = 0, bestEntry = null;

  for (const entry of chatbotKnowledge) {
    const score =
      tfidfScore(tokens, entry.keywords) * 2 +
      partialScore(input, entry.keywords);
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  const confidence = Math.min(100, bestScore * 20);
  return { text: bestEntry?.response, confidence };
}`,
      explanation:
        "The chatbot NLP engine I built from scratch for this portfolio. It tokenizes user input, strips stop words, then uses TF-IDF style scoring + partial phrase matching to find the best intent. Each response includes a confidence score rendered as a progress bar. GitHub Copilot helped scaffold the tokenizer and I engineered the scoring algorithm.",
    },
  },
];

export const achievements = [
  {
    icon: "🏆",
    title: "LeetCode Knight",
    desc: "Top 5.59% globally | Max Rating: 1911 | ID: pal_2103",
  },
  {
    icon: "⭐",
    title: "CodeChef 3-Star",
    desc: "Max Rating: 1630 | ID: pal_krish",
  },
  {
    icon: "🌍",
    title: "CodeChef Global Rank 235",
    desc: "Starters 116 Division 3 (Rated) out of 4k participants",
  },
  {
    icon: "🌍",
    title: "LeetCode Global Rank 1407",
    desc: "Weekly Contest 399 out of 32k participants",
  },
  {
    icon: "💡",
    title: "LinkedIn CoachIn Mentee 2023",
    desc: "Selected as one of India's top 60 girls from 7500+ applicants",
  },
  {
    icon: "🚀",
    title: "Google Girl Hackathon 2023",
    desc: "Top 2.5% of all applicants, selected till Ideathon round",
  },
  {
    icon: "🎖️",
    title: "TechGig Code Gladiators 2024",
    desc: "Rank 308 out of 17,000+ participants",
  },
  {
    icon: "🎓",
    title: "Harvard WEAmplify Scholar 2023",
    desc: "Scholarship to attend the largest women in tech conference",
  },
  {
    icon: "🎓",
    title: "GHC Scholar 2024",
    desc: "100% scholarship to attend Grace Hopper Celebration",
  },
  {
    icon: "💻",
    title: "1000+ Problems Solved",
    desc: "Across LeetCode, CodeChef, and GeeksForGeeks",
  },
];

export const chatbotKnowledge = [
  // ── Greetings ─────────────────────────────────────────────────────────────
  {
    keywords: ["hello", "hi", "hey", "greet", "what can you do", "help"],
    response:
      "Hey there! 👋 I'm Pallavi's AI assistant. Ask me anything about her:\n• Current job & internships (Google, Amazon)\n• Projects (Timewise, Portfolio)\n• Skills, achievements, education\n• Specific tech like Hard Bundles, AACS, Spanner, CloudWatch!",
  },

  // ── Identity / General ─────────────────────────────────────────────────────
  {
    keywords: [
      "name",
      "who are you",
      "who is pallavi",
      "introduce",
      "about pallavi",
      "pallavi bahekar",
      "summary",
      "overview",
    ],
    response:
      "I'm Pallavi Bahekar's portfolio AI 👋\n\nPallavi is a Software Development Engineer at **PropertyGuru** (Bangalore), with internships at **Google** and **Amazon**. She's a B.Tech CS & AI graduate from IIIT Lucknow (CGPA 8.7), a LeetCode Knight, and a Harvard WEAmplify Scholar!",
  },

  // ── Projects Overview ─────────────────────────────────────────────────────
  {
    keywords: [
      "project",
      "projects",
      "show projects",
      "what projects",
      "her projects",
      "all projects",
      "what has she built",
      "what did she build",
      "portfolio projects",
    ],
    response:
      "**Pallavi's Projects 🚀**\n\n**1. TimeWise — Smart Grocery App**\n   Flutter + Firebase + Python/FastAPI | Final year B.Tech project\n   • Shelf-life based dynamic pricing (ML model)\n   • Health alerts from PDF medical reports\n   • Recipe suggestions via Edamam API + YouTube transcripts\n   • Sentiment analysis on vendor reviews\n\n**2. AI-Powered Portfolio (this website!)**\n   React + Vite + Tailwind + Framer Motion + Gemini 2.0 Flash\n   • Custom TF-IDF NLP engine built from scratch\n   • Gemini API with context-grounded system prompts\n   • Live sentiment analyzer demo\n\nAsk me about **TimeWise** or the **Portfolio** for deeper details!",
  },

  // ── Current Job ────────────────────────────────────────────────────────────
  {
    keywords: [
      "current job",
      "where working",
      "where does she work",
      "where is she working",
      "where does pallavi work",
      "where work",
      "she work",
      "work",
      "current company",
      "current role",
      "currently",
      "currently working",
      "working now",
      "working currently",
      "now working",
      "presently",
      "current employer",
      "what company",
      "propertyguru",
      "property guru",
      "pg",
    ],
    response:
      "Pallavi currently works as a **Software Development Engineer at PropertyGuru** 🏠 (Nov 2025 – Present, Bangalore).\n\nWhat she does:\n• Led migration of the IPP v5 listing detail endpoint from mapper-based to native v5 index — improving data accuracy and performance\n• Implemented optimized cron jobs for automated shortlist maintenance (state-based cleanup + removal of expired listings > 60 days)\n• Stack: NestJS, AWS, Kibana",
  },

  // ── Google Internship ──────────────────────────────────────────────────────
  {
    keywords: [
      "google",
      "google internship",
      "google intern",
      "google overview",
      "what did pallavi do at google",
    ],
    response:
      "At **Google** (Jan–July 2025, Bangalore) 🔵, Pallavi worked as an SDE Intern on the **Hard Bundles** project in the internal product configuration system (Ohara).\n\n**The Problem:** The system couldn't handle product dependencies — e.g., Looker (BI tool) is useless without BigQuery. Sales reps had to manually add both, causing errors.\n\n**Her Solution:**\n• Designed Hard Bundles as first-class SKUs using Java + gRPC + Spanner\n• Created BundleTimeline versioning (immutable snapshots with start_time/end_time)\n• Built runtime expansion — bundles appear as 1 SKU but components are dynamically fetched at query time\n• Designed LookupHardBundles reverse lookup API (Spanner-indexed for fast lookups)\n• Added validation: no nested bundles, regional compatibility checks\n\n**Impact:** Reduced API calls per quote by 3–5x, improved quoting efficiency by 40% 🚀",
  },
  {
    keywords: [
      "hard bundle vs sku group",
      "sku group",
      "soft bundle",
      "bundle difference",
    ],
    response:
      "**Hard Bundle vs SKU Group:**\n\n🔴 **Hard Bundle** — single indivisible SKU. Components MUST be sold together (e.g., Looker + BigQuery). Treated as one product in the system; components expanded at runtime.\n\n🟢 **SKU Group** — flexible collection for marketing (e.g., 'Web Dev Starter Pack'). Customer can buy components individually. Each item is a separate line item.\n\nPallavi built the Hard Bundle system at Google precisely because the existing system only had SKU Groups and couldn't enforce functional dependencies.",
  },
  {
    keywords: [
      "bundle timeline",
      "versioning",
      "immutability",
      "immutable",
      "start_time",
      "end_time",
    ],
    response:
      "**BundleTimeline — Immutability by Versioning (Google project):**\n\nPallavi enforced immutability through time-bound snapshots:\n• Each BundleTimeline has a `start_time` and `end_time`\n• To 'modify' a bundle → close current timeline (set end_time = now) + create a new one\n• The old record is NEVER changed — full historical audit trail is preserved\n\n**Benefits:** Historical accuracy for pricing/quoting, prevents race conditions, simplified auditing.",
  },
  {
    keywords: [
      "runtime expansion",
      "runtime population",
      "component retrieval",
      "cpv",
      "product variant",
    ],
    response:
      "**Runtime Expansion (Google Hard Bundles):**\n\nInstead of storing component data redundantly, components are fetched dynamically:\n1. Client calls GetProductVariant with bundle's variant ID\n2. System identifies it's a Hard Bundle → fetches parent product\n3. Extracts component product IDs from BundleTimeline\n4. Calls ListProductVariant API for each component\n5. Applies filters: timeline validity + region compatibility\n6. Returns paginated results (page_size + page_token)\n\nThis keeps the catalog clean — no duplication, and scales linearly with bundle size.",
  },
  {
    keywords: [
      "lookup bundles",
      "reverse lookup",
      "lookuphardbundles",
      "reverse api",
    ],
    response:
      "**LookupHardBundles Reverse Lookup API (Google):**\n\nPurpose: 'Given a component SKU, which bundles contain it?'\n\nUse cases:\n• Impact analysis — before retiring a SKU, find all affected bundles\n• Validation — prevent nested bundles (a bundle can't be a component of another)\n\nImplementation:\n• Dedicated API (not mixed into ListProducts) for clarity\n• Powered by Spanner secondary index on `component_sku_id`\n• Offset-based pagination (page_size + page_token) for large catalogs\n• Stable ordering by sku_id for deterministic pagination",
  },
  {
    keywords: [
      "spanner",
      "why spanner",
      "database google",
      "spanner vs mysql",
      "spanner vs dynamodb",
    ],
    response:
      "**Why Spanner for Google's Hard Bundles?**\n\n✅ Chosen because:\n• **Strong global consistency** (TrueTime API) — stale bundle results would cause quoting errors\n• **Horizontal scalability** — catalog has millions of products across regions\n• **Secondary indexes** on component_sku_id — turns expensive scans into fast index seeks\n• **SQL + relational model** — needed joins for timeline/region filters\n\n❌ Why not others:\n• MySQL/PostgreSQL — can't scale horizontally for global catalog\n• DynamoDB — no native SQL joins, eventual consistency by default\n• Bigtable — no relational model, would need custom timeline/region logic",
  },
  {
    keywords: ["pagination", "page_size", "page_token", "latency", "timeout"],
    response:
      "**Pagination in Google's Hard Bundles APIs:**\n\nSome bundles have hundreds of components. Without pagination → latency spikes, timeouts, client memory overload.\n\nSolution:\n• `page_size` — client controls batch size (e.g., 20-50 items), bounded workload per query\n• `page_token` — encodes last seen variant/sku_id, enables stateless resumption\n• Stable ordering by sku_id — no duplicates or gaps between pages\n\nThis ensured scalable, reliable retrieval even for very large bundles.",
  },
  {
    keywords: [
      "nested bundle",
      "bundle validation",
      "regional compatibility",
      "data integrity google",
    ],
    response:
      "**Validation Rules in Google's Hard Bundles:**\n\n1. **No Nested Bundles** — a Hard Bundle cannot be a component of another. On creation, system performs reverse lookup on each proposed component; if it's already a bundle, the request is rejected.\n\n2. **Minimum 2 Components** — a bundle with 1 item makes no sense; rejected at creation.\n\n3. **Regional Compatibility** — all components must be available in the bundle's target regions. Mismatches are blocked to prevent unfulfillable orders.",
  },
  {
    keywords: [
      "gemini bundle",
      "workspace gemini",
      "gemini workspace bundle",
      "duet ai bundle",
      "workspace starter bundle",
      "google workspace bundle",
    ],
    response:
      "**Gemini Workspace Bundle example (Google):**\n\nThe Gemini Bundle ($20K) includes:\n• Workspace Starter: 1000 seats @ $12/seat\n• Duet AI: 1000 seats @ $14/seat\n\nBuying 10 bundles = 10,000 seats of each under ONE SKU.\n\nThe Hard Bundle system Pallavi built makes this work by:\n• Treating Gemini Bundle as a single SKU for quoting\n• Auto-expanding to Workspace Starter + Duet at fulfillment time\n• Filtering region-specific variants (e.g., IN, US, GB)\n• Enabling forward and reverse lookups",
  },

  {
    keywords: [
      "google tech stack",
      "tech used google",
      "google technologies",
      "java google",
      "grpc google",
      "ohara",
      "technologies google internship",
      "tools google",
      "what technologies google",
      "google stack",
    ],
    response:
      "**Tech Stack Pallavi used at Google:**\n\n• ☕ **Java** — core service logic for the Hard Bundles Rule Engine\n• 🔗 **gRPC** — internal API communication using Protocol Buffers\n• 🌍 **Spanner** — Google's globally distributed SQL database (chosen for strong consistency + horizontal scalability)\n• 🏗️ **Ohara** — internal product configuration platform where the project lived\n• 📦 **Protocol Buffers (Protobuf)** — schema definitions for all APIs and data models",
  },
  {
    keywords: [
      "quoting system",
      "improve quoting",
      "quoting google",
      "quoting efficiency",
      "how improve google",
      "what did she do google",
      "google contribution",
      "google achievement",
    ],
    response:
      "**How Pallavi improved the quoting system at Google:**\n\n**The Problem:** Sales reps manually added dependent products (e.g., Looker + BigQuery) to every quote — causing errors, overhead, and incomplete orders.\n\n**Her Solution — Hard Bundles:**\n• Treated dependent products as a single indivisible SKU\n• Built runtime expansion: bundle appears as 1 SKU but auto-expands to components at fulfillment\n• BundleTimeline versioning — immutable snapshots so historical quotes stay accurate\n• LookupHardBundles reverse API (Spanner-indexed) for impact analysis\n• Validation: no nested bundles, region compatibility enforced at creation\n\n**Impact:**\n• ⚡ Reduced API calls per quote by **3–5x**\n• 📈 Improved quoting efficiency by **40%**\n• ❌ Eliminated entire class of incomplete-bundle ordering errors\n• 🔄 Future bundles added with **zero code changes** — fully data-driven",
  },
  {
    keywords: [
      "google problem",
      "what problem google",
      "why hard bundles",
      "looker bigquery",
      "product dependency",
    ],
    response:
      "**The Problem Pallavi solved at Google:**\n\nThe product catalog system couldn't handle dependencies between products. Example: Looker (BI tool) is completely useless without BigQuery as its data warehouse — they MUST be sold together.\n\nBefore: Sales reps manually added both products to every quote → errors, missed cross-sells, customer frustration.\n\nPallavi built the Hard Bundle system so these dependent products are treated as ONE indivisible SKU automatically.",
  },
  {
    keywords: [
      "google impact",
      "impact google internship",
      "result google",
      "api calls reduced",
      "quoting efficiency",
    ],
    response:
      "**Impact of Pallavi's Google work:**\n\n• Reduced API calls per quote by **3–5x** (components fetched once via runtime expansion instead of multiple manual lookups)\n• Improved quoting efficiency by **40%** — sales reps no longer manually configure dependencies\n• Eliminated a whole class of ordering errors (incomplete bundles)\n• Enabled future bundles to be added with zero code changes — fully data-driven",
  },
  {
    keywords: [
      "hard bundle what is",
      "what is hard bundle",
      "hard bundle definition",
      "hard bundle explain",
      "bundle sku",
    ],
    response:
      "**What is a Hard Bundle?**\n\nA Hard Bundle is a single indivisible SKU where its components are functionally dependent — they MUST be sold together.\n\nExample: Looker BI tool + BigQuery. Looker is useless without BigQuery, so they're bundled as one SKU.\n\nKey property: it looks like 1 product to the buyer/sales rep, but internally it auto-expands to multiple component SKUs at fulfillment time.",
  },
  // ── Amazon Internship ──────────────────────────────────────────────────────
  {
    keywords: [
      "amazon",
      "amazon internship",
      "amazon intern",
      "amazon sde",
      "alexa internship",
    ],
    response:
      "At **Amazon** (May–July 2024, Hyderabad) 🟠, Pallavi interned as an SDE on the **Alexa Action Control Service (AACS)**.\n\n**The Problem:** AACS uses thousands of 'Rules' (business logic) to allow/block user actions (parental controls, permissions). There was zero real-time visibility — if a rule failed, the team found out late via logs or customer complaints.\n\n**Her Solution:**\n• Integrated lightweight Java instrumentation hooks into the AACS Rule Engine\n• Each rule emits: Rule ID, Outcome (blocked/passed), Latency — published **asynchronously** to AWS CloudWatch\n• Built custom CloudWatch Dashboards ('Top 10 Blocking Rules', 'Failure Rate over Time')\n• Added log correlation (request IDs) for cross-referencing metrics + logs\n\n**Impact:** Reduced incident detection time by 30%, moved team from reactive debugging to proactive monitoring 📊",
  },
  {
    keywords: [
      "what is a rule",
      "rule in aacs",
      "aacs rule",
      "rule aacs",
      "what is rule",
      "rule in alexa",
      "rule example",
      "age restriction rule",
      "parental control",
      "aacs",
      "alexa action control",
      "rule metrics",
    ],
    response:
      "**What is a 'Rule' in Alexa AACS?**\n\nA Rule is lightweight business logic that AACS evaluates to decide whether a user action should be allowed, blocked, or modified.\n\n**Example — Age Restriction Rule:**\n• IF user profile = 'Child Profile' AND song has 'Explicit Lyric' tag\n• THEN Outcome = **Block**\n\nBefore Pallavi's work: team only knew about failures via late customer complaints.\nAfter: Real-time CloudWatch metric shows exactly how many times the Age Restriction Rule fired, blocked, or failed — instantly.",
  },
  {
    keywords: [
      "aacs architecture",
      "alexa architecture",
      "rule engine",
      "instrumentation",
      "cloudwatch dashboard",
    ],
    response:
      "**Alexa AACS Architecture (Pallavi's Amazon project):**\n\nData flow:\n1. User speaks to Alexa → NLU parses intent\n2. Request enters **AACS Rule Engine**\n3. Pallavi's instrumentation hooks fire for each rule: captures Rule ID, Outcome, Latency\n4. Events published **asynchronously** to CloudWatch (non-blocking — no added latency to Alexa responses)\n5. CloudWatch dashboards aggregate: 'Top 10 Blocking Rules', failure rates, latency trends\n\nPallavi's code sat inside the Rule Engine but was designed to be completely non-blocking.",
  },
  {
    keywords: [
      "deployment amazon",
      "cicd",
      "canary",
      "rollback",
      "safe deployment",
      "phased rollout",
    ],
    response:
      "**Amazon Deployment Process (Pallavi's project):**\n\nFully automated CI/CD pipeline:\n1. Code commit → CI triggers build + unit/integration tests\n2. Staging deploy → canary + load tests to validate metrics emitted correctly\n3. **Phased production rollout:**\n   • Phase 1: Canary (small % of servers) — monitor new metrics + existing latency SLOs\n   • Phase 2: Gradual expansion if stable\n   • Phase 3: Full fleet rollout\n\n**Safety net:** CloudWatch alarms on new metrics. If metric count drops or latency spikes → **automatic rollback** to previous stable version.",
  },
  {
    keywords: [
      "async",
      "asynchronous",
      "non blocking",
      "latency amazon",
      "performance amazon",
    ],
    response:
      "A key design principle in Pallavi's Amazon project was **non-blocking metrics publishing**.\n\nSince AACS handles millions of Alexa requests per day, any latency added to the critical path would directly affect customer experience.\n\nSolution: metrics events were published to CloudWatch **asynchronously** using the AWS SDK — the main service path was never delayed. The metrics pipeline ran in parallel, completely transparent to the user.",
  },

  {
    keywords: [
      "amazon tech stack",
      "tech used amazon",
      "java amazon",
      "typescript amazon",
      "cloudwatch amazon",
      "aws amazon",
      "technologies amazon",
      "technologies at amazon",
      "what technologies amazon",
      "tools amazon",
      "stack amazon",
      "tech amazon",
      "amazon tools",
      "amazon languages",
      "amazon frameworks",
    ],
    response:
      "**Tech Stack at Amazon (AACS):**\n\n• **Java** — AACS Rule Engine instrumentation hooks\n• **TypeScript** — supporting tooling/scripts\n• **AWS CloudWatch** — metrics collection, dashboards, alarms\n• **AWS SDK** — async metrics publishing (non-blocking)\n• **Log Correlation** — request IDs to cross-reference metrics + logs\n\nAll metrics were published asynchronously so Alexa's response latency was completely unaffected.",
  },
  {
    keywords: [
      "amazon problem",
      "what problem amazon",
      "aacs problem",
      "why cloudwatch",
      "zero visibility",
    ],
    response:
      "**The Problem Pallavi solved at Amazon:**\n\nAACS (Alexa Action Control Service) had zero real-time visibility into its Rule Engine. If a rule failed or was over-blocking users, the team only found out through customer complaints or by manually digging through logs — sometimes hours later.\n\nPallavi built a metrics pipeline that gives the team instant visibility: which rules are firing, blocking, failing, and how fast — all in real-time on CloudWatch dashboards.",
  },
  {
    keywords: [
      "amazon impact",
      "impact amazon internship",
      "result amazon",
      "30 percent",
      "incident detection",
    ],
    response:
      "**Impact of Pallavi's Amazon work:**\n\n• Reduced incident detection time by **30%**\n• Moved team from **reactive debugging** (find out after customer complaints) to **proactive monitoring** (see issues in real-time)\n• Built 'Top 10 Blocking Rules' + 'Failure Rate over Time' dashboards\n• Automatic CloudWatch alarms trigger rollback if metrics drop — zero-manual intervention needed",
  },
  {
    keywords: [
      "what is aacs",
      "aacs service",
      "alexa action control service",
      "aacs explain",
    ],
    response:
      "**What is AACS (Alexa Action Control Service)?**\n\nAACS is an Amazon microservice that decides whether a user's Alexa request should be **allowed, blocked, or modified** based on a set of Rules.\n\nExample use cases:\n• Parental controls (block explicit content for child profiles)\n• Permission checks (does user have access to this skill?)\n• Action restrictions (limit certain commands by account type)\n\nIt handles millions of Alexa requests per day — so any added latency is a serious concern.",
  },
  {
    keywords: [
      "amazon cloudwatch dashboard",
      "cloudwatch metrics",
      "top 10 blocking",
      "failure rate dashboard",
    ],
    response:
      "**CloudWatch Dashboards Pallavi built at Amazon:**\n\n• **Top 10 Blocking Rules** — shows which rules are blocking the most user actions in real-time\n• **Failure Rate over Time** — tracks rule execution failures as a time-series graph\n• **Latency per Rule** — identifies slow rules that could become bottlenecks\n\nAll dashboards update in real-time. Alarms are set so if failure rate spikes, the on-call engineer is paged immediately.",
  },

  // ── Projects ───────────────────────────────────────────────────────────────
  {
    keywords: [
      "timewise",
      "grocery app",
      "flutter app",
      "time wise",
      "btech project",
      "final year project",
      "smart grocery",
      "timewise overview",
      "timewise app",
    ],
    response:
      "**TimeWise 🛒 — BTech Final Year Project (IIIT Lucknow, May 2024)**\n\nA smart grocery shopping platform built by Pallavi + 4 teammates, supervised by Dr. Saurabh Shukla.\n\n**Tech Stack:**\n• Frontend: Flutter (cross-platform mobile)\n• Backend: Firebase (Auth + Firestore)\n• ML: MobileNet V2 (transfer learning)\n• Hosting: FastAPI + ngrok\n• APIs: YouTube Transcript API, Edamam API, NewsAPI\n\n**Key Features:**\n🔐 Email + Google Sign-In auth\n🤖 ML shelf life prediction → dynamic pricing\n🎥 YouTube recipe → auto purchase suggestions\n🍽️ Recipe recommendations (Edamam)\n🚨 Health alerts from personal health report\n⭐ Sentiment-based vendor ranking\n📰 Food news (NewsAPI)\n\nAsk about any specific feature for details!",
  },
  {
    keywords: [
      "timewise dynamic pricing",
      "shelf life prediction",
      "mobilenet timewise",
      "transfer learning timewise",
      "pricing timewise",
      "food waste",
    ],
    response:
      "**TimeWise — Shelf Life Prediction & Dynamic Pricing 🤖**\n\nThe ML core of TimeWise:\n• **Model:** MobileNet V2 pretrained on ImageNet → fine-tuned with Adam optimizer\n• **Input:** Product images → predicts shelf life (days remaining)\n• **Pricing:** Products nearing expiry get bigger discounts automatically\n• **Buyer choice:** Select shelf-life tier (e.g., 'consume within 2-3 days') = maximum discount\n• **Win-win:** Sellers reduce food waste, buyers save money on still-good food\n\nModel hosted via FastAPI + ngrok for global API access.",
  },
  {
    keywords: [
      "timewise purchase suggestions",
      "youtube transcript timewise",
      "youtube recipe timewise",
      "ingredients timewise",
      "transcript api",
    ],
    response:
      "**TimeWise — Purchase Suggestions via YouTube 🎥**\n\nUser pastes any YouTube recipe link → app auto-generates a shopping list!\n\nHow it works:\n1️⃣ User enters a YouTube recipe URL\n2️⃣ YouTube Transcript API fetches video transcript\n3️⃣ Tokenization extracts ingredient keywords\n4️⃣ App maps ingredients to available products → shopping list generated\n\nBenefit: No need to watch long recipe videos — ingredients extracted instantly!",
  },
  {
    keywords: [
      "timewise health alerts",
      "health report timewise",
      "harmful ingredients timewise",
      "health safety timewise",
    ],
    response:
      "**TimeWise — Health Alerts 🚨**\n\nPersonalized health safety at checkout:\n1. User uploads health report (PDF → converted to JSON)\n2. Report stored securely in Firebase\n3. Firebase holds safe ingredient thresholds per condition\n4. At cart/checkout: product ingredients compared against user's health profile\n5. Ingredients classified: ✅ Safe / ⚠️ Potentially Harmful / ❌ Extremely Harmful\n6. Alert shown before purchase if product conflicts with user's health data\n\nPromotes informed, health-conscious grocery shopping!",
  },
  {
    keywords: [
      "nlp model timewise",
      "nlp timewise app",
      "what nlp",
      "nlp used timewise",
      "nlp model used",
      "model used timewise",
    ],
    response:
      "**NLP in TimeWise 🧠**\n\nTimeWise uses two NLP techniques:\n\n1. **Sentiment Analysis** — Lexicon-based + ML classifier to rate vendor reviews as Positive / Neutral / Negative. Vendors are then ranked by their sentiment score.\n\n2. **Purchase Suggestions (tokenization)** — YouTube recipe transcript is tokenized to extract ingredient keywords, which are matched to grocery products.\n\nNo pre-trained NLP library was used — the sentiment model was built using a keyword lexicon + ML scoring logic.",
  },
  {
    keywords: [
      "ai features timewise",
      "ai timewise",
      "machine learning timewise",
      "what ai",
      "artificial intelligence timewise",
      "timewise ai features",
      "timewise describe",
      "describe timewise",
      "timewise application",
    ],
    response:
      "**TimeWise — AI & ML Features 🤖**\n\n**1. Shelf Life Prediction (Computer Vision / ML)**\n• MobileNet V2 pretrained on ImageNet → fine-tuned with Adam optimizer\n• Input: product photo → Output: predicted shelf life in days\n• Drives dynamic pricing — nearing-expiry products get auto-discounts\n\n**2. Sentiment Analysis (NLP)**\n• Lexicon-based + ML classifier on vendor reviews\n• Rates reviews: Positive / Neutral / Negative\n• Vendors ranked by aggregate sentiment score\n\n**3. Purchase Suggestions (NLP / Tokenization)**\n• User pastes YouTube recipe link → transcript fetched via YouTube Transcript API\n• Custom tokenization extracts ingredient keywords\n• Ingredients auto-mapped to available products → instant shopping list\n\n**4. Health Alert System (Rule-based AI)**\n• User uploads PDF health report → parsed to JSON\n• Cart ingredients matched against personal health thresholds\n• Alerts: ✅ Safe / ⚠️ Potentially Harmful / ❌ Extremely Harmful\n\n**5. Recipe Recommendations (Edamam API)**\n• Nutritional analysis + personalised recipe suggestions based on cart items",
  },
  {
    keywords: [
      "timewise sentiment analysis",
      "vendor rating timewise",
      "review timewise",
      "vendor ranking timewise",
      "nlp timewise",
      "sentiment analysis timewise",
    ],
    response:
      "**TimeWise — Vendor Rating & Sentiment Analysis ⭐**\n\nUsers rate vendors (1–5 stars) and write text reviews.\n\nSentiment analysis pipeline:\n• NLP classifies each review: Positive / Negative / Neutral\n• Techniques: Lexicon-based + ML approaches\n• Vendor sentiment scores aggregated over all reviews\n• **Vendors ranked by sentiment score** — best vendors shown first\n• Creates transparency and accountability in the marketplace",
  },
  {
    keywords: [
      "timewise recipe recommendation",
      "edamam timewise",
      "nutrition timewise",
      "food news timewise",
      "newsapi timewise",
    ],
    response:
      "**TimeWise — Recipe Recommendations & Food News 🍽️📰**\n\n**Recipes (Edamam API):**\n• Enter ingredients → get personalised recipes\n• Full nutritional analysis: calories, macronutrients, allergens\n• Helps make healthier grocery choices\n\n**Food News (NewsAPI):**\n• Latest food industry news & safety alerts\n• Paginated for easy browsing\n• Keeps users informed about grocery trends",
  },
  {
    keywords: [
      "timewise team",
      "timewise teammates",
      "who built timewise",
      "timewise supervisor",
      "iiit lucknow project",
    ],
    response:
      "**TimeWise Team — IIIT Lucknow (May 2024) 👩‍💻👨‍💻**\n\n• Shraddha Gulati (LCS2021021)\n• **Pallavi Bahekar (LCI2021041)**\n• Snehil Gupta (LCS2021019)\n• Aditya Kadam (LCS2021002)\n• Samarth Sharma (LCI2021010)\n\n📚 Guide: Dr. Saurabh Shukla, Dept. of CS, IIIT Lucknow\n📅 Submitted: May 2024 as BTech final year project",
  },
  {
    keywords: [
      "timewise authentication",
      "timewise login",
      "firebase auth timewise",
      "google signin timewise",
    ],
    response:
      "**TimeWise — Authentication:**\n\n• Email + password login with Firebase Authentication\n• Email verification sent on registration\n• Google Sign-In integration (OAuth)\n• Secure credential storage via Firebase Auth\n• Profile updates + password reset supported",
  },
  {
    keywords: [
      "timewise seller",
      "seller dashboard timewise",
      "vendor timewise",
      "seller features",
    ],
    response:
      "**TimeWise — Seller Dashboard:**\n\n• Access to ML shelf life prediction model (upload product image → get predicted shelf life)\n• Inventory management via Firebase Firestore (add/edit/remove products)\n• Real-time sales analytics\n• Pricing is dynamically set based on ML predictions — sellers don't need to manually discount",
  },
  {
    keywords: [
      "timewise tech stack",
      "tech used timewise",
      "flutter why",
      "firebase why",
      "fastapi timewise",
      "why flutter",
    ],
    response:
      "**TimeWise — Tech Choices & Why:**\n\n• **Flutter** — single codebase for Android + iOS, fast UI development\n• **Firebase** — real-time Firestore DB + built-in Auth, no separate backend server needed\n• **MobileNet V2** — pretrained on ImageNet, transfer learning = high accuracy with small dataset\n• **FastAPI + ngrok** — lightweight Python server to expose ML model as a global API\n• **Edamam API** — rich recipe + nutrition database, no need to build from scratch\n• **YouTube Transcript API** — free, reliable ingredient extraction from any recipe video",
  },
  {
    keywords: [
      "timewise firebase",
      "firestore timewise",
      "why firebase timewise",
      "database timewise",
    ],
    response:
      "**Why Firebase in TimeWise?**\n\nFirebase was chosen because:\n• **Firestore** — real-time sync for product prices, inventory, cart\n• **Firebase Auth** — handles email + Google Sign-In out of the box\n• **Safe thresholds** for health alerts stored in Firestore (easy to update without code changes)\n• **No separate backend server** — Firebase acts as BaaS (Backend-as-a-Service), reducing complexity for a student project",
  },
  {
    keywords: [
      "timewise ml model",
      "mobilenet timewise",
      "why mobilenet",
      "transfer learning timewise",
      "shelf life model",
    ],
    response:
      "**Why MobileNet V2 for TimeWise shelf life prediction?**\n\nMobileNet V2 was chosen because:\n• **Pretrained on ImageNet** — already knows visual features, needs less training data\n• **Transfer learning** — only fine-tuned top layers → fast training with small grocery image dataset\n• **Lightweight** — designed for mobile/embedded devices, fast inference\n• **Adam optimizer** used for fine-tuning — adaptive learning rate, converges faster\n\nInput: product image → Output: predicted shelf life in days",
  },
  {
    keywords: [
      "timewise buyer",
      "buyer dashboard timewise",
      "cart timewise",
      "buyer features",
    ],
    response:
      "**TimeWise — Buyer Dashboard Features:**\n\n• Product details: descriptions, prices, ratings, nutritional content\n• Cart: add/remove items, promo codes, dynamic pricing tiers\n• Choose shelf-life tier (e.g., 'consume in 2-3 days' = max discount)\n• Recipe recommendations based on cart items (Edamam API)\n• Purchase suggestions from YouTube recipe links\n• Health alerts if any cart item conflicts with health profile\n• Reviews + vendor ratings",
  },
  {
    keywords: [
      "timewise challenges",
      "challenges timewise",
      "difficult timewise",
      "problems timewise",
    ],
    response:
      "**Challenges in building TimeWise:**\n\n• **ML model accuracy** — limited grocery image data; solved with transfer learning (MobileNet V2 on ImageNet)\n• **Real-time pricing** — syncing ML predictions with live Firestore prices without latency\n• **Health alert matching** — parsing PDF health reports into structured JSON + matching against ingredient database\n• **YouTube transcript extraction** — transcripts are unstructured; needed custom tokenization to extract just ingredient words\n• **Sentiment accuracy** — building a lexicon-based classifier without a labelled dataset",
  },
  {
    keywords: [
      "portfolio project",
      "this website",
      "chatbot project",
      "tfidf",
      "nlp chatbot",
      "how chatbot works",
      "how does this work",
      "gemini",
      "this portfolio",
      "portfolio website",
      "portfolio ai",
      "portfolio ai features",
      "ai features portfolio",
      "portfolio features",
      "portfolio chatbot",
      "portfolio nlp",
      "portfolio machine learning",
      "portfolio tech",
      "portfolio built",
      "ai",
      "features",
      "artificial intelligence",
      "this app",
      "this site",
    ],
    response:
      "**This AI-Powered Portfolio 🤖**\n\nBuilt by Pallavi using ReactJS + Vite + Tailwind CSS + Framer Motion + Gemini 2.0 Flash.\n\n**AI Features:**\n\n**1. Gemini 2.0 Flash Chatbot (you're talking to it!)**\n• Context-grounded — all portfolio facts injected into Gemini's system prompt\n• Gemini answers questions about Pallavi's experience, projects & achievements\n\n**2. Custom TF-IDF NLP Engine (fallback)**\n• Built from scratch in JavaScript — no external NLP library\n• Tokenizes input, strips stop words, scores against knowledge base\n• Partial phrase matching + confidence score on every response\n\n**3. Live Sentiment Analyzer (NLP Demo tab)**\n• Type any sentence → get Positive / Neutral / Negative classification\n• Keyword-based lexicon scoring (the same technique used in TimeWise)\n\n**Tech stack:** React 19, Vite, Tailwind CSS v4, Framer Motion, Gemini API, EmailJS",
  },

  // ── Interests ─────────────────────────────────────────────────────────────
  {
    keywords: [
      "interests",
      "interest",
      "interested",
      "passion",
      "passionate",
      "technology interests",
      "areas of interest",
      "what does she like",
      "what is she passionate about",
    ],
    response:
      "**Pallavi's Interests in Technology 💡**\n\n• 🌐 **Web Development** — Full-stack development (ReactJS, NestJS, NodeJS)\n• 🏆 **Competitive Programming** — LeetCode Knight, CodeChef 3-Star, 1000+ problems solved\n• 🤖 **Machine Learning** — Transfer learning, NLP, model deployment (TimeWise project)\n• 🧠 **NLP / AI** — Built custom TF-IDF engine, Gemini API integration for this portfolio\n\nShe's particularly passionate about combining AI with real-world product engineering.",
  },

  // ── Cloud & Monitoring Tools ───────────────────────────────────────────────
  {
    keywords: [
      "cloud services",
      "monitoring tools",
      "cloud tools",
      "aws",
      "cloudwatch",
      "kibana",
      "spanner",
      "firebase",
      "cloud",
      "monitoring",
      "observability",
      "databases",
      "database tools",
    ],
    response:
      "**Cloud & Monitoring Tools Pallavi has used:**\n\n☁️ **AWS CloudWatch** — Metrics dashboards + alarms at Amazon (AACS rule metrics)\n📊 **Kibana** — Log monitoring + observability at PropertyGuru\n🌍 **Google Cloud Spanner** — Globally distributed SQL DB at Google (Hard Bundles)\n🔥 **Firebase / Firestore** — Real-time database + auth for TimeWise\n🖥️ **AWS (general)** — Cloud infrastructure at PropertyGuru\n\nFull tools list: Git, MySQL, MongoDB, AWS, Kibana, gRPC, Spanner, Firebase, Unix",
  },

  // ── Soft Skills ────────────────────────────────────────────────────────────
  {
    keywords: [
      "soft skills",
      "communication",
      "teamwork",
      "leadership skills",
      "interpersonal",
      "collaboration",
      "management skills",
      "people skills",
    ],
    response:
      "**Pallavi's Soft Skills 🤝**\n\n• **Communication** — Weekly syncs with Google manager to align on design decisions; presented project designs to senior engineers\n• **Ownership** — Drove all Hard Bundle design decisions independently at Google; took end-to-end ownership\n• **Collaboration** — Worked with 4 teammates + faculty supervisor on TimeWise; cross-team coordination at PropertyGuru\n• **Adaptability** — Navigated changing requirements at Google by structuring code to be extensible\n• **Problem Solving** — Proactively identified edge cases (nested bundles, region mismatches) before they became production issues\n• **Mentorship mindset** — LinkedIn CoachIn Mentee (top 60 of 7,500 applicants); GHC Scholar",
  },

  // ── Full Tech Stack ────────────────────────────────────────────────────────
  {
    keywords: [
      "skills",
      "tech stack",
      "languages",
      "frameworks",
      "tools",
      "technologies",
      "what does she know",
      "expertise",
      "specialisation",
      "specialization",
      "programming languages",
      "all skills",
    ],
    response:
      "**Pallavi's Full Tech Stack:**\n\n🔷 **Languages:** Java, Python, C, C++, JavaScript, SQL\n⚛️ **Frameworks:** ReactJS, NodeJS, NestJS, Flutter, Bootstrap\n🛠️ **Tools:** Git, MySQL, MongoDB, AWS, Kibana, gRPC, Spanner, Firebase, Unix\n\n💡 **Interests:** Web Dev, Competitive Programming, Machine Learning, NLP\n\nBy company:\n• PropertyGuru → NestJS, AWS, Kibana\n• Google → Java, gRPC, Spanner\n• Amazon → Java, TypeScript, CloudWatch",
  },

  // ── Education: Degree ─────────────────────────────────────────────────────
  {
    keywords: [
      "education",
      "college",
      "iiit",
      "iiit lucknow",
      "degree",
      "university",
      "cgpa",
      "gpa",
      "btech",
      "b.tech",
      "undergraduate",
      "graduation",
      "where did she study",
      "where study",
      "studied computer science",
      "computer science degree",
      "cs degree",
      "which university",
      "which college",
      "attended university",
      "attended college",
    ],
    response:
      "**Pallavi's Degree 🎓**\n\n**IIIT Lucknow** — B.Tech in Computer Science & AI\nCGPA: **8.7** | Dec 2021 – July 2025\n\nCourses: DBMS, Web Development, OOP, Data Structures & Algorithms, Computer Networks",
  },

  // ── Education: School / Higher Secondary ──────────────────────────────────
  {
    keywords: [
      "school",
      "higher secondary",
      "class 12",
      "12th",
      "class 10",
      "10th",
      "secondary education",
      "high school",
      "progressive science",
      "vivek mandir",
      "junior college",
      "hsc",
      "ssc",
    ],
    response:
      "**Pallavi's School Education 📚**\n\n🏫 **Progressive Science Junior College** — Class 12 (Higher Secondary)\n   Score: **87.8%** | Math: 99/100\n\n🏫 **Vivek Mandir School** — Class 10\n   Score: **93.4%** | Math: 100/100",
  },

  // ── Education: Courses ────────────────────────────────────────────────────
  {
    keywords: [
      "courses",
      "course",
      "subjects",
      "curriculum",
      "coursework",
      "what did she study",
      "studied",
      "syllabus",
      "courses completed",
      "completed courses",
      "which courses",
      "what courses",
      "during degree",
      "during btech",
      "during college",
      "academic subjects",
    ],
    response:
      "**Courses Pallavi completed at IIIT Lucknow (B.Tech CS & AI):**\n\n• 📊 DBMS (Database Management Systems)\n• 🌐 Web Development\n• 🧱 Object-Oriented Programming (OOP)\n• 🔗 Data Structures & Algorithms (DSA)\n• 🖧 Computer Networks\n\nCGPA: **8.7** | Batch: Dec 2021 – July 2025",
  },

  // ── Education: Equinox / POR at IIIT ─────────────────────────────────────
  {
    keywords: [
      "equinox",
      "utkrish",
      "festival",
      "college fest",
      "iiit lucknow club",
      "college club",
      "por college",
      "student council",
      "event management",
      "college event",
      "college role",
    ],
    response:
      "**Pallavi's Role at IIIT Lucknow — Utkrish Club 🎖️**\n\nPallavi was an active member of the **Utkrish Club** at IIIT Lucknow, which organises **Equinox** — the college's annual technical and cultural festival.\n\nHer responsibilities included:\n• Event planning and coordination for Equinox\n• Managing logistics for technical events and competitions\n• Coordinating with participants, sponsors, and fellow organizers\n\nThis role developed her team management, communication, and leadership skills outside of academics.",
  },

  // ── Achievements overview ─────────────────────────────────────────────────
  {
    keywords: [
      "achievement",
      "award",
      "awards",
      "accomplishment",
      "recognition",
      "all achievements",
      "scholarship",
      "scholarships",
      "what did pallavi achieve",
    ],
    response:
      "**Pallavi's Achievements 🏆**\n\n• LeetCode Knight — Top 5.59% globally | Rating: 1911\n• CodeChef 3-Star — Rating: 1630\n• CodeChef Global Rank 235 (Starters 116, Div 3)\n• LeetCode Global Rank 1407 (Weekly Contest 399, 32k participants)\n• Harvard WEAmplify Scholar 2023\n• GHC Scholar 2024 (100% scholarship, Grace Hopper Celebration)\n• Google Girl Hackathon 2023 — Top 2.5%, reached Ideathon round\n• LinkedIn CoachIn Mentee 2023 — Top 60 girls from 7500+ applicants\n• TechGig Code Gladiators 2024 — Rank 308 / 17,000+\n• 1000+ problems solved across LeetCode, CodeChef, GFG",
  },

  // ── LinkedIn CoachIn ──────────────────────────────────────────────────────
  {
    keywords: [
      "coachin",
      "coach in",
      "linkedin coachin",
      "linkedin coaching",
      "mentee",
      "linkedin mentee",
      "linkedin program",
      "linkedin internship",
      "linkedin selection",
    ],
    response:
      "**LinkedIn CoachIn Mentee 2023 💡**\n\nPallavi was selected as one of **India's top 60 girls** out of **7,500+ applicants** for the LinkedIn CoachIn program.\n\nCoachIn is a competitive LinkedIn mentorship initiative that pairs exceptional young women in tech with industry leaders and professionals. Being selected in the top 60 out of 7,500+ applicants (~0.8% acceptance rate) reflects Pallavi's strong academic and extracurricular profile.\n\nThe program provided mentorship, career coaching, and networking with senior professionals in the tech industry.",
  },

  // ── Harvard WEAmplify Scholar ─────────────────────────────────────────────
  {
    keywords: [
      "harvard",
      "weamplify",
      "we amplify",
      "harvard scholar",
      "harvard scholarship",
      "harvard women",
      "women in tech conference",
      "harvard program",
    ],
    response:
      "**Harvard WEAmplify Scholar 2023 🎓**\n\nPallavi received the **Harvard WEAmplify Scholarship** in 2023 — a scholarship to attend one of the largest women in tech conferences.\n\nWEAmplify is a Harvard-affiliated program recognising outstanding women in technology and engineering. Being named a scholar meant Pallavi was selected among a competitive pool of applicants from across India based on her technical achievements, leadership, and contributions to the tech community.",
  },

  // ── GHC Scholar ───────────────────────────────────────────────────────────
  {
    keywords: [
      "ghc",
      "grace hopper",
      "ghc scholar",
      "grace hopper celebration",
      "ghc 2024",
      "ghc scholarship",
      "grace hopper 2024",
      "ghc conference",
    ],
    response:
      "**GHC Scholar 2024 🎓**\n\nPallavi was awarded a **100% scholarship** to attend the **Grace Hopper Celebration (GHC) 2024** — the world's largest gathering of women technologists, hosted by AnitaB.org.\n\nGHC Scholars are selected based on their technical excellence, leadership, and impact. The conference brings together tens of thousands of engineers from Google, Amazon, Microsoft, and other top companies. This scholarship recognises Pallavi as a standout young woman in tech.",
  },

  // ── Competitive Coding ────────────────────────────────────────────────────
  {
    keywords: [
      "leetcode",
      "codechef",
      "competitive coding",
      "competitive programming",
      "competitive",
      "programming achievements",
      "coding achievements",
      "knight",
      "rating",
      "coding rank",
      "leetcode rating",
      "codechef rating",
      "leetcode rank",
      "codechef rank",
      "1911",
      "1630",
      "pal_2103",
      "pal_krish",
      "rank",
      "ranked",
    ],
    response:
      "**Competitive Programming 🏆**\n\n**LeetCode:**\n• Rank: **Knight** (Top 5.59% globally)\n• Max Rating: **1911**\n• Global Rank: **1407** in Weekly Contest 399 (32k participants)\n• Profile: pal_2103\n\n**CodeChef:**\n• Rating: **3-Star** | Max Rating: **1630**\n• Global Rank: **235** in Starters 116 Div 3 (4k participants)\n• Profile: pal_krish\n\n📊 **1000+ problems solved** across LeetCode, CodeChef, and GeeksForGeeks",
  },

  // ── Problems Solved ───────────────────────────────────────────────────────
  {
    keywords: [
      "problems solved",
      "1000 problems",
      "problem solving",
      "dsa",
      "data structures",
      "algorithms",
      "geeksforgeeks",
      "gfg",
      "coding practice",
      "how many problems",
    ],
    response:
      "**Problem Solving 💻**\n\nPallavi has solved **1000+ coding problems** across:\n• 🟡 **LeetCode** — Knight rank (Rating 1911), Global Rank 1407\n• 🟤 **CodeChef** — 3-Star (Rating 1630), Global Rank 235\n• 🟢 **GeeksForGeeks** — Active contributor\n\nShe specialises in DSA, dynamic programming, graphs, and system design problems.",
  },

  // ── Hackathons & Conferences ──────────────────────────────────────────────
  {
    keywords: [
      "hackathon",
      "hackathons",
      "google girl hackathon",
      "techgig",
      "code gladiators",
      "ideathon",
      "competition",
      "contest",
      "google hackathon",
      "conference",
      "conferences",
      "tech conference",
      "attended",
      "notable",
      "events",
      "participated",
    ],
    response:
      "**Hackathons & Tech Conferences 🚀**\n\n**Hackathons:**\n• **Google Girl Hackathon 2023** — Top 2.5% of all applicants, selected till the **Ideathon round**\n• **TechGig Code Gladiators 2024** — Rank **308 out of 17,000+** participants\n\n**Conferences (as Scholar):**\n• **Grace Hopper Celebration (GHC) 2024** — 100% scholarship, world's largest women in tech event\n• **Harvard WEAmplify 2023** — Scholar at one of the largest women in tech conferences\n\nAsk me about GHC or Harvard for more details!",
  },

  // ── Contact ───────────────────────────────────────────────────────────────
  {
    keywords: [
      "contact",
      "email",
      "email address",
      "email id",
      "what is her email",
      "what email",
      "reach",
      "hire",
      "github",
      "github handle",
      "github profile",
      "linkedin handle",
      "linkedin profile",
      "connect",
      "phone",
      "phone number",
      "mobile",
      "mobile number",
      "number",
      "social",
      "profiles",
      "links",
      "handle",
      "address",
      "how to contact",
      "how to reach",
    ],
    response:
      "**Contact Pallavi:**\n\n📧 bahekarpallavi883@gmail.com\n💼 linkedin.com/in/pallavibahekar\n🐙 github.com/Pallavibahekar\n🧩 LeetCode: pal_2103\n🍳 CodeChef: pal_krish\n📱 +91-957-9501-024",
  },

  // ── Extracurricular / POR ─────────────────────────────────────────────────
  {
    keywords: [
      "roles of responsibility",
      "extracurricular",
      "por",
      "position of responsibility",
      "leadership",
      "college activities",
      "college roles",
      "club",
      "volunteer",
      "community",
      "during college",
      "college involvement",
    ],
    response:
      "**Pallavi's Roles & Extracurriculars 🎖️**\n\n• **LinkedIn CoachIn Mentee 2023** — Selected as one of India's top 60 girls from 7,500+ applicants for LinkedIn's mentorship program\n• **Harvard WEAmplify Scholar 2023** — Scholarship to attend the largest women in tech conference\n• **GHC Scholar 2024** — 100% scholarship to attend Grace Hopper Celebration\n• **Google Girl Hackathon 2023** — Top 2.5%, reached Ideathon round\n• **Competitive Programming** — LeetCode Knight (Top 5.59%), 1000+ problems solved\n\nPallavi was actively involved in tech community initiatives and women-in-tech programs throughout her degree at IIIT Lucknow.",
  },

  // ── Out-of-domain fallback ─────────────────────────────────────────────────
  {
    keywords: [
      "weather",
      "news",
      "cricket",
      "movie",
      "recipe",
      "stock",
      "sports",
      "joke",
      "capital of",
      "translate",
      "meaning of",
      "define",
      "what is javascript",
      "what is python",
      "general knowledge",
    ],
    response:
      "I'm Pallavi's **portfolio-specific** AI — I only know about Pallavi! 😊\n\nI can answer questions about:\n• 💼 Her experience at Google, Amazon, PropertyGuru\n• 🚀 Her projects (TimeWise, this Portfolio)\n• 🏆 Her achievements (LeetCode Knight, GHC Scholar, Harvard)\n• 🎓 Her education at IIIT Lucknow\n• 🛠️ Her tech skills and interests\n\nFor general questions, try Google — I'm just a portfolio bot!",
  },

  // ── Experience overview ────────────────────────────────────────────────────
  {
    keywords: [
      "experience",
      "work history",
      "internship",
      "all companies",
      "career",
    ],
    response:
      "**Pallavi's Experience:**\n\n🟢 **PropertyGuru** — SDE (Nov 2025–Present)\n   NestJS, AWS, Kibana | IPP v5 migration, cron jobs\n\n🔵 **Google** — SDE Intern (Jan–July 2025)\n   Java, gRPC, Spanner | Hard Bundles framework\n\n🟠 **Amazon** — SDE Intern (May–July 2024)\n   Java, TypeScript, CloudWatch | Alexa AACS rule metrics\n\nAsk me about any specific company for deeper details!",
  },
];
