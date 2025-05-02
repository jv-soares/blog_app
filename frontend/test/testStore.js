import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../src/reducers/blogReducer';
import userReducer from '../src/reducers/userReducer';

const testStore = configureStore({
  reducer: {
    blogs: blogReducer,
    user: userReducer,
  },
});

export default testStore;
