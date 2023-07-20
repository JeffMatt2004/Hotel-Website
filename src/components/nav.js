import React from "react"
import LOGO from "../images/LOGO.png"
import user from "../images/user.png"
import search from "../images/search.png"
import "./nav-css.css"
import { Link } from "react-router-dom"

export default function Nav() {

  return (
    <div className="navigation">
      <nav className="nav-bar" id="nav-bar">
        <a href="#"><img className="img-logo" src={LOGO} alt="website logo" width="80px" /></a>
        <ul className="nav-elements">
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
          
        </ul>
     
          <Link to={"/rooms"}>
          <a href="/login">LOGIN</a>
          </Link>
        

      </nav>
    </div>


  )
}