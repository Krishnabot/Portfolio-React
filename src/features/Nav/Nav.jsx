import React, { useState } from 'react';
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

  const handleNavClick = (id) => {
    setActiveNav(id);
  };

  return (
    <nav>
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
