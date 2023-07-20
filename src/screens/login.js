import React from "react";
import "./login.css"
import { Link } from "react-router-dom";

export default function login()
{
    return(
        <div className="login-container">
            <h5 className="login">Welcome Back!</h5>
            <h5 className="use">User Login</h5>
            
            <input type="text"  id="username" name="username" placeholder="Email" required/>
            <br />
            <input type="password"  id="password" name="password" placeholder="Password" required/>  
            <br />
            <Link to={"/home"}>
            <input className="submit" type="submit" value="Login Now."/>
            </Link>
            <br />
            <p2><a id="forget" href="#sign-up">Forget Password</a></p2>
            <Link to={"/signup"}>
            <a id="sign-up" href="#sign-up">Register Now</a>
            </Link>
            
        </div>
    )
}