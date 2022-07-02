import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  history: [],
};
const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistory: (state, { payload }) => {
      state.history = payload;
    },
  },
});

export const { setHistory } = historySlice.actions;

export default historySlice.reducer;
