import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'



  

const Home = () => {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const toggleDropdown = () => {
     setIsDropdownOpen(!isDropdownOpen);
   };
 

  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <span className="welcome-text">Welcome, User Name!</span>
        </div>

        <div className="navbar-right">
          <img
            src="profile.svg"
            width={35}
            height={35}
            alt="Profile Picture"
            className="profile-image"
            onClick={toggleDropdown}
          />

          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          )}
         
        </div>
       
      </nav>
    </>
  );
}

export default Home
