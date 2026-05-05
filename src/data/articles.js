export const frontendArticles = [
  {
    id: 1,
    avatar: "J",
    avatarColor: "#8B5CF6",
    source: "Josh Comeau",
    timeAgo: "5h ago",
    shortTitle: "Container Queries",
    title: "The Surprising Truth About CSS Container Queries",
    description:
      "Container queries have been available for a while now, but most developers are still using them like media queries with a different syntax. There's a much more powerful mental model that unlocks truly reusable components.",
    tag: "Frontend",
    backgroundTag: "rgba(59, 130, 246, 0.12)",
    tagColor: "#2563eb"
  },
  {
    id: 2,
    avatar: "C",
    avatarColor: "#F59E0B",
    source: "CSS-Tricks",
    timeAgo: "8h ago",
    shortTitle: "Grid Subgrid",
    title: "Mastering the Art of CSS Grid Subgrid: Real-World Layouts",
    description:
      "Subgrid has finally landed in all major browsers, but few developers are taking advantage of it. Here's a deep dive into how subgrid solves alignment problems that were previously impossible without JavaScript hacks.",
    tag: "Frontend",
    backgroundTag: "rgba(59, 130, 246, 0.12)",
    tagColor: "#2563eb"
  },
  {
    id: 3,
    avatar: "W",
    avatarColor: "#3B82F6",
    source: "web.dev",
    timeAgo: "11h ago",
    shortTitle: "View Transitions",
    title: "View Transitions API: Smooth Page Animations Without a Framework",
    description:
      "The View Transitions API is now stable across browsers and changes how we think about navigation animations. Learn how to build fluid, cinematic transitions with just a few lines of native browser code.",
    tag: "Frontend",
    backgroundTag: "rgba(59, 130, 246, 0.12)",
    tagColor: "#2563eb"
  },
  {
    id: 4,
    avatar: "K",
    avatarColor: "#3B82F6",
    source: "Kent C. Dodds",
    timeAgo: "1d ago",
    shortTitle: "Data Fetching",
    title: "Why I Stopped Using useEffect for Data Fetching (And What I Do Instead)",
    description:
      "After years of seeing the same mistakes repeated across codebases, it's time to talk about why useEffect is the wrong tool for data fetching and how modern patterns like React Query or server components solve this properly.",
    tag: "Frontend",
    backgroundTag: "rgba(59, 130, 246, 0.12)",
    tagColor: "#2563eb"
  },
  {
    id: 5,
    avatar: "S",
    avatarColor: "#EF4444",
    source: "Smashing Magazine",
    timeAgo: "2h ago",
    shortTitle: "Colorblind Design",
    title: "Practical Guide To Designing For Colorblind Users",
    description:
      "Color blindness affects roughly 8% of men and 0.5% of women worldwide. Yet most interfaces rely heavily on color to convey meaning, status, and hierarchy. Here's how to design interfaces that work for everyone without sacrificing visual richness.",
    tag: "Frontend",
    backgroundTag: "rgba(59, 130, 246, 0.12)",
    tagColor: "#2563eb"
  },
];

export const designArticles = [
  {
    id: 1,
    avatar: "F",
    avatarColor: "#EC4899",
    source: "Figma",
    timeAgo: "3h ago",
    shortTitle: "Systems Escalables",
    title: "Design Systems That Scale Without Slowing Down Product Teams",
    description:
      "A mature design system should help teams move faster, not create more process. This article explores how to balance consistency, flexibility, and governance so designers and developers can ship UI changes without friction.",
    tag: "Design",
    backgroundTag: "rgb(235, 198, 221)",
    tagColor: "#e15c9f"
  },
  {
    id: 2,
    avatar: "D",
    avatarColor: "#F59E0B",
    source: "Dribbble",
    timeAgo: "6h ago",
    shortTitle: "Jerarquía Visual",
    title: "Why Visual Hierarchy Still Breaks in Modern Dashboard Interfaces",
    description:
      "Even polished dashboards often fail to guide the eye correctly. Learn how spacing, typography, contrast, and grouping decisions can either strengthen or completely weaken the reading flow of complex interfaces.",
    tag: "Design",
    backgroundTag: "rgb(235, 198, 221)",
    tagColor: "#e15c9f"
  },
  {
    id: 3,
    avatar: "B",
    avatarColor: "#3B82F6",
    source: "Behance",
    timeAgo: "9h ago",
    shortTitle: "Microinteracciones Vivas",
    title: "Microinteractions That Make Products Feel Alive",
    description:
      "Subtle motion can reinforce feedback, guide attention, and create emotional connection, but only when used with intention. This piece breaks down practical animation patterns that improve usability instead of distracting users.",
    tag: "Design",
    backgroundTag: "rgb(235, 198, 221)",
    tagColor: "#e15c9f"
  },
  {
    id: 4,
    avatar: "N",
    avatarColor: "#10B981",
    source: "Nielsen Norman Group",
    timeAgo: "14h ago",
    shortTitle: "Diseño Excesivo",
    title: "The UX Cost of Over-Designed Interfaces",
    description:
      "Clean visuals do not automatically create good experiences. Overly decorative layouts often increase cognitive load, hide important actions, and make navigation harder. Here's how to identify when aesthetics start hurting usability.",
    tag: "Design",
    backgroundTag: "rgb(235, 198, 221)",
    tagColor: "#e15c9f"
  },
  {
    id: 5,
    avatar: "A",
    avatarColor: "#8B5CF6",
    source: "Awwwards",
    timeAgo: "1d ago",
    shortTitle: "Editorial Web",
    title: "Bold Editorial Layouts Are Coming Back to Web Design",
    description:
      "Editorial-inspired interfaces are reshaping landing pages, portfolios, and digital magazines. The trend mixes oversized typography, intentional asymmetry, and layered composition to create more memorable browsing experiences.",
    tag: "Design",
    backgroundTag: "rgb(235, 198, 221)",
    tagColor: "#e15c9f"
  },
];

