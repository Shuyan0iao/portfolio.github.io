import React, { useEffect, useRef, useCallback } from 'react';
import './header.css';
import { throttle } from 'lodash';
import LOGO from '../assets/img/logo.png';

const Header = () => {
  const navBarRef = useRef(null);
  const menuRef = useRef(null);
  const logoRef = useRef(null);

  const handleScroll = useCallback(() => {
    const menuOffsetTop = menuRef.current.offsetTop;

    if (window.pageYOffset >= menuOffsetTop) {
      navBarRef.current.classList.add('sticky');
      logoRef.current.classList.add('sticky');
    } else {
      navBarRef.current.classList.remove('sticky');
      logoRef.current.classList.remove('sticky');
    }
  }, []);

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [handleScroll]);

  // 页面滚动到特定元素
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <nav className='header' ref={navBarRef}>
        <img src={LOGO} className='header_logo' ref={logoRef} alt="Logo" />
        <ul className='header_ul' ref={menuRef}>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('skills')}>Skills</li>
          <li onClick={() => scrollToSection('experience')}>Experience</li>

          <li onClick={() => scrollToSection('contactMe')}>Contact me</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
