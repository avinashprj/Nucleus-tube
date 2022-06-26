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
  SignupPage,
  SingleVideoPage,
  WatchLaterPage,
} from './pages';

const AppRoutes = ({ playlistModal, setPlaylistModal, setSkip }) => (
  <Routes>
    <Route
      path="/"
      element={
        <SharedLayout
          setSkip={setSkip}
          playlistModal={playlistModal}
          setPlaylistModal={setPlaylistModal}
        />
      }
    >
      <Route
        index
        element={
          <HomePage
            playlistModal={playlistModal}
            setPlaylistModal={setPlaylistModal}
          />
        }
      />

      <Route path="/" element={<PrivateRoute />}>
        <Route path="/playlists" element={<Playlist />} />
        <Route path="/liked" element={<LikesPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/watchlater" element={<WatchLaterPage />} />
      </Route>

      <Route path="/login" element={<LoginPage setSkip={setSkip} />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/video/:videoID"
        element={
          <SingleVideoPage
            playlistModal={playlistModal}
            setPlaylistModal={setPlaylistModal}
          />
        }
      />
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export { AppRoutes };
