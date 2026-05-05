import '../css/components/Header.css';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import ImgSearch from '../assets/images/search.png';

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

const Header = () => {
    const handleFeedClick = () => {
        window.dispatchEvent(new CustomEvent('feed:focus'));
    };

    return (  
        <header className='container__header'>
            <nav>
                <NavLink to="/" end className="header__logo">
                    <img src={Logo} alt="logo"/>
                    <span>Frontpage</span>
                </NavLink>
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
                                <button type="button" className="header__nav-button">
                                    {item.label}
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="header__profile">
                <div className="search">
                    <input type="text" name='text' placeholder='Search articles...'/>
                    <img src={ImgSearch} alt="search"/>
                </div>
                <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8b949e" viewBox="0 0 24 24" ><path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z"></path></svg>
                <div className="profile">
                    <p>MS</p>
                </div>
            </div>
        </header>
    );
}
 
export default Header;