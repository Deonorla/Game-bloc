import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { GiRoundStar } from "react-icons/gi";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiChat } from "react-icons/hi";
import {  showDetails } from "../Features/cardSlice";


import { useDispatch } from "react-redux";

const CardView = () =>{
     const [width, setWidth] = useState(0);
     const Layout = useRef()
     const dispatch = useDispatch();
     const { Data, ...item } = useSelector((state)=> state.card)
 

   

     useEffect(() => {
         setWidth(Layout.current.scrollWidth - Layout.current.offsetWidth)
     }, [])
     
    return(
        <CardContainer>
             <Heading>
               
                  <h4> All News </h4> 
                  <span>(73 new posts)</span>
             </Heading>

            
             <CardLayout ref={Layout}  drag='x' dragConstraints={{right:0, left: -width}}>

                 {
                   Data.map(list => {
                     return(
                         
                        <Card  key={list.id}>
                              <NavLink to={'/details/' + list.id}  key={list.id}>
                           <Img>
                          
                              <img src={list.img} alt="img" />
                           </Img>
                           <Description>
                                 <Title>
                                    <img src={list.logo} alt=""/>
                                    <p>{list.title}</p>
                                 </Title>
                                 <Bar></Bar>
                              <Summary>
                                    <p>{list.Description}</p>
                              </Summary>

                           </Description>
                                    </NavLink>

                           <Interactions>
                              <Trend>{list.trend}</Trend>
                              <Container>
                                 <div>
                                    
                                    <Star onClick={()=>{dispatch(showDetails(list.img))}} /> 
                                 
                                    <p>{item.Star}</p>
                                 </div>
                                 <div>
                                 < Send  />
                                 <p>6</p>
                                 </div>
                                    <div>
                                    <Message />
                                    <p>{item.Comment}</p>
                                    </div>
                              </Container>
                           </Interactions>

                        </Card>            
                        
                     )
                   })
                 }


             </CardLayout>


        </CardContainer>
    )
}

const CardContainer = styled.div`
   margin: 1rem;
   overflow: hidden;
   border-radius: 12px;

   @media (min-width: 686px) and  (max-width: 999px){
      margin: 0 1rem 0 0;
     }

   @media (min-width: 1000px){
    margin-left: 7px;
    margin-right: 17rem;
   }
`;

const Heading = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 margin: 7px 0 .7rem 1rem;

 h4{
    color: #df78e3;
    @media (max-width: 400px){
     font-size: 13px;
    }
 }

 span{
    color: #6365bf;
    margin-left: .8rem;
    @media (max-width: 400px){
     font-size: 13px;
    }
 }
`;

const CardLayout = styled(motion.div)`
   display: flex;
   gap: 1rem;
   z-index: -1;
`;

const Card = styled.div`
 display: flex;
 flex-direction: column;
 min-width: 13rem;
 background-color: #35356b;
 border-radius: 12px;
 padding: 1.2rem .7rem 10px .5rem;

 @media (max-width: 500px){
   padding: 1.2rem .7rem 1rem .5rem;
 }

`;

const Img = styled.div`
img{
    position: relative;
    width: 100%;
    height: 150px;
    border-radius: 12px;
    cursor: pointer;
    @media  (min-width: 686px){
      height: 100px;
    }
}
`;

const Description = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin-top: 8px;
 p{
   margin: 0;
 }
`;

const Bar = styled.div`
    margin: 10px 0 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    width: 90%;
    height: 1px;
 `;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img{
   width: 35px;
   height: 35px;
   border-radius: 8px;
  }

  p{
   margin: 0 0 0 5px; 
   color: #fff;
  }
`;

const Summary =  styled.div`
  color: #6365bf;
  p{
     margin: 5px 0 5px 0;
  }
`;

const Interactions = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  width: 100%; 
  @media (max-width: 500px){
     justify-content: center;
    }
`;

const Trend = styled.p`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #df78e3;
   border-radius: 9999px;
   padding: 3px 16px 5px 16px;
   color:#fff;

   @media (max-width: 500px){
     position: absolute;
     bottom: 16rem;
     left: 5px;
     background: rgba(255, 255, 255, 0.34);
     box-shadow: 0 4px 30px rgba(0,0,0,0.1);
     backdrop-filter: blur(5px);
   }
    
`;

const Container =styled.div`
   display: flex;
   flex-direction: row;
   
div{
    position: relative;
     display: flex;
     margin: 5px 16px;
     p{
        position: absolute;
        left: 16px;
        top: -3px;
        color:#6365bf;
     }
   }

   
   @media (min-width: 500px){
    div{
      margin: 0 10px;
    }
   }


`;

const Star = styled(GiRoundStar)`
  color:#6365bf;
  font-size: 21px;
`;

const Send = styled(RiSendPlaneFill)`
color:#6365bf;
font-size: 21px;
`;

const Message = styled( HiChat)`
color:#6365bf;
font-size: 21px;
`;


export default CardView;