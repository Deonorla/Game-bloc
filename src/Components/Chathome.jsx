import styled from "styled-components"
import Chat from "../Components/Chat";
const Chathome = ( ) => {
    return(
        <div>
        <Chahome>
          <Chat/>
        </Chahome>

        </div>
    )
}

export default Chathome;

const Chahome = styled.div`
display: none;
@media (min-width: 1200px){
  display: flex;
  position: sticky;
  position: -webkit-sticky;
  left: 0;
  top: 2.5rem;
  height: 100vh;
}
`;