
import { signin, signup } from "@/api/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface IAuthState {
    value:any[]
}
const initialState:IAuthState = {
    value:[]
}
export const registerAuth = createAsyncThunk(
    "auth/registerAuth",
    async (user:any)=>{
    const data = await signup(user)
    return data
    }
)
export const loginAuth = createAsyncThunk(
    "auth/loginAuth",
    async (user:any)=>{
    const data = await signin (user)
    return data
    }
)

const authSLice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers : (builder)=>{
        
        builder.addCase(registerAuth.fulfilled, (state,action)=>{
            console.log("fulfilled")
            state.value.push(action.payload)
        })
        builder.addCase(loginAuth.fulfilled, (state,action)=>{
            console.log("fulfilled")
            state.value.push(action.payload)
        })
        
    }
})
export const selectAuth = (state: any)=> state.auth.value
export default authSLice.reducer