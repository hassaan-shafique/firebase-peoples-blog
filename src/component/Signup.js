import React from 'react'
import Login from './Login';

const signup = () => {
  return (
    <>
      <div className="signup">
        <form className="signup-form">
          <h2 className='signup-head'>Join us Today, Signup</h2>
          <label for="username">Name: </label>
          <input type="text" id="name" name="username" placeholder=" Name" />
          <label for="username">Email: </label>
          <input type="email" id="email" name="email" placeholder=" Email" />
          <label for="username">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder=" Password"
          />
          <button type="submit"> Signup</button>
        </form>
    
      </div>
    </>
  );
}
export default signup
