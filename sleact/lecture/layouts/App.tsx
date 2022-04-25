import React, { FC } from "react";
import { Routes, Route } from 'react-router-dom'
import { Navigate } from "react-router";
import Login from '@pages/LogIn'
import SignUp from '@pages/SignUp'
const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/login' />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

export default App;