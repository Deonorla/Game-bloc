import styled from "styled-components";
import { RiSendPlaneFill } from "react-icons/ri";


const Comment = (props) =>{
    return(
        <Container>
             <h2>Feedback</h2>

            { props.Data.map((item)=>{
              return(
                <CommentContainer key={item.id}>
               
                <User>
                     <Detail><img src={item.avatar} alt=""/> <h2>{item.name}</h2></Detail>
                     <p>{item.time}</p>
                </User>

                <Words>
                    {item.comment}
                </Words>

                <Bar></Bar>
                
                
            </CommentContainer>
              )
            })
           
            }
              
            <Search>
              <Input type="text" placeholder="Send a message..." style={{color:'#fff'}}/>
              <Button><Send/></Button>
            </Search>

                       
        </Container>
    )
}

const Container = styled.div`
 position: absolute;
 margin-top: 3rem;
 h2{
    margin-left: 2rem;
    color:#6365bf;
 }
`;

const CommentContainer = styled.div`
   background-color:  #35356b;
   border-radius: 12px;
   padding: 1rem .8rem;
   margin: .2rem 1rem  3rem 1rem;
`;

const User = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   
   p{
    color:#6365bf;
    font-size: 1.3rem;
   }
   
`;
const Detail = styled.div`
  display: flex;
  flex-direction: row; 

  img{
    width: 60px;
    height: 60px;
  }
      h2{
          margin-left: .5rem;
          color:#6365bf;
      }
`;

const Words = styled.p`
  color:#6365bf;
  font-size: 1.3rem;
  margin: 0;
`;

const Bar = styled.div`
 border-bottom: 1px solid #6365bf;
 position: absolute;
 margin-top: 3rem;
 width: 85%;
`;

const Search = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: transparent;
  border-radius: 12px;
  margin: 8rem 1rem 0 1rem;
  padding: .8rem 0 .8rem .8rem;
  margin-top: 7rem;
  margin-bottom: 1rem;
  background-color:  #35356b;
`;

const Input = styled.input`
  height: 30px;
  background: transparent;
  border: none;
  
 

  &::-webkit-input-placeholder{
    color: #6365bf;
    font-size: 18px;
    
  }
  &:focus{
    border: none;
    outline: none;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  outline: none;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  color: #6365bf;
  margin-right: 1rem;
  
`;

const Send = styled(RiSendPlaneFill)`
color:#6365bf;
font-size: 21px;
`;

export default Comment;