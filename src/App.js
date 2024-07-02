import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './Components/Signup.js';
import Home from './Components/Home.js';
import Login from './Components/Login.js';
import  About from './Components/About.js';
import Contact from './Components/Contact.js';
import Works from './Components/Works.js';
import View from './Components/View.js';


function App() {
  return (
    <Router>
      <div className="App1">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workouts" element={< View/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

