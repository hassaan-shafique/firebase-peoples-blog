import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './Firebase';
import { useNavigate } from 'react-router-dom';
import Google from './Google';

const auth = getAuth(app); 

const Signup = () => {
  const [name,setName] =useState ("");
    const [email, setEmail] = useState(""); 
  const [password,setPassword] = useState ("");
   const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const signupUser  =(e) =>{
    e.preventDefault();

   createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
     
       
       console.log("User signed up successfully:", userCredential.user);
       setMessage("Registered Successfully!");
       setName("");
       setEmail("");
       setPassword("");
        navigate("/login"); 
      
      
     })
     .catch((error) => {
       console.error("Error signing up:", error);

     });
  }

  return (
    <>
      <div className="Home">
        <div className="home-img">
          <img src="/Brimston.png" width={750} height={695} alt="home-img" />
        </div>


        <div className="signup">
          <form className="signup-form">
            <h2 className="signup-head">Join us Today, Signup</h2>

            <label >Name: </label>
            <input 
            onChange={e=>setName(e.target.value)}
            value={name}
            type="text" 
            placeholder=" Name" 
            required
            />

            <label>Email: </label>
            <input 
            onChange={e=>setEmail(e.target.value)}
            value={email}
            type="email"
             
              placeholder=" Email"
              required
               />
            <label >Password: </label>
            <input
            onChange={e=>setPassword(e.target.value)}
            value={password}
              type="password"
              placeholder=" Password"
              required
            />
            <button type='submit' onClick={signupUser}> Signup</button>

           

            <div className='already'>
              Already have Account? <Link to="/login"> Login</Link>
            </div>
            <div className="google-login">
              <div className="or-container">
                <div className="line"></div>
                <div className="or-text">OR</div>
                <div className="line"></div>
              </div>


              <Google/>
              
                {/* <button className='google-btn'>
                <img
                  src="/google.svg"
                  width={25}
                  height={25}
                  alt="google img"
                />
                Continue with Google
                </button>
               */}

            </div>
            
          </form>
        </div>
      </div>
      
    </>
  );
}
export default Signup
