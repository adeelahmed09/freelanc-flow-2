import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username:"",
    _id:"",
    name:"",
    email:"",
    logged:false,
}

export const userSlice  = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.username =  action.payload.username
            state._id = action.payload._id
            state.name = action.payload.name
            state.email = action.payload.email
            state.logged = true
        },
        removeUser:(state,action)=>{
            state.username =  ""
            state._id = ""
            state.name = ""
            state.email = ""
            state.logged = false
        }
    }
})

export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer