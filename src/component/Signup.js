import React from 'react'

const signup = () => {
  return (
    <>
      <div className="signup">
        <form className='signup-form'>
          <label for="username">Name: </label>
          <input
            type="text"
            id="name"
            name="username"
            placeholder="write your Name"
          />
          <label for="username">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="write your Email"
          />
          <label for="username">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="write your Password"
          />
          <button type='submit'> Signup</button>

        </form>
      </div>
    </>
  );
}
export default signup
