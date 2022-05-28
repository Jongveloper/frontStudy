import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router'
import Transform from '../pages/Transform/index';
import Animation from "../pages/Animation";
import ThreeD from "../pages/ThreeD";
import Flex from "../pages/Flex";
import Event from "../pages/Event";
import Event2 from "../pages/Event2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate replace to='/basic' />} />
        <Route path='/basic' element={<Transform />} />
        <Route path='/animation' element={<Animation />} />
        <Route path='/three' element={<ThreeD />} />
        <Route path='/flex' element={<Flex />} />
        <Route path='/event' element={<Event />} />
        <Route path='/event2' element={<Event2 />} />
      </Routes>
    </Router>
  );
}

export default App;
