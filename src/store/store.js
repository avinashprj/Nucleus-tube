import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import videosReducer from '../features/videos/videosSlice';
import { fetchVideosSliceApi } from '../features/api/fetchVideos/fetchVideosSlice';
import { authenticationReducer } from '../features/authentication/authenticationSlice';
import { authSliceApi } from '../features/api/auth/authSliceApi';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  videos: videosReducer,
  [fetchVideosSliceApi.reducerPath]: fetchVideosSliceApi.reducer,
  [authSliceApi.reducerPath]: authSliceApi.reducer,
});
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [fetchVideosSliceApi.reducerPath],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(fetchVideosSliceApi.middleware, authSliceApi.middleware),
});

export const persistor = persistStore(store);
