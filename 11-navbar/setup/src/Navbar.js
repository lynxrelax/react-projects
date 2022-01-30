import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const[showBar,setShowBar]=useState(true);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  useEffect(()=>{
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (showBar){
      linksContainerRef.current.style.height = `${linksHeight}px`
    }
    else{
      linksContainerRef.current.style.height = '0px'
    }
  },[showBar])
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alter='logo'/>
          <button className='nav-toggle' onClick={()=>{setShowBar(!showBar)}}>
            <FaBars/>
          </button>
        </div>
        <div className={`links-container ${showBar && 'show-container'}`} ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link)=>{
              const {id,url,text} = link
              return(<li key={id}><a href={url}>{text}</a></li>)
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((sns)=>{
            const {id,url,icon} =sns
            return(<li key={id}><a href={url}>{icon}</a></li>)
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
