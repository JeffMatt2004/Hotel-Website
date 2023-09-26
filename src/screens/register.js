import React, {useState} from "react";
import axios from 'axios'
import "./register.css"
import { Link } from "react-router-dom";
import {useNavigate, useHis} from 'react-router-dom'
import { Toast } from "bootstrap";


export default function Register({})
{
   const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:"",
        username:"",
        password:"",
        phone_no:"",
        sex: ""
   
    });
    const handleChange = (e) =>{
        const {name, value}= e.target;
        setFormData(function(prevData){
            return{
            ...prevData,
            [name]:  value ,
            };
        });
        };
      async function handleSubmit(e){
        e.preventDefault();
        try{
            const response = await fetch('http://34.201.251.63/v1/admin/register/',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
         
            
        });
      if(response.ok){
        const responseData =await response.json()
        alert('Registration Successful, Please click ok Login')
        navigate('/login')
      }
      else{
        alert('registration failed')
      }}
      catch(error){
        alert(error.message)
        console.log(formData)
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
            <input type="password"  id="password" name="password" value={formData.password} onChange={handleChange}  placeholder="Password" required/>  
            <br />
            <input type="text"  id="sex" name="sex" value={formData.sex} placeholder="Sex" onChange={handleChange} required/>  
            <br />
            <input type="text"  id="number" name="phone_no" value={formData.phone_no} placeholder="Phone" onChange={handleChange} required/>  
            
            <input className="submit" type="submit" value="Register Now."/>
            </form>
          
           
            <Link to={"/login"}>
            <a id="sign-up" href="#login">Login</a>
            </Link>
        </div>
        </div>
        </div>
    )
}