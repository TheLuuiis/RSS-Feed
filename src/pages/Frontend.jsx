import ArticleFeed from '../components/ArticleFeed';
import { useOutletContext } from 'react-router-dom';

const Frontend = () => {
  const { articles, refreshing, incomingArticleKey } = useOutletContext();

  return <ArticleFeed articles={articles} refreshing={refreshing} incomingArticleKey={incomingArticleKey} />;
};

export default Frontend;
