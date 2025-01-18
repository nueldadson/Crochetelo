import React, { useState, useEffect } from "react";
import { Logowhite, Logo } from "../../assets/images";
import { navLinks } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ isOpen, toggle }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	// Scroll event listener
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > window.innerHeight) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`fixed w-full h-20 flex items-center justify-between z-50 px-12 max-lg:px-16 max-md:px-10 transition-all duration-300 ${
				isScrolled
					? "bg-black text-white shadow-gray-400 shadow-sm"
					: "bg-black bg-opacity-0 text-white"
			}`}
		>
			{/* Logo */}
			<a href="/" className="flex items-center w-48 py-4">
				<img
					src={isScrolled ? Logo : Logowhite}
					alt="Logo"
					className="h-full"
				/>
			</a>

			{/* Navigation */}
			<nav className="flex h-full items-center">
				<ul className="flex space-x-6 justify-end mr-5 items-center max-sm:hidden text-md">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className={`font-montserrat leading-normal font-semibold hover:text-secondary ${
									isScrolled ? "text-white" : "text-white"
								}`}
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div className="flex justify-end hidden max-sm:block">
					<FontAwesomeIcon
						icon={isOpen ? faTimes : faBars}
						className="text-[24px]"
						onClick={toggle}
					/>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
