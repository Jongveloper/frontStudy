import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router'
import Transform from '../pages/Transform/index';
import Animation from "../pages/Animation";
import ThreeD from "../pages/ThreeD";
import Flex from "../pages/Flex";
import Event from "../pages/Event";
import Event2 from "../pages/Event2";
import Event3 from "../pages/Event3";
import ThreeDoor from "../pages/ThreeDoor";
import Object from "../pages/Object";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate replace to='/basic' />} />
        <Route path='/basic' element={<Transform />} />
        <Route path='/animation' element={<Animation />} />
        <Route path='/three' element={<ThreeD />} />
        <Route path='/threedoor' element={<ThreeDoor />} />
        <Route path='/flex' element={<Flex />} />
        <Route path='/event' element={<Event />} />
        <Route path='/event2' element={<Event2 />} />
        <Route path='/event3' element={<Event3 />} />
        <Route path='/object' element={<Object />} />
      </Routes>
    </Router>
  );
}

export default App;
