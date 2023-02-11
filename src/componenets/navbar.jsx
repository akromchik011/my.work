import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <div className="nav">
           
        
        <div className="chap">Uz.Tour</div>
        
        <div className="bir">
        <Link  to='/home'><a href="">Home</a> </Link>
        <Link to='/about'><a href="">About</a></Link>
        <Link to='/contact'><a href="">Contact</a></Link>
        </div>
 
          
          <div>
      <button class="btn">sign in</button></div>
        </div>
    
    )
}

export default Navbar
