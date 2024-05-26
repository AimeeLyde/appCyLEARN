import React from 'react'
import Home from '../pages/Home';
import BestPratices from '../pages/BestPractices';
import Glossary from '../pages/Glossary';
import Login from '../pages/Login';
import News from '../pages/News';
import Register from '../pages/Register';
import Tips from '../pages/Tips';
import WordFromExperts from '../pages/WordFromExperts';
import Users from '../pages/Users/Users';

import MyAccount from '../Dashboard/user-account/MyAccount'
import { Routes, Route } from "react-router-dom";

import  ProtectedRoute  from "./ProtectedRoute";

export const Router = () => {
  return <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/accueil' element={<Home/>} />
    <Route path='/bonnesPratiques' element={<BestPratices/>} />
    <Route path='/glossaire' element={<Glossary/>} />
    <Route path='/connexion' element={<Login/>} />
    <Route path='/actualites' element={<News/>} />
    <Route path='/inscription' element={<Register/>} />
    <Route path='/astuces' element={<Tips/>} />
    <Route path='/motsDesExperts' element={<WordFromExperts/>} />
    <Route path='/users' element={<Users/>} />
    <Route path='/user/profile/me' element={<ProtectedRoute allowedRoles={["player"]} ><MyAccount /></ProtectedRoute>} />
    {/* <Route path='/user/profile/me' element={<MyAccount />} /> */}
  </Routes>
}
export default Router;