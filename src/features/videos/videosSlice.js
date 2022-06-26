import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  videos: [],
  categories: [],
  category: 'All',
};
const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setVideos: (state, { payload: { videos } }) => {
      state.videos = videos;
    },
    setCategories: (state, { payload: { categories: newCategories } }) => {
      state.categories = newCategories;
    },
    setSingleCategories: (state, { payload }) => {
      state.category = payload;
    },
  },
});

export const { setVideos, setCategories, setSingleCategories } =
  videosSlice.actions;

export default videosSlice.reducer;
