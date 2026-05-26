import { lazy } from 'react';
import { pageSeo } from '../constants/common/seo';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Academics = lazy(() => import('../pages/Academics'));
const Admissions = lazy(() => import('../pages/Admissions'));
const Gallery = lazy(() => import('../pages/Gallery'));
const NewsEvents = lazy(() => import('../pages/NewsEvent'));
const Notification = lazy(() => import('../pages/Notification'));
const Enroll = lazy(() => import('../pages/Enrollment'));
const Contact = lazy(() => import('../pages/Contact'));

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