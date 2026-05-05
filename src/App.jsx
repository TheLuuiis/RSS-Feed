import './css/globals.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import AllItems from './pages/AllItems';
import Frontend from './pages/Frontend';
import Design from './pages/Design';
import Backend from './pages/Backend';
import Saved from './pages/Saved';
import {
  backendArticles,
  designArticles,
  frontendArticles,
} from './data/articles';

const toMinutes = (timeAgo) => {
  const [rawAmount = '0', rawUnit = 'm'] = timeAgo.split(' ');
  const amount = Number.parseInt(rawAmount, 10);

  if (Number.isNaN(amount)) {
    return Number.MAX_SAFE_INTEGER;
  }

  if (rawUnit.startsWith('d')) {
    return amount * 24 * 60;
  }

  if (rawUnit.startsWith('h')) {
    return amount * 60;
  }

  return amount;
};

const buildSectionArticles = (items, section) =>
  items.map((article) => ({
    ...article,
    articleKey: `${section}-${article.id}`,
    section,
    isRead: false,
    isSaved: false,
    publishedMinutesAgo: toMinutes(article.timeAgo),
  }));

const initialArticles = [
  ...buildSectionArticles(frontendArticles, 'frontend'),
  ...buildSectionArticles(designArticles, 'design'),
  ...buildSectionArticles(backendArticles, 'backend'),
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState(initialArticles);

  return (
    <div className="app">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <div className="container">
        <Sidebar articles={articles} />

        <Routes>
          <Route
            path="/"
            element={<Main searchQuery={searchQuery} articles={articles} setArticles={setArticles} />}
          >
            <Route index element={<AllItems />} />
            <Route path="frontend" element={<Frontend />} />
            <Route path="design" element={<Design />} />
            <Route path="backend" element={<Backend />} />
            <Route path="saved" element={<Saved />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;