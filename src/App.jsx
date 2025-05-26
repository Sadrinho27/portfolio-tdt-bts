import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StarsCanvas, About, Contact, Experience, Hero, Navbar, Study, Tech, Veille, Works } from './components';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Study />
        <Experience />
        <Tech />
        <Works />
        <Veille />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
