import { motion } from "framer-motion"
import styled from "styled-components"
import CardView from "../Components/CardView";
import Header from "../Components/Header";
import HomeSlider from "../Components/HomeSlider";
import SearchBox from "../Components/SearchBox";
import { BiBell } from "react-icons/bi"
import {AiOutlineSetting} from "react-icons/ai"
import { HiCollection } from "react-icons/hi";
import { FaUserFriends } from "react-icons/fa";
import { AiFillMessage} from "react-icons/ai";
import { AiTwotoneStar} from "react-icons/ai";
import user from "../assets/User 2.png";
import virtual from "../assets/virtual.jpg";

const Dashboard = () =>{
    return(
      <Wrapper>
              <Header/>
         <Nav>

         <AvatarContainer   >
                          <img src={virtual} alt="avatar"/>

                          <ColorContainer  >

                          <Red  >
                            <Bell  />
                            <img src={user} alt="avatar" />
                             <Settings/>
                          </Red>
                          <Yellow  >
                            <h4>Netheream Lord</h4>
                            <p>User Id: 23456</p>
                          </Yellow>

                          <Green  >
                            <div>
                              <h4>Post</h4>
                              <p>4K</p>
                            </div>
                            
                            
                            <div>
                              <h4>Subscribers</h4>
                              <p>200K</p>
                            </div>
                           

                          </Green>
                                  <button >Start a stream</button>
                          </ColorContainer>
                      </AvatarContainer>

                      <MenuBox>
                <div>
                  <Messages/>
                  <h4>Messages</h4>
                </div>
                <div>
                  <Library/>
                  <h4>Library</h4>
                </div>
                <div>
                  <Favourite/>
                  <h4>Favourite</h4>
                </div>
                <div>
                  <Friends/>
                  <h4>Friends</h4>
                </div>
                <div>
                  <Messages/>
                  <h4>Messages</h4>
                </div>

              </MenuBox>

         </Nav>

          <Container>
     
           <HomeSlider/>
           <SearchBox/>
           <CardView/>

          </Container>
      </Wrapper>
    )
}

const Wrapper = styled.div`
`;

const Nav = styled.div`
 display: none;
@media (min-width: 686px){
  position: fixed; 
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: 1rem;
  
}
`;


const Container = styled.div`
@media (min-width: 686px){
   margin-left: 15rem;
}
`;


const AvatarContainer = styled(motion.div)`
display: none;
@media (min-width: 686px){
  display: flex;
  flex-direction: column;
  margin: 1rem .5rem;
  background: #35356b;
  border-radius: 12px;
  position: relative;

  
  img{
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    cursor: pointer;
      width: 100%;
      height: 100px;
  }

}
`;

const ColorContainer = styled(motion.div)`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  button{
    border: none;
    margin-top: 1rem;
    border-radius: 9999px;
    padding: .3rem 1rem;
    background-color: #3f3f6e;
    color: #6365bf;
    font-size: 12px;
    box-shadow: rgb(0 0 0 / 29%) 5px 26px 36px 10px,
 rgb(0 0 0 / 53%) 10px 16px 10px -10px; 
 
 &hover{
  transform: scale(1.05);
 }
  }
`;

const Bell = styled(BiBell)`
color:#6365bf;
font-size: 26px;
margin-top: 1.2rem;

`;
const Settings = styled(AiOutlineSetting)`
margin-top: 1.2rem;
color:#6365bf;
font-size: 26px;
`;


const Red = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  margin: 0 auto;
  top: 4rem;

  img{
    width: 3rem;
    height: 3rem;
    padding: 0;
    margin: 0 .5rem;
  
  }
`;

const Yellow = styled(motion.div)`
 justify-content: center;
 align-items: center;
 margin-top: .5rem;
 h4{
  color:#6365bf;
  font-size: 14px;
  margin: 1.5rem 0 0 0;
 }
 p{
  color:#6365bf;
  font-size: 12px;
  margin-top: 8px;
  text-align: center;
 }
`;

const Green = styled(motion.div)`
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 gap: .4rem;
padding-right: .5rem;
 div{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 0 .5rem;

   h4{
    margin: 0;
    color: #6365bf;
    font-size: 12px;
  }
  
  p{
     font-size: 12px;
    color: #6365bf;
    margin: 0;
   }
 }
`;


const MenuBox = styled.div`
    display: flex;
    flex-direction: column;
    background: #35356b;
    padding: .7rem 1.2rem;
    border-radius: 12px;
    div{
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
    }
 
    h4{
     color: #6365bf;
     font-size: 12px;
     margin: .4rem .3rem 1.2rem 0;
     padding-top: .4rem;
    }
  
  
`;


const Library = styled(HiCollection)`

font-size: 21px;
color: #6365bf;
`;
const Friends = styled(FaUserFriends)`

font-size: 21px;
color: #6365bf;
`;
const Messages = styled(AiFillMessage)`

font-size: 21px;
color: #6365bf;
`;
const Favourite = styled(AiTwotoneStar)`

font-size: 21px;
color: #6365bf;
`;


export default Dashboard;