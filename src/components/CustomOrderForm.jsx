import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function CustomOrderForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		instagram: "",
		date: "",
		message: "",
	});

	const [state, handleSubmit] = useForm("mnnjpygo");

	const googleSheetURL =
		"https://script.google.com/macros/s/AKfycbzVxI4EnXMoDO45jdft7tRiNWAxxJDwTNV2DX9uE2cgNB9vtVByytAZOK2B9jBlLDZG5A/exec";

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const sendToGoogleSheet = async () => {
		try {
			const response = await fetch(googleSheetURL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			if (!response.ok) {
				throw new Error("Failed to send data to Google Sheets");
			}
			console.log("Data sent to Google Sheets!");
		} catch (error) {
			console.error("Error sending data to Google Sheets:", error);
			alert(
				"There was an error sending your data to Google Sheets. Please try again.",
			);
		}
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		// Submit to Formspree
		await handleSubmit(e); // Formspree's state will automatically update

		if (state.succeeded) {
			// Send to Google Sheets after Formspree submission succeeds
			await sendToGoogleSheet();

			// Reset the form after successful submission
			setFormData({
				name: "",
				email: "",
				instagram: "",
				date: "",
				message: "",
			});
		}
	};

	const today = new Date().toISOString().split("T")[0];

	return (
		<div className="mx-auto p-6 bg-white shadow-lg rounded-lg absolute w-full mt-[30px] z-50">
			<h2 className="text-2xl font-bold text-center text-gray-800 mb-5">
				Input Order Description
			</h2>

			<form onSubmit={handleFormSubmit} className="space-y-4">
				<div>
					<label className="block font-medium">Name</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
						placeholder="Enter your name"
						required
					/>
				</div>

				<div>
					<label className="block font-medium">Email</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
						placeholder="Enter your email"
						required
					/>
					<ValidationError prefix="Email" field="email" errors={state.errors} />
				</div>

				<div>
					<label className="block font-medium">Instagram Handle</label>
					<input
						type="text"
						name="instagram"
						value={formData.instagram}
						onChange={handleChange}
						className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
						placeholder="@yourhandle"
					/>
				</div>

				<div>
					<label className="block font-medium">Date</label>
					<input
						type="date"
						name="date"
						value={formData.date}
						onChange={handleChange}
						className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
						placeholder="MM/DD/YYYY"
						min={today}
					/>
				</div>

				<div>
					<label className="block font-medium">Your Message</label>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
						placeholder="Type your message here..."
						required
					/>
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
				</div>

				<div>
					{state.submitting && (
						<p className="text-center text-gray-500">Submitting...</p>
					)}
					{state.succeeded && (
						<p className="text-center text-green-600">
							Order submitted successfully!
						</p>
					)}
				</div>

				<button
					type="submit"
					disabled={state.submitting}
					className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
				>
					{state.submitting ? "Submitting..." : "Submit"}
				</button>
			</form>
		</div>
	);
}
