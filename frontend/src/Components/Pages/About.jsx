import React, { useEffect } from 'react'
import axios from "axios";
import {useNavigate } from 'react-router-dom';
import { styled } from 'styled-components'
import { Use } from '../Context/ContentProvider';


const About = () => {

  const{state}=Use();

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
    <Div>
    <div className='div'>
<div className='info'>
<h1>About User</h1>

<div className='list'>
<p>Name : <span>{state==undefined ?"": state.name}</span></p>
<p>Email : <span>{state==undefined ?"":state.email}</span></p>
<p>Contact : <span>{state==undefined ?"":state.phone}</span></p>
<p>Profession : <span>{state==undefined ?"":state.work}</span></p>
</div>

</div>
<figure>
  <img src="/image/4.jpg" alt="" />
</figure>
    </div>
    </Div>
  )
}

const Div=styled.section`
background-color: #f4f1f1;
height: 90vh;
display: grid;
justify-content: center;
align-items: center;
.div{
background-color: #fff;
width: 80vw;
height: 80vh;
border-radius: 1rem;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 100%;

.info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 4rem;
  h1{
    font-family: "Pacifico", cursive;
    text-transform: capitalize;
  }

.list{
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 70%;
  height: 50%;
  padding: 2rem;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  gap: 1rem;
  p{
    
    font-size: 1.5rem;
  }
  span{
    letter-spacing: 0.5px;
    color:#008cff;
  }
}

}


figure{
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}


}

`



export default About
About