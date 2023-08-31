
import React, { useState } from 'react'
import { styled } from 'styled-components'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LockIcon from '@mui/icons-material/Lock';
import {useNavigate } from 'react-router-dom';
import { UserRegister } from '../Axios/Axios';

const Signup = () => {

const[signup,newsignup]=useState({
name:"",
email:"",
phone:"",
work:"",
password:"",
cpassword:""
});

const navigate=useNavigate();

/* name, email, phone, work, password, cpassword */

const changehanlder=(e)=>{
  const {name,value}=e.target;
  newsignup({...signup,[name]:value})
}


const sumbit=async(e)=>{
  e.preventDefault();

const res=await UserRegister(signup);

if(res){
  const {success,message}=res.data;
  window.alert(message);
  console.log(res.data)
  if(res.data.exsitingUser){
    navigate("../login");
  }
  else{
    navigate("/register");
    newsignup({
      name:"",
email:"",
phone:"",
work:"",
password:"",
cpassword:""
    })
  }
}else{
  window.alert("SomeThing Went Wrong");
}

}

return (
    <Div>
    <div className='pop'>      
   <div className='form'>
   <form>
    <h1>Sign Up</h1>
    
  <div className="mb-3 first">
    <label  className="form-label"><PersonIcon/></label>
    <input type="email" name="name" value={signup.name} onChange={changehanlder} placeholder='Your Name'  aria-describedby="emailHelp" />
  </div>
  <div className="mb-3 first">
    <label  className="form-label"> <EmailIcon/> </label>
    <input type="text"  name="email" value={signup.email} onChange={changehanlder}  placeholder='Your Email'  />
  </div>
  <div className="mb-3 first">
    <label  className="form-label"> <PhoneInTalkIcon/> </label>
    <input type="text"   name="phone" value={signup.phone} onChange={changehanlder} placeholder='Your Phone'  />
  </div>
  <div className="mb-3 first">
    <label  className="form-label"> <WorkOutlineIcon/> </label>
    <input type="text"  name="work" value={signup.work} onChange={changehanlder}  placeholder='Your Profession'   />
  </div>
  <div className="mb-3 first">
    <label  className="form-label"> <LockIcon/> </label>
    <input type="password"   name="password" value={signup.password} onChange={changehanlder} placeholder='Your Password'  />
  </div>
  <div className="mb-3 first">
    <label  className="form-label"> <LockIcon/> </label>
    <input type="password"   name="cpassword" value={signup.cpassword} onChange={changehanlder}  placeholder='Confirm Password'   />
  </div>
  <button type="submit" onClick={sumbit} className="btn btn-primary">register</button>
</form>
   </div>
<figure>
  <img src="/image/1.jpg" alt="" />
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




export default Signup
