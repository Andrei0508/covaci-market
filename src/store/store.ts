import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import { treesApi } from './api/treesApi';
import authReducer from './slices/authSlice';
import categoryReducer from './slices/categorySlice';
import treeReducer from './slices/treeSlice';
import { categoryApi } from './api/categoryApi';
import { uploadApi } from './api/uploadApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    tree: treeReducer,
    [authApi.reducerPath]: authApi.reducer,
    [treesApi.reducerPath]: treesApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [uploadApi.reducerPath]: uploadApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(treesApi.middleware)
      .concat(categoryApi.middleware)
      .concat(uploadApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;