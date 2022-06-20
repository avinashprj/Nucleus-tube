import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './components';
import { ErrorPage, HistoryPage, HomePage, LikesPage, Playlist } from './pages';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/playlists" element={<Playlist />} />
      <Route path="/liked" element={<LikesPage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export { AppRoutes };
