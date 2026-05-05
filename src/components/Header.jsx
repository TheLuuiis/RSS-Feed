import '../css/components/Header.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

const navItems = [
    {
        label: 'Feed',
        type: 'link',
        to: '/',
    },
    {
        label: 'Digest',
        type: 'button',
    },
    {
        label: 'Discover',
        type: 'button',
    },
];

const Header = ({ searchQuery, onSearchChange, theme, onToggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleFeedClick = () => {
        setIsMenuOpen(false);
        window.dispatchEvent(new CustomEvent('feed:focus'));
    };

    const handleSearchChange = (event) => {
        onSearchChange(event.target.value);
        window.dispatchEvent(new CustomEvent('feed:focus'));
    };

    const handleMenuToggle = () => {
        setIsMenuOpen((currentState) => !currentState);
    };

    const handleMenuAction = () => {
        setIsMenuOpen(false);
    };

    return (  
        <header className={isMenuOpen ? 'container__header container__header--menu-open' : 'container__header'}>
            <div className="header__bar">
                <NavLink to="/" end className="header__logo" onClick={handleFeedClick}>
                    <img src={Logo} alt="logo"/>
                    <span>Frontpage</span>
                </NavLink>

                <button
                    type="button"
                    className={isMenuOpen ? 'header__menu-toggle header__menu-toggle--open' : 'header__menu-toggle'}
                    onClick={handleMenuToggle}
                    aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="header-panel"
                >
                    <span className="header__menu-line"></span>
                    <span className="header__menu-line"></span>
                    <span className="header__menu-line"></span>
                </button>
            </div>

            <div id="header-panel" className={isMenuOpen ? 'header__panel header__panel--open' : 'header__panel'}>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            {item.type === 'link' ? (
                                <NavLink
                                    to={item.to}
                                    end
                                    className={({ isActive }) =>
                                        isActive ? 'header__nav-link active' : 'header__nav-link'
                                    }
                                    onClick={handleFeedClick}
                                >
                                    {item.label}
                                </NavLink>
                            ) : (
                                <button type="button" className="header__nav-button" onClick={handleMenuAction}>
                                    {item.label}
                                </button>
                            )}
                        </li>
                    ))}
                    </ul>
                </nav>

                <div className="header__profile">
                    <div className="search">
                        <input
                            type="text"
                            name="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            aria-label="Search articles, tags or categories"
                        />
                        <svg className="search__icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 2a8 8 0 1 0 4.9 14.32l4.39 4.39 1.41-1.41-4.39-4.39A8 8 0 0 0 10 2m0 2a6 6 0 1 1 0 12a6 6 0 0 1 0-12"></path></svg>
                    </div>
                    <button
                        type="button"
                        className={theme === 'dark' ? 'theme-toggle theme-toggle--active' : 'theme-toggle'}
                        onClick={onToggleTheme}
                        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                        aria-pressed={theme === 'dark'}
                    >
                        <span className="theme-toggle__track">
                            <span className="theme-toggle__thumb">
                                {theme === 'dark' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.74 2.01a1 1 0 0 0-1.09 1.36a8 8 0 0 1-10.3 10.3a1 1 0 0 0-1.36 1.09A10 10 0 1 0 12.74 2.01"></path></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.76 4.84 5.34 3.42 3.93 4.84l1.41 1.41zm10.48 0 1.41 1.41 1.41-1.41-1.41-1.42zM12 5h1V2h-2v3zm7 6h3v2h-3zM4 11H1v2h3zm8 8h1v3h-2v-3zm5.24-1.84 1.41 1.42 1.41-1.42-1.41-1.41zM6.76 17.16l-1.42 1.42 1.41 1.42 1.41-1.42zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10"></path></svg>
                                )}
                            </span>
                        </span>
                    </button>
                    <svg className="header__action-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" ><path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z"></path></svg>
                    <div className="profile">
                        <p>MS</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;