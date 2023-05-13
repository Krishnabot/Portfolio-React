import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './services.css';

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <div className="services">
          <div className=" services__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p>Conducting user research to inform design decisions.</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Creating intuitive information architecture.</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Developing effective wireframes and prototypes.</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Designing aesthetically pleasing interfaces.</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Creating engaging and user-friendly interactions.</p>
            </li>
          </ul>
        </div>

        {/* END of UI/UX Card */}

        <div className="services">
          <div className=" services__head">
            <h3>Web Developement</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p>Creating optimized responsive websites.</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Building Scalable websites to handle growth and  traffic.</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Implementing security measures to protect from threats and attacks.</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Creating Fast websites with seamless user experience.</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Working with CMS to build and maintain websites.</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p> Creating tailored webapps for the needs of clients.</p>
            </li>
          </ul>
        </div>

        {/* END of Web Development Card Card */}

        <div className="services">
          <div className=" services__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p>Creating engaging and high-quality written content.</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Ensuring accuracy, clarity, and consistency in  content.</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Creating eye-catching visuals for content.</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Optimization  for SEO to increase visibility and traffic.</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Data analytics to measure the effectiveness of content.</p>
            </li>
          </ul>
        </div>

        {/* END of Content Creation Card Card */}

      </div>

    </section>
  );
}

export default Services;
