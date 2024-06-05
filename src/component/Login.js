import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth , signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './Firebase';




const auth = getAuth(app); 

const Login = () => {

  const [email,setEmail] =useState ('');
  const [password, setPassword] = useState("");
   
   const navigate = useNavigate();



  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth ,email, password)
      .then((userCredential) => {
        console.log("Successfully logged in:", userCredential.user);
        alert("logged in Successfully Click OK to Continue" )
      
        setEmail("");
        setPassword("");
        navigate("/home"); 
      })

      .catch((error) => {
        console.error("Error logging in:", error);
        alert("Incorrect Email and Password")

        
        
      });
  };
  return (
    <>
      <div className="Home">
        <div className="home-img">
          <img src="/Brimston.png" width={750} height={695} alt="home-img" />
        </div>


        <div className="signup">
          <form className="signup-form">
          
            <h2 className="signup-head">Welcome Back, Login Here</h2>
            <label >Email: </label>
            <input 
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="email" 
             placeholder=" Email" 
             required
              />
            <label >Password: </label>
            <input
            onChange={e=> setPassword(e.target.value)}
            value={password}
              type="password"
              placeholder=" Password"
              required
            />
            
            <button type='submit' onClick={handleLogin}> Login</button>
            <div>
              Create an Account <Link to="/"> Signup</Link>
            </div>
            <div className="google-login">
              <div className="or-container">
                <div className="line"></div>
                <div className="or-text">OR</div>
                <div className="line"></div>
              </div>

              
                <button className='google-btn'>
                  <img
                    src="/google.svg"
                    width={25}
                    height={25}
                    alt="google img"
                  />
                  Continue with Google
                </button>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login
