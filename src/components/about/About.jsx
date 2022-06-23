import React from 'react'
import './about.css'
import ME from '../../assets/eyob-7.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderOpened} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
 <h5>Get To Know</h5>
 <h2>About Me</h2>
 <div className='container about__container'>
 <div className='about__me'>
 <div className='about__me-image'>
 <img src={ME} alt ="" />
 </div>
 </div>
 <div className='about__content'>
 <div className='about__cards'>
   {/*} <article className='about__card'>
    <FaAward  className='about__icon'/>
           <h5>Experience</h5>
          // <small> 3+ years Working </small>
      </article>   

      <article className='about__card'>
      <FiUsers  className='about__icon'/>
      <h5>Clients</h5>
      <small> 200+ Worldwide </small>
      </article>

      <article className='about__card'>
      <VscFolderOpened className='about__icon'/>
      <h5>Projects</h5>
      <small> 80+ completed </small>
      </article>
  */}
 </div>
 <p>I'm a creative Full Stack Web Developer, and I'm very passionate and dedicated to my work. With few years experience as a professional Full Stack Developer, I have acquired the skills necessary to build great, appealing, and premium websites that meet the latest web standards.</p>
 <p>Detail-orientated Web Developer adept at interpreting blueprints, working with others, and meeting production deadlines. Skilled at quickly learning new processes, technologies, and machinery. Self-motivated with strong organizational and time management abilities. Most importantly, I'm constantly trying to learn new skills to improve myself and my work.</p>
 <a href='#contact' className='btn btn-primary'>Let's Talk</a>
 </div>
 </div>
    </section>
  )
}

export default About