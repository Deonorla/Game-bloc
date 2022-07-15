import styled from "styled-components";
import {AiOutlineEye} from "react-icons/ai"

const Hub =()=>{
    return(
        <div>
             <Notch>
                <div></div>
             </Notch>

             <Gaming>
                <Slidercontainer>
                    <Text>
                    <h4>Gaming Hubs</h4> 
                    <p>View all</p>
                    </Text>

                    <Slider>
                        <Chatting>
                            <Seen>
                                <Eye/>
                                <p>143</p> 
                            </Seen>

                            <h4>Just chatting</h4>

                        </Chatting>
                    </Slider>
                </Slidercontainer>
             </Gaming>
           
       </div>
    )
}

const Notch = styled.div`
display: flex;
justify-content: center;
align-items: center;

  div{
    background-color: #35356b;
    height: 2rem;
    width: 9rem;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

const Gaming = styled.div`
  background-color: #35356b;
  border-top-left-radius: 1.4rem;
  border-top-right-radius: 1.4rem;
  margin: 1rem 0 1rem 1rem;
`;

const Slidercontainer = styled.div`
 display: flex;
 flex-direction: row;
`;
const Text = styled.div`
 display: flex;
 flex-direction: column;
 `;
const Slider = styled.div`

`;
const Chatting = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 margin: 0 .2rem 0 .5rem;
 background-color: #595894;
 border-radius: 9px;
 height: 150px;
 width: 150px;
 `;

const Seen = styled.div`
display: flex;
flex-direction: row;
align-items: center;

`;

const Eye = styled(AiOutlineEye)`

`;

export default Hub;