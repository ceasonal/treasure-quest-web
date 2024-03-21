import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WebGame from './pages/UnityPlayer';
const App = () => {
  
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/webgame" element={<WebGame />} />
    </Routes>
   </Router>
   </>
  );
};

export default App;
