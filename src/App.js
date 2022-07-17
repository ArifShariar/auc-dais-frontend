import './App.css';
import React from 'react';
import NavBar from "./components/NavBar";
import LogInPage from "./components/LogIn";
import SignUp from "./components/SignUp";
import History from "./components/History";
import LiveAuctions from "./components/LiveAuctions";
import SavedAuctions from "./components/SavedAuctions";
import Location from './components/Location';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddAuction from "./components/AddAuction";
import Home from './components/pages/Home';

function App() {
    const marginTop = {
        marginTop: "10px"
    };

  return (
    <Router>
        <div className='navbar-container'>
            <NavBar/>
        </div>
         
        <Routes>  
            <Route path="/login" element={<LogInPage/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/location" element={<Location/>}/>
            <Route path="/liveAuctions" element={<LiveAuctions/>}/>
            <Route path="/savedAuctions" element={<SavedAuctions/>}/>
            <Route path="/addAuction" element={<AddAuction/>}/>           
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
