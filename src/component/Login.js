import React from 'react'

const Login = () => {
  return (
    <>
      <form>
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
    </>
  );
}

export default Login
