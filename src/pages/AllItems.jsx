import ArticleFeed from '../components/ArticleFeed';
import {
  backendArticles,
  designArticles,
  frontendArticles,
} from '../data/articles';

const allArticles = [
  ...frontendArticles,
  ...designArticles,
  ...backendArticles,
];

const AllItems = () => {
  return <ArticleFeed articles={allArticles} />;
};

export default AllItems;