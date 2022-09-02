import React from 'react'
import {  Routes ,Route } from "react-router-dom"
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import './App.css'


const App = () => {
  
  return (
    <React.StrictMode>
    
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/dashboard' 
        element={
             <Dashboard/>
            }/>
        
        
    </Routes>
    
    </React.StrictMode>
   
  )
}

export default App
