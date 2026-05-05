import ArticleFeed from '../components/ArticleFeed';
import { useOutletContext } from 'react-router-dom';

const Frontend = () => {
  const { articles, refreshing } = useOutletContext();

  return <ArticleFeed articles={articles} refreshing={refreshing} />;
};

export default Frontend;
