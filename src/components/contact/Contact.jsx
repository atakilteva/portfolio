import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import {ImMobile} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vo2frdd', 'template_ld2oao2', form.current, 'tbL1mPOYqvZ_5Zgff') 
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   <section id ='contact'>
  <h5>Get In Touch</h5>
  <h2>Contact Me</h2>
  <div className='container contact__container'>
  <div className='contact__options'>
      <article className='contact__option'>
      <MdOutlineMail  className='contact_option-icon'/>
      <h4>Email</h4>
      <h5>atakilt100@gmail.com</h5>
      <a href='mailto:atakilt100@gmail.com' target="_blank">Send a massage</a>
      </article>
      <article className='contact__option'>
      <BsMessenger className='contact_option-icon'/>
      <h4>Messanger</h4>
      <h5>Facebook</h5>
      <a href='https://m.me/atakilt.yakob' target="_blank">Send a massage</a>
      </article>
     {/* <article className='contact__option'>
      <FaTelegramPlane className='contact_option-icon'/>
      <h4>Telegram</h4>
      <h5>Join with me</h5>
      <a href='https://t.me/eyobyakob' target="_blank">Send a massage</a>
      </article>
      
    */}
  </div>
  <div className='contact__options'>
  
  <article className='contact__option'>
  <ImMobile/>
  <h4>Mob</h4>
  <h5>+251944264197</h5>
  <a href='#'>Call free</a>
  </article>
  <article className='contact__option'>
  <ImMobile/>
  <h4>Linkedin</h4>
  <h5>Linkedin</h5>
  <a href='https://www.linkedin.com/in/atakilt-yakob-a67039224/' target="_blank">Send a massage</a>
  </article>
</div>
  <form ref={form} onSubmit={sendEmail} >
  <input type="text" name="name" placeholder ="Your Full Name" require />
  <input type="email" name="email" placeholder ="You email" require />
  <textarea  name="message"  rows ="7" placeholder ="Your message" require ></textarea>
  <button type='submit' className='btn btn-primary'>Send Message</button>
  </form>
  </div>
  
    </section>
  )
}

export default Contact