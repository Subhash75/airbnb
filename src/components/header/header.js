import React from 'react';
import { FaAirbnb, FaBars, FaUserCircle } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";


function Header() {
  return (
    <div className='header'>
      <p><FaAirbnb /></p>
      <p>airbnb</p>
      <div className='login'>
        <p>Become a host</p>
        <p><BsGlobe /></p>
        <div className='icons'>
          <p><FaBars /></p>
          <p><FaUserCircle /></p>
        </div>
      </div>
    </div>
  )
}

export default Header