import ArticleFeed from '../components/ArticleFeed';
import { useOutletContext } from 'react-router-dom';

const Design = () => {
  const {
    articles,
    refreshing,
    incomingArticleKey,
    searchQuery,
    onToggleSaved,
    emptyState,
  } = useOutletContext();

  return (
    <ArticleFeed
      articles={articles}
      refreshing={refreshing}
      incomingArticleKey={incomingArticleKey}
      searchQuery={searchQuery}
      onToggleSaved={onToggleSaved}
      emptyState={emptyState}
    />
  );
};

export default Design;