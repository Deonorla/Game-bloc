import styled from "styled-components";
import {AiOutlineEye} from "react-icons/ai";
import vid from "../Features/Videos/god.mp4";
import vid1 from "../Features/Videos/kombat.mp4";
import vid2 from "../Features/Videos/gotham.mp4";
import vid3 from "../Features/Videos/creed.mp4";
import u1 from "../assets/u7.png";

const Activestream = ( ) =>{
    return(
        <Container>
               
                <Wrap>

                    <video autoPlay loop muted >
                       <source src={vid} type="video/mp4" />
                    </video>
                    <AvatarCon>
                      <img src={u1} alt="img" />
                    <Seen>
                    <p>Live</p> 
                    </Seen>
                    </AvatarCon>

                    <Functions>
                      <Buttons>
                      <Eye/>
                      <p> 10k</p> 
                      </Buttons>
                      <Buttons>
                      <Eye/>
                      <p> 10k</p> 
                      </Buttons>
                      <Buttons>
                      <Eye/>
                      <p> 10k</p> 
                      </Buttons>
                      <Buttons>
                      <Eye/>
                      <p> 10k</p> 
                      </Buttons>
                    </Functions>
                </Wrap>
                <Wrap>

                    <video autoPlay loop muted >
                       <source src={vid1} type="video/mp4" />
                    </video>
                    <AvatarCon>
                      <img src={u1} alt="img" />
                    <Seen>
                    <p>Live</p> 
                    </Seen>
                    </AvatarCon>

                    <Functions>
                      <Buttons>
                      <Eye/>
                      <p> 10k</p> 
                      </Buttons>
                      <Buttons>
                      <Eye/>
                      <p> 10k</p> 
                      </Buttons>
                      <Buttons>
                      <Eye/>
                      <p> 10k</p> 
                      </Buttons>
                      <Buttons>
                      <Eye/>
                      <p> 10k</p> 
                      </Buttons>
                    </Functions>
                </Wrap>
                <Wrap>

                    <video autoPlay loop muted >
                       <source src={vid2} type="video/mp4" />
                    </video>
                    <AvatarCon>
                      <img src={u1} alt="img" />
                    <Seen>
                    <p>Live</p> 
                    </Seen>
                    </AvatarCon>

                    <Functions>
                      <Buttons>
                      <Eye/>
                      <p> 10k</p> 
                      </Buttons>
                      <Buttons>
                      <Eye/>
                      <p> 10k</p> 
                      </Buttons>
                      <Buttons>
                      <Eye/>
                      <p> 10k</p> 
                      </Buttons>
                      <Buttons>
                      <Eye/>
                      <p> 10k</p> 
                      </Buttons>
                    </Functions>
                </Wrap>
                <Wrap>

                    <video autoPlay loop muted >
                       <source src={vid3} type="video/mp4" />
                    </video>
                    <AvatarCon>
                      <img src={u1} alt="img" />
                    <Seen>
                    <p>Live</p> 
                    </Seen>
                    </AvatarCon>

                    <Functions>
                      <Buttons>
                      <Eye/>
                      <p> 10k</p> 
                      </Buttons>
                      <Buttons>
                      <Eye/>
                      <p> 10k</p> 
                      </Buttons>
                      <Buttons>
                      <Eye/>
                      <p> 10k</p> 
                      </Buttons>
                      <Buttons>
                      <Eye/>
                      <p> 10k</p> 
                      </Buttons>
                    </Functions>
                </Wrap>

        </Container>
    )
}


const Container = styled.div`
 margin: 1rem;
 display: grid;
 grid-template-columns: repeat(1, 1fr) ;
 gap: 1rem;
 @media (min-width: 520px){
 grid-template-columns: repeat(2, 1fr);

}
 @media (min-width: 1400px){
 grid-template-columns: repeat(3, 1fr);
 
}
`;

const Wrap = styled.div`
    width: 100%;
    height: 200px;
    box-shadow: rgba(0,0,0, 0.35) 0px 5px 15px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 12px;
  
  video{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    object-fit: cover;
  }
`;

const AvatarCon = styled.div`
position: absolute;
top: 0.3rem;
left: 0.3rem;
display: flex;
align-items: center;
justify-content: center;
img{
    width: 30px;
    height: 30px;
}
`;


const Seen = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: rgb(158, 5, 5);
border-radius: 9999px;
padding: .1rem .5rem;
width: fit-content;
margin: 0 0 0 5px ;

p{
 color: #fff;
 font-size: 10px;
 margin: 0;

}

`;
const Functions = styled.div`
position: absolute;
top: 0;
right: 0;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background: rgba(255, 255, 255, 0.34);
box-shadow: 0 4px 30px rgba(0,0,0,0.1);
backdrop-filter: blur(5px);
border-radius: 9999px;
padding: .3rem .1rem;
width: fit-content;
margin: 1rem .3rem;

`;

const Buttons = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding: 0.3rem 0;
 p{
 color: #fff;
 font-size: 7px;
 margin: 0;

}
`;

const Eye = styled(AiOutlineEye)`
 color: #fff;
 font-size: 14px;
`;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;

export default Activestream;