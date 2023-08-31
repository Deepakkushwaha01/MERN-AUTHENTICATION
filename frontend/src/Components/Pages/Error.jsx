import React from 'react'
import { styled } from 'styled-components'

const Error = () => {
  return (
    <Div>
      <img src="/image/3.jpg" alt="" />
    </Div>
  )
}
const Div=styled.section`
display: grid;
justify-content: center;
align-items: center;

img{
    height: 90vh;
    object-fit: contain;
  }
`
export default Error
