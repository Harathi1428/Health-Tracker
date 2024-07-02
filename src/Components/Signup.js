import React,{useState} from "react";
import {Link} from 'react-router-dom';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Signup(){
    const [state,setState]=useState('SignUp')
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [successMessage, setSuccessMessage] = useState('');
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/signup',{username,email,password})
        .then(result=>{
            const userId = result.data.userId;
            // console.log(userId)
            localStorage.setItem('userId', userId);
            // console.log(localStorage.getItem(userId))
            console.log("Signup successful!");
        
            setSuccessMessage('Created An Account Successfully')
            setUsername('');
            setEmail('');
            setPassword('');
            navigate('/Works')
        })
        .catch(err=>{console.log("NEW ERROR",err)
        setSuccessMessage('')
    })
    }
    return(
        <section className="sec1">
             {successMessage && 
                    <div className="success-message">
                        {successMessage}
                    </div>
                }
        <div className="sign">
        <h1 className="head">{state}</h1>
         <form onSubmit={handleSubmit}>
            {state ==='SignUp'?
                <div className="frame" > 
                <label For="username"><strong>Username:</strong></label><br/>
                <input type="text" id="username" placeholder="enter username" value={username} onChange={(e)=>{setUsername(e.target.value)}} required/>
            <br></br><br></br>
            </div>:<></>}
            <div className="frame">
                <label For="email"><strong>Email:</strong></label><br/>
                <input type="email" id="email" placeholder="enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
            </div><br></br><br></br>
            <div className="frame">
                <label For="password"><strong>Password:</strong></label><br/>
                <input type="password" id="password" placeholder="enter password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
            </div><br></br><br></br>
            <div className="bns">
            {state==='SignUp'?
            <div><center>
            <button className="btn" type="submit">Signup</button></center>
            <p>Already have an account?<Link to="/login"><span onClick={()=>{setState('Login')}}> Log in here</span></Link></p>
            </div>:
            <div>
                <center>
            <button className="btn" type="submit">Log In</button></center>
            <p>Create an account ?<Link to="/signup"><span onClick={()=>{setState('SignUp')}}> Signup here.</span></Link></p>
            </div>}
            </div>
        </form>
        </div>
        </section>
        
    );
}
export default Signup;