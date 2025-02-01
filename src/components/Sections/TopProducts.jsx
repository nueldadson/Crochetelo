import React from "react";
import { FaSearch, FaFilter, FaShoppingCart, FaHeart } from "react-icons/fa";

const TopProducts = () => {
	return (
		<div className="w-full h-fit px-12 bg-white py-16 z-50 max-md:px-6 max-md:py-12">
			<div className="w-full h-fit">
				<div className="border-b-gray-500 border-b-[1px] py-6 max-md:py-1 ">
					<h1 className="text-black text-7xl max-lg:text-5xl max-md:text-4xl max-sm:text-2xl max-md:text-center font-bold mb-8">
						Top classic Products
					</h1>
					<div className="flex flex-row justify-between">
						<div>tdeedw</div>
						<div className="flex space-x-4 justify-center items-center max-sm:hidden">
							{/* Search Icon */}
							<button className="relative " aria-label="Search">
								<FaSearch size={20} />
							</button>

							{/* Filter Icon */}
							<button className="relative " aria-label="Filter">
								<FaFilter size={20} />
							</button>

							{/* Shopping Cart Icon */}
							<button className="relative " aria-label="Shopping Cart">
								<FaShoppingCart size={20} />
							</button>

							{/* Wishlist/Heart Icon with Notification Badge */}
							<button className="relative " aria-label="Wishlist">
								<FaHeart size={20} />
								<span className="absolute top-0 right-0 bg-red-500 text-white text-[0.5rem] font-bold w-3 h-3 flex items-center justify-center rounded-full">
									4
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopProducts;
