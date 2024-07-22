// ./Components/Signup/Signup.js
import React, { useState } from 'react';
import './Signup.css'
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
import user_icon from '../Assets/user.svg'
import lock_icon from '../Assets/lock.svg'
import email_icon from '../Assets/email.svg'
import Dropdown from '../SpecialComponents/Dropdown';

const Signup = () => {
        /* const [username,setUsername]=useState('')
        const [email,setEmail]=useState('')
        const [password,setPassword]=useState('')
        const navigate = useNavigate();

        const onSubmit = async(e)=>{
            e.preventDefault();

            try{

                const res = await axios.post("http://localhost:3000/Signup",{
                    username,email,password
                })
                
                    if(res.data==="exist"){
                        alert("User already exist")
                    }
                    else if(res.data==="notexist"){
                        navigate("/Home",{state:{id:email}})
                    }
                }
                catch(error){
                    alert("wrong details")
                    console.error(error);
                }
            } */
    


  return (
    <div className='container'>
        <div className='icon-wrapper'>
        <img src={user_icon} alt='user icon'/>
        </div>
        <div className= "header">
            <div className='text'>Sign up</div>
        </div>
        <form method='POST' >
        <div className= "inputs">
            <div className='input'>   
                <div className='whiteContainer1' id='txt1'>    
                    <div className='textbox' id='txt1'>
                    <input type='text' placeholder='Username' id='txt1' className='textb'/>
                    </div>
                </div>
            </div>
            <div className='icon-wrapper3'>
                <img src={email_icon} alt='email icon'/>
            </div>
            <div className='input' id='txt3'>   
                <div className='whiteContainer3' id='txt3'>    
                    <div className='textbox' id='txt3'>
                    <input type='text' placeholder='Email' id='txt1' className='textb'/>
                    </div>
                </div>
            </div>
            <div className='icon-wrapperS2'>
            <img src={lock_icon} alt='lock icon'/>
            </div>
            <div className='input' id='txt2'>
                <div className='whiteContainer2'id='txt2'>
                    <div className='textbox'>
                    <input type='password' placeholder='Password' className='textb'/>
                    </div>
                </div>
            </div>
            <div className='icon-wrapper4'>
            <img src={lock_icon} alt='lock icon'/>
            </div>
            <div className='input' id='txt4'>
                <div className='whiteContainer4'id='txt4'>
                    <div className='textbox'>
                    <input type='password' placeholder='Password' className='textb'/>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="submit-container">
            <button type='submit' className="submitS">Submit</button>
        </div>
        </form>
        <Dropdown/>
        <div className="alrd-acc">
            Already have an account? <span to="/Login" className="logS">Login</span>
        </div>
        </div>
  )
}

export default Signup;