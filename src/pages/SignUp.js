import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate()
  const [user , setUser] = React.useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(!user.name || !user.email || !user.password || !user.confirmPassword){
      toast.error("Enter full details",{position:toast.POSITION.TOP_CENTER})
    }
    else if(user.password!=user.confirmPassword){
      toast.error("Passwords Dont Match",{position:toast.POSITION.TOP_CENTER})
    }
    else if(user.password.length < 6){
      toast.error("Password must be atleast 6 characters long",{position:toast.POSITION.TOP_CENTER})
    }
    else{
      const newUser = {name:user.name,email:user.email,password:user.password}
      
      await axios.post('https://mern-beginners-7475.herokuapp.com/register',newUser)
      .then(response=>{
        toast.success(response.data.message,{position: toast.POSITION.TOP_CENTER})
        setTimeout(() => {
          navigate("/")
     }, 2000);
        
  })
 }
    
  }
  const handleInputChange=(e)=>{
    const {name,value} = e.target
    
    setUser(
      {
        ...user,
        [name]:value
      }
    )
  }
  return (
 <div className='container'>
  <ToastContainer/>
  <form style={{height:'fitContent',width:300}} onSubmit={handleSubmit}>
  <h1>User Registration Page</h1>
    <label htmlFor="name">Name</label>
    <input type="text" onChange={handleInputChange} className="form-control" name='name' value={user.name} placeholder="Enter Name"/>
 
  
    <label htmlFor="email">Email address</label>
    <input name='email' onChange={handleInputChange} value={user.email} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small  className="form-text text-muted">We'll never share your email with anyone else.</small>
  
  
    <label htmlFor="password">Password</label>
    <input type="password" onChange={handleInputChange} className="form-control" name='password' value={user.password} placeholder="Password"/>
    <label htmlFor="confirmPassword">Confirm Password</label>
    <input type="password" onChange={handleInputChange} value={user.confirmPassword} className="form-control" name='confirmPassword' placeholder="Confirm Password"/>
    <button type="submit" className="btn btn-primary ">SignUp</button>
</form>
</div> 
  )
}

export default SignUp
