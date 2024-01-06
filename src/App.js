import './Components/Styles/App.css';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import React, { useEffect, useState } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Preloader from './Components/Preloader';

function App() {

  AOS.init(
    {
      startEvent: 'DOMContentLoaded',
      throttleDelay: 99,
      offset: 200,
      duration: 2000,
      easing: 'ease',
      once: true,
    }
  );

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [])

  return (
    <>
      {loading ? 
        <Preloader /> :
        <>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      }
    </>
  );
}

export default App;
