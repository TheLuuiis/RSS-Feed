import ArticleFeed from '../components/ArticleFeed';
import { frontendArticles } from '../data/articles';

const Frontend = () => {
  return <ArticleFeed articles={frontendArticles} />;
};

export default Frontend;
