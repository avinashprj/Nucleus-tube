import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likes: [],
};
const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    setLikes: (state, { payload }) => {
      state.likes = payload;
    },
  },
});

export const { setLikes } = likesSlice.actions;

export default likesSlice.reducer;
