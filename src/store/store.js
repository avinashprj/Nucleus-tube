/* eslint-disable no-param-reassign */
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
import likesReducer from '../features/likes/likesSlice';
import historyReducer from '../features/history/historySlice';
import watchLaterReducer from '../features/watchLater/watchLaterSlice';
import { fetchVideosSliceApi } from '../features/api/fetchVideos/fetchVideosSlice';
import { authenticationReducer } from '../features/authentication/authenticationSlice';
import { authSliceApi } from '../features/api/auth/authSliceApi';
import { likesSliceApi } from '../features/api/likesApi/likesSliceApi';
import { watchLaterSliceApi } from '../features/api/watchLaterApi/watchLaterApi';
import { historySliceApi } from '../features/api/historyApi/historySliceApi';

const appReducer = combineReducers({
  authentication: authenticationReducer,
  videos: videosReducer,
  likes: likesReducer,
  watchLater: watchLaterReducer,
  history: historyReducer,
  [fetchVideosSliceApi.reducerPath]: fetchVideosSliceApi.reducer,
  [authSliceApi.reducerPath]: authSliceApi.reducer,
  [likesSliceApi.reducerPath]: likesSliceApi.reducer,
  [watchLaterSliceApi.reducerPath]: watchLaterSliceApi.reducer,
  [historySliceApi.reducerPath]: historySliceApi.reducer,
});
const rootReducer = (state, action) => {
  if (action.type === 'authentication/logoutUser') {
    // for all keys defined in your persistConfig(s)
    console.log(state);
    storage.removeItem('persist:root');

    state = undefined;
    // state.likes = undefined;
    // state.authentication = undefined;
  }
  return appReducer(state, action);
};
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [
    'authentication',
    fetchVideosSliceApi.reducerPath,
    likesSliceApi.reducerPath,
    authSliceApi.reducerPath,
    watchLaterSliceApi.reducerPath,
    historySliceApi.reducerPath,
  ],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      fetchVideosSliceApi.middleware,
      authSliceApi.middleware,
      likesSliceApi.middleware,
      watchLaterSliceApi.middleware,
      historySliceApi.middleware
    ),
});

export const persistor = persistStore(store);
