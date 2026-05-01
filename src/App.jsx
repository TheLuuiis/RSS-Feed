import './css/globals.css';
import Header from '../src/components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
function App() {

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default App
