import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'
const experience = () => {
  return (
    <section id='experience'>
    <br></br><br></br>
    <h5>The Skills I Have</h5>
    <h2>My Experience</h2>
    <div className='container experience__container'>
    <div className='experience__frontend'>

    <h3>Frontend Development</h3>
    <div className='experience__content'>
        <article className='experience__details'>
        <AiFillCheckCircle  className="experienc_details-icon"/>
        <h5>HTML</h5>
        <small className='text-light'></small>
        </article>
        <article className='experience__details'>
        <AiFillCheckCircle className="experienc_details-icon" />
        <h5>CSS</h5>
        <small className='text-light'></small>
        </article>
           
        <article className='experience__details'>
        <AiFillCheckCircle className="experienc_details-icon" />
        <h5>Javascript</h5>
        <small className='text-light'></small>
        </article>
        <article className='experience__details'>
        <AiFillCheckCircle className="experienc_details-icon" />
        <h5>Jquery</h5>
        <small className='text-light'></small>
        </article>
        <article className='experience__details'>
        <AiFillCheckCircle  className="experienc_details-icon"/>
        <h5>Bootstrap</h5>
        <small className='text-light'></small>
        </article>
        <article className='experience__details'>
        <AiFillCheckCircle  className="experienc_details-icon"/>
        <h5>React.js</h5>
        <small className='text-light'></small>
        </article>
        
    </div>
    </div>
    <div className='experience__backend'>
    <h3>Backend Development</h3>
    <div className='experience__content'>
        <article className='experience__details'>
        <AiFillCheckCircle className="experienc_details-icon" />
        <h5>Node.js</h5>
        <small className='text-light'></small>
        </article>
        <article className='experience__details'>
        <AiFillCheckCircle className="experienc_details-icon" />
        <h5>MangoDB</h5>
        <small className='text-light'></small>
        </article>
        <article className='experience__details'>
        <AiFillCheckCircle  className="experienc_details-icon"/>
        <h5>PHP</h5>
        <small className='text-light'></small>
        </article>
        <article className='experience__details'>
        <AiFillCheckCircle className='experienc_details-icon'/>
        <h5>MYSQL</h5>
        <small className='text-light'></small>
        </article>
        <article className='experience__details'>
        <AiFillCheckCircle className='experienc_details-icon'/>
        <h5>Express</h5>
        <small className='text-light'></small>
        </article>
        <article className='experience__details'>
        <AiFillCheckCircle className='experienc_details-icon'/>
        <h5>REST API</h5>
        <small className='text-light'></small>
        </article>
        <article className='experience__details'>
        <AiFillCheckCircle className='experienc_details-icon'/>
        <h5>Json</h5>
        <small className='text-light'></small>
        </article>
        <article className='experience__details'>
        <AiFillCheckCircle className='experienc_details-icon'/>
        <h5>JSX</h5>
        <small className='text-light'></small>
        </article>
    </div>
    </div>
    <div className='experience__tools'>
    <h3>Web builder Tools </h3>
    <div className='experience__content'>
        <article className='experience__details'>
        <AiFillCheckCircle  className="experienc_details-icon"/>
        <h5>Shopify</h5>
        <small className='text-light'></small>
        </article>
        <article className='experience__details'>
        <AiFillCheckCircle  className="experienc_details-icon"/>
        <h5>Square Space</h5>
        <small className='text-light'></small>
        </article>
        <article className='experience__details'>
        <AiFillCheckCircle  className="experienc_details-icon"/>
        <h5>Wordpress</h5>
        <small className='text-light'></small>
        </article>
        
        
    </div>
    </div>
    </div>
    </section>
  )
}

export default experience