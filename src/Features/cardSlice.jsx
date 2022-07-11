import { createSlice } from "@reduxjs/toolkit";
import { Data } from "./Data";

const initialState = {
    Data: Data,
    Star: 3,
    Comment: 0,
    isLoading: true,
}

 const cardSlice = createSlice({
    name:'card',
    initialState,
    reducers:{
         increase:(state, action) =>{
            const star = action.payload
            console.log(star)

         },
         showDetails:((state, action)=>{
            const detail= action.payload
            console.log(detail)
        })
    }
    
}) 
export const { increase, showDetails } = cardSlice.actions;
export default cardSlice.reducer;