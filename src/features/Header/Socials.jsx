import React from 'react';
import {
  BsLinkedin, BsGithub, BsMedium,
} from 'react-icons/bs';
import { FaAngellist, FaHackerrank } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

function Socials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/krishnabot/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BsLinkedin className="header__socials-icon" /></a>
      <a href="https://github.com/Krishnabot" target="_blank" rel="noreferrer" aria-label="Github"><BsGithub className="header__socials-icon" /></a>
      <a href="https://twitter.com/last_matrix" target="_blank" rel="noreferrer" aria-label="Twitter"><RiTwitterXFill className="header__socials-icon" /></a>
      <a href="https://medium.com/@Krishna_" target="_blank" rel="noreferrer" aria-label="Medium"><BsMedium className="header__socials-icon" /></a>
      <a href="https://wellfound.com/u/krishnabot" target="_blank" rel="noreferrer" aria-label="AngelList"><FaAngellist className="header__socials-icon" /></a>
      <a href="https://www.hackerrank.com/KrishnaBot" target="_blank" rel="noreferrer" aria-label="HackerRank"><FaHackerrank className="header__socials-icon" /></a>

    </div>
  );
}

export default Socials;
