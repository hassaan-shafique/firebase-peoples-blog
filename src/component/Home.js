import React from 'react';
import Signup from '../component/Signup.js'
import {Link} from 'react-router-dom'



const Home = () => {
  return (
    <div className="Home">
      <div className="home-img">
        <img src="/home.jpg" width={750} height={695} alt="home-img" />
      </div>
      <div>
        <div className="form">
          <Signup />
        </div>
        <div>
          Already have account? <a>Login</a>
        </div>
      </div>
    </div>
  );
}

export default Home
