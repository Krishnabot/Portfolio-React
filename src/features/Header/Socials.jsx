import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter, BsMedium} from 'react-icons/bs'
import {FaAngellist, FaHackerrank} from 'react-icons/fa'


function Socials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/krishnabot/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/Krishnabot' target='_blank'><BsGithub /></a>
        <a href='https://twitter.com/last_matrix' target='_blank'><BsTwitter /></a>
        <a href='https://medium.com/@Krishna_' target='_blank'> < BsMedium /></a>
        <a href='https://wellfound.com/u/krishnabot' target='_blank'><FaAngellist /></a>
        <a href='https://www.hackerrank.com/KrishnaBot' target='_blank'>< FaHackerrank /></a>

    </div>
  )
}

export default Socials