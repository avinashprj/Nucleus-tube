import React from 'react';
import { SideBarDesktop, SideBarMobile } from '../../components';
import { VideoCard } from '../../components/VideoCard/VideoCard';

export const LikesPage = () => (
  <>
    <SideBarDesktop />
    <SideBarMobile />
    <div className="flex-base flex-column container">
      <div className="outer-grid flex-base">
        <div className="page-heading">
          Liked <span className="page-number">( 1 )</span>
        </div>
      </div>
      <div className="flex-base">
        <div className="outer-grid video-outer-grid">
          <div className="video-grid">
            <VideoCard />
          </div>
        </div>
      </div>
    </div>
  </>
);
