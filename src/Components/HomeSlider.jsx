 import styled from "styled-components";
 import Slider from "react-slick";
 import { motion } from "framer-motion";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";

 const HomeSlider = ()=>{

   const imgData = [
      {  
         id:'1',
         img:'gotham-knights.jpeg',
         title:'Pre-order Elden Ring Now',
         description:'The game will be released on July 5th 2022 and will be available on Ps5, X-box and PC '

      },

      {  
         id:'2',
         img:'spiderman.jpg',
         title:'Pre-order Elden Ring Now',
         description:'The game will be released on July 5th 2022 and will be available on Ps5, X-box and PC '

      },

      {  
         id:'3',
         img:'mortal.jpg',
         title:'Pre-order Elden Ring Now',
         description:'The game will be released on July 5th 2022 and will be available on Ps5, X-box and PC '

      }
   ]

   var settings = {
      dots:true,
      infinite:true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
   }

    return (
     <SliderContainer>
      
      <Title>
            Discover
      </Title>
     
      <Carousel {...settings}>
     
     { imgData.map((data, index)=>{
      return(
          
            <Background key={index}>
                <ImgSlide><img src={data.img} alt={data.title}/></ImgSlide>
                <Details>
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                   
                  
                </Details>
                <ButtonContainer>
                        <div>
                           <p>$59</p><PreOrder>Pre-order</PreOrder>
                        </div>  
                   </ButtonContainer>
            </Background>
            
      )
        
     })
     }


</Carousel>

      
    
     </SliderContainer>
    )
 }

const Title = styled.h1`
   color: #df78e3;
`;


 const Carousel = styled(Slider)`
    
 .slick-slider img{
   width:100%;
   height: auto;
   object-fit: cover;
 }
    &> button{
      opacity: 0;
      height: 100%;
      width: 5vw;
      z-index: 1; 
    }

   &:hover{
     transition: opacity 0.2s ease 0s;
   }
   .slick-dots li button:before{
      color: #ffffff;
   }
   
 `;

const Details = styled.div`
  position: absolute;
  top: 0;
  padding: 1.5rem 0 1rem 1.5rem; 
  h3{
   margin: 0;
   color: #FFFFFF;
   font-size: 25px;
   max-width: 250px;
  }
  p{
    margin-top: 10px;
    color: #FFFFFF;
    max-width: 300px;
  }

`;

const ButtonContainer = styled.div`
 position: relative; 
 display: flex;
 align-items: center;
 justify-content: flex-end;
 padding-right: 1rem; 
 margin-top: -50px;
 
 &:hover{
 cursor: pointer;
 }

 
 div{
   display: flex;
   flex-direction:row;
   justify-content: center;
   align-items: center;
   border: 1px solid rgba(255, 255, 255, 0.1);
   border-radius: 9999px;
   background: rgba(255, 255, 255, 0.3);
   box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
   backdrop-filter: blur(5px);
   height: 25px;
   top: 0;
   p{
      font-size: 20px;
      margin: 0 10px 0 6px;
      color: #FFFFFF;
   }
 }
`;


const PreOrder =styled.button`
  outline: none;
  border: none;
  border-radius: 9999px;
  background-color: #df78e3;
  color: #FFFFFF;
  padding: .4rem .6rem; 
  z-index: 1;
`;

const SliderContainer = styled.div`
 margin: 2rem;
`;
  
const Background = styled.div`
  position: relative;
  z-index: -1; 
  border-radius: 15px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 36px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  
 
  
 
`;

const ImgSlide = styled(motion.div)`
  
  img{
    width: 100%;
    height: auto;
    transition: opacity 500ms ease-in-out 0s;
    object-fit: contain;
    border-radius: 20px;
    opacity: 0.6;

  }
 
 `;


 export default HomeSlider;