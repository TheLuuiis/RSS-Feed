import ArticleFeed from '../components/ArticleFeed';
import { useOutletContext } from 'react-router-dom';

const Design = () => {
  const { articles, refreshing, incomingArticleKey, isFilterAnimating, searchQuery } = useOutletContext();

  return (
    <ArticleFeed
      articles={articles}
      refreshing={refreshing}
      incomingArticleKey={incomingArticleKey}
      isFilterAnimating={isFilterAnimating}
      searchQuery={searchQuery}
    />
  );
};

export default Design;