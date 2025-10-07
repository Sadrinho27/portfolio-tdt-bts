import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom'; // À garder si routing futur ; sinon, supprime et retire les imports

// Imports locaux (groupés pour lisibilité)
const Navbar = React.lazy(() => import('./components/Navbar'));
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Study = React.lazy(() => import('./components/Study'));
const Experience = React.lazy(() => import('./components/Experience'));
const Tech = React.lazy(() => import('./components/Tech'));
const Works = React.lazy(() => import('./components/Works'));
const Veille = React.lazy(() => import('./components/Veille'));
const Contact = React.lazy(() => import('./components/Contact'));
const StarsCanvas = React.lazy(() => import('./components/canvas/Stars'));

// Fallback pour lazy loading (un spinner simple)
const LoadingFallback = () => <div className="flex justify-center items-center h-16">Chargement...</div>;

const App = () => {
  return (
    // Utilise BrowserRouter si tu ajoutes des routes ; sinon, commente et retire
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        {/* Navbar toujours chargé (critique pour navigation) */}
        <Navbar />

        {/* Contenu principal avec lazy loading pour perf */}
        <main role="main">
          <Suspense fallback={<LoadingFallback />}>
            <Hero />
            <About />
            <Study />
            <Experience />
            <Tech />
            <Works />
            <Veille />
          </Suspense>

          {/* Section footer avec canvas en arrière-plan */}
          <div className="relative w-full min-h-screen">
            {/* Stars en fond */}
            <StarsCanvas />

            {/* Contenu au-dessus */}
            <div className="relative z-10">
              <Contact />
            </div>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
