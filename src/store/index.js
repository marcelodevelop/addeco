import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userReducer from './usersSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
  },
});

export default store;