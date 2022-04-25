import React, { FC } from "react";
import loadable from '@loadable/component';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from "react-router";

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/login' />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

export default App;