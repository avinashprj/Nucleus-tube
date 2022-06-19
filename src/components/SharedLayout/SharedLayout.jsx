import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';

export const SharedLayout = () => (
  <>
    <header>
      <Navbar />
    </header>
    <Outlet />
  </>
);
