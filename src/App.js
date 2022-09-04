import React from 'react'
import {  Routes ,Route } from "react-router-dom"
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import './App.css'


const App = () => {
  const [login , setLogin] = React.useState(false)
  return (
    <React.StrictMode>
    
    <Routes>
        <Route path='/' element={<Login login={login} setLogin={setLogin}/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/dashboard' 
        element={
             <Dashboard login={login} setLogin={setLogin}/>
            }/>
        
        
    </Routes>
    
    </React.StrictMode>
   
  )
}

export default App
