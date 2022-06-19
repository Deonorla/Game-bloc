import styled from "styled-components";
import { GiRoundStar } from "react-icons/gi";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiChat } from "react-icons/hi";

const CardView = () =>{
    return(
        <CardContainer>
             <Heading>
                  <h4> All News </h4> 
                  <span>(73 new posts)</span>
             </Heading>

             <CardLayout>

                <Card>
                    <Img>
                       <img src="pads.jpg" alt="elden" />
                    </Img>
                    <Description>
                        <Title>
                           <img src="playstation.png" alt=""/>
                           <p>Six upcoming games to watch out for</p>
                        </Title>
                        <Bar></Bar>
                       <Summary>
                           <p>Sueha yodashi talks about six games coming to playstation which you shouldnt miss.</p>
                       </Summary>

                    </Description>

                    <Interactions>

                    </Interactions>

                </Card>

                <Card>
                    <Img>
                       <img src="elden-ring2.jpg" alt="elden" />
                    </Img>
                    <Description>
                        <Title>
                           <img src="playstation.png" alt=""/>
                           <p>Six upcoming games to watch out for</p>
                        </Title>
                        <Bar></Bar>
                       <Summary>
                           <p>Sueha yodashi talks about six games coming to playstation which you shouldnt miss.</p>
                       </Summary>

                    </Description>

                    <Interactions>
                       <Trend><span>New</span></Trend>
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
   margin: 0 0 0 2px; 
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

const Trend = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #e23719;
   border-radius: 9999px;
   padding: 3px 8px 5px 8px;
   span{
     color: #fff;
   }
`;

const Container =styled.div`
 display: flex;
 flex-direction: row;
 div{
   display: flex;
   p{
      color:#6365bf;
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