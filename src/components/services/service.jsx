import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'
const service = () => {
  return (
    <section id='service'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className='container services__container'>
    <article className='service'>
    <div className='service__head'>
    <h3>UI/UX Design</h3>
    </div>
    <ul className='service__list'>
      <li><BiCheck  className='service__list-icon'/>
      <p>Cross-platform experiences design</p>
      </li>
      <li><BiCheck  className='service__list-icon'/>
      <p>UI and UX consulting</p>
      </li>
      <li><BiCheck  className='service__list-icon'/>
      <p>Web design services</p>
      </li>
      <li><BiCheck  className='service__list-icon'/>
      <p>Design workshops</p>
      </li>
     
    </ul>
    </article>


    <article className='service'>
    <div className='service__head'>
    <h3>Web Development</h3>
    </div>
    <ul className='service__list'>
      <li><BiCheck  className='service__list-icon'/>
      <p>Back-end web developers </p>
      </li>
      <li><BiCheck  className='service__list-icon'/>
      <p> Database development </p>
      </li>
      <li><BiCheck  className='service__list-icon'/>
      <p>  Responsive website development</p>
      </li>
      <li><BiCheck  className='service__list-icon'/>
      <p>Front-end web developers </p>
      </li>
     <li><BiCheck  className='service__list-icon'/>
      <p>API integration </p>
      </li>
         
    </ul>
    </article>
    
    <article className='service'>
    <div className='service__head'>
    <h3>Content System Management(CSM)</h3>
    </div>
    <ul className='service__list'>
      <li><BiCheck  className='service__list-icon'/>
      <p>Website content creation</p>
      </li>
      <li><BiCheck  className='service__list-icon'/>
      <p>Images/photos preparation for web</p>
      </li>
      <li><BiCheck  className='service__list-icon'/>
      <p>Blog posts</p>
      </li>
      <li><BiCheck  className='service__list-icon'/>
      <p>Email management</p>
      </li>
      
    </ul>
    </article>
    
    <article className='service'>
    <div className='service__head'>
    <h3>Website Maintenance</h3>
    </div>
    <ul className='service__list'>
      <li><BiCheck  className='service__list-icon'/>
      <p>Regularly updating the website.</p>
      </li>
      <li><BiCheck  className='service__list-icon'/>
      <p>Running backups</p>
      </li>
      <li><BiCheck  className='service__list-icon'/>
      <p>Updating the content</p>
      </li>
      <li><BiCheck  className='service__list-icon'/>
      <p>Testing page speeds...</p>
      </li>
      
    </ul>
    </article>
    <article className='service'>
    <div className='service__head'>
    <h3>Website Deployment</h3>
    </div>
    <ul className='service__list'>
      <li><BiCheck  className='service__list-icon'/>
      <p>Preparation</p>
      </li>
      <li><BiCheck  className='service__list-icon'/>
      <p>Set Up DNS Records.</p>
      </li>
      <li><BiCheck  className='service__list-icon'/>
      <p>Set Up a Live Testing Site</p>
      </li>
      <li><BiCheck  className='service__list-icon'/>
      <p>Set Up Email Accounts</p>
      </li>
      
      <li><BiCheck  className='service__list-icon'/>
      <p>Backup and Go Live</p>
      </li>
      
    </ul>
    </article>
    <article className='service'>
    <div className='service__head'>
    <h3>WebSite Design </h3>
    </div>
    <ul className='service__list'>
      <li><BiCheck  className='service__list-icon'/>
      <p>Responsive web site design</p>
      </li>
      <li><BiCheck  className='service__list-icon'/>
      <p>User interactive </p>
      </li>
      <li><BiCheck  className='service__list-icon'/>
      <p>And User experience </p>
      </li>
      <li><BiCheck  className='service__list-icon'/>
      <p>Device responsive</p>
      </li>
      
    </ul>
    </article>
    
    </div>
    </section>
  )
}

export default service