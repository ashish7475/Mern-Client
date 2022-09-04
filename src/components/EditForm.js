import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast ,ToastContainer} from 'react-toastify'
import axios from 'axios'


const EditForm = ({userData,setUserData , toggleViewEdit , setToggleViewEdit , toggleUpdateCreate , setToggleUpdateCreate}) => {

  const navigate = useNavigate()
  const onChange =()=>{
    setToggleViewEdit({
      view:!toggleViewEdit.view,
      edit:!toggleViewEdit.edit
    })
  }
  const handleInputChange = (e)=>{
    
    const {name,value} = e.target
    setUserData({
      ...userData,[name]:value
    })

  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    userData.updated=true;
    const newUser = userData
    const res =await axios.post('https://mern-beginners-7475.herokuapp.com/addUserDetails',newUser,{
      headers:{
        'x-access-token': localStorage.getItem('token')
      }
    })
   if(res.data.message){
    toast.success(res.data.message)
    setTimeout(()=>{
      setToggleViewEdit({
        view:!toggleViewEdit.view,
        edit:!toggleViewEdit.edit
      })
    },2000)
    
    
    }
    
  }
  return (
    <div>
      <ToastContainer/>
  <form onSubmit={handleSubmit} className='form' style={{height:'fitContent',width:300}}>
  
  <label htmlFor="age">Age</label>
  <input type="number" onChange={handleInputChange} className="form-control" value={userData.age} name='age' placeholder="Enter Age"/>


  <label htmlFor="gender">Gender</label>
  <input name='gender' onChange={handleInputChange} type="text" value={userData.gender} className="form-control" placeholder="male/female"/>


  <label htmlFor="mobile">Mobile No</label>
  <input type="text" onChange={handleInputChange} className="form-control" value={userData.mobile} name='mobile' placeholder="XXXX XXXXXX"/>


  <input type="submit" style={{display:'block', width:'100%'}}  className="btn btn-primary " value={userData.age||userData.mobile||userData.gender?'Edit':'AddData'}/>
  <button type="button" style={{display:'block', width:'100%'}} className="btn btn-primary " onClick={onChange}>View</button>
</form> 
    </div>
  )
}

export default EditForm
