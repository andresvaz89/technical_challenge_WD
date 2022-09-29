import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import React from 'react';
import { useState } from 'react';
import PhoneContext from './context/phone';
import './App.scss';

function App() {
  const [phone, setPhone] = useState(null);

  return (
    <div>
      <PhoneContext.Provider value={{ phone, setPhone }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </PhoneContext.Provider>
    </div>
  );
}

export default App;
