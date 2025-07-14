import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/UserSlice.js';

export default configureStore({
  reducer:{
    user: userReducer
  }
})