export const backendArticles = [
  {
    id: 1,
    avatar: "I",
    avatarColor: "#2563EB",
    source: "InfoQ",
    timeAgo: "2h ago",
    shortTitle: "Backends Eventos",
    title: "Designing Event-Driven Backends Without Creating Debugging Nightmares",
    description:
      "Event-driven systems can scale cleanly, but they also introduce hidden coupling, duplicate processing, and tracing complexity. This article explains how to design reliable event flows with clear ownership, observability, and failure recovery in mind.",
    tag: "Backend & DevOps",
    backgroundTag: "rgba(245, 200, 130, 0.45)",
    tagColor: "#F59E0B"
  },
  {
    id: 2,
    avatar: "D",
    avatarColor: "#0EA5E9",
    source: "Docker",
    timeAgo: "5h ago",
    shortTitle: "Entornos Locales",
    title: "Why Fast Local Environments Matter More Than Perfect CI Pipelines",
    description:
      "Teams often invest heavily in CI while ignoring slow, fragile local setups. Learn how lightweight containers, seeded databases, and reproducible configs reduce onboarding time and help engineers catch integration issues before code ever reaches the pipeline.",
    tag: "Backend & DevOps",
    backgroundTag: "rgba(245, 200, 130, 0.45)",
    tagColor: "#F59E0B"
  },
  {
    id: 3,
    avatar: "A",
    avatarColor: "#F59E0B",
    source: "AWS Architecture Blog",
    timeAgo: "8h ago",
    shortTitle: "Colas Distribuidas",
    title: "The Hidden Cost of Overusing Queues in Distributed Systems",
    description:
      "Queues are powerful for smoothing spikes and decoupling services, but they are not a universal fix. This piece explores the operational tradeoffs behind retries, dead-letter queues, visibility timeouts, and the latency that teams often underestimate.",
    tag: "Backend & DevOps",
    backgroundTag: "rgba(245, 200, 130, 0.45)",
    tagColor: "#F59E0B"
  },
  {
    id: 4,
    avatar: "C",
    avatarColor: "#8B5CF6",
    source: "CNCF",
    timeAgo: "12h ago",
    shortTitle: "Observabilidad Real",
    title: "Observability Is Not Dashboards: Building Systems You Can Actually Operate",
    description:
      "Pretty charts alone do not make production systems understandable. The real goal is actionable telemetry across logs, metrics, and traces, with alerts tied to user impact. Here's how strong observability reduces incident time and improves engineering decisions.",
    tag: "Backend & DevOps",
    backgroundTag: "rgba(245, 200, 130, 0.45)",
    tagColor: "#F59E0B"
  },
  {
    id: 5,
    avatar: "S",
    avatarColor: "#EF4444",
    source: "Stripe Engineering",
    timeAgo: "1d ago",
    shortTitle: "Despliegues Seguros",
    title: "Safe Deployments at Scale: How Progressive Rollouts Reduce Production Risk",
    description:
      "Shipping continuously does not have to mean accepting constant risk. Progressive rollouts, health checks, feature flags, and automated rollback rules let teams release backend changes with more confidence while containing blast radius when things go wrong.",
    tag: "Backend & DevOps",
    backgroundTag: "rgba(245, 200, 130, 0.45)",
    tagColor: "#F59E0B"
  },
];