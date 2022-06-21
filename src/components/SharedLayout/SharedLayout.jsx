import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { PlaylistModal } from '../PlaylistModal/PlaylistModal';

export const SharedLayout = ({ playlistModal, setPlaylistModal }) => (
  <>
    <header>
      <Navbar />
    </header>
    <PlaylistModal
      playlistModal={playlistModal}
      setPlaylistModal={setPlaylistModal}
    />
    <Outlet />
  </>
);
