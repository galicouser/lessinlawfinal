import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: 100vh;
 background-color: #f7f7f7;
 font-family: Arial, sans-serif;
`

const Title = styled.h1`
 font-size: 24px;
 color: #333;
 text-transform: capitalize;
`

const Subtitle = styled.h2`
 font-size: 18px;
 color: #777;
 margin: 10px 0;
`

const Address = styled.p`
 font-size: 16px;
 color: #555;
`

const PhoneNumber = styled.p`
 font-size: 16px;
 color: #555;
 margin-top: 20px;
`

const UnderConstruction = () => {
 return (
  <Container>
   <Title>Jeffrey R. Lessin & Associates PC</Title>
   <Subtitle>Under Construction. New Website Coming Soon!</Subtitle>
   <Address>
    1515 Market St # 1650, <br />
    Philadelphia, PA 19102
   </Address>
   <PhoneNumber>215-599-1400</PhoneNumber>
  </Container>
 )
}

export default UnderConstruction
