import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PublicLayout from '../layouts/PublicLayout';
import AdminLayout from '../layouts/AdminLayout';

import PrivateRoute from '../components/PrivateRoute';
import ScrollToTop from '../components/common/ScrollToTop';
import SEO from '../components/common/SEO';
import PageWrapper from '../components/common/PageWrapper';

import { publicRoutes } from './publicRoutes';
import { adminRoutes } from './adminRoutes';

import { pageSeo } from '../constants/common/seo';

const AdminLogin = lazy(() => import('../pages/public/AdminLogin'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScrollToTop />

      <Routes>

        {/* PUBLIC */}
        <Route element={<PublicLayout />}>
          {publicRoutes.map(({ path, component, seo }) => (
            <Route
              key={path}
              path={path}
              element={
                <PageWrapper
                  Component={component}
                  seo={seo}
                />
              }
            />
          ))}
        </Route>

        {/* LOGIN */}
        <Route
          path="/admin/login"
          element={
            <PageWrapper
              Component={AdminLogin}
              seo={pageSeo.adminLogin}
            />
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <>
                <SEO {...pageSeo.admin} />
                <AdminLayout />
              </>
            </PrivateRoute>
          }
        >
          {adminRoutes.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={<Component />}
            />
          ))}

          <Route
            path="*"
            element={<Navigate to="/admin" replace />}
          />
        </Route>

        {/* NOT FOUND */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;