import './css/globals.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import AllItems from './pages/AllItems';
import Frontend from './pages/Frontend';
import Design from './pages/Design';
import Backend from './pages/Backend';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<AllItems />} />
            <Route path="frontend" element={<Frontend />} />
            <Route path="design" element={<Design />} />
            <Route path="backend" element={<Backend />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;