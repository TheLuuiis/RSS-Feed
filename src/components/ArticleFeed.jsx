import '../css/components/ArticleFeed.css';

const ArticleFeed = ({
  articles,
  refreshing = false,
  incomingArticleKey = null,
  isFilterAnimating = false,
  searchQuery = '',
}) => {
  return (
    <div
      className={[
        'article-feed',
        refreshing ? 'article-feed--refreshing' : '',
        isFilterAnimating ? 'article-feed--filtering' : '',
      ].filter(Boolean).join(' ')}
    >
      {articles.length > 0 ? articles.map((article) => (
        <article
          className={[
            'article-card',
            article.isRead ? 'article-card--read' : '',
            article.articleKey === incomingArticleKey ? 'article-card--incoming' : '',
            isFilterAnimating ? 'article-card--filtering' : '',
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
      )) : (
        <div className="article-feed__empty-state">
          <p>No articles match "{searchQuery}".</p>
          <span>Try a title, tag or category name.</span>
        </div>
      )}
    </div>
  );
};

export default ArticleFeed;