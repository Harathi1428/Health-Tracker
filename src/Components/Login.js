import React,{useState} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Signup.css';
import { useNavigate } from "react-router-dom";
function Login(){
    const [state,setState]=useState('Login')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(response=>{console.log(response)
            if(response.data){
                console.log(response)
                const userId = response.data.userId;
                localStorage.setItem('userId', userId);
                navigate('/Works')
            }
            else{
                console.log(response.data)
                console.log("error login")
            }    
        })
        .catch(err=>console.log("NEW ERROR",err))
    }
    return(
        <section className="sec1">
        <div className="sign">
        <h1 className="head">{state}</h1>
         <form onSubmit={handleSubmit}>
            {state ==='SignUp'?
            <div >
                <label For="username"><strong>Username:</strong></label><br/>
                <input type="text" id="username" placeholder="enter username" required/>
            <br></br><br></br>
            </div>:<></>}
                <label For="email"><strong>Email:</strong></label><br/>
                <input type="email" id="email" placeholder="enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
            <br></br><br></br>
                <label For="password"><strong>Password:</strong></label><br/>
                <input type="password" id="password" placeholder="enter password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
            <br></br><br></br>
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
export default Login;