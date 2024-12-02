import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import ResumePage from './pages/ResumePage/ResumePage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
//import BlogPage from './pages/BlogPage/BlogPage';
//import ContactPage from './pages/ContactPage/ContactPage';
import { useContext } from 'react';
import { themeContext } from './Context';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main 
          className='main'
          style={{
            backgroundColor: darkMode ? 'black' : '',
            color: darkMode ? 'white' : ''
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
           
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;