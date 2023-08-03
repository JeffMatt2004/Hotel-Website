import React, { useState } from "react"
import LOGO from "../images/LOGO.png"
import user from "../images/user.png"
import option from "../images/option_button.jpg"
import "./nav-css.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Logout from "./logout"

export default function Nav({ setismobilemenuopen }) {

  const [ismobilemenuopen, setismobilemenuopenlocal] = useState(false)
  const togglemobilemenu = () => {
    setismobilemenuopenlocal(!ismobilemenuopen)
    setismobilemenuopen(!ismobilemenuopen)
  }

  return (
    <div className="navigation">
      <nav className="nav-bar" id="nav-bar">
        <a href="#"><img className="img-logo" src={LOGO} alt="website logo" width="80px" /></a>

        <div className={`mobile-menu-icon ${ismobilemenuopen ? 'open' : ''}`} onClick={togglemobilemenu}>
          <img src={option} width={30} alt="" />
        </div>
        <ul className={`nav-elements ${ismobilemenuopen ? 'open' : ''}`}>
          <Link to={"/home"}>
            <li><a href="#Home">Home</a></li>
          </Link>
          <li><a href="#services">Services</a></li>

          <Link to={"/rooms"}>
            <li><a href="#rooms">Rooms</a></li>
          </Link>
          <Link to={"/gallery"}>
            <li><a href="#Gallery">Gallery</a></li>
          </Link>

          <li><a href="#contact">Contact</a></li>


          <li><a href="#about">About</a></li>
         <li><Logout /></li> 

        </ul>





      </nav>
    </div>


  )
}