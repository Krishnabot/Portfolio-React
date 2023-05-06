import React from 'react';
import './header.css';
import Button from './Button';
import Socials from './Socials';
import selfImage from '../../assets/Image/selfImage.png';

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I&apos;m</h5>
        <h1>Krishna</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <Button />
        <Socials />

        <div className="myself">
          <img src={selfImage} alt="Self" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>

    </header>
  );
}

export default Header;
