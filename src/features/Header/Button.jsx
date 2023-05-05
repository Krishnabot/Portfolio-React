import React from 'react'
import Resume from '../../assets/Resume.pdf'

const Button = () => {
  return (
    <div className='header__btn'>
        <a href={Resume} download className='btn'>My Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Button