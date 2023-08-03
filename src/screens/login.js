import React from "react";
import "./login.css"
import { Link } from "react-router-dom";

export default function login()
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
            <p2><a id="forget" href="#sign-up">Forget Password</a></p2> <br/>
            <Link to={"/signup"}>
            <a id="sign-up" href="#sign-up">Register Now</a>
            </Link>
            </div>
            </div>
        </div>
    )
}