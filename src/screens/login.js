import React , {useState, useEffect} from "react";
import axios from 'axios'
import "./login.css"
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'



export default function Login()
{
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
       
    });
    const handleChange = (e) =>{
        const {name, value}= e.target;
        setFormData(function(prevData){
            return{
            ...prevData,
            [name]: value,
            };
        });
        };
    const HandleSubmit = async(e) =>{
        e.preventDefault();
            try{
                const response = await axios.post('http://3.86.201.69/v1/admin/login/', formData);
                const {access, refresh} = response.data.tokens;
                localStorage.setItem('accessToken', access)
                localStorage.setItem('refreshToken', refresh)
               
            

                alert("Login Successful!, Redirecting...")
                navigate("/home")

          

            }
            catch (error){
                console.error(error.message)
            }
        };
 
        
    return(

        <div className="login-container">
             <div className="log">
             <div>
              
             <h4 className="egiglo">EGIGLO HOTELS <br />AND <br />SUITES</h4>
             <div className="copy">&copy; Egiglo-Hotels, All Rights Reserved. Designed By J-Tech</div>
                </div>
             <hr />
             
            <div className="login-cont">
               
               
            <h5 className="login">Welcome Back!</h5>
            <h5 className="use">User Login</h5>
            
            <form action="" onSubmit={HandleSubmit}>
            <input type="text"  id="username" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required/>
            <br />
            <input type="password"  id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required/>  
            <br />
            
          
            <input className="submit" type="submit" value="Login Now."/>
            
            </form>
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