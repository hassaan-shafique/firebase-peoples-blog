import React from 'react'
const welcome = "Hello";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <h1> {welcome.user} </h1>

        <form>
          <label>First Name</label>
          <input type="text" placeholder='First Name' />
         <label>Last Name</label>
          <input type="text" placeholder='Last Name' />
          <label>Bio</label>
          <input type='text'/>
          <label>Email:</label>
          <input type="email"  placeholder='Write Your Email'/>
          <label>Projects</label>
          <label>Title</label>

          <input type='text'/>
          <label>Description</label>
         <textarea/>
         <button type='submit'> Save</button>
        </form>
      </div>
    </>
  );
}

export default Profile

