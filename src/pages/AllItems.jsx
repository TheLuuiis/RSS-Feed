import ArticleFeed from '../components/ArticleFeed';
import { useOutletContext } from 'react-router-dom';

const AllItems = () => {
  const { articles, refreshing, incomingArticleKey } = useOutletContext();

  return <ArticleFeed articles={articles} refreshing={refreshing} incomingArticleKey={incomingArticleKey} />;
};

export default AllItems;