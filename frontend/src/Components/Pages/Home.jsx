import React from 'react'
import { styled } from 'styled-components'
import { Use } from '../Context/ContentProvider'


const Home = () => {

  const{state}=Use();
  console.log(state);

  return (
    <Div>
      <p>WELCOME  </p>
      {
        state!=undefined ? <><h1>{state.name}</h1>
        <h2><span>Happy</span>, to see u back <span className='span'>!</span> </h2></>
        :
        <h1>Hello <span>!</span> We Are Mern Stack Developer</h1> 
      }
      
      
      
    </Div>
  )
}

const Div=styled.section`
  display: flex;
  flex-direction: column;
  justify-content:center;
align-items: center;
row-gap: 1rem;
height: 90vh;
background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,138,255,1) 100%);
h1{
font-size: 4rem;
}
span{
  color:#008cff;
}
.span{
  color: #fff;
}
p{
  font-size: 2rem;
  font-family: "Pacifico", cursive;
  font-weight: 900;
  letter-spacing: 4px;
  color:#008cff;
}
`



export default Home
