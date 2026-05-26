import { lazy } from 'react';
import { pageSeo } from '../constants/common/seo';

const Home = lazy(() => import('../pages/public/Home'));
const About = lazy(() => import('../pages/public/About'));
const Academics = lazy(() => import('../pages/public/Academics'));
const Admissions = lazy(() => import('../pages/public/Admissions'));
const Gallery = lazy(() => import('../pages/public/Gallery'));
const NewsEvents = lazy(() => import('../pages/public/NewsEvent'));
const Notification = lazy(() => import('../pages/public/Notification'));
const Enroll = lazy(() => import('../pages/public/Enrollment'));
const Contact = lazy(() => import('../pages/public/Contact'));

export const publicRoutes = [
  {
    path: '/',
    component: Home,
    seo: pageSeo.home,
  },
  {
    path: '/about',
    component: About,
    seo: pageSeo.about,
  },
  {
    path: '/academics',
    component: Academics,
    seo: pageSeo.academics,
  },
  {
    path: '/admissions',
    component: Admissions,
    seo: pageSeo.admissions,
  },
  {
    path: '/gallery',
    component: Gallery,
    seo: pageSeo.gallery,
  },
  {
    path: '/newsevents',
    component: NewsEvents,
    seo: pageSeo.newsEvents,
  },
  {
    path: '/notifications',
    component: Notification,
    seo: pageSeo.notifications,
  },
  {
    path: '/enroll',
    component: Enroll,
    seo: pageSeo.enroll,
  },
  {
    path: '/contact',
    component: Contact,
    seo: pageSeo.contact,
  },
];