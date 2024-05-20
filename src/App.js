
import './App.css';
import Signup from './component/Signup.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './component/Login.js';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Signup />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
