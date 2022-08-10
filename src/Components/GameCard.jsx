import styled from 'styled-components';

const GameCard = ({title, img, color}) =>{
    return(
        <Wrapper style={{backgroundImage:`linear-gradient(to bottom,
        ${color} 35%, #110f0f 83%)`, borderColor:`${color}`}} >
             <Img src={img} alt="" />

             <Description>
                <Title>
                    <Name>{title}</Name>
                    <Rating>4.5</Rating>
                </Title>
                <Info>
                    Lorem ipsum dolor sit amet. 
                </Info>
             </Description>
        </Wrapper>
    ) 
}


const Wrapper = styled.div`
width: 100%;
border-width: 2px;
border-style: solid;
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
`;

const Description = styled.div`
 padding: .5rem;
 
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: .5rem;
`;

const Name = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: white;
`;

const Rating = styled.p`
 margin: 0;
 color: white;
 margin-left: .3rem;
 padding: .4rem;
 border-radius: 9999px;
 border: 2px solid #df78e3;
`;

const Info = styled.p`
 margin: 0;
 color: #ffffff; 

`;


export default GameCard;