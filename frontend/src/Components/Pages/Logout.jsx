import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Use } from '../Context/ContentProvider';

const Logout = () => {

const navigate=useNavigate();

const {newstate}=Use();

const logoutcall=async()=>{
await axios.get("http://localhost:8080/logout");
navigate("/");
newstate();
}


useEffect(()=>{
    logoutcall();
},[])


  return (
    <div>
      
    </div>
  )
}

export default Logout
