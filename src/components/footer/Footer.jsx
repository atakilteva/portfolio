import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer >
    
    <a href='#' className='footer__logo'>ATAKILT PORTFOLIO</a>
    <ul className='permalinks'>
    <li><a href='#'>Home</a></li>
    <li><a href='#about'>About</a></li>
    <li><a href='#experience'>Experience</a></li>
    <li><a href='#service'>Services</a></li>
    <li><a href='#portfolio'>Portfolio</a></li>
    <li><a href='#testimonial'>Testimonial</a></li>
    <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className='footer__socials'>
    <a href='https://facebook.com'><FaFacebookSquare /></a>
    <a href='https://linkedin.com'><AiFillLinkedin /></a>
    <a href='https://telegram.com'><FaTelegramPlane /></a>
    <a href='https://twitter.com'><AiOutlineTwitter /></a>
    <a href='https://instagram.com'><BsInstagram /></a>
    </div>
    <div className='footer__copyright'>
    <small> $Copy Right 2022; Atakilt portfolio. All rights reserved</small>
    </div>
    </footer>
  )
}

export default Footer