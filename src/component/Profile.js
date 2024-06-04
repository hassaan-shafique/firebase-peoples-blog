import React, { useState } from 'react';
import { app } from './Firebase.js';

// import { getDatabase, ref ,set } from 'firebase/database';

// const db =getDatabase(app);

const Profile = () => {

const [picture, setPicture] =useState('');
  const [name, setName] = useState("");
    const [bio, setBio] = useState("");
     const [email, setEmail] = useState("");
      const [title, setTitle] = useState("");
       const [description, setDescription] = useState("");
       
      

       const handleSubmit = (e)=>{
        e.preventDefault()

         const profileData = {
          picture,
           name,
           bio,
           email,
           title,
           description,
         };
         console.log("ProfileData:", profileData);
    
       }
  
  return (
    <>
      <div className="profile">
        <form onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <input
            onChange={(e) => setPicture(e.target.value)}
            type="file"
            value={picture}
            name="picture"
            placeholder="profile picture"
          />
          <div>
            <label> Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              name="name"
              type="text"
              placeholder=" Name"
              value={name}
            />

            <label>Bio</label>
            <input
              onChange={(e) => setBio(e.target.value)}
              name="bio"
              type="text"
              value={bio}
            />
          </div>
          <label>Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Write Your Email"
            value={email}
          />
          <div>
            <label>Projects</label>
            <label>Title</label>

            <input
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              type="text"
              value={title}
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>

          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}

export default Profile

