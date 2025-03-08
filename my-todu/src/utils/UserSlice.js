import {createSlice} from "@reduxjs/toolkit"

const UserSlice=createSlice({

name:"user",
initialState:{},
// function
reducers:{
  
      addUser: (state, action) => action.payload,
      loginUser: (state, action) => {
        localStorage.setItem('token', action.payload.token);  
        return action.payload;
    },
    logoutUser: () => {
        localStorage.removeItem('token'); 
        return null;
    }
    }
}

);
export const {addUser,loginUser,logoutUser}=UserSlice.actions;

export default UserSlice.reducer