import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router'
import Transform from '../pages/Transform/index';
import Animation from "../pages/Animation";
import ThreeD from "../pages/ThreeD";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate replace to='/basic' />} />
        <Route path='/basic' element={<Transform />} />
        <Route path='/animation' element={<Animation />} />
        <Route path='/three' element={<ThreeD />} />
      </Routes>
    </Router>
  );
}

export default App;
