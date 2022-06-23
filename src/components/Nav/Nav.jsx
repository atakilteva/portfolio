import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserCheck} from 'react-icons/fa'
import {BiBookAlt} from 'react-icons/bi'
import {FcServices} from 'react-icons/fc'
import {BiMessageSquareDetail} from 'react-icons/bi';
import  { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  
  return (
    <nav>
    <a href="#" onClick={()=>setActiveNav('#')} className={activeNav ==='#'? 'active':''} ><AiOutlineHome /></a>  
    <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav ==='#about' ? 'active':''}><FaUserCheck /></a>  
    <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active':''}><BiBookAlt/></a>  
    <a href="#services"onClick={()=>setActiveNav('#service')} className={activeNav ==='#service' ? 'active':''} ><FcServices/></a>  
    <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active':''}><BiMessageSquareDetail/></a>    
    </nav>
  )
}

export default Nav