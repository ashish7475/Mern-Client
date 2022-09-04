import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/Login.css'
const ViewForm = ({setUserData, userData, toggleViewEdit,setToggleViewEdit }) => {
  const onChange =()=>{
    setToggleViewEdit({
      view:!toggleViewEdit.view,
      edit:!toggleViewEdit.edit
    })
  }
  return (

    <div>
      <div>
        <div className="card">
          <div className="card-header">
            <p> Your Contact Details</p>
          </div>
          <div className="container">
            <strong>Age: </strong>
            <span>{userData.age}</span>
            <br/>
            <br/>
            <strong>Gender: </strong>
            <span>{userData.gender}</span>
            <br/>
            <br/>
            <strong>Mobile Number: </strong>
            <span>{userData.mobile}</span>
            <br/>
            
            <br/>
            <Link to="/dashboard">
              <button className="btn btn-primary" style={{width:'100%'}} onClick={onChange}>Edit</button>
            </Link>
          </div>
        </div>
    </div>
    </div>
  )
}

export default ViewForm
