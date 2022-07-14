import  styled from "styled-components";
import { motion, useCycle, AnimatePresence } from "framer-motion"



export const data = [
  {
      id: 1,
      title:"Sony Playstation"

  },
  {
      id: 2,
      title:"Indie Games"

  },
  {
      id: 3,
      title:"Mobile Games"

  },
  {
      id: 4,
      title:"Console Games"

  },
  {
      id: 5,
      title:"Streams"

  },
]


const filterVariant ={
   hidden:{
     y: 1000,
    
   },
   visible:{
    y:0,

    transition:{
      duration: 1,
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
      
   }
}

const SearchBox = () =>{
   const [visible, setVisible]= useCycle(false, true)
   const [hidden, setHidden] = useCycle(false, true)
  const listVariant = {
    closed:{
        x: -1000
    },
    opened:{
        x: 0,
       
        transition: {
            duration:1,
            staggerChildren: 0.2,
            delayChildren: 1
        }
    }
  }

  const childVariant = {
    closed:{
        x: -10,
        opacity: 0
    },

    opened:{
        x: 0,
        opacity: 1
    }
  }

 


    return (
    

             

        <SearchContainer>


          <Category>
           <motion.h3 onClick={setVisible} whileHover={{scale:1.1}} > Category</motion.h3> 
            <AnimatePresence>
                    { visible &&
                      <Favourcategories initial="closed" animate="opened" variants={listVariant}  >
                      { data.map(item =>{
                          return  <List key={item.id} variants={childVariant}>
                          <motion.p >{item.title}</motion.p>
                      </List>
                      })}

                      
              </Favourcategories>
                    }  
            </AnimatePresence>



          </Category>

          <Container>
          <Search>
              <Input type="text" placeholder="Search" style={{color:'#fff'}}/>
              <Button><img src="magnifying-glass.png" alt="search"/></Button>
          </Search>

             <Filter>
                <img src="filter.png" alt="fliter" onClick={setHidden} />

                <AnimatePresence>

                { hidden &&

                <motion.FilterBox initial="hidden" animate="visible" variants={filterVariant} style={{ position:'absolute', right:'0', top:'2.3rem' ,display:'flex', flexDirection:'column',justifyContent:'center', backgroundColor:'#35356b', padding:'1rem', width:'10rem',  border:" 1px solid #6365bf", borderRadius:'12px', zIndex:'1000'}}>
                       <h4 style={{color:'#fff'}}>Filter</h4>
                       <motion.Box style={{display:'flex', justifyContent:'space-between'}}>
                             <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}> <input type='checkbox' style={{focus:'ring-0',background:'#35356b', border:'1px solid #df78e3', color:'#df78e3'}}/>  <p style={{color:'#fff', marginLeft:'5px'}}>All News</p></div>
                              <p style={{color: "#fff"}}>1028</p>
                       </motion.Box>
                       <motion.Box style={{display:'flex', justifyContent:'space-between'}}>
                             <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}> <input type='checkbox' style={{focus:'ring-0',background:'#35356b', border:'1px solid #df78e3', color:'#df78e3'}}/>  <p style={{color:'#fff', marginLeft:'5px'}}>By Popularity</p></div>
                             <p style={{color: "#fff"}}>765</p>
                       </motion.Box>
                       <motion.Box style={{display:'flex', justifyContent:'space-between'}}>
                             <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}> <input type='checkbox' style={{focus:'ring-0',background:'#35356b', border:'1px solid #df78e3', color:'#df78e3'}}/>  <p style={{color:'#fff', marginLeft:'5px'}}>By Date</p></div>
                             <p style={{color: "#fff"}} >180</p>
                       </motion.Box>
                       <motion.Box style={{display:'flex', justifyContent:'space-between'}}>
                             <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}> <input type='checkbox' style={{focus:'ring-0',background:'#35356b', border:'1px solid #df78e3', color:'#df78e3'}}/>  <p style={{color:'#fff', marginLeft:'5px'}}>By Relevance</p></div>
                             <p style={{color: "#fff"}}>28</p>
                       </motion.Box>
                </motion.FilterBox>
                }
                </AnimatePresence>
             </Filter>
            
          </Container>

        </SearchContainer>
        
    )
}


const SearchContainer = styled.div`
  margin: 1rem 2rem;
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
  align-items: center;

   @media (min-width: 686px) and  (max-width: 999px){
      margin: 0 1rem 0 0;
     }

  @media (min-width: 1000px){
    margin-left: 10px;
    margin-right: 18rem;
  }
    
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

 
`;

const Search = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 30px;
  width: 150px;
  border: 1px solid #6365bf;
  background: transparent;
  border-radius: 9999px;
  margin: 0 1rem 0 0;
  padding:0  0 0 15px;
  
 
`;

const Input = styled.input`
  height: 30px;
  width: 120px;
  background: transparent;
  border: none;
  
 

  &::-webkit-input-placeholder{
    color: white;
    
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
  img{
    color: #6365bf;
  }
`;

const Category = styled.div`
  position: relative;
  h3{
    color: #df78e3;
    cursor: pointer;
    @media (min-width: 686px){

      margin: 0 0 0 1rem;
    }
  }
`;

const Favourcategories = styled(motion.div)`
  position: absolute;
  width: 150px;
  z-index: 1000;
  background-color: #35356b;
  border: 1px solid #6365bf;
  border-radius: 8px;
  padding: 1rem;

`;

const List = styled(motion.div)`
   width: 100%;
   height: auto;
   padding: 2px 2px 2px 4px;
   border-radius: 8px;
   margin: 0;

   p{
    color: #fff;

    &:hover{
      cursor: pointer;
    }
   }
   &:hover{
        transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        background-color: rgba(39,38,78,255);
   }
`;

const Filter = styled.div`
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;

 img{
    cursor: pointer;
 }
`;

export default SearchBox;