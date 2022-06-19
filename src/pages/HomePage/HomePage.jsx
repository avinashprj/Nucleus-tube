import React from 'react';
import { SideBarDesktop, SideBarMobile } from '../../components';

export const HomePage = () => {
  const [state, useState] = React.useState('');
  return (
    <>
      <SideBarDesktop />
      <SideBarMobile />
    </>
  );
};
