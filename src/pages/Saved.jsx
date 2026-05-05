import ArticleFeed from '../components/ArticleFeed';
import { useOutletContext } from 'react-router-dom';

const Saved = () => {
  const {
    articles,
    refreshing,
    incomingArticleKey,
    searchQuery,
    onToggleSaved,
    emptyState,
    layoutMode,
  } = useOutletContext();

  return (
    <ArticleFeed
      articles={articles}
      refreshing={refreshing}
      incomingArticleKey={incomingArticleKey}
      searchQuery={searchQuery}
      onToggleSaved={onToggleSaved}
      emptyState={emptyState}
      layoutMode={layoutMode}
    />
  );
};

export default Saved;