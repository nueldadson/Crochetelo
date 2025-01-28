import React from 'react'
import { ShopHeroimg, ShopHeroimg2 } from "../../assets/images";

const ShopHero = () => {
  return (
		<div
			className="relative w-full bg-cover bg-center bg-no-repeat h-[570px] max-md:h-[370px] flex overflow-hidden"
			style={{ backgroundImage: `url(${ShopHeroimg})` }}
		>
			<img
        src={ShopHeroimg2}
				alt=""
				className="w-fit h-full absolute z-20 right-0 max-md:hidden"
			/>
			{/* Text container (near the top for easy viewing on mobile) */}
			<div className="relative z-30 w-full flex flex-col px-12 max-sm:px-6 mt-6 justify-center h-full">
				{/* Use semantic HTML for SEO: <h1> is the main heading */}
				<h1 className="leading-snug text-[100px] max-lg:text-[80px] max-md:text-[60px] max-sm:text-[50px] font-extrabold bg-[linear-gradient(94.04deg,_#000000_-1.03%,_#d0cfcf_30.56%)] bg-clip-text text-transparent max-md:mt-40">
					Shop
				</h1>
				<p className="text-[20px] text-black font-medium mt-[6px]">
					Browse Our catalogues
				</p>
			</div>
		</div>
	);
}

export default ShopHero
