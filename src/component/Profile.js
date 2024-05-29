import React, { useState } from 'react'
const welcome = "Hello";



const Profile = () => {

  const [name, setName] = useState("");

    const [bio, setBio] = useState("");
     const [email, setemail] = useState("");
      const [title, settitle] = useState("");
       const [description, setDescription] = useState("");
  
  return (
    <>
      <div className="profile">
        <h1> {welcome.user} </h1>

        <form>
        
          <label>First Name</label>
          <input 
          type="text" 
          placeholder='First Name' 
          value={name}
          />
        
          <label>Bio</label>
          <input type='text'
            value={bio}
          />
          <label>Email:</label>
          <input 
          type="email" 
           placeholder='Write Your Email'
            value={email}
           />
          <label>Projects</label>
          <label>Title</label>

          <input type='text' 
            value={title}
          />
          <label>Description</label>
         <textarea 
          value={description}
         />
         <button type='submit'> Save</button>
        </form>
      </div>
    </>
  );
}

export default Profile

