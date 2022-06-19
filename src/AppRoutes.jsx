import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './components';
import { ErrorPage, HomePage } from './pages';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export { AppRoutes };
