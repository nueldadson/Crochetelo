import React from 'react'
import { CustomOrderHero } from "../assets/images";
import { CustomOrderForm } from "../components";

const CustomOrder = () => {
  return (
		<div
			className="relative w-full bg-cover bg-center bg-no-repeat h-[630px] max-md:h-[380px] max-sm:h-[300x] max-[420px]:h-[300px] flex overflow-hidden"
			style={{ backgroundImage: `url(${CustomOrderHero})` }}
		>
			<div className="relative w-full flex flex-col px-12 max-sm:px-6 justify-center items-center h-full">
				{/* Use semantic HTML for SEO: <h1> is the main heading */}
				<h1 className="leading-snug text-[90px] max-lg:text-[65px] max-md:text-[40px] max-sm:text-[30px] max-[400px]:text-[24px] font-bold bg-[linear-gradient(94.04deg,_#ffffff_-1.03%,_#696969_150.56%)] bg-clip-text text-transparent text-center max-md:mt-20 max-sm:mt-24">
					Custom Order Form
				</h1>
				<p className="font-inter text-[24px] max-lg:text-[18px] max-md:text-[15px] max-sm:text-[12px] px-44 max-lg:px-14 max-md:px-12 max-sm:px-0 leading-10 max-lg:leading-8 max-md:leading-7 max-sm:leading-5  text-white font-medium max-md:font-normal text-center">
					Note: The custom design can only be inspired by an existing existing
					Crochetélo design Please feel free to leave enough details about your
					design You will receive a mail from us within 48 hours after
					submitting the form
				</p>
      </div>
      <CustomOrderForm />
		</div>
	);
}

export default CustomOrder
