import ArticleFeed from '../components/ArticleFeed';
import { useOutletContext } from 'react-router-dom';

const Design = () => {
  const { articles, refreshing, incomingArticleKey } = useOutletContext();

  return <ArticleFeed articles={articles} refreshing={refreshing} incomingArticleKey={incomingArticleKey} />;
};

export default Design;