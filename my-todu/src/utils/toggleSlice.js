import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        theme: "light", 
        isCardView: false,
    },

    reducers:{
        toggleMenu:(state,action)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
       
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
    },
    toggleView:(state)=>{
        state.isCardView=!state.isCardView;
    }
}
})

export const{toggleMenu,closeMenu,toggleTheme, setTheme,toggleView} =appSlice.actions
export default appSlice.reducer;