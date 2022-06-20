import React from 'react';
import { SideBarDesktop, SideBarMobile, VideoCard } from '../../components';

export const HistoryPage = () => (
  <>
    <SideBarDesktop />
    <SideBarMobile />
    <div className="flex-base flex-column container">
      <div className="outer-grid flex-base">
        <div className="page-heading">
          History <span className="page-number">( 1 )</span>
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
