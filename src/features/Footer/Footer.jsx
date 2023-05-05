import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {FaCreativeCommons} from 'react-icons/fa'
import './footer.css'


function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>Krishna</a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href='https://www.facebook.com/wolverinekrishna/' target='_blank'><FaFacebookF /></a>
        <a href='https://www.instagram.com/eastern_anarchy/' target='_blank'><FiInstagram /></a>
        <a href='https://twitter.com/last_matrix' target='_blank'><IoLogoTwitter /></a>
      </div>
      <div className="footer__credit">
        <small> < FaCreativeCommons /> Thanks to <a href='https://dribbble.com/Alien_pixels' target='_blank'>Alien_pixels</a> for Design</small>
      </div>
    </footer>
  )
}

export default Footer