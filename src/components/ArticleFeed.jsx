import '../css/components/ArticleFeed.css';

const ArticleFeed = ({
  articles,
  refreshing = false,
  incomingArticleKey = null,
  searchQuery = '',
  onToggleSaved,
  emptyState,
  layoutMode = 'list',
}) => {
  const isFeaturedGrid = layoutMode === 'featured-grid';

  const renderArticleCard = (article, isFeatured = false) => (
    <article
      className={[
        'article-card',
        article.isRead ? 'article-card--read' : '',
        article.isSaved ? 'article-card--saved' : '',
        article.articleKey === incomingArticleKey ? 'article-card--incoming' : '',
        isFeatured ? 'article-card--featured' : '',
      ].filter(Boolean).join(' ')}
      key={article.articleKey ?? `${article.tag}-${article.id}`}
    >
      <div className="article-card__top">
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

        <button
          type="button"
          className={article.isSaved ? 'article-save-button article-save-button--active' : 'article-save-button'}
          onClick={() => onToggleSaved(article.articleKey)}
          aria-pressed={article.isSaved}
          aria-label={article.isSaved ? `Remove ${article.title} from saved articles` : `Save ${article.title}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2H6c-1.1 0-2 .9-2 2v17c0 .36.19.69.5.87s.69.18 1 0l6.5-3.72 6.5 3.72c.15.09.32.13.5.13s.35-.04.5-.13c.31-.18.5-.51.5-.87V4c0-1.1-.9-2-2-2m0 16.28-5.5-3.14a.98.98 0 0 0-.99 0L6 18.28V4h12z"></path>
          </svg>
          <span>{article.isSaved ? 'Saved' : 'Save'}</span>
        </button>
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
  );

  return (
    <div
      className={[
        'article-feed',
        refreshing ? 'article-feed--refreshing' : '',
        isFeaturedGrid ? 'article-feed--featured-layout' : '',
      ].filter(Boolean).join(' ')}
    >
      {articles.length > 0 ? (
        isFeaturedGrid ? (
          <div className="article-feed__featured-grid">
            {articles.map((article) => renderArticleCard(article, true))}
          </div>
        ) : (
          <div className="article-feed__list">
            {articles.map((article) => renderArticleCard(article))}
          </div>
        )
      ) : (
        <div className="article-feed__empty-state">
          <p>{emptyState?.title ?? `No articles match "${searchQuery}".`}</p>
          <span>{emptyState?.description ?? 'Try a title, tag or category name.'}</span>
        </div>
      )}
    </div>
  );
};

export default ArticleFeed;