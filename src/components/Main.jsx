import '../css/components/Main.css';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
    backendArticles,
    designArticles,
    frontendArticles,
} from '../data/articles';

const articleGenerators = {
    frontend: {
        sources: ['React Digest', 'Frontend Weekly', 'CSS Weekly', 'web.dev', 'Smashing Magazine'],
        titles: [
            'Modern CSS Patterns for Adaptive Components',
            'Why Design Tokens Need Runtime Context',
            'Building Faster Interfaces With Streaming UI',
            'The New Rules of Layout Composition in React',
            'Small Animation Systems That Improve Readability',
        ],
        descriptions: [
            'A compact guide to layout and component decisions that keep interfaces flexible as more content and states are introduced.',
            'Token systems break down when they ignore context. This piece explores a practical approach for responsive, state-aware UI styling.',
            'Streaming interface updates are no longer only for data-heavy apps. Here is how teams are using them to make products feel immediate.',
            'Reusable UI needs more than components. Learn how structure, motion, and content order combine to reduce fragile page layouts.',
            'Intentional motion can support scanning and hierarchy without turning the interface into noise. These patterns focus on clarity first.',
        ],
        avatarColor: '#3B82F6',
        backgroundTag: 'rgba(59, 130, 246, 0.12)',
        tagColor: '#2563eb',
        tag: 'Frontend',
    },
    design: {
        sources: ['Figma', 'Awwwards', 'Design Systems Weekly', 'Behance', 'Dribbble'],
        titles: [
            'Editorial Interfaces Are Reshaping Product Design',
            'How Strong Layout Rhythm Changes Dashboard UX',
            'Design Reviews That Catch Visual Debt Early',
            'Using Motion to Clarify Dense Product Screens',
            'The Case for More Expressive Product Typography',
        ],
        descriptions: [
            'More teams are borrowing from editorial composition to create stronger hierarchy, pacing, and recall across digital products.',
            'Spacing rhythm is often the missing system in dashboards. This article shows how it can clean up complex, high-density screens.',
            'Visual debt tends to accumulate quietly. Learn a lightweight review approach that catches misalignment before it spreads.',
            'Motion should resolve uncertainty, not decorate the interface. These patterns make state changes easier to follow at a glance.',
            'Typography is being used as structure again, not just styling. Here is how teams are pushing type further without losing usability.',
        ],
        avatarColor: '#EC4899',
        backgroundTag: 'rgb(235, 198, 221)',
        tagColor: '#e15c9f',
        tag: 'Design',
    },
    backend: {
        sources: ['InfoQ', 'Docker', 'CNCF', 'AWS Architecture Blog', 'Stripe Engineering'],
        titles: [
            'The Operational Cost of Hidden Service Coupling',
            'Faster Feedback Loops for Containerized Teams',
            'What Reliable Rollouts Look Like in 2026',
            'Observability Workflows That Engineers Actually Use',
            'Rethinking Queue Usage in Latency-Sensitive Systems',
        ],
        descriptions: [
            'Scaling services is easier than understanding them. This piece breaks down the coupling patterns that quietly slow delivery down.',
            'Local developer experience has become an operational concern. Teams with faster container workflows catch failures much earlier.',
            'Progressive rollout strategies keep getting sharper. Here is what modern release pipelines do to reduce blast radius in practice.',
            'Telemetry only helps if engineers can act on it quickly. These workflow patterns turn logs, traces, and alerts into decisions.',
            'Queues solve real pressure problems, but overuse creates latency and debugging cost that many teams underestimate until too late.',
        ],
        avatarColor: '#F59E0B',
        backgroundTag: 'rgba(245, 200, 130, 0.45)',
        tagColor: '#F59E0B',
        tag: 'Backend & DevOps',
    },
};

const sectionKeys = ['frontend', 'design', 'backend'];

const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];

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
        publishedMinutesAgo: toMinutes(article.timeAgo),
    }));

const initialArticles = [
    ...buildSectionArticles(frontendArticles, 'frontend'),
    ...buildSectionArticles(designArticles, 'design'),
    ...buildSectionArticles(backendArticles, 'backend'),
];

