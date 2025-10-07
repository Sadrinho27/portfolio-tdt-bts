import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const renderNavLinks = (isMobile) => (
    <ul
      className={`list-none ${isMobile ? 'flex sm:hidden flex-col' : 'hidden sm:flex flex-row'} gap-6`}
    >
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title
              ? 'text-white'
              : isMobile
              ? 'text-secondary'
              : 'text-white'
          } relative text-[20px] font-medium cursor-pointer transition-colors duration-300 hover:text-secondary`}
          onClick={() => {
            setActive(link.title);
            if (isMobile) setToggle(false);
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-50 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/portfolio-tdt-bts"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[20px] font-bold cursor-pointer flex">
            Titouan&nbsp;<span className="sm:block hidden">DEMEILLEZ TABERE</span>
          </p>
        </Link>

        {/* Desktop Nav */}
        {renderNavLinks(false)}

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[18px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`absolute top-14 right-4 p-6 min-w-[150px] rounded-xl bg-black bg-opacity-90 z-50 ${toggle ? 'flex' : 'hidden'}`}
          >
            {renderNavLinks(true)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
