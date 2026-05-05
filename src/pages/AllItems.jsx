import ArticleFeed from '../components/ArticleFeed';
import { useOutletContext } from 'react-router-dom';

const AllItems = () => {
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

export default AllItems;