import { useEffect, useRef } from "react";
import styled from "styled-components"


const Details = ()=>{

    const imageRef = useRef();
    
     useEffect(()=>{
        const image = document.getElementById('image')
        window.addEventListener('scroll', () => {
            image.style.backgroundSize = 100 - +window.pageYOffset+'%'; 
        })
     })
       
     
    return(
 
        <Wrapper>
        <ImageWrapper ref={imageRef} id="image">
            
        </ImageWrapper>
         
         <Content>

            <h1>Gaming prospect in Nitendo switch</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima accusamus, maiores distinctio, sapiente harum quae velit, dignissimos voluptates a odit magnam eos totam consectetur veritatis rem esse minus ratione ducimus doloribus dolorum incidunt debitis impedit! Ipsum, perferendis. Sapiente nisi velit iusto commodi neque consequuntur voluptatum accusamus nobis minima molestias unde non exercitationem sint corrupti, dolorem id, ex temporibus tempora, saepe obcaecati. Alias pariatur soluta unde assumenda nam magnam, veritatis exercitationem nisi, possimus nemo ex libero itaque, sapiente iure provident facilis tempora. Asperiores vero ullam aspernatur quos, temporibus fuga quaerat voluptate perspiciatis voluptatum aut accusantium maiores earum est corrupti libero officiis quis repellat dolor. Quisquam quod libero officiis soluta voluptate natus. Debitis molestiae assumenda quod quo, amet excepturi eius omnis? Nostrum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ex beatae eum, aperiam nulla molestiae, sequi laudantium in iure distinctio omnis accusantium exercitationem quaerat unde nisi libero, nostrum voluptates id ullam nemo itaque consequatur! Rem repudiandae nam eveniet, vel ad quam perferendis necessitatibus doloribus nobis autem a, modi at corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo distinctio deleniti possimus doloribus animi ullam ipsam sint repudiandae iste quaerat quos, sunt corrupti odio laboriosam error praesentium eligendi, nisi magnam porro fuga. Dolorum unde quas ratione odit sequi corporis rerum! Unde suscipit tempora id animi tenetur nobis. Temporibus deleniti alias vero, distinctio voluptatum, modi libero sapiente voluptate itaque consectetur totam reprehenderit esse quisquam autem ullam ad error ipsum at ut possimus minus numquam nesciunt? Dolorem aspernatur itaque quos earum temporibus, officia esse nostrum dolorum, sit nemo non fuga rem quae perspiciatis, laboriosam numquam eius reprehenderit delectus sint fugiat aut. Numquam.</p>
         </Content>

        </Wrapper>
    )

}

const Wrapper = styled.div`
  background-color: #251f19;
`;

const ImageWrapper = styled.div`
 position: relative;
 width: 100%;
 height: 47.4vh;
 background-image:  linear-gradient(to bottom , #8f7e6895, #251f19),
 url('videogamer.jpg');
 background-size: 100% 50%;
 background-repeat: no-repeat;
 background-attachment: fixed; 
`;

const Content = styled.div`
background: #251f19;

 p{
    color: white;
 }
`;

export default Details;