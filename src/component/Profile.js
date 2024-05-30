import React, { useState } from 'react';



const Profile = () => {

  const [name, setName] = useState("");

    const [bio, setBio] = useState("");
     const [email, setEmail] = useState("");
      const [title, setTitle] = useState("");
       const [description, setDescription] = useState("");
      

       const handleSubmit = (e)=>{
        e.preventDefault()

         const profileData = {
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
          <label>Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Write Your Email"
            value={email}
          />
          <label>Projects</label>
          <label>Title</label>

          <input
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            type="text"
            value={title}
          />
          <label>Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <button type="submit"> Save</button>
        </form>
      </div>
    </>
  );
}

export default Profile

