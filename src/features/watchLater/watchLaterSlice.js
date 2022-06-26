import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  watchLater: [],
};
const watchLaterSlice = createSlice({
  name: 'watchLater',
  initialState,
  reducers: {
    setWatchLater: (state, { payload }) => {
      console.log(payload);
      state.watchLater = payload;
    },
  },
});

export const { setWatchLater } = watchLaterSlice.actions;

export default watchLaterSlice.reducer;
