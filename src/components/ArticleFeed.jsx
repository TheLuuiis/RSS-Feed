import '../css/components/ArticleFeed.css';

const ArticleFeed = ({ articles, refreshing = false, incomingArticleKey = null }) => {
  return (
    <div className={refreshing ? 'article-feed article-feed--refreshing' : 'article-feed'}>
      {articles.map((article) => (
        <article
          className={[
            'article-card',
            article.isRead ? 'article-card--read' : '',
            article.articleKey === incomingArticleKey ? 'article-card--incoming' : '',
          ].filter(Boolean).join(' ')}
          key={article.articleKey ?? `${article.tag}-${article.id}`}
        >
          <div className="article-meta">
            <div
              className="article-avatar"
              style={{ backgroundColor: article.avatarColor }}
            >
              {article.avatar}
            </div>

            <h4>{article.source}</h4>
            <span>{article.timeAgo}</span>
            <span className={article.isRead ? 'article-status article-status--read' : 'article-status'}>
              {article.isRead ? 'Read' : 'Unread'}
            </span>
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