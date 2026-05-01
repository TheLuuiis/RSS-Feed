import '../css/components/Header.css';
import Logo from '../assets/images/logo.png';
import ImgSearch from '../assets/images/search.png';

const Header = () => {
    return (  
        <header className='container__header'>
            <nav>
                <a href="#" className="header__logo">
                    <img src={Logo} alt="logo"/>
                    <span>Frontpage</span>
                </a>
                <ul>
                    <li>Feed</li>
                    <li>Digest</li>
                    <li>Discover</li>
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