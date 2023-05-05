import React from 'react'
import './about.css'
import Self_Image from '../../assets/Image/self_Image.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id = 'about'>
      <h5>
        Get To know 
      </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-img">
              <img src= {Self_Image} alt="Self" />
            </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward  className='about__card-icon' />
              <h5>Experience</h5>
              <small> 2 + years working</small>
            </article>
            <article className='about__card'>
              <FiUsers  className='about__card-icon' />
              <h5>Clients</h5>
              <small> 100+ clients world wide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary  className='about__card-icon' />
              <h5>Projects</h5>
              <small> 100 + completed</small>
            </article>
          </div>
          <p>
          I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About