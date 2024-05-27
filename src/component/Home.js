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
          <span className="welcome-text">Welcome, Hassaan Shafique</span>
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
                <Link className="link" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="link" to="/myblogs">
                  My Blogs
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>

      <div className="search-menu">
        <div className="search-div">
          <input
            className="search-input"
            type="text"
            placeholder="Search Blogs"
          />
          <button className="search-button">Search</button>
        </div>

        <div className="add-blogs">
          <button> Write Blog</button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home
