import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './Login.css'
import {ToastContainer ,toast} from 'react-toastify'
import axios from 'axios'

const Login = ({login,setLogin}) => {

  const navigate = useNavigate()
  const [user,setUser] = React.useState({
    email:"",
    password:""
  })
  const handleInputChange =(e)=>{
   const {name,value} = e.target
   
   setUser({
    ...user,
    [name]:value
   })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!user.email || !user.password){
      toast.error("Enter full details")
    }
    try {
     axios.post('https://mern-beginners-7475.herokuapp.com/login',user)
    .then(response=>{
      
      if(response.data.status==='ok'){
        
        localStorage.setItem('token',response.data.token)
        setLogin(true)
       
        toast.success(response.data.message,{position: toast.POSITION.TOP_CENTER})
        setTimeout(()=>navigate('/dashboard'),2000)
      }
      else{
        toast.error(response.data.message,{position: toast.POSITION.TOP_CENTER})

      }}
      )
    } catch (error) {
      console.log(error)
    }
    
      }
    
  
  return (
 <div className='container'>
  <ToastContainer/>
  <form style={{height:'fitContent',width:300}} onSubmit={handleSubmit}>
  <h1>User Login Page</h1>
    
    <label htmlFor="email">Email address</label>
    <input name='email' onChange={handleInputChange} value={user.email} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>

    <label htmlFor="password">Password</label>
    <input type="password" value={user.password} onChange={handleInputChange}  className="form-control" name='password' placeholder="Password"/>
    
    <input style={{width:'100%'}} type="submit" className="btn btn-primary " value="Login"></input>

    <span>New User ? SignUp </span>
    <Link to='/SignUp'>
      <button type="button" style={{width:'100%'}} className='btn1 btn-primary'>SignUp</button>
    </Link>
  
</form>
</div> 
  )
}

export default Login
