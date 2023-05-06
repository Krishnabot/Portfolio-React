import React from 'react';
import { FaFacebookF, FaCreativeCommons } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import './footer.css';

function Footer() {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/wolverinekrishna/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
        <a href="https://www.instagram.com/eastern_anarchy/" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram /></a>
        <a href="https://twitter.com/last_matrix" target="_blank" rel="noreferrer" aria-label="Twitter"><IoLogoTwitter /></a>
      </div>
      <div className="footer__credit">
        <FaCreativeCommons className="footer__icon" />
        <small>
          {' '}
          Thanks to
          <a href="https://dribbble.com/Alien_pixels" target="_blank" rel="noreferrer">Alien_pixels</a>
          {' '}
          for Design
        </small>
      </div>
    </footer>
  );
}

export default Footer;
