import '../css/components/ArticleFeed.css';

const ArticleFeed = ({ articles }) => {
  return (
    <div className="article-feed">
      {articles.map((article) => (
        <article className="article-card" key={`${article.tag}-${article.id}`}>
          <div className="article-meta">
            <div
              className="article-avatar"
              style={{ backgroundColor: article.avatarColor }}
            >
              {article.avatar}
            </div>

            <h4>{article.source}</h4>
            <span>{article.timeAgo}</span>
          </div>

          <h2>{article.title}</h2>
          <p>{article.description}</p>

          <div
            className="article-tag"
            style={{
              backgroundColor: article.backgroundTag,
              color: article.tagColor,
            }}
          >
            {article.tag}
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleFeed;