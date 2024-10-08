import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Flies from './pages/Flies';

import './App.css';

function App() {

    return (
        
        <div>
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/flies" element={<Flies />}></Route>
                </Routes>
            </BrowserRouter>
         
        </div>
    );

}

export default App;