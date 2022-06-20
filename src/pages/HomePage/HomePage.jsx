import React from 'react';
import { VideosGrid, SideBarDesktop, SideBarMobile } from '../../components';

export const HomePage = () => {
  const [state, useState] = React.useState('');
  return (
    <>
      <SideBarDesktop />
      <SideBarMobile />
      <VideosGrid />
    </>
  );
};
