import styled from "styled-components";
import { RiSendPlaneFill } from "react-icons/ri";
 import user from "../assets/user.png";
 import user1 from "../assets/User 2.png";
 import user2 from "../assets/User 4.png";
 import back from "../assets/scifi.jpg";
 

 const Chat =()=>{
    return(
 
        <Container>
                <Title>
                <h3>Chat</h3>
                <h3>Online</h3>
                  
                </Title>

            <Chatheader>
                <Avatar>

                </Avatar>


                <Features>
                    <Subtitle>
                       Lina started messaging you
                    </Subtitle>

                    <ChatBox>
                         <Time>Sun 3:00 am</Time>
                         <Messages>
                            <Left>
                                <p>Lina gifted you Power TN</p>
                            </Left>
                            <Right>
                                <p>Thank you so much</p>
                            </Right>

                            <Time>Mon 11:00 pm</Time>
                            
                            <Cardview>
                            <Card>
                                <Align>
                                <h4>Lina invited you to join MRV Group</h4>
                                 <Flip>
                                    <Img1 src={user} alt=""/>
                                    <Img2 src={user1} alt=""/>
                                    <Img3 src={user2} alt=""/>
                                 </Flip>
                                </Align>
                                <BottomCard>
                                <p>
                                    MRV is a Group with top professional gamers from round the gaming community.
                                </p>
                                <Bar></Bar>

                                <Button>
                                   <Cancel>Cancel</Cancel>
                                   <Accept>Accept Invitation</Accept>
                                </Button>

                                </BottomCard>

                            </Card>

                            </Cardview>

                            <Right>
                              <p>Ahh love it</p>
                            </Right>
                             
                                                    
                                <Search>
                                <Input type="text" placeholder="Send a message..." style={{color:'#fff'}}/>
                                <Sent><Send/></Sent>
                                </Search>
                         
                             
                         </Messages>
                    </ChatBox>


                </Features>

            </Chatheader>

        </Container>
        
    )
 }


 const Container = styled.div`
  
    padding: .5rem;

    `;

const Title = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   h3{
       font-size: 20px;
       color: #df78e3;
    }
    `;
 
 const Chatheader = styled.div`
     background: #35356b;
     border-radius: 12px;
     padding: .5rem 0 1rem .5rem;
 `;

const Avatar = styled.div`

`;

const Features = styled.div`

`;

const Subtitle = styled.p`
 font-size: 12px;
 text-align: center;
 color:#fff;
 `;

const ChatBox = styled.div`
margin-top: 1rem;

`;

const Time = styled.p`
text-align: center;
font-size: 12px;
color:#fff;
`;

const Messages = styled.div`
p{
    color: #fff; 
    text-align: center;
}
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    p{
        color:#fff;
        margin: 1rem 0;
        background: #3f3f6e;
        padding: .2rem .6rem;
        font-size: 14px;
        border-radius: 9999px;
    }
    
    `;

const Right = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 align-items: flex-end;
 margin-right: 4rem;
p{
    color:#fff;
    margin: 1rem 0;
    padding: .2rem .6rem;
    background: #3f3f6e;
    border-radius: 9999px;
    font-size: 14px;
}

`;

const Cardview = styled.div`
 background-image: url(${back});
 background-position: 25% 65%;
 border-radius: 1rem;
 width: 200px;

`;

const Card = styled.div`
 position: relative;
 display: flex;
 flex-direction: column;
 background: rgba(255, 255, 255, 0.05);
 box-shadow: 0 4px 30px rgba(0,0,0,0.1);
 backdrop-filter: blur(5px);
 border-radius: 1rem;
 margin-top: .5rem;
 padding: 0 .5rem;
`;

const Align = styled.div`
 display: flex;
 align-items: center;
 color:#6365bf;
h4{
    font-size: 14px;
}

`;

const Flip = styled.div`
display: flex;


`;

const Img1 = styled.img`
 width: 30px;
 height: 30px;
 z-index: 400;
`;

const Img2 = styled.img`
margin-left: -1rem;
width: 30px;
height: 30px;
z-index: 300;

`;

const Img3 = styled.img`
margin-left: -1.2rem;
width: 30px;
height: 30px;
z-index: 200;
`;

const BottomCard = styled.div`
display: flex;
flex-direction: column;
  p{
    color: #6365bf;
    font-size: 12px;
  }

`;
const Bar = styled.div`
  border-bottom: 1px solid #6365bf;
    width: 100%;
    `;

const Button = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 margin: 1rem 0;
`;
const Cancel = styled.button`
 border: none;
 font-weight: 500;
 color: #fff;
 outline: none;
 background: transparent;
 `;
const Accept = styled.button`
 border: none;
 outline: none;
 padding: .5rem 1rem;
 border-radius: 9999px;
 font-weight: 500;
 background-color: #fff;
`;

const Search = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 200px;
  background: #3f3f6e;
  border-radius: 12px;
  margin: 0 1rem  ;
  padding: .5rem ;

  
`;

const Input = styled.input`
  height: 22px;
  background: transparent;
  border: none;
  
 

  &::-webkit-input-placeholder{
    color: #FFF;
    font-size: 14px;
    
  }
  &:focus{
    border: none;
    outline: none;
  }
`;

const Sent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  outline: none;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  color: #fff;
  margin-right: 1rem;
  
`;

const Send = styled(RiSendPlaneFill)`
color:#fff;
font-size: 21px;
`;

 export default Chat;