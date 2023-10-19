import { configureStore } from '@reduxjs/toolkit';
import UserSlice from '../features/UserSlice';

const store = configureStore({
    reducer : UserSlice
})

export default store;