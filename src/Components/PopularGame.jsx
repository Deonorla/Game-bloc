import styled from 'styled-components';
import GameCard from './GameCard';
import GameData from '../Features/GameData';

const PopularGame = () =>{
    return(
        <Container>
            <Title>Popular Games</Title>
            <Wrapper>

             { GameData.map((item, index) =>(
                <GameCard key={index} {...item}/>
             ))

             }
            </Wrapper>
        </Container>
    ) 
}


const Container = styled.div`
margin-top: 2rem;
`;

const Wrapper = styled.div`
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 gap: .5rem;
 @media (min-width: 767px){
     grid-template-columns: repeat(3, 1fr);
 }
 @media (min-width: 1100px){
     grid-template-columns: repeat(4, 1fr);
 }
`;

const Title = styled.p`
  margin: 0 0 1rem .5rem;
   font-size: 1.5rem;
   font-weight: 500;
   color: #df78e3;
`;

export default PopularGame;