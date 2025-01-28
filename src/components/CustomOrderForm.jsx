import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function CustomOrderForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		instagram: "",
		date: "",
		message: "",
	});

	const googleSheetURL =
		"https://script.google.com/macros/s/AKfycbwQ1FTr_yWUiYR2xEgXJFKi4xTtcG22DjSd9bHEB0kV3x05jpdCeQoLmf0kGz2m2lrGnQ/exec";

	const [state, handleSubmit] = useForm("mnnjpygo"); // Formspree hook

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const sendToGoogleSheet = async () => {
		try {
			console.log("Sending data to Google Sheets...");
			await fetch(googleSheetURL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
				mode: "no-cors",
			});
			console.log("Data successfully sent to Google Sheets.");
		} catch (error) {
			console.error("Error sending data to Google Sheets:", error);
			alert(
				"There was an error sending your data to Google Sheets. Please try again.",
			);
		}
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault(); // Prevent default form submission behavior
    
    await sendToGoogleSheet();
		// Submit to Formspree
		const formspreeResult = await handleSubmit(formData);
    setFormData({
      name: "",
      email: "",
      instagram: "",
      date: "",
      message: "",
    });
		if (formspreeResult?.succeeded) {
			console.log("Formspree submission successful.");

			// Clear form fields

			// Submit to Google Sheets
		}
	};

	const today = new Date().toISOString().split("T")[0];

	return (
		<div className="px-12 pb-12 relative">
		<div className="mx-auto pb-12 bg-white shadow-lg w-full z-50 md:-mt-52">
			<h2 className="text-[24px] px-12 font-semibold text-left text-gray-800 mb-5 pt-8 pb-8 border-b-2 border-gray-400">
				Input Order Description
			</h2>

			<form
				onSubmit={handleFormSubmit}
				className="flex flex-col gap-[30px] px-12"
			>
				<div className="flex flex-col gap-[8px]">
					<label className="block font-medium text-[16px]">Name</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="text-[15px] font-medium w-full px-6 min-h-[55px] rounded-[15px] border-[1px] border-[#D3D3D4] bg-[#FBF7F7] focus:ring focus:ring-violet-300"
						placeholder="Enter your name"
						required
					/>
				</div>

				<div className="flex flex-col gap-[8px]">
					<label className="block font-medium text-[16px]">Email</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="text-[15px] font-medium w-full px-6 min-h-[55px] rounded-[15px] border-[1px] border-[#D3D3D4] bg-[#FBF7F7] focus:ring focus:ring-violet-300"
						placeholder="Enter your email"
						required
					/>
					<ValidationError prefix="Email" field="email" errors={state.errors} />
				</div>

				<div className="flex flex-col gap-[8px]">
					<label className="block font-medium text-[16px]">
						Instagram Handle
					</label>
					<input
						type="text"
						name="instagram"
						value={formData.instagram}
						onChange={handleChange}
						className="text-[15px] font-medium w-full px-6 min-h-[55px] rounded-[15px] border-[1px] border-[#D3D3D4] bg-[#FBF7F7] focus:ring focus:ring-violet-300"
						placeholder="@yourhandle"
					/>
				</div>

				<div className="flex flex-col gap-[8px]">
					<label className="block font-medium text-[16px]">Date</label>
					<input
						type="date"
						name="date"
						value={formData.date}
						onChange={handleChange}
						className="uppercase text-[15px] font-medium w-full px-6 min-h-[55px] rounded-[15px] border-[1px] border-[#D3D3D4] bg-[#FBF7F7] focus:ring focus:ring-violet-300"
						placeholder="MM/DD/YYYY"
						min={today}
					/>
				</div>

				<div className="flex flex-col gap-[8px]">
					<label className="block font-medium text-[16px]">Your Message</label>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="py-6 text-[15px] font-medium w-full px-6 min-h-[160px] rounded-[15px] border-[1px] border-[#D3D3D4] bg-[#FBF7F7] focus:ring focus:ring-violet-300"
						placeholder="Type your message here..."
						required
					/>
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
				</div>

				<button
					type="submit"
					disabled={state.submitting}
					className="w-full bg-[#770767] text-white h-[80px] rounded-[12px] hover:bg-[#ed4bd5]"
					>
					{state.submitting ? "Submitting..." : "Submit"}
				</button>

					<div className="mb-12 bg-green-500">
						{state.submitting && (
							<p className="text-center text-gray-500 ">Submitting...</p>
						)}
					</div>
			</form>
			</div>
			</div>
	);
}
