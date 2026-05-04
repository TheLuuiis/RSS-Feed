import '../css/pages/Frontend.css';

const frontendArticles = [
  {
    id: 1,
    avatar: "J",
    avatarColor: "#8B5CF6",
    source: "Josh Comeau",
    timeAgo: "5h ago",
    title: "The Surprising Truth About CSS Container Queries",
    description:
      "Container queries have been available for a while now, but most developers are still using them like media queries with a different syntax. There's a much more powerful mental model that unlocks truly reusable components.",
    tagFront: "Frontend",
  },
  {
    id: 2,
    avatar: "C",
    avatarColor: "#F59E0B",
    source: "CSS-Tricks",
    timeAgo: "8h ago",
    title: "Mastering the Art of CSS Grid Subgrid: Real-World Layouts",
    description:
      "Subgrid has finally landed in all major browsers, but few developers are taking advantage of it. Here's a deep dive into how subgrid solves alignment problems that were previously impossible without JavaScript hacks.",
    tagFront: "Frontend",
  },
  {
    id: 3,
    avatar: "W",
    avatarColor: "#3B82F6",
    source: "web.dev",
    timeAgo: "11h ago",
    title: "View Transitions API: Smooth Page Animations Without a Framework",
    description:
      "The View Transitions API is now stable across browsers and changes how we think about navigation animations. Learn how to build fluid, cinematic transitions with just a few lines of native browser code.",
    tagFront: "Frontend",
  },
  {
    id: 4,
    avatar: "K",
    avatarColor: "#3B82F6",
    source: "Kent C. Dodds",
    timeAgo: "1d ago",
    title: "Why I Stopped Using useEffect for Data Fetching (And What I Do Instead)",
    description:
      "After years of seeing the same mistakes repeated across codebases, it's time to talk about why useEffect is the wrong tool for data fetching and how modern patterns like React Query or server components solve this properly.",
    tagFront: "Frontend",
  },
  {
    id: 5,
    avatar: "S",
    avatarColor: "#EF4444",
    source: "Smashing Magazine",
    timeAgo: "2h ago",
    title: "Practical Guide To Designing For Colorblind Users",
    description:
      "Color blindness affects roughly 8% of men and 0.5% of women worldwide. Yet most interfaces rely heavily on color to convey meaning, status, and hierarchy. Here's how to design interfaces that work for everyone without sacrificing visual richness.",
    tagFront: "Frontend",
  },
];

const Frontend = () => {
  return (
    <div className="container__frontend">
      {frontendArticles.map((article) => (
        <div className="card__frontend" key={article.id}>
          <div className="date__front">
            <div
              className="avatar"
              style={{ backgroundColor: article.avatarColor }}
            >
              {article.avatar}
            </div>

            <h4>{article.source}</h4>
            <span>{article.timeAgo}</span>
          </div>
          <h2>{article.title}</h2>
          <p>{article.description}</p>

          <div className="tag">
            {article.tagFront}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Frontend;
