import { configureStore } from "@reduxjs/toolkit";
import tuduReducer from "./tuduSlice";

import  userReducer  from "./UserSlice";
import toggleSlice from "./toggleSlice";

const appStore=configureStore({

reducer:{
    user:userReducer,
    tudu:tuduReducer,
    toggle:toggleSlice
}

});

export default appStore

