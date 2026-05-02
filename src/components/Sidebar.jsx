import '../css/components/Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (  
        <aside>
            <div className="options__sidebar">
                <div className="option__sidebar">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"#A9ABAF"} viewBox={"0 0 24 24"}>
                            <path d="M20 2H10c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 12H10V4h10z"></path>
                            <path d="M14 20H4V10h2V8H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-2h-2zM12 6h6v2h-6zm0 4h6v2h-6z"></path>
                        </svg>
                        All Items
                    </button>
                    <span>47</span>
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

                <ul>
                    <li>
                        <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : ''}>
                            Frontend
                        </NavLink>
                    </li>
                </ul>

                <ul>
                    <li>
                        <NavLink to="/design" className={({ isActive }) => isActive ? 'active-link' : ''}>
                            Design
                        </NavLink>
                    </li>
                </ul>

                <ul>
                    <li>
                        <NavLink to="/backend" className={({ isActive }) => isActive ? 'active-link' : ''}>
                            Backend & DevOps
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
 
export default Sidebar;