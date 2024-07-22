import React, { useState } from 'react'
import './Login.css'
import axios from "axios"
import { useNavigate,Link } from 'react-router-dom';
import user_icon from '../Assets/user.svg'
import lock_icon from '../Assets/lock.svg'
import DropdownAd from '../SpecialComponents/DropdownAd';

const Login = props => {
    /* function Login() {
        const [email,setEmail]=useState('')
        const [password,setPassword]=useState('')
        const history=useNavigate();
        async function submit(e){
            e.preventDefault();

            try{

                await axios.post("http://localhost:3000/",{
                    email,password
                })
                .then(res=>{
                    if(res.data="exist"){
                        history("/Home",{state:{id:email}})
                    }
                    else if(res.data="notexist"){
                        alert("User have not sign up")
                    }
                })
                .catch(e=>{
                    alert("wrong details")
                    console.log(e);
                })
            }
            catch(e){
                console.log(e);
            }
        }
    } */


   const [name, setName] = useState('');
   const [password, setPassword] = useState('');
  return (
    <div className='containerL'>
        <div className='icon-wrapperL'>
        <img src={user_icon} alt='user icon'/>
        </div>
        <div className= "header">
            <div className='textLo'>User Login</div>
        </div>
        <form action='POST'>
        <div className= "inputs">
            <div className='input'>   
                <div className='whiteContainerL1' id='txt1'>    
                    <div className='textbox' id='txt1'>
                    <input type='text' placeholder='Username' id='txt1' className='textb' value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className='icon-wrapperL2'>
            <img src={lock_icon} alt='lock icon'/>
            </div>
            <div className='input' id='txt2'>
                <div className='whiteContainerL2'id='txt2'>
                    <div className='textbox'>
                    <input type='password' placeholder='Password' className='textb' value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="forgot-password"><span>Forgot Password?</span></div>
        <DropdownAd/>
        {/* <Routes>
            <Route path='/paymentS' element={<PaymentSuccess/>}/>
            <Route path='/Guider-page' element={<PaymentSuccess/>}/>
            <Route path='/paymentF' element={<PaymentSuccess/>}/>
        </Routes> */}
        <div className="submit-container">
            <button className="submitL">Login</button>
        </div>
        </form>
        <div className="dont-acc">
            Don't have an account? <span  className="signL">Sign up</span>
        </div>
        </div>
  );
}

export default Login;