const createLiveArticle = () => {
    const section = getRandomItem(sectionKeys);
    const config = articleGenerators[section];
    const title = getRandomItem(config.titles);
    const source = getRandomItem(config.sources);

    return {
        articleKey: `${section}-live-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
        id: Date.now(),
        avatar: source.charAt(0).toUpperCase(),
        avatarColor: config.avatarColor,
        source,
        timeAgo: 'now',
        shortTitle: title,
        title,
        description: getRandomItem(config.descriptions),
        tag: config.tag,
        backgroundTag: config.backgroundTag,
        tagColor: config.tagColor,
        section,
        isRead: false,
        publishedMinutesAgo: -1,
        isIncoming: true,
    };
};

const sections = {
    '/': {
        title: 'All Items',
        matches: () => true,
    },
    '/frontend': {
        title: 'Frontend',
        matches: (article) => article.section === 'frontend',
    },
    '/design': {
        title: 'Design',
        matches: (article) => article.section === 'design',
    },
    '/backend': {
        title: 'Backend & DevOps',
        matches: (article) => article.section === 'backend',
    },
};

const Main = () => {
    const containerRef = useRef(null);
    const refreshTimeoutRef = useRef(null);
    const incomingTimeoutRef = useRef(null);
    const bannerTimeoutRef = useRef(null);
    const { pathname } = useLocation();
    const [articles, setArticles] = useState(initialArticles);
    const [pendingArticles, setPendingArticles] = useState([]);
    const [sortMode, setSortMode] = useState('default');
    const [refreshing, setRefreshing] = useState(false);
    const [incomingArticleKey, setIncomingArticleKey] = useState(null);
    const [isBannerClosing, setIsBannerClosing] = useState(false);
    const currentSection = sections[pathname] ?? sections['/'];
    const sectionArticles = articles.filter(currentSection.matches);
    const visibleArticles = sortMode === 'newest'
        ? [...sectionArticles].sort((left, right) => left.publishedMinutesAgo - right.publishedMinutesAgo)
        : sectionArticles;
    const unreadCount = sectionArticles.filter((article) => !article.isRead).length;
    const hasUnreadArticles = articles.some((article) => !article.isRead);
    const pendingItemsLabel = `${pendingArticles.length} new item${pendingArticles.length === 1 ? '' : 's'} since your last visit`;
    const shouldShowPendingBanner = pendingArticles.length > 0 || isBannerClosing;

    useEffect(() => {
        const handleFeedFocus = () => {
            const container = containerRef.current;

            if (!container) {
                return;
            }

            container.classList.remove('container__home--feed-focus');

            requestAnimationFrame(() => {
                container.classList.add('container__home--feed-focus');
            });
        };

        const handleAnimationEnd = () => {
            containerRef.current?.classList.remove('container__home--feed-focus');
        };

        window.addEventListener('feed:focus', handleFeedFocus);
        containerRef.current?.addEventListener('animationend', handleAnimationEnd);

        return () => {
            window.removeEventListener('feed:focus', handleFeedFocus);
            containerRef.current?.removeEventListener('animationend', handleAnimationEnd);
        };
    }, []);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            const nextArticle = createLiveArticle();

            setPendingArticles((currentArticles) => [nextArticle, ...currentArticles]);
            setIsBannerClosing(false);
        }, 10000);

        return () => {
            if (refreshTimeoutRef.current) {
                window.clearTimeout(refreshTimeoutRef.current);
            }

            if (incomingTimeoutRef.current) {
                window.clearTimeout(incomingTimeoutRef.current);
            }

            if (bannerTimeoutRef.current) {
                window.clearTimeout(bannerTimeoutRef.current);
            }

            window.clearInterval(intervalId);
        };
    }, []);

    const triggerFeedFocus = () => {
        window.dispatchEvent(new Event('feed:focus'));
    };

    const handleSortNewest = () => {
        setSortMode('newest');
        triggerFeedFocus();
    };

    const handleRefresh = () => {
        if (refreshing) {
            return;
        }

        setRefreshing(true);
        triggerFeedFocus();

        if (refreshTimeoutRef.current) {
            window.clearTimeout(refreshTimeoutRef.current);
        }

        refreshTimeoutRef.current = window.setTimeout(() => {
            setRefreshing(false);
            refreshTimeoutRef.current = null;
        }, 700);
    };

    const handleMarkAllRead = () => {
        setArticles((currentArticles) => currentArticles.map((article) => ({
            ...article,
            isRead: true,
        })));
    };

    const handleShowPendingArticles = () => {
        if (pendingArticles.length === 0) {
            return;
        }

        const [latestArticle] = pendingArticles;

        setArticles((currentArticles) => [...pendingArticles, ...currentArticles]);
        setPendingArticles([]);
        setIncomingArticleKey(latestArticle?.articleKey ?? null);
        setIsBannerClosing(true);
        triggerFeedFocus();

        if (incomingTimeoutRef.current) {
            window.clearTimeout(incomingTimeoutRef.current);
        }

        incomingTimeoutRef.current = window.setTimeout(() => {
            setIncomingArticleKey(null);
            incomingTimeoutRef.current = null;
        }, 900);

        if (bannerTimeoutRef.current) {
            window.clearTimeout(bannerTimeoutRef.current);
        }

        bannerTimeoutRef.current = window.setTimeout(() => {
            setIsBannerClosing(false);
            bannerTimeoutRef.current = null;
        }, 320);
    };

    return (  
        <main className="main">
            <div className="options__main">
                <div className="title__item">
                    <h2>{currentSection.title}</h2>
                    <p>
                        {unreadCount} unread
                    </p>
                </div>
                <div className="option__main">
                    <div className="icon__organize">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill={"#A9ABAF"} viewBox={"0 0 24 24"}><path d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"></path></svg>
                        </div>
                        <div className="icon">
                            <svg fill="#A9ABAF" width="25" height="25" viewBox="-4 -4 24 24" role="presentation" className="_1reo15vq _18m915vq _syaz1r31 _lcxvglyw _s7n4yfq0 _vc881r31 _1bsb1ejb _4t3i1ejb"><path d="M5.5 11a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5zm8 0a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5zm-8-8a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5zm8 0a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5zM7 13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zm8 0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zM7 5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zm8 0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z"></path></svg>
                        </div>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#A9ABAF" viewBox="0 0 24 24"><path d="M3 7h18v2H3zm0 4h18v2H3zm0 4h18v2H3z"></path></svg>
                        </div>
                    </div>
                    <button
                        type="button"
                        className={sortMode === 'newest' ? 'button__main-action active' : 'button__main-action'}
                        onClick={handleSortNewest}
                    >
                        Newest
                    </button>
                    <button
                        type="button"
                        className={refreshing ? 'button__main-action active' : 'button__main-action'}
                        onClick={handleRefresh}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" viewBox={"0 0 24 24"}><path d="M18.13 17.13c-.15.18-.31.36-.48.52-.73.74-1.59 1.31-2.54 1.71-1.97.83-4.26.83-6.23 0-.95-.4-1.81-.98-2.54-1.72a7.8 7.8 0 0 1-1.71-2.54c-.42-.99-.63-2.03-.63-3.11H2c0 1.35.26 2.66.79 3.89.5 1.19 1.23 2.26 2.14 3.18s1.99 1.64 3.18 2.14c1.23.52 2.54.79 3.89.79s2.66-.26 3.89-.79c1.19-.5 2.26-1.23 3.18-2.14.17-.17.32-.35.48-.52L22 20.99v-6h-6l2.13 2.13Zm.94-12.2a9.9 9.9 0 0 0-3.18-2.14 10.12 10.12 0 0 0-7.79 0c-1.19.5-2.26 1.23-3.18 2.14-.17.17-.32.35-.48.52L1.99 3v6h6L5.86 6.87c.15-.18.31-.36.48-.52.73-.74 1.59-1.31 2.54-1.71 1.97-.83 4.26-.83 6.23 0 .95.4 1.81.98 2.54 1.72.74.73 1.31 1.59 1.71 2.54.42.99.63 2.03.63 3.11h2c0-1.35-.26-2.66-.79-3.89-.5-1.19-1.23-2.26-2.14-3.18Z"></path></svg>
                        {refreshing ? 'Refreshing...' : 'Refresh'}
                    </button>
                    <button
                        type="button"
                        className="button__main-action"
                        onClick={handleMarkAllRead}
                        disabled={!hasUnreadArticles}
                    >
                        Mark all read
                    </button>
                </div>
            </div>

            {shouldShowPendingBanner ? (
                <button
                    type="button"
                    className={isBannerClosing ? 'feed__updates-banner feed__updates-banner--closing' : 'feed__updates-banner'}
                    onClick={handleShowPendingArticles}
                    disabled={pendingArticles.length === 0}
                >
                    {pendingItemsLabel}
                </button>
            ) : null}

            <div className="container__home" ref={containerRef}>
                <h3>Today</h3>
                <div className="container__content">
                    <Outlet context={{ articles: visibleArticles, refreshing, incomingArticleKey }} />
                </div>
            </div>
        </main>
    );
}
 
export default Main;