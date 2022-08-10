import styled from "styled-components";
import { RiSendPlaneFill } from "react-icons/ri";


const Comm = (props) =>{
    return(
        <Container>
             <h2>Feedback</h2>

            { props.Data.map((item)=>{
              return(
                <Contain key={item.id}>
                <CommentContainer >
               
                <User>
                     <Detail><img src={item.avatar} alt=""/> <h4>{item.name}</h4></Detail>
                     <p>{item.time}</p>
                </User>

                <Words>
                    {item.comment}
                </Words>

              
                
                
            </CommentContainer>
                   <Bar></Bar>
                </Contain>
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
 h2{
    margin-left: 2rem;
    color:#6365bf;
 }
`;

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommentContainer = styled.div`
   background-color:  #35356b;
   border-radius: 12px;
   padding: 1rem .8rem;
   margin: .2rem 1rem 0 1rem;
   width: 25rem;
`;


const User = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   
   p{
    color:#6365bf;
    font-size: .8rem;
   }
   
`;
const Detail = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  img{
    width: 40px;
    height: 40px;
  }
      h4{
        margin-left: .5rem;
          color:#6365bf;
          font-size: 15px;
      }
`;

const Words = styled.p`
  color:#6365bf;
  font-size: 1rem;
  margin: 0;
`;

const Bar = styled.div`
 border-bottom: 1px solid #6365bf;
 margin: 1rem 0;
 width: 50%;
`;

const Search = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: transparent;
  border-radius: 12px;
  margin: 3rem 1rem 1rem 1rem;
  padding: .8rem 0 .8rem .8rem;
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

export default Comm;