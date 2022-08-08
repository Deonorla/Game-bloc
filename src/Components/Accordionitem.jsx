import React, {useState} from 'react';
import styled from "styled-components";
import {BsPeople} from 'react-icons/bs';
import u from "../assets/u5.png";
import u1 from "../assets/u2.png";
import u2 from "../assets/u3.png";
import u3 from "../assets/u4.png";


const Accordionitem = ({img, title}) => {
    const [index, setIndex] = useState(false);
 
     
    const handler = () =>{
        setIndex(!index);
        
    }

  return (
    <Wrapper>

        <Header onClick={ handler} style={{backgroundImage:`url(${img})`, backgroundSize:'100% 1000%', height:`${ index ? '200px' : '50px'}` }}>
         {!index ? <Top1>
            <Title>{title}</Title> 
            <See>
                <p>235</p>
                <People/>
              </See>
          </Top1> : <></>}
         { index ?
           <Img style={{backgroundImage:`url(${img})`, backgroundSize:'100% 100%'}}>
            <Top>
              <Overlay>
                 <Pic1 src={u} alt=""/>
                 <Pic2 src={u1} alt=""/>
                 <Pic3 src={u2} alt=""/>
                 <Pic4 src={u3} alt=""/>
              </Overlay>

              <Seen>
                <p>235</p>
                <People/>
              </Seen>
            </Top>
              <Title1>{title}</Title1> 
           </Img> : <></>
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


  const Img = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
    transition: .6s;
    transition-timing-function: ease-in-out ;
  `;

const Title = styled.p`
font-weight: 700;
font-size: large;
color: white;
margin: 1rem;
`;

const Title1 = styled.p`
position: absolute;
font-weight: 700;
font-size: large;
color: white;
margin: 0 0 0 1rem;
bottom: 1em;
`;


const Top1 = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 
`;
const Top = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin: 1rem;
 
`;

const Overlay = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 1rem;
`;

const Pic1 = styled.img`
  width: 40px;
  height: 40px;
  z-index: 100;
`;

const Pic2 = styled.img`
  width: 40px;
  height: 40px;
  margin-left: -9px;
  z-index: 80;
  `;

const Pic3 = styled.img`
width: 40px;
height: 40px;
margin-left: -9px;
z-index: 60;
`;

const Pic4 = styled.img`
 width: 40px;
 height: 40px;
 margin-left: -9px;
 z-index: 40;
`;

const People = styled(BsPeople)`
 color: #fff;
 font-size: 21px;
 margin-left: 7px;
`;

const Seen = styled.div`
display: flex;
flex-direction: row;
align-items: center;
background-color: #6365bf;
box-shadow: 0 4px 30px rgba(0,0,0,0.1);
backdrop-filter: blur(5px);
border-radius: 9999px;
padding: .1rem .5rem;
width: fit-content;
margin-top: 1rem;


p{
 color: #fff;
 font-size: 1rem;
 margin: 0 0 0 8px;

}

`;
const See = styled.div`
display: flex;
flex-direction: row;
align-items: center;
background-color: #6365bf;
box-shadow: 0 4px 30px rgba(0,0,0,0.1);
backdrop-filter: blur(5px);
border-radius: 9999px;
padding: .1rem .5rem;
width: fit-content;



p{
 color: #fff;
 font-size: 1rem;
 margin: 0 0 0 8px;

}

`;
export default Accordionitem;