import React from 'react';
import { VideoGridButtons } from './sub-components/VideoGridButtons/VideoGridButtons';
import { VideoCard } from '../VideoCard/VideoCard';

export const VideosGrid = ({ playlistModal, setPlaylistModal }) => (
  <div className="flex-base flex-column container">
    <VideoGridButtons />
    <div className="flex-base">
      <div className="outer-grid video-outer-grid">
        <div className="video-grid">
          <VideoCard
            playlistModal={playlistModal}
            setPlaylistModal={setPlaylistModal}
          />
        </div>
      </div>
    </div>
  </div>
);
