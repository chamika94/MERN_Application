import { createSlice, createAsyncThunk, applyMiddleware } from "@reduxjs/toolkit";
import * as api from "../api";

export const login = createAsyncThunk("auth/login",async({formValue, navigate, toast},{rejectWithValue})=>{
    try{
      const response = await api.signIn(formValue);
      toast.success("Login Successfully");
      navigate("/");
      return response.data;
     //console.log("resp",response);
    }catch(err){
        //console.log("resp",err.response.data.message);
        return rejectWithValue(err.response.data);
    }
})

export const register = createAsyncThunk("auth/register",async({formValue, navigate, toast},{rejectWithValue})=>{
    try{
      const response = await api.signUp(formValue);
      toast.success("Registered Successfully");
      navigate("/");
      return response.data;
     //console.log("resp",response);
    }catch(err){
        //console.log("resp",err.response.data.message);
        return rejectWithValue(err.response.data);
    }
})


const authSlice = createSlice({
    name:"Auth",
    initialState:{
        user:null,
        error:"",
        loading: false,
    },
    extraReducers:{
        [login.pending]:(state, action) => {
            state.loading=true;
        },
        [login.fulfilled]:(state, action) => {
            state.loading = false;
            localStorage.setItem("profile",JSON.stringify({...action.payload}));
            state.user = action.payload;
        },
        [login.rejected]:(state,action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
//==================================================================================
        [register.pending]:(state, action) => {
            state.loading=true;
        },
        [register.fulfilled]:(state, action) => {
            state.loading = false;
            localStorage.setItem("profile",JSON.stringify({...action.payload}));
            state.user = action.payload;
        },
        [register.rejected]:(state,action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

    },
});

export default authSlice.reducer;