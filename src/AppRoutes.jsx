import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute, SharedLayout } from './components';
import {
  ErrorPage,
  HistoryPage,
  HomePage,
  LikesPage,
  LoginPage,
  Playlist,
  PlaylistVideosPage,
  SignupPage,
  SingleVideoPage,
  WatchLaterPage,
} from './pages';

const AppRoutes = ({ setSkip }) => (
  <Routes>
    <Route path="/" element={<SharedLayout setSkip={setSkip} />}>
      <Route index element={<HomePage />} />

      <Route path="/" element={<PrivateRoute />}>
        <Route path="/playlists" element={<Playlist />} />
        <Route path="/liked" element={<LikesPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/watchlater" element={<WatchLaterPage />} />
        <Route path="/playlists/:playlistID" element={<PlaylistVideosPage />} />
      </Route>

      <Route path="/login" element={<LoginPage setSkip={setSkip} />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/video/:videoID" element={<SingleVideoPage />} />
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export { AppRoutes };
