import React, {useState} from 'react';
import styled from "styled-components";

const Accordionitem = ({img, id}) => {
    const [index, setIndex] = useState(false);
    const [size, setSize] = useState('50px')
     
    const handler = () =>{
        setIndex(!index);
        
    }

  return (
    <Wrapper>

        <Header onClick={ handler} style={{backgroundImage:`url(${img})`, backgroundSize:'100% 1000%', height:`${ index ? '200px' : '50px'}` }}>
         { index ?
          <Img src={img} alt="" /> : <></>
         } 
        </Header>
    </Wrapper>
  )
}

const Wrapper = styled.div`
max-height: 1170px;

`;

const Header = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  cursor: pointer;
   transition: .6s;
    transition-timing-function: ease-in-out ;
 `;


  const Img = styled.img`
    width: 100%;
    height: 200px;
   
  `;

export default Accordionitem;