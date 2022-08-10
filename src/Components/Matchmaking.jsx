import styled from "styled-components";
import Accordion from "./Accordion";
import {BsPeople} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import logo from '../assets/logo2.png';
import PopularGame from "./PopularGame";
const Matchmaking = () =>{
    
    return (
        <Container>
           <Title>
             <Img>
             <img src={logo} alt='logo'/>
             <p>Match Making</p>
             </Img>

             <Tools>
               <People/>
               <Search/>
             </Tools>
           </Title>

         <Accordion />
          <PopularGame />
        </Container>
    )
}

const Container = styled.div`
margin: 1rem;
`;

const Title = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
`;

const Img = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 
 img{
   width: 50px;
   height: 50px;
   border-radius: 12px;
 }

 p{
   margin: 0 0 0 .5rem;
   font-size: 1.2rem;
   font-weight: 500;
   color: #df78e3;
 }
`;

const Tools = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 
`;

const People = styled(BsPeople)`
  font-size: 1.7rem;
  color: #6365bf;
  `;

const Search = styled(BiSearch)`
font-size: 1.7rem;
color: #6365bf;
margin: 0 0 0 .7rem;
`;

export default Matchmaking;