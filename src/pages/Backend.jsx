import ArticleFeed from '../components/ArticleFeed';
import { backendArticles } from '../data/articles';

const Backend = () => {
  return <ArticleFeed articles={backendArticles} />;
};
 
export default Backend;