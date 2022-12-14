import React, { useEffect } from 'react'
import './Login.css'
import { Link , useNavigate} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import { toast } from 'react-toastify'
import ViewForm from '../components/ViewForm'
import EditForm from '../components/EditForm'


const Dashboard= ({login,setLogin}) => {
  
  const navigate = useNavigate()

const [toggleViewEdit , setToggleViewEdit] = React.useState({
  view:false,
  edit:true,
})
const [toggleUpdateCreate, setToggleUpdateCreate] = React.useState({
   updated:false
})
const [userData,setUserData] = React.useState({
  name:"",
  email:"",
  age:"",
  mobile:"",
  gender:"",
  updated:false
})
  const displayInfo = async (user)=>{

    const res = await axios.get('https://mern-beginners-7475.herokuapp.com/view',
    {
      headers:{
        'x-access-token': localStorage.getItem('token')
      }
    })
    
   
    setUserData({...userData,...res.data.user})
    

  }
useEffect(()=>{
  
    const token = localStorage.getItem('token')
    
    try {
  if(token){
      const user = jwt_decode(token)
      if (!user) {
        localStorage.removeItem('token')
        navigate('/')
      } else {
        
        displayInfo(user)
      }
    }
  }
     catch (error) {
      console.log(error)
    }
  },[])
  const handleLogOut = ()=>{
    localStorage.clear()
    setTimeout(() => {
      navigate('/')
    }, 1000);
    
     
  }
  return (
 <div className='container'>
  <h1>Welcome {userData.name}</h1>
  <button style={{background:'crimson'}} className='btn btn-secondary' onClick={handleLogOut} type='button'>LogOut</button>
  
 {toggleViewEdit.view && <ViewForm  setUserData={setUserData} userData={userData}  toggleViewEdit={toggleViewEdit} setToggleViewEdit={setToggleViewEdit}/> } 

 {toggleViewEdit.edit && <EditForm userData={userData} setUserData={setUserData} toggleUpdateCreate={toggleUpdateCreate} setToggleUpdateCreate={setToggleUpdateCreate}  toggleViewEdit={toggleViewEdit} setToggleViewEdit={setToggleViewEdit}/>}

</div> 
  )
}

export default Dashboard
