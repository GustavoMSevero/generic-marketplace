import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import { Container } from './styles';
import Leading from './pages/Leading';
import Login from './pages/Login';
import Register from './pages/Register';

const Rout: React.FC = () => {
 
  return (
      <Routes>
          <Route path="/" element={ <Leading/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/register" element={ <Register/> } />
      </Routes>
  );
}

export default Rout;