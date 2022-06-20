import React from 'react';
import { VideoGridButtons } from './sub-components/VideoGridButtons/VideoGridButtons';
import { VideoCard } from '../VideoCard/VideoCard';

export const VideosGrid = () => (
  <div className="flex-base flex-column homepage">
    <VideoGridButtons />
    <div className="flex-base">
      <div className="video-outer-grid">
        <div className="video-grid">
          <VideoCard />
        </div>
      </div>
    </div>
  </div>
);
