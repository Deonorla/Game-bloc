import { createSlice } from "@reduxjs/toolkit";
import { Data } from "./Data";

const initialState = {
  Info: Data,
}

const detailSlice = createSlice({
 name:'detail',
 initialState,
 reducers:{
    showDetails:((state, action)=>{
        const detail= action.payload
        console.log(detail)
    })
 },
})


export const { showDetails } = detailSlice.reducer;
export default detailSlice.reducer;