import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playlists: [],
};
const playlistsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    setPlaylists: (state, { payload }) => {
      state.playlists = payload;
    },
    setVideoInPlaylist: (state, { payload }) => {
      state.playlists = state.playlists.map((playlistItem) =>
        playlistItem._id === payload._id ? payload : playlistItem
      );
    },
  },
});

export const { setPlaylists, setVideoInPlaylist } = playlistsSlice.actions;

export default playlistsSlice.reducer;
