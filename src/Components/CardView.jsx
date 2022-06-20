import styled from "styled-components";
import { GiRoundStar } from "react-icons/gi";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiChat } from "react-icons/hi";
import Data from "../Features/Data"

const CardView = () =>{
    return(
        <CardContainer>
             <Heading>
                  <h4> All News </h4> 
                  <span>(73 new posts)</span>
             </Heading>

             <CardLayout>

                 {
                   Data.data.map(list => {
                     return(
                        <Card key={list.id}>
                           <Img>
                              <img src={list.img}alt="elden" />
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

                           <Interactions>
                              <Trend>{list.trend}</Trend>
                              <Container>
                                 <div>
                                 <Star/>
                                    <p>364</p>
                                 </div>
                                 <div>
                                 < Send  />
                                 <p>6</p>
                                 </div>
                                    <div>
                                    <Message />
                                    <p>36</p>
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
`;

const Heading = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 margin-left: 1rem;

 h4{
    color: #df78e3;
 }

 span{
    color: #6365bf;
    margin-left: .8rem;
 }
`;

const CardLayout = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 1rem;
  
`;

const Card = styled.div`
 display: flex;
 flex-direction: column;
 background-color: #35356b;
 border-radius: 12px;

 padding: 1.2rem .7rem 10px .5rem;

 @media (max-width: 500px){
   padding: 1.2rem .7rem 1.2rem .5rem;
 }

`;

const Img = styled.div`
img{
    width: 100%;
    height: 150px;
    border-radius: 12px;
}
`;

const Description = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin-top: 8px;
 
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
   width: 45px;
   height: 45px;
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
`;

const Trend = styled.p`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #e23719;
   border-radius: 9999px;
   padding: 3px 16px 5px 16px;
   color: #fff;

   @media (max-width: 500px){
     display: none;
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