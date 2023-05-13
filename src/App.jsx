import React from 'react';
import Header from './features/Header/Header';
import Nav from './features/Nav/Nav';
import About from './features/About/about';
import Skills from './features/Skill/Skills';
import Services from './features/Services/Services';
import Portfolio from './features/Portfolio/portfolio';
import Contact from './features/Contact/Contact';
import Footer from './features/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
