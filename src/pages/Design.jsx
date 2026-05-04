import ArticleFeed from '../components/ArticleFeed';

const designArticles = [
  {
    id: 1,
    avatar: "F",
    avatarColor: "#EC4899",
    source: "Figma",
    timeAgo: "3h ago",
    title: "Design Systems That Scale Without Slowing Down Product Teams",
    description:
      "A mature design system should help teams move faster, not create more process. This article explores how to balance consistency, flexibility, and governance so designers and developers can ship UI changes without friction.",
    tag: "Design",
  },
  {
    id: 2,
    avatar: "D",
    avatarColor: "#F59E0B",
    source: "Dribbble",
    timeAgo: "6h ago",
    title: "Why Visual Hierarchy Still Breaks in Modern Dashboard Interfaces",
    description:
      "Even polished dashboards often fail to guide the eye correctly. Learn how spacing, typography, contrast, and grouping decisions can either strengthen or completely weaken the reading flow of complex interfaces.",
    tag: "Design",
  },
  {
    id: 3,
    avatar: "B",
    avatarColor: "#3B82F6",
    source: "Behance",
    timeAgo: "9h ago",
    title: "Microinteractions That Make Products Feel Alive",
    description:
      "Subtle motion can reinforce feedback, guide attention, and create emotional connection, but only when used with intention. This piece breaks down practical animation patterns that improve usability instead of distracting users.",
    tag: "Design",
  },
  {
    id: 4,
    avatar: "N",
    avatarColor: "#10B981",
    source: "Nielsen Norman Group",
    timeAgo: "14h ago",
    title: "The UX Cost of Over-Designed Interfaces",
    description:
      "Clean visuals do not automatically create good experiences. Overly decorative layouts often increase cognitive load, hide important actions, and make navigation harder. Here's how to identify when aesthetics start hurting usability.",
    tag: "Design",
  },
  {
    id: 5,
    avatar: "A",
    avatarColor: "#8B5CF6",
    source: "Awwwards",
    timeAgo: "1d ago",
    title: "Bold Editorial Layouts Are Coming Back to Web Design",
    description:
      "Editorial-inspired interfaces are reshaping landing pages, portfolios, and digital magazines. The trend mixes oversized typography, intentional asymmetry, and layered composition to create more memorable browsing experiences.",
    tag: "Design",
  },
];

const Design = () => {
  return <ArticleFeed articles={designArticles} />;
};

export default Design;