import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Blog from './Components/Blog/Blog';
import Testimonials from './Components/Testimonials/Testimonials';
// import Pricing from './Components/Pricing/Pricing';
import Contact from './Components/Contact/Contact';
import { themeContext } from './Context';
import { useContext } from 'react';

function App() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <>
    <Sidebar/>
    <main className='main'
    style={{
      backgroundColor : darkMode? 'black' : '',
      color : darkMode? 'white' : ''
    }}
    >
      <Home/>
      <About/>
      <Services/>
      <Resume/>
      <Portfolio/>
      {/* <Pricing/> */}
      <Testimonials/>
      <Blog/>
      <Contact/>

    </main>
    </>
  );
}

export default App;
