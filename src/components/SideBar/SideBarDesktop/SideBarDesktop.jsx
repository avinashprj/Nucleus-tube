import React from 'react';
import {
  BsCollectionPlayFill,
  BsFillHeartFill,
  BsFillStopwatchFill,
} from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { FaHistory } from 'react-icons/fa';

export const SideBarDesktop = () => (
  <aside className="nav-sidebar">
    <a href="/">
      <div cursor="pointer" className="nav-sidebar-link flex-al-center ">
        <AiFillHome />
        <div className="nav-sidebar-link-details">Home</div>
      </div>
    </a>
    <a href="/playlists">
      <div cursor="pointer" className="nav-sidebar-link flex-al-center">
        <BsCollectionPlayFill />
        <div className="nav-sidebar-link-details">Playlists</div>
      </div>
    </a>
    <a href="/liked">
      <div cursor="pointer" className="nav-sidebar-link flex-al-center">
        <BsFillHeartFill />
        <div className="nav-sidebar-link-details">Liked</div>
      </div>
    </a>
    <a href="/history">
      <div cursor="pointer" className="nav-sidebar-link flex-al-center">
        <FaHistory />
        <div className="nav-sidebar-link-details">History</div>
      </div>
    </a>
    <a href="/watchlater">
      <div cursor="pointer" className="nav-sidebar-link flex-al-center">
        <BsFillStopwatchFill />
        <div className="nav-sidebar-link-details">Watch Later</div>
      </div>
    </a>
  </aside>
);
