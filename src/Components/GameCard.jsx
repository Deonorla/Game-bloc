import styled from 'styled-components';

const GameCard = ({title, img, color, genre,rating}) =>{
    return(
        <Wrapper style={{backgroundImage:`linear-gradient(to bottom,
        ${color} 35%, #110f0f 83%)`, borderColor:`${color}`}} >
             <Img src={img} alt="" />

             <Description>
                <Title>
                    <Name>{title}</Name>
                    <Rating style={{borderColor:`${color}`}}>{rating}</Rating>
                </Title>
                <Info>
                    {genre} 
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
  height: 150px;
  &:hover{
    transform: scale(1.08);
    cursor: pointer;
  }
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
  height: 3rem;
  max-height: 5rem;
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: white;

  @media (max-width: 367px){
    font-size: 11px;
  }
  @media (max-width: 500px){
    font-size: 15px;
  }
`;

const Rating = styled.p`
 margin: 0;
 color: white;
 margin-left: .3rem;
 padding: .4rem;
 border-radius: 9999px;
 border-style: solid;
 border-width: 2.5px;
`;

const Info = styled.p`
 margin: 1.5rem 0 0 0;
 color: #ffffff; 
 
`;


export default GameCard;