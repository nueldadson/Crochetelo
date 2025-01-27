import React from "react";
import { Fade } from "react-awesome-reveal";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import { Logowhite } from "../../assets/images";
import { routes } from "../../routes.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
		<footer
			className="relative w-full h-[fit-content] bg-cover bg-top bg-center"
			style={{
				backgroundImage:
					"url('https://res.cloudinary.com/dt1vxscki/image/upload/v1737933186/BLAC9240_sc0nv3.webp')",
			}}
		>
			<img
				src="https://res.cloudinary.com/dt1vxscki/image/upload/v1737932034/grain_Texture_ztpl1d.webp"
				alt=""
				className="w-full absolute h-[50%] z-20"
			/>
			<div className="relative w-full h-full z-30 py-8 px-12 max-sm:px-6">
				{/* Logo */}
				<Link to="/" className="flex absolut items-center w-48 max-sm:w-28">
					<img src={Logowhite} alt="Company Logo" className="h-full" />
				</Link>

				<p className="font-jost font-extrabold mt-10 max-sm:mt-6 text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-4xl max-[400px]:text-2xl text-center h-fit bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
					Want to see More?
				</p>

				<div className="flex justify-between mt-10 max-md:mt-24 max-md:flex-col gap-12">
					<div className="right-[50%] -mr-[104px] bg-white px-12 py-4 rounded-full z-40 absolute text-black max-md:-mt-16 max-md:scale-90 font-bold">
						See Catalogue
					</div>
					<ul>
						{routes.slice(0, 6).map(({ label, path }) => (
							<li key={path} className="py-4 text-white hover:text-brightbrown">
								<Link
									to={path}
									className={`text-2xl font-medium block"
                    }`}
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
					<div className=" text-white font-medium self-end max-md:self-start w-52">
						Social Links
					</div>
				</div>
			</div>
			{/* Footer Copyright */}
			<div
				className="text-center flex justify-between w-full px-12 max-sm:px-6 max-md:flex-col-reverse items-center max-md:items-start
        "
			>
				<p className="text-sm text-gray-500 max-md:mb-6">
					&copy; {new Date().getFullYear()} - Crochetelo. All rights reserved.
				</p>
				<div className="flex justify-between gap-6 text-4xl text-white mb-4">
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
				</div>
			</div>
		</footer>
	);
};

export default Footer;
