import React from "react";

import "./register.css"
import { Link } from "react-router-dom";


export default function Register()
{
    return(
        <div className="login-container">
        <div className="log">
        <div>
        <h4 className="egiglo">EGIGLO HOTELS <br /><span className="suites">AND <br /> SUITES.</span></h4>
        <div className="copy">&copy; Egiglo-Hotels, All Rights Reserved. Designed By J-Tech</div>
           </div>
        <hr />
        
       <div className="login-cont">
            <h5 className="login">Register Now!</h5>
            <h5 className="use">User Sign-Up</h5>
            
            
            <input type="text"  id="username" name="username" placeholder="Email" required/>
            <br />
            <input type="text"  id="fullname" name="username" placeholder="Full Name" required/>
            <br />
            <input type="password"  id="password" name="password" placeholder="Password" required/>  
            <br />
            <input type="text"  id="sex" name="sex" placeholder="Sex" required/>  
            <br />
            <input type="number"  id="number" name="number" placeholder="Phone Number" required/>  
            <br />
            
            <input className="submit" type="submit" value="Register Now."/>
            <br />
           
            <Link to={"/login"}>
            <a id="sign-up" href="#login">Login</a>
            </Link>
        </div>
        </div>
        </div>
    )
}