// Central content source so every page stays consistent and easy to edit.

export const brand = {
  name: "Kinetiq",
  tagline: "Intelligent systems that compound growth.",
  description:
    "Kinetiq is an AI-first growth and technology studio. We design, build, and run the intelligent systems that turn scattered effort into measurable, compounding revenue.",
  email: "hello@kinetiq.studio",
  location: "Singapore · Remote across Asia",
};

export const stats = [
  { value: "3,000+", label: "Projects shipped" },
  { value: "20+", label: "Years in digital growth" },
  { value: "8", label: "Industries served" },
  { value: "24/7", label: "Systems monitored" },
];

export type Service = {
  index: string;
  title: string;
  summary: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "AI & Software Development",
    summary:
      "Custom AI applications, generative interfaces, chatbots, and agentic systems that do real work — not demos.",
    capabilities: [
      "Agentic AI & workflow agents",
      "Generative AI & LLM apps",
      "Conversational assistants",
      "Model integration & fine-tuning",
    ],
  },
  {
    index: "02",
    title: "Web & App Development",
    summary:
      "Fast, resilient websites, mobile apps, and enterprise platforms engineered to scale with the business.",
    capabilities: [
      "Marketing & product websites",
      "iOS & Android apps",
      "Enterprise & e-commerce platforms",
      "APIs & systems integration",
    ],
  },
  {
    index: "03",
    title: "UI/UX Design",
    summary:
      "Interface and experience design that earns trust in the first three seconds and converts on the fourth.",
    capabilities: [
      "Product & website design",
      "Prototyping & design systems",
      "Experience optimization",
      "Accessibility & usability audits",
    ],
  },
  {
    index: "04",
    title: "Digital Marketing",
    summary:
      "Performance marketing wired to revenue, not vanity metrics — every channel measured against pipeline.",
    capabilities: [
      "SEO & content strategy",
      "PPC & paid social",
      "Conversion rate optimization",
      "Lifecycle & retention",
    ],
  },
  {
    index: "05",
    title: "Emerging Tech & Automation",
    summary:
      "SaaS products, workflow automation, and technical consulting that remove manual drag from the org.",
    capabilities: [
      "SaaS product development",
      "Workflow automation",
      "Data pipelines & dashboards",
      "Technical consulting",
    ],
  },
  {
    index: "06",
    title: "Proprietary Products",
    summary:
      "In-house tools that give clients an unfair advantage — packaged, tested, and ready to deploy.",
    capabilities: [
      "Eco Audit — technical & growth audits",
      "Convo — AI conversation engine",
      "Rank — AI search & SEO intelligence",
      "CRM — AI-native customer engine",
    ],
  },
];

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
