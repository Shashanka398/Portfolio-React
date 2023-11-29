import './App.css';
import Header from "./components/Header";
import About from './components/About';
import Projects from './components/Projects';
import Info from './components/Info';
import Footer from './components/Footer';
import { Routes } from 'react-router-dom';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function App() {
  return (
    <div className='w-auto overflow-hidden'>
      <Header />
  
        <About />
      <Element name="projects">
        <Projects />
      </Element >
        <Element name="skills">
                <Info />
        </Element>

      <Footer />
    </div>
  );
}

export default App;
