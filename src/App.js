import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SpecificUser from './components/SpecificUser';
import Users from './components/Users';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/employee/:id' element={<SpecificUser />} />
      </Routes>
    </Router>
  );
}

export default App;
