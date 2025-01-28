import React from "react";
import { Heroimg } from "../../assets/images";
import { Button } from "..";

const Hero = () => {
	return (
		<div
			className="relative w-full bg-cover bg-center bg-no-repeat h-[900px] max-sm:h-[485px] flex"
			style={{ backgroundImage: `url(${Heroimg})` }}
		>
			{/* Text container (near the top for easy viewing on mobile) */}
			<div className="absolute top-20 w-full flex flex-col px-12 max-sm:px-6 justify-center max-sm:justify-normal bg-green-0 h-[110vh] max-sm:h-[485px] max-h-[800px]">
				{/* Use semantic HTML for SEO: <h1> is the main heading */}
				<h1 className="leading-snug text-[100px] max-lg:text-[75px] max-md:text-[55px] max-sm:text-[28px] font-extrabold bg-[linear-gradient(94.04deg,_#000000_-1.03%,_#A6A6A6_109.56%)] bg-clip-text text-transparent max-sm:mt-28">
					Sustainable,
					<br /> Handmade fashion
				</h1>
				<p className="text-[24px] max-sm:text-[16px] text-black mt-[10px]">
					Handmade with love, Just for you
				</p>
				<Button className="mt-8 max-sm:mt-20 max-sm:w-[100%] max-sm:rounded-lg" children="Shop Now" />
			</div>

		</div>
	);
};

export default Hero;
