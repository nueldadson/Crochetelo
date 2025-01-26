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
			<div className="relative w-full h-[788px] bg-[#F5F5F5]">


      {/* Sidebar Menu */}
      <div className="absolute top-[317px] left-[40px] flex flex-col gap-[32px] text-[#DEDAD7] text-[24px] leading-[29px]">
        {["Home", "Shop", "Custom Order", "Contact", "About", "Choose Currency", "FAQs"].map(
          (item, index) => (
            <a key={index} href="#" className="hover:text-white">
              {item}
            </a>
          )
        )}
      </div>

      {/* Main Text Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[154px] flex flex-col items-center gap-[24px] text-center">
        <h1 className="text-[100px] leading-[144px] font-jost font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Want to see More?
        </h1>
        <button className="bg-white px-[32px] py-[20px] rounded-full flex items-center gap-[8px]">
          <span className="text-black text-[16px] font-medium">See Catalogue</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[24px] h-[24px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>

      {/* Footer Section */}
      <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 flex justify-between w-[827px] text-white opacity-40">
        <span className="text-[16px] leading-[21px] font-medium">© 2024 — copyright</span>
        <div className="flex gap-[111px]">
          <a href="#" className="text-[16px] leading-[21px] font-medium lowercase">
            privacy
          </a>
          <a href="#" className="text-[10px] leading-[13px] font-medium lowercase">
            terms
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute right-[40px] bottom-[40px] flex flex-col items-start gap-[38px] text-[#F3F6EC]">
        <span className="text-[16px] font-helvetica font-medium">Social Links</span>
        <div className="flex gap-[12px]">
          {["facebook", "twitter", "linkedin", "instagram"].map((platform, index) => (
            <div
              key={index}
              className="w-[36px] h-[36px] bg-[#292D32] flex items-center justify-center rounded-full"
            >
              <img
                src={`/path/to/${platform}-logo.png`}
                alt={`${platform} logo`}
                className="w-[24px] h-[24px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
		</footer>
	);
};

export default Footer;
