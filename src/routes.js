// src/routes.js
// import Home from './pages/Home.jsx';
import { Home, About } from "./pages"

export const routes = [
  {
    label: 'Home',
    path: '/',
    component: Home,
  },
  {
    label: 'About',
    path: '/about',
    component: About,
  },
];
