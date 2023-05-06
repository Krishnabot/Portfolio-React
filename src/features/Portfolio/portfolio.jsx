import React from 'react';
import './portfolio.css';
import FoodieSnapShot from '../../assets/Image/Foodie_App_snapshot.png';
import CointrackerSnapShot from '../../assets/Image/cointracker_snapshot.png';
import ExpensetrackerSnapShot from '../../assets/Image/expense-tracker_snapshot.png';
import PoetrySlamSnapShot from '../../assets/Image/poetry_slam_snapshot.png';
import SpacetravellerSnapShot from '../../assets/Image/Space-Traveller-Hub_snapshot.png';
import AppointmentSnapShot from '../../assets/Image/Appointmentt.png';

const data = [
  {
    id: 1,
    image: FoodieSnapShot,
    title: 'Foodie App',
    github: 'https://github.com/Krishnabot/JavaScript-CapStone',
    demo: 'https://krishnabot.github.io/JavaScript-CapStone/dist/',
  },
  {
    id: 2,
    image: CointrackerSnapShot,
    title: 'Coin Tracker',
    github: 'https://github.com/Krishnabot/CoinTrackers',
    demo: 'https://zingy-eclair-341d70.netlify.app/',
  },
  {
    id: 3,
    image: ExpensetrackerSnapShot,
    title: 'Expense Tracker',
    github: 'https://github.com/Krishnabot/Expense-Tracker',
    demo: 'https://expense-tracker-i4p6.onrender.com/',
  },
  {
    id: 4,
    image: PoetrySlamSnapShot,
    title: 'Poetry Slam',
    github: 'https://github.com/Krishnabot/Capstone-Project-Poetry-Page',
    demo: 'https://krishnabot.github.io/Capstone-Project-Poetry-Page/',
  },
  {
    id: 5,
    image: SpacetravellerSnapShot,
    title: 'Space Travellers Hub',
    github: 'https://github.com/Krishnabot/Space-Traveler-s-Hub',
    demo: 'https://mellifluous-naiad-7463d1.netlify.app/',
  },
  {
    id: 6,
    image: AppointmentSnapShot,
    title: 'Coders Hub',
    github: 'https://github.com/manq2010/Book-An-Appointment-Front-End',
    demo: 'https://codershub-8u8o.onrender.com/',
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>My Portfolio</h2>
      <div className="container portfolio__container">
        {
        data.map(({
          id, image, title, github, demo,
        }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-img">
              <img src={image} alt="Foodie App SnbapShot" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-links">
              <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
              <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>

            </div>

          </article>
        ))
      }
      </div>
    </section>
  );
}

export default Portfolio;
