
import styled from "styled-components";
import {motion} from "framer-motion"
import Hubdata from "../Features/Hubdata";
import Activestream from "./Activestream";
import {AiOutlineEye} from "react-icons/ai"

const Hub =()=>{

    return(
        <Hubcontainer>
             <Notch>
                <div></div>
             </Notch>

             <Gaming>
                <Slidercontainer>
                    <Text>
                    <h4>Gaming Hubs</h4> 
                    <p>View all</p>
                    </Text>

                    <Slider >
                        <Chatting>
                            <See>
                                <Eye/>
                                <p>143</p> 
                            </See>

                            <h4>Just chatting</h4>

                        </Chatting>

                        { Hubdata.map((data,index)=> (
                             <Imgslide key={index}>
                           
                             <Img style={{backgroundImage:`url(${data.background})`}}>
                                   <Seen>
                                       <Eye/>
                                       <p>{data.view}</p> 
                                   </Seen>
                                  <h4>{data.title}</h4>
                             </Img>
   
                            </Imgslide>
                        ))

                        }
                        
                    </Slider>
                </Slidercontainer>

                <Stream>
                    <Active><h3>Active Streams</h3> <p>Live</p></Active>

                    <Activestream/>
                </Stream>
             </Gaming>
           
       </Hubcontainer>
    )
}

const Hubcontainer =styled.div`

   @media (min-width: 1000px){
    margin-left: 7px;
    margin-right: 17rem;
   }
`;

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
  margin: 1rem 0 ;
  padding: 0 0 1rem 0;
`; 

const Slidercontainer = styled.div`
 display: flex;
 flex-direction: row;
 margin: 1rem 1rem 0 0;

`;
const Text = styled.div`
 display: flex;
 flex-direction: column;
 margin: 0 2rem 0 2rem;
 h4{
    font-size: 22px;
    font-weight: 500;
    color: #df78e3;
}
p{
     color: #df78e3;
    
 }
 `;

const Slider = styled(motion.div)`
 display: flex;
 flex-direction: row;
 margin: 2rem 0 0 0;
 overflow-x: scroll;
 
 
&::-webkit-scrollbar{
    -webkit-appearance: none;
    border: none;
    height: 5px;
}
&::-webkit-scrollbar-thumb{
    border-radius: 9999px;
    background-color: #df78e3;
    visibility: hidden;
}
&:hover::-webkit-scrollbar-thumb{
    visibility: visible;
}

`;

const Chatting = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 margin: 0 1rem 0 .5rem;
 padding: 0  1rem; 
 background-color: #41417c;
 border-radius: 9px;
 height: 140px;
 width: 170px;
 h4{
    font-size: 18px;
    color:#fff;
 }
 `;

const See = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-top: 1rem;

p{
    color: #fff;
    font-size: 1rem;
    margin: 0 0 0 8px;
   
   }
`;

const Seen = styled.div`
display: flex;
flex-direction: row;
align-items: center;
background: rgba(255, 255, 255, 0.34);
box-shadow: 0 4px 30px rgba(0,0,0,0.1);
backdrop-filter: blur(5px);
border-radius: 9999px;
padding: .1rem .5rem;
width: fit-content;
margin-top: 1rem;

p{
 color: #fff;
 font-size: 1rem;
 margin: 0 0 0 8px;

}

`;

const Eye = styled(AiOutlineEye)`
 color: #fff;
 font-size: 21px;
`;

const Imgslide = styled.div`
 display: flex;
 flex-direction: row;
 gap: 1rem;
 margin-right: 1rem;
`;

const Img = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 0 0 0 .5rem;
background-size: 180px 140px;
border-radius: 12px;
width: 180px;
height: 140px;
h4{
 color: #fff;
 font-size: 1.2rem;
 margin-left: 8px;

}
`;

const Stream = styled.div`
margin: 2rem .2rem;
`;
const Active = styled.div`
margin: 0 1rem;
display:flex;
flex-direction: row;
align-items: center;

h3{
    font-size: 22px;
    color: #df78e3;
    margin: 0 1rem 0 0;
}

p{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: #fff;
    width: fit-content;
    background-color: #df78e3;
    border-radius: 9999px;
    padding: .2rem 1rem;
    
}
`;

export default Hub;