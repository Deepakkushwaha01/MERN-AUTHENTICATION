import React, { useEffect } from 'react'
import axios from "axios";
import {useNavigate } from 'react-router-dom';


const About = () => {
  const navigate=useNavigate();

const validateUser=async()=>{
 try {
  const res=await axios.get("http://localhost:8080/validUser");
 console.log("axios calling");
 console.log(res);

 if(!res){
  navigate("../login");  
 }
 
 } catch (error) {
  window.alert("Login First");
  navigate("../login");  
 }
}  

useEffect(()=>{
  validateUser();
},[])




  return (
    <div>
      About
    </div>
  )
}

export default About
About