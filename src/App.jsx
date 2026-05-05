import './css/globals.css';
import { useEffect, useRef, useState } from 'react';
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

const ARTICLES_STORAGE_KEY = 'rss-feed.articles';
const THEME_STORAGE_KEY = 'rss-feed.theme';

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

const normalizeStoredArticle = (article) => ({
  ...article,
  isRead: Boolean(article?.isRead),
  isSaved: Boolean(article?.isSaved),
  publishedMinutesAgo: typeof article?.publishedMinutesAgo === 'number'
    ? article.publishedMinutesAgo
    : toMinutes(article?.timeAgo ?? '0 m'),
});

const getStoredArticles = () => {
  if (typeof window === 'undefined') {
    return initialArticles;
  }

  try {
    const rawStoredArticles = window.localStorage.getItem(ARTICLES_STORAGE_KEY);

    if (!rawStoredArticles) {
      return initialArticles;
    }

    const parsedArticles = JSON.parse(rawStoredArticles);

    if (!Array.isArray(parsedArticles)) {
      return initialArticles;
    }

    const initialArticlesByKey = new Map(initialArticles.map((article) => [article.articleKey, article]));

    const mergedStoredArticles = parsedArticles
      .filter((article) => article && typeof article === 'object' && typeof article.articleKey === 'string')
      .map((storedArticle) => {
        const baseArticle = initialArticlesByKey.get(storedArticle.articleKey);
        const normalizedStoredArticle = normalizeStoredArticle(storedArticle);

        return baseArticle
          ? { ...baseArticle, ...normalizedStoredArticle }
          : normalizedStoredArticle;
      });

    const missingSeedArticles = initialArticles.filter(
      (article) => !mergedStoredArticles.some((storedArticle) => storedArticle.articleKey === article.articleKey),
    );

    return [...mergedStoredArticles, ...missingSeedArticles];
  } catch {
    return initialArticles;
  }
};

const getStoredTheme = () => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  return storedTheme === 'dark' ? 'dark' : 'light';
};

function App() {
  const isFirstThemeSyncRef = useRef(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState(getStoredArticles);
  const [theme, setTheme] = useState(getStoredTheme);

  useEffect(() => {
    window.localStorage.setItem(ARTICLES_STORAGE_KEY, JSON.stringify(articles));
  }, [articles]);

  useEffect(() => {
    const root = document.documentElement;

    root.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);

    if (isFirstThemeSyncRef.current) {
      isFirstThemeSyncRef.current = false;
      return undefined;
    }

    root.classList.add('theme-transitioning');

    const timeoutId = window.setTimeout(() => {
      root.classList.remove('theme-transitioning');
    }, 520);

    return () => {
      window.clearTimeout(timeoutId);
      root.classList.remove('theme-transitioning');
    };
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />
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