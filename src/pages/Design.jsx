import ArticleFeed from '../components/ArticleFeed';
import { useOutletContext } from 'react-router-dom';

const Design = () => {
  const { articles, refreshing } = useOutletContext();

  return <ArticleFeed articles={articles} refreshing={refreshing} />;
};

export default Design;