
import './App.css';
import Signup from './component/Signup.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './component/Login.js';
import Home from './component/Home.js';

import { app } from './component/Firebase.js';
import Profile from './component/Profile.js';
import CreateBlog from './component/CreateBlog.js';

//this is for sending data in firebase
// import { getDatabase, ref ,set } from 'firebase/database';

// const db =getDatabase(app);

function App() {

  // const sendData= ()=>{
  //   set (ref(db ,"users/hassaan"),{
  //     id:1,
  //     name: "M hassaan shafique",
  //     age:24,
  //   })
  // }
  return (
    <>
      {/* <div className='h-btn'>
        <button onClick={sendData}>Send data</button>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Signup />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path ='/profile' element={<Profile/>}/>
          <Route path='/createblog' element= {<CreateBlog/>}/>
       
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
