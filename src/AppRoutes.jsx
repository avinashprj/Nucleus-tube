import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './components';
import {
  ErrorPage,
  HistoryPage,
  HomePage,
  LikesPage,
  Playlist,
  WatchLaterPage,
} from './pages';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/playlists" element={<Playlist />} />
      <Route path="/liked" element={<LikesPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/watchlater" element={<WatchLaterPage />} />
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export { AppRoutes };
