import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
// import Sidebar from "./sidebar/Sidebar";
import TopNav from "./TopNav";

const Layout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="min-h-screen flex flex-col">
		<div className="">
			{/* Main Layout */}
				<TopNav />
				<div className="flex w-full bg-white h-fit justify-cente flex-col">
				<div className="lg:px-12 px-3 max-sm:px-0 mt-[62px] max-sm:mt-[42px] flex w-full justify-center lex-col fixed z-40">
					<Nav isOpen={isOpen} toggle={toggle} />
				</div>
					<main className="flex-grow bg-blue-300 stick -mt-[95p] max-sm:-mt-[75p]">{children}</main>
					<Footer />

				</div>
				{/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
		</div>
		</div>
	);
};

export default Layout;
