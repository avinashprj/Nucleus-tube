import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import {
  BsCollectionPlayFill,
  BsFillHeartFill,
  BsFillStopwatchFill,
} from 'react-icons/bs';
import { FaHistory } from 'react-icons/fa';

export const SideBarMobile = () => (
  <aside className="sidebar-mobile">
    <a href="/">
      <div cursor="pointer" className="sidebar-mobile-link flex-al-center ">
        <AiFillHome />
        <div className="sidebar-mobile-link-details">Home</div>
      </div>
    </a>
    <a href="/playlists">
      <div cursor="pointer" className="sidebar-mobile-link flex-al-center">
        <BsCollectionPlayFill />
        <div className="sidebar-mobile-link-details">Playlists</div>
      </div>
    </a>
    <a href="/liked">
      <div cursor="pointer" className="sidebar-mobile-link flex-al-center">
        <BsFillHeartFill />
        <div className="sidebar-mobile-link-details">Liked</div>
      </div>
    </a>
    <a href="/history">
      <div cursor="pointer" className="sidebar-mobile-link flex-al-center">
        <FaHistory />
        <div className="sidebar-mobile-link-details">History</div>
      </div>
    </a>
    <a href="/watchlater">
      <div cursor="pointer" className="sidebar-mobile-link flex-al-center">
        <BsFillStopwatchFill />
        <div className="sidebar-mobile-link-details">Watch Later</div>
      </div>
    </a>
  </aside>
);
