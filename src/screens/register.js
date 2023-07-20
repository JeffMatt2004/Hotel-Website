import React from "react";
import "./login.css"
import "./register.css"
import { Link } from "react-router-dom";


export default function Register()
{
    return(
        <div className="login-container">
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
    )
}