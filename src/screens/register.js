import React, {useState} from "react";
import axios from 'axios'
import "./register.css"
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'


export default function Register({})
{
   const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:"",
        username:"",
        password:"",
   
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
      async function handleSubmit(e){
        e.preventDefault();
        try{
            const response = await axios.post ('http://3.86.201.69/v1/admin/register/', formData);
           const {access, refresh} = response.data.tokens
           localStorage.setItem('accessToken', access);
           localStorage.setItem('refreshToken', refresh)
            alert('Registration Successful');
            navigate('/home')
            
        }
        catch(error){
            alert('Registration failed!', error.message);
        }
    };

    return(
        <div className="login-container">
        <div className="log">
        <div>
        <h4 className="egiglo">EGIGLO HOTELS <br />AND <br /> SUITES</h4>
        <div className="copy">&copy; Egiglo-Hotels, All Rights Reserved. Designed By J-Tech</div>
           </div>
        <hr />
        
       <div className="login-cont">
            <h5 className="login">Register Now!</h5>
            <h5 className="use">User Sign-Up</h5>
            
            <form action="" onSubmit={handleSubmit}>
            <input type="email"  id="username" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required/>
            <br />
            <input type="text"  id="fullname" name="username" value={formData.username} onChange={handleChange}  placeholder="Full Name" required/>
            <br />
            <input type="text"  id="password" name="password" value={formData.password} onChange={handleChange}  placeholder="Password" required/>  
            <br />
            <input type="text"  id="sex" name="sex" placeholder="Sex" />  
            <br />
            <input type="number"  id="number" name="number" placeholder="Phone Number" />  
            <br />
            
            <input className="submit" type="submit" value="Register Now."/>
            </form>
            <br />
           
            <Link to={"/login"}>
            <a id="sign-up" href="#login">Login</a>
            </Link>
        </div>
        </div>
        </div>
    )
}