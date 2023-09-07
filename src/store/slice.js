import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[],
 
}

const todoSlice = createSlice({
    name : 'todolist',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
           return{
            data:[...state.data,action.payload]
           }
        },
        deleteTodo:(state,action)=>{
            state.data = state.data.filter((elem,ind)=> ind !== action.payload);
        },
        updateTodo:(state,action)=>{
            state.data.splice(action.payload.ind,1,action.payload.val);
           
        },
        clearAll:(state)=>{
            state.data = [];
        }
    }
})

export const {addTodo,deleteTodo,clearAll,updateTodo} = todoSlice.actions;
export default todoSlice.reducer;

