import {  useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import  { motion } from "framer-motion";
import { GiRoundStar } from "react-icons/gi";
import { HiChat } from "react-icons/hi";
import styled from "styled-components"
import Comment from "../Features/Comment/Comment";
import Comments from "../Features/Api";


const Details = ()=>{

    const imageRef = useRef();
    const params = useParams();
    const id = params.id;
    const [detail, setDetails] = useState({})
    const { Data } = useSelector((state)=> state.card)
    const exact  =  Data.find( item => ( (item.id == id) ))

    useEffect(()=>{
    
          if (exact){
             setDetails(exact)
             
          } 
    },[Data, exact])
    
  

    return(
 
        <Wrapper>
        <ImageWrapper ref={imageRef} style={{backgroundImage: `url(${detail.img})`}}>
          <NavLink to="/">
            <Back> <p>Back</p> </Back>

          </NavLink>
        </ImageWrapper>
         
         <Content>
            <Category>
            <Trend>New</Trend>
            <Interactions>
                  <div>
                    <Star/>
                    <p>364</p>
                   </div>
                  <div>
                     <Message />
                     <p>6</p>
                   </div>
            </Interactions>
            </Category>
             <Description>
            <h2>{detail.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima accusamus, maiores distinctio sapiente harum quae velit, dignissimos voluptates a odit magnam eos totam consectetur veritatis rem esse minus ratione ducimus doloribus dolorum incidunt debitis impedit! Ipsum, perferendis. Sapiente nisi velit iusto commodi neque consequuntur voluptatum accusamus nobis. 
               </p>

             </Description>
         </Content>

         <CommentSection>
          <Comment Data={Comments} />
         </CommentSection>

        </Wrapper>
    )

}


const Wrapper = styled.div`
background: rgba(39,38,78,255);
`;

const Back = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 background: rgba(255, 255, 255, 0.34);
 box-shadow: 0 4px 30px rgba(0,0,0,0.1);
 backdrop-filter: blur(5px);
 position: fixed;
 padding: .4rem 1.4rem;
 width: 4rem;
 border-radius: 9999px;
 margin: 1rem;
 color:#6365bf;
 &:hover{
  cursor: pointer;
 }

 p{
  margin: 0;
  font-size: 24px;
 }

`;

const ImageWrapper = styled.div`
 position: relative;
 width: 100%;
 height: 100vh;

 background-size: 100% 60%;
 background-position: top 75%; 
 background-repeat: no-repeat;
 background-attachment: fixed; 
`;

const Category = styled(motion.div)`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;

`;

const Interactions =styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center; 
   margin-top: 1.4rem;

   div{
     display: flex;
     flex-direction: row;
     padding: 1rem;

     p{
      font-size: 18px;
      color:#6365bf;
     }
   }
`;

const Star = styled(GiRoundStar)`
  color:#6365bf;
  font-size: 25px;
`;

const Message = styled( HiChat)`
color:#6365bf;
font-size: 25px;
`;

const Trend = styled.p`
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 9999px;
   padding: 3px 16px 5px 16px;
   color:#6365bf;
   background: #35356b;
   font-weight: 500;
   
    
`;

const Content = styled.div`
 position: absolute; 
 border-top-left-radius: 25px;
 border-top-right-radius: 25px;
 background: rgba(39,38,78,255);
 bottom: -600px;
 height: 110vh;
 padding: 1rem 1rem;

 `;

const Description = styled.div`

h2{
  margin-top: 10px;
  color:#6365bf;
  font-size: 30px;
  font-weight: 600;
  text-align: center;

 }
 
 p{
   background-color: #35356b;
   color:#6365bf;
   font-size: 18px;
   font-weight: 600;
   padding: .8rem .5rem;
   border-radius: 12px;
   
 
}

`;

const CommentSection = styled.div`

`;

export default Details;