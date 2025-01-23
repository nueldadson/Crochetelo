import React from "react";
import { Fade } from "react-awesome-reveal";

import "leaflet/dist/leaflet.css";

const Footer = () => {
	return (
		<footer className="bg-black text-gray-200  w-full">

			{/* Footer Copyright */}
			<div className="text-center">
				<p className="text-sm text-gray-500">
					&copy; {new Date().getFullYear()} Crochetelo. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
