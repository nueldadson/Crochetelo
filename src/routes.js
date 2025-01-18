// src/routes.js
// import Home from './pages/Home.jsx';
import { Home, About } from "./pages"

export const routes = [
  {
    label: 'Home',
    path: '/',
    component: Home,
    title: "Home - Crochetelo",
    description: "Discover beautiful crochet designs on Crochetelo.",
  },
  {
    label: 'About',
    path: '/about',
    component: About,
    title: "About Us - Crochetelo",
    description: "Learn more about Crochetelo and our crochet designs.",
  },
];
