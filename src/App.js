
import './App.css';
import Home from './component/Home.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './component/Login.js';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
