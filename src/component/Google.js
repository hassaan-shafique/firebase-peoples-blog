import React, { useEffect } from 'react'
import {auth,provider} from './Firebase'
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import Home from './Home'



const Google = () => {
  const [value ,setValue] = useState('');
  const handleClick= () =>{
    signInWithPopup(auth,provider) .then ((data) =>{
   setValue(data.user.email)
   localStorage.setItem ("email", data.user.email)
    })
  }

  useEffect (()=>{
    setValue(localStorage.getItem('email'))
  })
  return (
    <div>
    {value? <Home/>: 
      <button onClick={handleClick}
      className="google-btn">
        <img src="/google.svg" width={25} height={25} alt="google img" />
        Continue with Google
      </button>
    }
    </div>
  );
}

export default Google
