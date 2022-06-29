import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { PlaylistModal } from '../PlaylistModal/PlaylistModal';

export const SharedLayout = ({ playlistModal, setPlaylistModal, setSkip }) => (
  <>
    <header>
      <Navbar setSkip={setSkip} />
    </header>
    <Outlet />
  </>
);
