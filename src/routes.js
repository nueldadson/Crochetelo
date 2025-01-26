// src/routes.js
import React from "react";
import { Home, About, Shop, CustomOrder, SizeGuide, Contact, Search, Cart, Wishlist, Account } from "./pages";
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

export const routes = [
	{
		label: "Home",
		path: "/",
		component: Home,
		title: "Crochetelo | Unique Handmade Crochet Fashion",
		description:
			"Explore Crochetelo’s handcrafted crochet design products for men and women who want to stand out.",
	},
	{
		label: "Shop",
		path: "/shop",
		component: Shop,
		title: "Shop Crochetelo | Handmade Crochet Clothing & Accessories",
		description:
			"Browse our collection of handcrafted crochet fashion, featuring stylish and unique designs.",
	},
	{
		label: "Custom Order",
		path: "/custom-order",
		component: CustomOrder,
		title: "Custom Crochet Orders | Design Your Unique Outfit",
		description:
			"Request a custom handmade crochet outfit tailored to your style and preferences.",
	},
	{
		label: "Size Guide",
		path: "/size-guide",
		component: SizeGuide,
		title: "Crochetelo Size Guide | Find Your Perfect Fit",
		description:
			"Check our size guide to find the perfect fit for your handmade crochet clothing.",
	},
	{
		label: "Contact Us",
		path: "/contact-us",
		component: Contact,
		title: "Contact Crochetelo | Get in Touch With Us",
		description:
			"Have questions? Contact Crochetelo for inquiries about our handmade crochet fashion.",
	},
	{
		label: "About Crochetelo",
		path: "/about-crochetelo",
		component: About,
		title: "About Crochetelo | Handmade Fashion That Stands Out",
		description:
			"Discover the story behind Crochetelo and our passion for unique handcrafted crochet fashion.",
	},
 {
    label: "Search",
    path: "/search",
    icon: FaSearch,
    component: Search,
    title: "Search | Find Your Favorite Crochet Fashion",
    description:
      "Easily search and explore a wide range of handcrafted crochet fashion at Crochetelo.",
  },
  {
    label: "Cart",
    path: "/cart",
    icon: FaShoppingCart,
    component: Cart,
    title: "Shopping Cart | Review Your Crochetelo Items",
    description:
      "View and manage the items in your shopping cart before making your purchase at Crochetelo.",
  },
  {
    label: "Wishlist",
    path: "/wishlist",
    icon: FaHeart,
    component: Wishlist,
    title: "Wishlist | Save Your Favorite Crochet Items",
    description:
      "Keep track of your favorite handmade crochet items and shop later with the Crochetelo wishlist.",
  },
  {
    label: "Account",
    path: "/account",
    icon: FaUser,
    component: Account,
    title: "My Account | Manage Your Crochetelo Profile",
    description:
      "Access and manage your Crochetelo account, orders, and preferences for a seamless shopping experience.",
  },
];
