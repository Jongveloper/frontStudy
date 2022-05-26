import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router'
import Transform from '../pages/Transform/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate replace to='/basic' />} />
        <Route path='/basic' element={<Transform />} />
      </Routes>
    </Router>
  );
}

export default App;
