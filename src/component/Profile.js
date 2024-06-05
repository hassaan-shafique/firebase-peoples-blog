import React, { useState } from 'react';
import { app } from './Firebase.js';

// import { getDatabase, ref ,set } from 'firebase/database';

// const db =getDatabase(app);

const Profile = () => {
  const [formData,setFromData] =useState ({
    picture:'',
    name :'',
    bio: '',
    email: '',
   title:'',
   description: '',
    

  })

// const [picture, setPicture] =useState('');
//   const [name, setName] = useState("");
//     const [bio, setBio] = useState("");
//      const [email, setEmail] = useState("");
//       const [title, setTitle] = useState("");
//        const [description, setDescription] = useState("");

       //to display the form data we will make a hook  by formdta then 
       //onchange in the form {(e)=> set}
       

       

      

       const handleSubmit = (e)=>{
        e.preventDefault()

    
         console.log("ProfileData:", formData);
    
       }
  
  return (
    <>
      <div className="profile">
        <form onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <input
            onChange={(e) => setFromData({...formData, picture: e.target.value})}
            type="file"
            value={formData.picture}
            name="picture"
            accept="image/*"
            placeholder="profile picture"
            className="profile-picture-input"
          />
          <div className="name-bio">
            <label>Name</label>
            <input
              onChange={(e) => setFromData({ ...formData, name: e.target.value})}
              name="name"
              type="text"
              placeholder=" Name"
              value={formData.name}
              className="name-input"
            />

            <label>Bio:</label>
            <input
              onChange={(e) => setFromData({...formData, bio: e.target.value})}
              name="bio"
              type="text"
              value={formData.bio}
              className="bio-input"
            />
          </div>
          <div className="email">
            <label>Email:</label>
            <input
              onChange={(e) => setFromData({...formData, email: e.target.value})}
              name="email"
              type="email"
              placeholder="Write Your Email"
              value={formData.email}
              className="email-input"
            />
          </div>
          <div className="project">
            <h3>Projects</h3>
            <label>Title</label>

            <input
              onChange={(e) => setFromData({...formData, title: e.target.value})}
              name="title"
              type="text"
              value={formData.title}
              className="project-title-input"
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              onChange={(e) => setFromData( {...formData, description: e.target.value})}
              value={formData.description}
              className="description-textarea"
            />
          </div>

          <button  onClick={handleSubmit} type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>

      {/* //displaying the form Data  */}
       <div> 
      <h1> Name : {formData.name}</h1>
      <h1> Bio: {formData.bio}</h1>
      </div>
    </>
  );
}

export default Profile

