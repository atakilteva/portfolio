import React from 'react'
import './testimonial.css'
import AVT1 from '../../assets/abel.png'
import AVT2 from '../../assets/eyob-banner2.png'
import AVT3 from '../../assets/eyob-banner2.png'
import AVT4 from '../../assets/eyob-banner2.png'



const data = [
  {
    avatar: AVT1,
    name:'Abel Wube',
    review:' It is a distinct pleasure for me to Atakilt Yakob Fullstack Web Developer to any and all interested part. He has been professional, comprehensive and competent in full stack development and Electrical Engineering.He is creative and self learner, and fantastic.',
      },
      //  {
  //    avatar: AVT2,
  //   name:'Atakilt Yakob',
  //  review:' It is a distinct pleasure for me to Atakilt Yakob Fullstack Web Developer to any and all interested parties. They have been professional, comprehensive and competent throughout the process of our working together. We feel that we have established a relationship with them for years to come. The reaction to our new web site has been overwhelmingly positive; as one commented the site is “FANTASTIC.” The same can be said for our view of Thrive’s work for us.',
  // },
//       {
//         avatar: AVT3,
//       name:'Atakilt Yakob',
//       review:' It is a distinct pleasure for me to Atakilt Yakob Fullstack Web Developer to any and all interested parties. They have been professional, comprehensive and competent throughout the process of our working together. We feel that we have established a relationship with them for years to come. The reaction to our new web site has been overwhelmingly positive; as one commented the site is “FANTASTIC.” The same can be said for our view of Thrive’s work for us.',
//         },
// //         {
//           avatar: AVT4,
//         name:'Atakilt Yakob',
//         review:' It is a distinct pleasure for me to Atakilt Yakob Fullstack Web Developer to any and all interested parties. They have been professional, comprehensive and competent throughout the process of our working together. We feel that we have established a relationship with them for years to come. The reaction to our new web site has been overwhelmingly positive; as one commented the site is “FANTASTIC.” The same can be said for our view of Thrive’s work for us.',
//           },
//
 ]
const Testimonial = () => {
  return (
    <section id='testimonials'>
  <h5>Review from clients</h5>
  <h2>Testimonials</h2>
  <div className='container testimonials__container'>

  {
    data.map(({avatar, name, review}, index)=>{
      return(
   <article key={index} className='testimonial'>
      <div className='client__avatar'>
      <img src={avatar} />
      </div>
      <h5 className='client__name'>{name}</h5>
      <small className='client__review'>
        {review}
      </small>
  </article>
  
      )
    })
    
  } 
   </div>
    </section>
  )
}

export default Testimonial

