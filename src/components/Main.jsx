import '../css/components/Main.css';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (  
        <main className="main">
            <div className="options__main">
                <div className="title__item">
                    <h2>All Items</h2>
                    <p>
                        47 unread
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
                    <button>Newest</button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill={"#A9ABAF"} viewBox={"0 0 24 24"}><path d="M18.13 17.13c-.15.18-.31.36-.48.52-.73.74-1.59 1.31-2.54 1.71-1.97.83-4.26.83-6.23 0-.95-.4-1.81-.98-2.54-1.72a7.8 7.8 0 0 1-1.71-2.54c-.42-.99-.63-2.03-.63-3.11H2c0 1.35.26 2.66.79 3.89.5 1.19 1.23 2.26 2.14 3.18s1.99 1.64 3.18 2.14c1.23.52 2.54.79 3.89.79s2.66-.26 3.89-.79c1.19-.5 2.26-1.23 3.18-2.14.17-.17.32-.35.48-.52L22 20.99v-6h-6l2.13 2.13Zm.94-12.2a9.9 9.9 0 0 0-3.18-2.14 10.12 10.12 0 0 0-7.79 0c-1.19.5-2.26 1.23-3.18 2.14-.17.17-.32.35-.48.52L1.99 3v6h6L5.86 6.87c.15-.18.31-.36.48-.52.73-.74 1.59-1.31 2.54-1.71 1.97-.83 4.26-.83 6.23 0 .95.4 1.81.98 2.54 1.72.74.73 1.31 1.59 1.71 2.54.42.99.63 2.03.63 3.11h2c0-1.35-.26-2.66-.79-3.89-.5-1.19-1.23-2.26-2.14-3.18Z"></path></svg>
                        Refresh
                    </button>
                    <button>Mark all read</button>
                </div>
            </div>

            <div className="container__home">
                <h3>Today</h3>
                <div className="container__content">
                    <Outlet />
                </div>
            </div>
        </main>
    );
}
 
export default Main;