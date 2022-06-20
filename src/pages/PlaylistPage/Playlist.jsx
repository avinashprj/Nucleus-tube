import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CgPlayList } from 'react-icons/cg';
import { SideBarDesktop, SideBarMobile } from '../../components';

export const Playlist = () => (
  <>
    <SideBarDesktop />
    <SideBarMobile />
    <div className="flex-base flex-column container">
      <div className="outer-grid flex-base">
        <div className="playlist-heading">
          Playlists <span className="playlist-number">( 1 )</span>
        </div>
      </div>
      <div className="flex-base">
        <div className="outer-grid video-outer-grid">
          <div className="video-grid">
            <div className="video-card">
              <div className="video-card-main">
                <img
                  src="https://i.ytimg.com/vi/JXeJANDKwDc/0.jpg"
                  alt="video thumbnail"
                  className="relative"
                />
                <div className="flex flex-column playlist-overlay">
                  <div className="playlist-overlay-number">1</div>
                  <CgPlayList />
                </div>
              </div>
              <div className="video-card-details">
                <div className="flex-base flex-column ">
                  <button className="playlist-card-heading" type="button">
                    music
                  </button>
                </div>
                <div className="playlist-card-dots flex">
                  <button className="border-none " type="button">
                    <BsThreeDotsVertical className="icon-svg flex" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
