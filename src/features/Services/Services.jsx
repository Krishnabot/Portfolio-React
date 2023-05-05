import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './services.css'

function Services() {
  return (
    <section id = 'services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <div className="services">
          <div className=' services__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='Services__list-icon'/>
              <p>Conducting user research to inform design decisions.</p>
            </li>
            <li>
              <BiCheck className='Services__list-icon'/>
              <p>Creating intuitive information architecture.</p>
            </li>
            <li>
              <BiCheck className='Services__list-icon'/>
              <p>Developing effective wireframes and prototypes.</p>
            </li>
            <li>
              <BiCheck className='Services__list-icon'/>
              <p>Designing aesthetically pleasing interfaces.</p>
            </li>
            <li>
              <BiCheck className='Services__list-icon'/>
              <p>Creating engaging and user-friendly interactions.</p>
            </li>
          </ul>
        </div>

       {/* END of UI/UX Card */}

       <div className="services">
          <div className=' services__head'>
            <h3>Web Developement</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='Services__list-icon'/>
              <p>Creating websites that are optimized for all devices and screen sizes</p>
            </li>
            <li>
              <BiCheck className='Services__list-icon'/>
              <p>Building websites that can handle growth and increased traffic</p>
            </li>
            <li>
              <BiCheck className='Services__list-icon'/>
              <p>Implementing security measures to protect websites from threats and attacks</p>
            </li>
            <li>
              <BiCheck className='Services__list-icon'/>
              <p>Developing websites that load quickly and provide a seamless user experience</p>
            </li>
            <li>
              <BiCheck className='Services__list-icon'/>
              <p>Working with content management systems such as WordPress, Drupal, or Joomla to build and maintain websites</p>
            </li>
            <li>
              <BiCheck className='Services__list-icon'/>
              <p> Creating customized websites tailored to the specific needs of clients</p>
            </li>
          </ul>
        </div>

               {/* END of Web Development Card Card */}

               <div className="services">
          <div className=' services__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='Services__list-icon'/>
              <p>Creating engaging and high-quality written content</p>
            </li>
            <li>
              <BiCheck className='Services__list-icon'/>
              <p>Ensuring accuracy, clarity, and consistency in written content</p>
            </li>
            <li>
              <BiCheck className='Services__list-icon'/>
              <p> Creating visually appealing graphics and images to accompany written content</p>
            </li>
            <li>
              <BiCheck className='Services__list-icon'/>
              <p>Optimizing written content for search engines to improve visibility and drive traffic</p>
            </li>
            <li>
              <BiCheck className='Services__list-icon'/>
              <p>Using data analytics to measure the effectiveness of content</p>
            </li>
          </ul>
        </div>

          {/* END of Content Creation Card Card */}


      </div>


    </section>
  )
}

export default Services