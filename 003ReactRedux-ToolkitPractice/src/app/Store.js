import { configureStore } from '@reduxjs/toolkit';
import UserSlice from '../features/UserSlice';

const Store = configureStore({
    reducer: UserSlice
})

export default Store
