import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu ,GiCrossMark} from "react-icons/gi";
function Navbar() {
  const [cross,setcross]=useState(false);
  return (
    <div className="nav">
    <div className="part-1">
      BE
      <div className='x'>
      HELPFUL
      </div>
    </div>
    <div className="part-2">

   <ul className="uno">
   <Link className="mem" to="/" >HOME</Link>
  <Link className="mem" to="/about" >ABOUT</Link>
   <Link className="becfund" to="/testimonials" >BECOME FUNDRAISER</Link>
  <Link className="login" to="/contact">CONTACT</Link>
   </ul>
   <div className='ham'>
    {!cross?<GiHamburgerMenu className='hamburger'  onClick={ ()=>{setcross(true)}}/>:<GiCrossMark className='cross' onClick={()=>{setcross(false);}}/>}
   </div>
    </div>
    {cross===true?<div className='modal'>
      <ul className='modal-div'>
      <Link className="mem" to="/" >Home</Link>
  <Link className="mem" to="/about" >About</Link>
   <Link className="mem" to="/testimonials" >Testimonials</Link>
   <Link className="mem" to="/partners" >Partners</Link>
  <Link className="mem" to="/solutions">Solutions</Link>
  <a className="mem" href="https://www.notion.so/Careers-at-SKYWARE-814b8d25f5a6407c845319c57fbab63a" target="_blank"  rel="noreferrer" >Career</a>
  <Link className="login" to="/contact">Contact</Link>
      </ul>
    </div>:null}
    </div>
  )
}
export default Navbar;