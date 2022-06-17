// import { useState } from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import styled from "styled-components";
const Header =()=>{
   const [navbar, setNavbar] = useCycle(false, true);

//    const itemVariants = {
//       closed:{
//         opacity:0
//       },
//       open:{
//         opacity: 1
//       }
//    }

//    const sideVariants = {
//     closed:{
//       transition:{
//         staggerChildren:0.2,
//         staggerDirection: -1
//       },
//       open:{
//         staggerChildren:0.2,
//         staggerDirection: 1
//       }
//     },
//     open:{
//       opacity: 1
//     }
//  }


    return(
        <Head>
           <LogoContainer>
              <img src="logo.png" alt="logo" />
              <Img src="hamburger.png" alt="menu" onClick={setNavbar} />

               <AnimatePresence>
                  { navbar && <Menu  initial={{width: 0}} animate={{width: "12rem"}} exit={{
                    width: 0,
                    transition:{delay:0.7, duration:0.3}
                  }}>
                      <motion.aside initial="closed" animate="open" >
                        <AvatarContainer>
                          <ColorContainer>
                                  <Red></Red>
                                  <Yellow></Yellow>
                                  <Green></Green>
                          </ColorContainer>
                          <img src="user.png" alt="avatar"/>
                      </AvatarContainer>
                      
                        <motion.ul >
                            <motion.li  whileHover={{scale: 1.1}}>Home</motion.li>
                            <motion.li  whileHover={{scale: 1.1}}>Stream</motion.li>
                            <motion.li  whileHover={{scale: 1.1}}>Game store</motion.li>
                            <motion.li  whileHover={{scale: 1.1}}>News</motion.li>
                        </motion.ul>

                      </motion.aside>
                  
                  </Menu> }
             
               </AnimatePresence>
               

            </LogoContainer>
        </Head>

    )
}

const Head = styled.div`
  background-color: #35356b;
  width: 100%;
`;

const Img = styled.img`
 font-size: 60px;
 cursor: pointer;
`;

const Menu = styled(motion.div)`
 position: absolute;
 border: 1px solid rgba(255,255,255, 0.3);
 border-radius: 16px 0 0 16px;
 background: linear-gradient(270deg, rgba(39,38,78,255) 0%, #33337d 100%);
 display: flex;
 flex-direction: column; 
 right: 1px;
 top: 3.5rem;
 width: 12rem;
 height: 100vh;
 transition: 0.5 all ease;
 z-index: 1;

 ul{
  display: flex;
  flex-direction: column;
  color: #ffffff;
  list-style: none;
  padding: 1rem;
}
li{
  font-size: 1rem;
  padding-block: 1rem;
}
`;

const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    
     img{
        cursor: pointer;
        margin: 2rem;
        width: 60px;
        height: 60px;
        z-index: 1;
    }
`;

const ColorContainer = styled.div`
  display: flex;
  flex-direction: row; 
  margin-top: 2rem;
  margin-left: 1rem;
`;

const Red = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: red;
  margin-right: 4px;
`;

const Yellow = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: yellow;
  margin-right: 4px;
`;

const Green = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: green;
`;

const LogoContainer = styled.div`
 position: relative;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 padding: 0 .5rem;
 box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
 img{
  margin-right: 1rem;
  margin-bottom: .5rem;
 }
 
`;

//  background: rgba(255,255,255, 0.5);
//  box-shadow: 0 4px 30px rgba(0,0,0,0.1);
//  backdrop-fliter: blur(15px);

export default Header;


