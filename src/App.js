import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SpecificEmployee from './components/SpecificEmployee';
import Employees from './components/Employees';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Employees />} />
        <Route path='/employee/:id' element={<SpecificEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
