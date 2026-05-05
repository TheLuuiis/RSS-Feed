import '../css/components/Sidebar.css';
import { NavLink } from 'react-router-dom';
import {
    backendArticles,
    designArticles,
    frontendArticles,
} from '../data/articles';

const categories = [
    {
        label: 'Frontend',
        path: '/frontend',
        accent: '#3B82F6',
        items: frontendArticles,
    },
    {
        label: 'Design',
        path: '/design',
        accent: '#EC4899',
        items: designArticles,
    },
    {
        label: 'Backend & DevOps',
        path: '/backend',
        accent: '#F59E0B',
        items: backendArticles,
    },
];

const totalItems = categories.reduce((sum, category) => sum + category.items.length, 0);

const getItemNumber = (item) => {
    const seed = `${item.id}-${item.source}-${item.shortTitle ?? item.title}`;
    const hash = Array.from(seed).reduce((total, character) => total + character.charCodeAt(0), 0);

    return (hash % 15) + 2;
};

const Sidebar = () => {
    return (  
        <aside>
            <div className="options__sidebar">
                <div className="option__sidebar">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? 'option__sidebar-link active-sidebar-link' : 'option__sidebar-link'
                        }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox={"0 0 24 24"}>
                            <path d="M20 2H10c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 12H10V4h10z"></path>
                            <path d="M14 20H4V10h2V8H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-2h-2zM12 6h6v2h-6zm0 4h6v2h-6z"></path>
                        </svg>
                        All Items
                    </NavLink>
                    <span className="option__sidebar-count">{totalItems}</span>
                </div>

                <div className="option__sidebar">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#A9ABAF"} viewBox={"0 0 24 24"}>
                            <path d="M18 2H6c-1.1 0-2 .9-2 2v17c0 .36.19.69.5.87s.69.18 1 0l6.5-3.72 6.5 3.72c.15.09.32.13.5.13s.35-.04.5-.13c.31-.18.5-.51.5-.87V4c0-1.1-.9-2-2-2m0 8v9.28l-5.5-3.14a.98.98 0 0 0-.99 0l-5.5 3.14V4h12v6Z"></path>
                        </svg>
                        Saved
                    </button>
                    <span>12</span>
                </div>
            </div>

            <div className="container__categories">
                <div className="title__categories">
                    <h3>Categories</h3>
                </div>

                {categories.map((category) => (
                    <div className="category__group" key={category.path}>
                        <div className="category__header">
                            <NavLink
                                to={category.path}
                                end={category.end}
                                className={({ isActive }) =>
                                    isActive ? 'category__link active-link' : 'category__link'
                                }
                            >
                                <span
                                    className="category__dot"
                                    style={{ backgroundColor: category.accent }}
                                ></span>
                                {category.label}
                            </NavLink>
                            <span className="category__count">{category.items.length}</span>
                        </div>

                        <ul className="category__items">
                            {category.items.map((item) => (
                                <li key={`${category.path}-${item.id}`}>
                                    <NavLink
                                        to={category.path}
                                        end={category.end}
                                        className="category__item-link"
                                    >
                                        <div className="category__item-main">
                                            <span
                                                className="category__avatar"
                                                style={{ backgroundColor: item.avatarColor }}
                                            >
                                                {item.avatar}
                                            </span>

                                            <div className="category__item-copy">
                                                <p className="category__item-title">{item.shortTitle ?? item.title}</p>
                                            </div>
                                        </div>

                                        <span className="category__item-number">{getItemNumber(item)}</span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </aside>
    );
}
 
export default Sidebar;