// Central content source so every page stays consistent and easy to edit.

export const brand = {
  name: "DXD",
  tagline: "Intelligent systems that compound growth.",
  description:
    "DXD is an AI-first growth and technology studio. We design, build, and run the intelligent systems that turn scattered effort into measurable, compounding revenue.",
  email: "hello@dxd.studio",
  location: "Singapore · Remote across Asia",
};

export const stats = [
  { value: "3,000+", label: "Projects shipped" },
  { value: "20+", label: "Years in digital growth" },
  { value: "8", label: "Industries served" },
  { value: "24/7", label: "Systems monitored" },
];

export type SubService = {
  slug: string;
  title: string;
  blurb: string;
  deliverables: string[];
};

export type ServiceCategory = {
  slug: string;
  index: string;
  title: string;
  icon: string; // key into the Icon component
  summary: string;
  subServices: SubService[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "ai-software-development",
    index: "01",
    title: "AI & Intelligent Software Development",
    icon: "ai",
    summary:
      "Custom AI applications, generative interfaces, and agentic systems that do real work — not demos.",
    subServices: [
      {
        slug: "custom-ai-software-development",
        title: "Custom AI Software Development",
        blurb:
          "Bespoke AI systems built around your data and workflows — from model selection to production deployment.",
        deliverables: [
          "Problem framing & data assessment",
          "Model selection, training & evaluation",
          "Production deployment & monitoring",
        ],
      },
      {
        slug: "generative-ai-llm-development",
        title: "Generative AI & LLM Development",
        blurb:
          "LLM-powered products — retrieval, summarization, drafting, and search — grounded in your own content.",
        deliverables: [
          "Retrieval-augmented generation (RAG)",
          "Prompt & context engineering",
          "Guardrails, evals & cost tuning",
        ],
      },
      {
        slug: "ai-chatbot-conversational-agents",
        title: "AI Chatbot & Conversational Agents Development",
        blurb:
          "Assistants that resolve real requests across web, app, and messaging — not scripted FAQs.",
        deliverables: [
          "Conversation design & intent modeling",
          "Channel integration (web / WhatsApp / Slack)",
          "Human handoff & analytics",
        ],
      },
      {
        slug: "agentic-ai-development-integration",
        title: "Agentic AI Development & AI Integration Services",
        blurb:
          "Autonomous agents wired into your tools to execute multi-step work end to end.",
        deliverables: [
          "Tool & API integration",
          "Multi-step agent orchestration",
          "Observability & safe rollout",
        ],
      },
      {
        slug: "ai-consulting-strategy",
        title: "AI Consulting & Strategy",
        blurb:
          "A pragmatic AI roadmap that targets the highest-ROI use cases first.",
        deliverables: [
          "Opportunity & readiness audit",
          "Prioritized use-case roadmap",
          "Build-vs-buy & vendor guidance",
        ],
      },
    ],
  },
  {
    slug: "software-app-development",
    index: "02",
    title: "Software & App Development",
    icon: "code",
    summary:
      "Fast, resilient websites, mobile apps, and enterprise platforms engineered to scale with the business.",
    subServices: [
      {
        slug: "custom-web-application-development",
        title: "Custom Web Application Development",
        blurb:
          "Fast, secure web apps engineered around your business logic — not off-the-shelf constraints.",
        deliverables: [
          "Architecture & API design",
          "Full-stack build & testing",
          "Performance & security hardening",
        ],
      },
      {
        slug: "mobile-app-development",
        title: "Mobile App Development (iOS, Android & Cross-Platform)",
        blurb:
          "Native and cross-platform apps that feel first-class on every device.",
        deliverables: [
          "iOS, Android & cross-platform builds",
          "Offline, push & deep-linking",
          "App Store & Play Store launch",
        ],
      },
      {
        slug: "enterprise-software-development",
        title: "Enterprise Software Development",
        blurb:
          "Internal platforms and integrations that replace spreadsheets and manual operations.",
        deliverables: [
          "Systems & data integration",
          "Role-based access & audit trails",
          "SLA-backed support",
        ],
      },
      {
        slug: "ecommerce-platform-development",
        title: "E-commerce & Digital Platform Development",
        blurb:
          "Storefronts and platforms tuned for conversion, throughput, and scale.",
        deliverables: [
          "Headless & platform builds",
          "Payment & fulfilment integration",
          "Conversion-ready analytics",
        ],
      },
    ],
  },
  {
    slug: "ui-ux-experience-design",
    index: "03",
    title: "UI/UX & Experience Design",
    icon: "design",
    summary:
      "Interface and experience design that earns trust in the first three seconds and converts on the fourth.",
    subServices: [
      {
        slug: "website-ui-ux-design",
        title: "Website UI/UX Design",
        blurb:
          "Interfaces that earn trust fast and convert without friction.",
        deliverables: [
          "UX research & user flows",
          "High-fidelity UI design",
          "Design system & developer handoff",
        ],
      },
      {
        slug: "prototyping-interaction-design",
        title: "Prototyping & Interaction Design",
        blurb:
          "Clickable prototypes that validate ideas before a line of code is written.",
        deliverables: [
          "Wireframes & interactive prototypes",
          "Micro-interaction & motion design",
          "Usability testing",
        ],
      },
      {
        slug: "product-experience-optimization",
        title: "Product Experience Optimization",
        blurb:
          "Continuous UX improvement driven by real user behaviour, not opinions.",
        deliverables: [
          "Behavioural & funnel analysis",
          "A/B & usability testing",
          "Iterative UX refinement",
        ],
      },
    ],
  },
  {
    slug: "digital-marketing-growth",
    index: "04",
    title: "Digital Marketing & Growth",
    icon: "growth",
    summary:
      "Performance marketing wired to revenue, not vanity metrics — every channel measured against pipeline.",
    subServices: [
      {
        slug: "search-engine-optimization",
        title: "Search Engine Optimization (SEO)",
        blurb:
          "Technical, content, and authority work that compounds organic traffic over time.",
        deliverables: [
          "Technical & on-page SEO",
          "Content & keyword strategy",
          "Link & authority building",
        ],
      },
      {
        slug: "social-media-marketing",
        title: "Social Media Marketing (SMM)",
        blurb:
          "Channel strategy and content that build audience and pipeline in equal measure.",
        deliverables: [
          "Content calendar & production",
          "Community management",
          "Paid social amplification",
        ],
      },
      {
        slug: "ppc-paid-advertising",
        title: "PPC & Paid Advertising Management (Google, Meta, LinkedIn)",
        blurb:
          "Performance campaigns across every major network, measured against pipeline.",
        deliverables: [
          "Campaign strategy & setup",
          "Creative & audience testing",
          "Bid & budget optimization",
        ],
      },
      {
        slug: "content-marketing-brand-strategy",
        title: "Content Marketing & Brand Strategy",
        blurb:
          "Positioning and content that make the brand memorable and searchable.",
        deliverables: [
          "Messaging & positioning",
          "Editorial & content production",
          "Distribution strategy",
        ],
      },
      {
        slug: "conversion-rate-optimization",
        title: "Conversion Rate Optimization (CRO)",
        blurb:
          "Systematic testing that turns the traffic you already have into more revenue.",
        deliverables: [
          "Funnel & heuristic audit",
          "Hypothesis-led A/B testing",
          "Landing-page optimization",
        ],
      },
      {
        slug: "online-reputation-management",
        title: "Online Reputation Management (ORM)",
        blurb:
          "Monitor, protect, and improve how the brand shows up everywhere it matters.",
        deliverables: [
          "Review & mention monitoring",
          "Response & escalation playbooks",
          "Reputation recovery",
        ],
      },
      {
        slug: "lead-generation-funnel-development",
        title: "Lead Generation & Funnel Development",
        blurb:
          "End-to-end funnels that capture, qualify, and route demand automatically.",
        deliverables: [
          "Offer & landing-page design",
          "Lead capture & scoring",
          "Nurture & automation",
        ],
      },
      {
        slug: "analytics-reporting-dashboards",
        title: "Analytics, Reporting & Marketing Dashboards",
        blurb:
          "One source of truth from ad spend all the way to revenue.",
        deliverables: [
          "Tracking & attribution setup",
          "Dashboards & reporting",
          "Insight & recommendation cadence",
        ],
      },
    ],
  },
  {
    slug: "emerging-technology",
    index: "05",
    title: "Emerging & Advanced Technology",
    icon: "spark",
    summary:
      "SaaS products, workflow automation, and technical consulting that remove manual drag from the org.",
    subServices: [
      {
        slug: "saas-product-development",
        title: "SaaS Product Development",
        blurb:
          "From MVP to multi-tenant SaaS, built to ship fast and iterate faster.",
        deliverables: [
          "Product & MVP scoping",
          "Multi-tenant architecture",
          "Billing & analytics",
        ],
      },
      {
        slug: "automation-workflow-engineering",
        title: "Automation & Workflow Engineering",
        blurb:
          "Remove manual drag by automating the repetitive work between your tools.",
        deliverables: [
          "Process mapping",
          "Integration & automation build",
          "Monitoring & maintenance",
        ],
      },
    ],
  },
  {
    slug: "support-optimization",
    index: "06",
    title: "Support & Optimization",
    icon: "wrench",
    summary:
      "Maintenance, performance, security, and consulting that keep systems compounding after launch.",
    subServices: [
      {
        slug: "application-maintenance-support",
        title: "Application Maintenance & Support",
        blurb:
          "Keep everything fast, secure, and up to date long after launch day.",
        deliverables: [
          "Proactive monitoring",
          "Bug fixes & updates",
          "Tiered SLA support",
        ],
      },
      {
        slug: "performance-optimization",
        title: "Performance Optimization",
        blurb:
          "Diagnose and fix the speed, scale, and cost bottlenecks holding you back.",
        deliverables: [
          "Profiling & audits",
          "Frontend & backend tuning",
          "Infra & cost optimization",
        ],
      },
      {
        slug: "security-compliance-consulting",
        title: "Security & Compliance Consulting",
        blurb:
          "Assess and harden against risk, mapped to the standards you need to meet.",
        deliverables: [
          "Security assessment",
          "Hardening & remediation",
          "Compliance guidance",
        ],
      },
      {
        slug: "technical-consulting-outsourcing",
        title: "Technical Consulting & Outsourcing",
        blurb:
          "Senior engineering capacity and direction, available on demand.",
        deliverables: [
          "Architecture & tech strategy",
          "Dedicated senior teams",
          "Delivery management",
        ],
      },
    ],
  },
];

// ---- Helpers ----
export const allSubServices = serviceCategories.flatMap((c) =>
  c.subServices.map((s) => ({ ...s, category: c }))
);

export function getSubService(slug: string) {
  return allSubServices.find((s) => s.slug === slug);
}

export const industries = [
  "D2C & Fashion",
  "Healthcare",
  "Real Estate",
  "Manufacturing",
  "Hospitality",
  "Education",
  "B2B SaaS",
  "Fintech",
];

export const approach = [
  {
    step: "01",
    title: "Diagnose",
    body: "We audit the funnel, the stack, and the data. No engagement starts until we know exactly where the leverage is.",
  },
  {
    step: "02",
    title: "Architect",
    body: "We design the system — brand, product, and growth loops — as one connected machine, not disconnected campaigns.",
  },
  {
    step: "03",
    title: "Build",
    body: "Small senior teams ship in weeks, not quarters, wiring AI into the parts of the business that actually move revenue.",
  },
  {
    step: "04",
    title: "Compound",
    body: "We instrument everything, then tune relentlessly so results accelerate month over month instead of plateauing.",
  },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
