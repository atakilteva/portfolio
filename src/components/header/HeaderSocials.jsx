import React from 'react'

import {AiFillLinkedin} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
   
    <a href='https://linkedin.com'><AiFillLinkedin /></a>
    <a href='https://t.me/eyobyakob'><FaTelegramPlane /></a>
      <a href='https://github.com' target="_blank"><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocials