import React from 'react';
import {
  VideosGrid,
  SideBarDesktop,
  SideBarMobile,
  PlaylistModal,
} from '../../components';

export const HomePage = ({ playlistModal, setPlaylistModal }) => (
  <>
    <SideBarDesktop />
    <SideBarMobile />
    <VideosGrid
      playlistModal={playlistModal}
      setPlaylistModal={setPlaylistModal}
    />
  </>
);
