import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import TopNav from "./TopNav";

const Layout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="min-h-screen w-full flex flex-col">
			<div className=" w-full flex">
				{/* Main Layout */}
				<TopNav />
				<div className="flex w-full bg-white h-fit flex-col ">
					<div className="lg:px-12 px-3 max-sm:px-0 mt-[62px] w-full max-sm:mt-[42px] flex w-ful justify-center flex-col fixed z-40">
						<Nav isOpen={isOpen} toggle={toggle} />
					</div>
					<main className="w-full h-fit">
						{children}
					</main>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Layout;
