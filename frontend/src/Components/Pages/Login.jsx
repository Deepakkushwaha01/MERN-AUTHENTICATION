
import React, { useState } from 'react'
import { styled } from 'styled-components'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { UserLogin } from '../Axios/Axios';
import {useNavigate } from 'react-router-dom';
import { Use } from '../Context/ContentProvider';

const Login = () => {

const {state,newstate}=Use();

console.log(state);

  const[login,newlogin]=useState({
    email:"",
    password:""
    });

    const navigate=useNavigate();

    const changehanlder=(e)=>{
      const {name,value}=e.target;
      newlogin({...login,[name]:value})
    }

    const sumbit=async(e)=>{
      e.preventDefault();
    
    const res=await UserLogin(login);
    
    if(res){
      const {success,message}=res.data;
      window.alert(message);
      console.log(res.data)
      await newstate(res.data.loginUser);
      if(res.data.loginUser){
        navigate("../");
      }
      else{
        navigate("/register");
      }
      newlogin({
        name:"",
  email:"",
  phone:"",
  work:"",
  password:"",
  cpassword:""
      })
    
    }
    else{
      window.alert("SomeThing Went Wrong");
    }
    
    }

  return (
    <Div>
    <div className='pop'>
      
   <div className='form'>
   <form>
    <h1>Login</h1>
  
  <div className="mb-3 first">
    <label  className="form-label"> <EmailIcon/> </label>
    <input type="text" name="email"  value={login.email} onChange={changehanlder}  placeholder='Login Email'   />
  </div>
  <div className="mb-3 first">
    <label className="form-label"> <LockIcon/> </label>
    <input type="password" name="password" value={login.password} onChange={changehanlder}  placeholder='Login Password'  />
  </div>
  <button type="submit" onClick={sumbit} className="btn btn-primary">Login</button>
</form>
   </div>
<figure>
  <img src="/image/2.jpg" alt="" />
</figure>

    </div>
    </Div>
  )
}

const Div=styled.section`
background-color: #edebeb;
display: grid;
justify-content: center;
align-items: center;
height: 90vh;
width: 100vw;
.pop{
width: 70vw;
border-radius: 2rem;
height: 80vh;
background-color: #fff;
padding: 3rem;
display: grid;
column-gap: 3rem;
grid-template-columns: 40% 60%;
grid-template-rows: 100%;
.form{
  padding: 2rem;
  display: grid;
  align-items: center;
  h1{
    margin-bottom: 3rem;
    font-weight:800;
    letter-spacing: 2px;
    font-size: 3rem;
  }

  form{
.first{
  display: flex;
  column-gap: 1rem;
  row-gap: 1.5rem;
  border:none;
 border-bottom: 1px solid black;
 label{
  font-size: 2rem;
 }
  input{
    border:none;
    border-radius: 0;
    outline: none;
    width: 100%;
    font-size: 1.3rem;
    &:focus{
      outline: none;
    }
  }
}

.btn{
  margin-top: 2rem;
  font-size: 1.5rem;
  width: 10rem;
  height: 4rem;
  letter-spacing: 2px;
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
export default Login

