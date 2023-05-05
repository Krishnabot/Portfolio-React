import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineUnorderedList } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import './nav.css';

const NAV_ITEMS = [
  { id: '#', icon: <AiOutlineHome /> },
  { id: '#about', icon: <AiOutlineUser /> },
  { id: '#experience', icon: <AiOutlineUnorderedList /> },
  { id: '#services', icon: <RiServiceLine /> },
  { id: '#portfolio', icon: <BiBook /> },
  { id: '#contact', icon: <BiMessageSquareDetail /> },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const navRef = useRef(null);

  const handleNavClick = (id) => {
    setActiveNav(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-51% -10% -51% -10%' }

    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const sections = document.querySelectorAll('section');
      const navHeight = navRef.current.offsetHeight;
      const offset = navHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - offset;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
          setActiveNav(`#${section.id}`);
        }
      });

      if (currentScrollPos < sections[0].offsetTop) {
        setActiveNav('#');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav ref={navRef}>
      {NAV_ITEMS.map((item) => (
        <a
          key={item.id}
          href={item.id}
          onClick={() => handleNavClick(item.id)}
          className={activeNav === item.id ? 'active' : ''}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
