import React from 'react';
import Navbar from './components/Navbar';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Flies from './pages/Flies';
import { HashRouter } from 'react-router-dom';

import './App.css';

function App() {

    return (
        
        <div>
            <Navbar/>
            <HashRouter>
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/flies" element={<Flies />}></Route>
                </Routes>
                </HashRouter>
         
        </div>
    );

}

export default App;