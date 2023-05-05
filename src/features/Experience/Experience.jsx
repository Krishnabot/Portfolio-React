import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id = 'experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>BootStrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Redux</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Back-End Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>NodeJs</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>PostGreSQL</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Ruby</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Ruby on Rails</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Python</h4>
              <small className="text-light">Basic</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Experience