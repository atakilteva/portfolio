import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/images/netflix.png";
import IMG2 from "../../assets/images/amazone.png";
import IMG3 from "../../assets/images/zoom.png";
import IMG4 from "../../assets/images/onlineschool2.jpg";
// import IMG4 from "../../assets/images/instagram.jpg";
import IMG5 from "../../assets/images/appleB.jpeg";
import IMG6 from "../../assets/images/appleR.jpeg";
import IMG7 from "../../assets/images/twitter.jpg";
import IMG8 from "../../assets/images/facebook1.jpg";
import IMG9 from "../../assets/images/youtube.jpg";
import IMG10 from "../../assets/images/snak game.jpg";
import IMG11 from "../../assets/images/coffee.png";
// import IMG11 from "../../assets/images/coffee-logo.webp";
import IMG12 from "../../assets/images/logo_128x128.ico";
import IMG13 from "../../assets/images/onlineschool.png";
import IMG14 from "../../assets/images/realestate.jpeg";
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Netflix clone-react",
    github: "https://github.com",
    demo: "https://netflix-clone-b098c.web.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Amazon-front end react ",
    github: "https://github.com",
    demo: "https://front-react-b0ade.web.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Zoom-clone Node js",
    github: "https://github.com",
    demo: "https://secret-wildwood-35532.herokuapp.com",
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "Online school with react",
  //   github: "https://github.com",
  //   demo: "",
  // },
  {
    id: 5,
    image: IMG5,
    title: "Apple website clone with javascript",
    github: "https://github.com/ATAKILIT-GIT/Apple-bootstrap",
    demo: "https://apple-bootstrap.pages.dev/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Apple website clone with React js",
    github: "https://github.com/ATAKILIT-GIT/Apple-react-clone",
    demo: "https://apple-react-clone-9aad6.firebaseapp.com/",
  },
  // {
  //   id: 7,
  //   image: IMG7,
  //   title: "Twitter clone React js",
  //   github: "https://github.com",
  //   demo: "",
  // },
  // {
  //   id: 8,
  //   image: IMG8,
  //   title: "Facebook clone with React js",
  //   github: "https://github.com",
  //   demo: "",
  // },
  // {
  //   id: 9,
  //   image: IMG9,
  //   title: "youtube with React js",
  //   github: "https://github.com",
  //   demo: "",
  // },

  // {
  //   id: 7,
  //   image: IMG7,
  //   title: "Twitter clone React js",
  //   github: "https://github.com",
  //   demo: "",
  // },
   {
     id: 13,
     image: IMG13,
    title: "Online school React js",
    //  github: "https://github.com",
     demo: "https://online-school-react.firebaseapp.com/",
   },
  //  {
  //    id: 14,
  //   image: IMG14,
  //  title: "Real Estate React js",
  //    github: "https://github.com",
  //    demo: "",
  //  },
  {
    id: 10,
    image: IMG10,
    title: "Snake-game -javascript",
    github: "https://github.com/ATAKILIT-GIT/Snake-Game-javascript",
    demo: "https://snake-game-javascript.pages.dev/",
  },
  {
    id: 11,
    image: IMG11,
    title: "Coffee-shop-HTML,CSS, javaScript",
    github: "https://github.com/ATAKILIT-GIT/Coffee-cafe-website",
    demo: "https://coffee-cafe-website.pages.dev/",
  },
  {
    id: 12,
    image: IMG12,
    title: "city promotion ethiopia",
    github: "",
    demo: "https://citypromotionethiopia.com/",
  },
];
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Portfolio</h5>
      <h2>My Recent Works</h2>
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
