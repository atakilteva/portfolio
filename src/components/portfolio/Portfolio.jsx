import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "crypto currency Dashboard & finacial visulaization",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG2,
    title: "crypto currency Dashboard & finacial visulaization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18364633-abstract-triangle",
  },
  {
    id: 3,
    image: IMG3,
    title: "crypto currency Dashboard & finacial visulaization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18343336-Private-banking-AI-Design",
  },
  {
    id: 4,
    image: IMG4,
    title: "crypto currency Dashboard & finacial visulaization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18361694-UV-Tracker-App",
  },
  {
    id: 5,
    image: IMG5,
    title: "crypto currency Dashboard & finacial visulaization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18361369-Flight-Tracker-App",
  },
  {
    id: 6,
    image: IMG6,
    title: "crypto currency Dashboard & finacial visulaization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18343336-Private-banking-AI-Design",
  },
];
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My REcent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__items">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h6>{title}</h6>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;



// ============================other option for portfolio==========================
// other alternative for portifolio
// <article className='portfolio__items'>
// <div className='portfolio__item-image'>
// <img src={IMG1} alt=''/>
// </div>
// <h3>This is a portfolio item title</h3>
// <div className='portfolio__item-cta'>
// <a href='https://github.com/' className='btn' target='_blank'>Github</a>
// <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a></div>
// </article>
// <article className='portfolio__items'>
// <div className='portfolio__item-image'>
// <img src={IMG1} alt=''/>
// </div>
// <h3>This is a portfolio item title</h3>
// <div className='portfolio__item-cta'>
// <a href='https://github.com/' className='btn' target='_blank'>Github</a>
// <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a></div>
// </article>
// <article className='portfolio__items'>
// <div className='portfolio__item-image'>
// <img src={IMG1} alt=''/>
// </div>
// <h3>This is a portfolio item title</h3>
// <div className='portfolio__item-cta'>
// <a href='https://github.com/' className='btn' target='_blank'>Github</a>
// <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a></div>
// </article>
// <article className='portfolio__items'>
// <div className='portfolio__item-image'>
// <img src={IMG1} alt=''/>
// </div>
// <h3>This is a portfolio item title</h3>
// <div className='portfolio__item-cta'>
// <a href='https://github.com/' className='btn' target='_blank'>Github</a>
// <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a></div>
// </article>
// <article className='portfolio__items'>
// <div className='portfolio__item-image'>
// <img src={IMG1} alt=''/>
// </div>
// <h3>This is a portfolio item title</h3>
// <div className='portfolio__item-cta'>
// <a href='https://github.com/' className='btn' target='_blank'>Github</a>
// <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a></div>
// </article>
// <article className='portfolio__items'>
// <div className='portfolio__item-image'>
// <img src={IMG1} alt=''/>
// </div>
// <h3>This is a portfolio item title</h3>
// <div className='portfolio__item-cta'>
// <a href='https://github.com/' className='btn' target='_blank'>Github</a>
// <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a></div>
// </article>
