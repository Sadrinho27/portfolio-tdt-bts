import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-scroll';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const navRef = useRef(null);

  // Détection section active
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      let current = '';
      sections.forEach(section => {
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 80) current = section.dataset.title || '';
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermeture menu mobile sur resize ou Escape
  useEffect(() => {
    const handleResize = () => window.innerWidth > 640 && setToggle(false);
    const handleEscape = e => e.key === 'Escape' && setToggle(false);
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const renderNavLinks = (isMobile = false) => (
    <ul className={`list-none ${isMobile ? 'flex flex-col' : 'hidden sm:flex flex-row'} gap-6`}>
      {navLinks.map(link => (
        <li key={link.id}>
          <Link
            to={link.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`${
              active === link.title
                ? 'text-secondary border-b-2 border-secondary'
                : 'text-white-100 hover:text-red-light'
            } relative text-[18px] xs:text-[20px] sm:text-[22px] font-medium cursor-pointer transition-all duration-300 py-1`}
            aria-current={active === link.title ? 'page' : undefined}
            onClick={() => {
              setActive(link.title);
              if (isMobile) setToggle(false);
            }}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav
      ref={navRef}
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-50 bg-black-200`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={e => {
            e.preventDefault();
            setActive('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Retour à l'accueil"
        >
          <img src={logo} alt="Logo Titouan Demeillez Tabere" className="w-9 h-9 object-contain" />
          <p className="text-white text-[20px] font-bold cursor-pointer flex">
            Titouan&nbsp;<span className="sm:block hidden">DEMEILLEZ TABERE</span>
          </p>
        </a>

        {/* Desktop Nav */}
        {renderNavLinks(false)}

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center relative">
          <img
            src={toggle ? close : menu}
            alt={toggle ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="w-[28px] h-[18px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            aria-expanded={toggle}
            aria-label={toggle ? 'Fermer le menu' : 'Ouvrir le menu de navigation'}
          />

          <AnimatePresence>
            {toggle && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black backdrop-blur-sm z-40"
                  onClick={() => setToggle(false)}
                />
                {/* Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-14 right-4 p-6 min-w-[150px] rounded-xl bg-black-200 z-50 flex flex-col shadow-lg"
                >
                  {renderNavLinks(true)}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
