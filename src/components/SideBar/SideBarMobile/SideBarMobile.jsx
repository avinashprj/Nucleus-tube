import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import {
  BsCollectionPlayFill,
  BsFillHeartFill,
  BsFillStopwatchFill,
} from 'react-icons/bs';
import { FaHistory } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const SideBarMobile = () => (
  <aside className="sidebar-mobile">
    <NavLink to="/">
      <div cursor="pointer" className="sidebar-mobile-link flex-al-center ">
        <AiFillHome />
        <div className="sidebar-mobile-link-details">Home</div>
      </div>
    </NavLink>
    <NavLink to="/playlists">
      <div cursor="pointer" className="sidebar-mobile-link flex-al-center">
        <BsCollectionPlayFill />
        <div className="sidebar-mobile-link-details">Playlists</div>
      </div>
    </NavLink>
    <NavLink to="/liked">
      <div cursor="pointer" className="sidebar-mobile-link flex-al-center">
        <BsFillHeartFill />
        <div className="sidebar-mobile-link-details">Liked</div>
      </div>
    </NavLink>
    <NavLink to="/history">
      <div cursor="pointer" className="sidebar-mobile-link flex-al-center">
        <FaHistory />
        <div className="sidebar-mobile-link-details">History</div>
      </div>
    </NavLink>
    <NavLink to="/watchlater">
      <div cursor="pointer" className="sidebar-mobile-link flex-al-center">
        <BsFillStopwatchFill />
        <div className="sidebar-mobile-link-details">Watch Later</div>
      </div>
    </NavLink>
  </aside>
);
