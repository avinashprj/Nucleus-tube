import React from 'react';
import {
  BsCollectionPlayFill,
  BsFillHeartFill,
  BsFillStopwatchFill,
} from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { FaHistory } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const SideBarDesktop = () => (
  <aside className="nav-sidebar">
    <NavLink to="/">
      <div cursor="pointer" className="nav-sidebar-link flex-al-center ">
        <AiFillHome />
        <div className="nav-sidebar-link-details">Home</div>
      </div>
    </NavLink>
    <NavLink to="/playlists">
      <div cursor="pointer" className="nav-sidebar-link flex-al-center">
        <BsCollectionPlayFill />
        <div className="nav-sidebar-link-details">Playlists</div>
      </div>
    </NavLink>
    <NavLink to="/liked">
      <div cursor="pointer" className="nav-sidebar-link flex-al-center">
        <BsFillHeartFill />
        <div className="nav-sidebar-link-details">Liked</div>
      </div>
    </NavLink>
    <NavLink to="/history">
      <div cursor="pointer" className="nav-sidebar-link flex-al-center ">
        <FaHistory />
        <div className="nav-sidebar-link-details">History</div>
      </div>
    </NavLink>
    <NavLink to="/watchlater">
      <div cursor="pointer" className="nav-sidebar-link flex-al-center">
        <BsFillStopwatchFill />
        <div className="nav-sidebar-link-details">Watch Later</div>
      </div>
    </NavLink>
  </aside>
);
