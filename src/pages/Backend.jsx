import ArticleFeed from "../components/ArticleFeed";

const backendArticles = [
  {
    id: 1,
    avatar: "I",
    avatarColor: "#2563EB",
    source: "InfoQ",
    timeAgo: "2h ago",
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
    title: "Safe Deployments at Scale: How Progressive Rollouts Reduce Production Risk",
    description:
      "Shipping continuously does not have to mean accepting constant risk. Progressive rollouts, health checks, feature flags, and automated rollback rules let teams release backend changes with more confidence while containing blast radius when things go wrong.",
    tag: "Backend & DevOps",
    backgroundTag: "rgba(245, 200, 130, 0.45)",
    tagColor: "#F59E0B"
  },
];

const Backend = () => {
    return (  
        <ArticleFeed articles={backendArticles}/>
    );
}
 
export default Backend;