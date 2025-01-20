// src/routes.js
// import Home from './pages/Home.jsx';
// src/routes.js
import { Home, About, Shop, CustomOrder, SizeGuide, Contact } from "./pages";

export const routes = [
  {
    label: 'Home',
    path: '/',
    component: Home,
    title: "Crochetelo | Unique Handmade Crochet Fashion",
    description: "Explore Crochetelo’s handcrafted crochet designs for men and women who want to stand out.",
  },
  {
    label: 'Shop',
    path: '/shop',
    component: Shop,
    title: "Shop Crochetelo | Handmade Crochet Clothing & Accessories",
    description: "Browse our collection of handcrafted crochet fashion, featuring stylish and unique designs.",
  },
  {
    label: 'Custom Order',
    path: '/custom-order',
    component: CustomOrder,
    title: "Custom Crochet Orders | Design Your Unique Outfit",
    description: "Request a custom handmade crochet outfit tailored to your style and preferences.",
  },
  {
    label: 'Size Guide',
    path: '/size-guide',
    component: SizeGuide,
    title: "Crochetelo Size Guide | Find Your Perfect Fit",
    description: "Check our size guide to find the perfect fit for your handmade crochet clothing.",
  },
  {
    label: 'Contact Us',
    path: '/contact-us',
    component: Contact,
    title: "Contact Crochetelo | Get in Touch With Us",
    description: "Have questions? Contact Crochetelo for inquiries about our handmade crochet fashion.",
  },
  {
    label: 'About Crochetelo',
    path: '/about-crochetelo',
    component: About,
    title: "About Crochetelo | Handmade Fashion That Stands Out",
    description: "Discover the story behind Crochetelo and our passion for unique handcrafted crochet fashion.",
  },
];
