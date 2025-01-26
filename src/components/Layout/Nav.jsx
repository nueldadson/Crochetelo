import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logowhite, Logo } from "../../assets/images";
import { routes } from "../../routes.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
	faLinkedin,
	faInstagram,
	faFacebook,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";


const Nav = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () =>
			setIsScrolled(window.scrollY > window.innerHeight);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleSidebar = () => setIsOpen(!isOpen);

	return (
		<>
			{/* Navigation Bar */}
			<header className="bg-[linear-gradient(90.24deg,_rgba(255,253,250,0.45)_0.56%,_rgba(41,26,7,0.45)_79.49%)] w-full h-[75px] rounded-[100px] flex items-center justify-between z-40 px-20 transition-all duration-300 max-sm:justify-between max-sm:px-5 max-sm:rounded-none">
				{/* Logo */}
				<Link to="/" className="flex items-center w-28">
					<img
						src={isScrolled ? Logo : Logowhite}
						alt="Company Logo"
						className="h-full"
					/>
				</Link>

				{/* Navigation Links */}
				<nav className="flex h-full items-center">
					<ul className="flex space-x-6 justify-end mr-5 items-center max-[1050px]:hidden text-md">
						{routes.slice(0, 6).map(({ label, path }) => (
							<li key={path}>
								<Link
									to={path}
									className={`hover:text-brightbrown font-semibold ${
										isScrolled ? "text-white" : "text-white"
									}`}
								>
									{label}
								</Link>
							</li>
						))}
					</ul>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleSidebar}
						className="flex justify-end hidden max-[1200px]:block"
						aria-label="Toggle Navigation"
					>
						<FontAwesomeIcon
							icon={isOpen ? faTimes : faBars}
							className={`text-[24px] ${isOpen ? "text-black" : "text-white"}`}
						/>
					</button>
				</nav>

				{/* Icons (Web) */}
				<div className="max-[1200px]:hidden flex h-full items-center ga text-white">
					<ul className="flex gap-8">
						{routes.slice(6, 10).map((route) => (
							<li key={route.label}>
								<Link
									to={route.path}
									aria-label={route.label}
									className="hover:text-brightbrown cursor-pointer"
								>
									{route.icon && <route.icon />}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</header>

			{/* Sidebar (Mobile Menu) */}
			<aside
				className={`py-10 px-12 z-50 overflow-scroll fixed top-0 right-0 h-full w-full bg-white text-black transition-all duration-300 transform ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				{/* Close Button */}
				<button
					onClick={toggleSidebar}
					className="absolute right-14 top-12 text-black text-3xl cursor-pointer"
					aria-label="Close Navigation"
				>
					<FontAwesomeIcon icon={faTimes} />
				</button>

				{/* Mobile Navigation Links */}
				<ul>
					{routes.slice(0, 6).map(({ label, path }) => (
						<li
							key={path}
							className="py-8 border-b border-b-slate-400 hover:text-brightbrown"
						>
							<Link
								to={path}
								onClick={() => {
									setIsOpen(false);
									window.scrollTo(0, 0);
								}}
								className={`text-2xl font-semibold block"
								}`}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>

				{/* Mobile Icons */}
				<div className="py-8 border-b hidden max-[1050px]:flex w-full gap-10 text-lightbrown text-2xl justify-center">
					<ul className="flex gap-8">
						{routes.slice(6, 10).map((route) => (
							<li key={route.label}>
								<Link
									to={route.path}
									onClick={() => {
										setIsOpen(false);
										window.scrollTo(0, 0);
									}}
									aria-label={route.label}
									className="hover:text-brightbrown cursor-pointer"
								>
									{route.icon && <route.icon />}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Social Media Links */}
				<div className="flex justify-center mt-4 space-x-6 text-4xl text-brown mb-10">
					<a
						href="https://linkedin.com"
						title="LinkedIn"
						aria-label="LinkedIn"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a
						href="https://www.instagram.com/crochetelo_/"
						title="Instagram"
						aria-label="Instagram"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a
						href="https://www.facebook.com/crochetelo"
						title="Facebook"
						aria-label="Facebook"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a
						href="https://x.com/Crochetelo_"
						title="Twitter"
						aria-label="Twitter"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</div>
			</aside>
		</>
	);
};

export default Nav;
