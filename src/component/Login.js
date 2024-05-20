import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="Home">
        <div className="home-img">
          <img src="/home.jpg" width={750} height={695} alt="home-img" />
        </div>
        <div className="signup">
          <form className="signup-form">
            <h2 className="signup-head">Welcome Back, Login Here</h2>
            <label for="username">Email: </label>
            <input type="email" id="email" name="email" placeholder=" Email" />
            <label for="username">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder=" Password"
            />
            <button type="submit"> Login</button>
            <div>
              Create an Account <Link to='/'> Signup</Link>
            </div>
            <div className="google-login">
              <div className="or-container">
                <div className="line"></div>
                <div className="or-text">OR</div>
                <div className="line"></div>
              </div>

              <div className="google">
                <img
                  src="/google.svg"
                  width={30}
                  height={30}
                  alt="google img"
                />
                Continue with Google
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login
