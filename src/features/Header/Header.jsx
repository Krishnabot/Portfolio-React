import React from 'react'
import './header.css'
import Button from './Button'
import Socials from './Socials'
import Self_Image from '../../assets/Image/Self_Image.png'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Krishna</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <Button  />
        <Socials />

        <div className="myself">
          <img src={Self_Image} alt='Self' />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>

      </header>
  )
}

export default Header