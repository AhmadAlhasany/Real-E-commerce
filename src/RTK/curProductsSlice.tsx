import { createSlice } from "@reduxjs/toolkit";

type init = {
    [id: number]: {
      quantity: number;
      size: string;
    };
  }
const initialState: init = {
}

const curProductsSlice = createSlice({
    name: 'curPro',
    initialState,
    reducers:{
        buy: (state, action) => {const {id,count, size} = action.payload; state[id] = {quantity: count, size}},
        remove: (state, action) => {const {payload} = action; delete state[payload];},
        clearAll: (state) =>{return{}},
    }
})

export default curProductsSlice.reducer
export const {buy, remove, clearAll} = curProductsSlice.actions