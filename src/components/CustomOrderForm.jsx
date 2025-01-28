import { useState } from "react";

export default function CustomOrderForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		instagram: "",
		date: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validate email
		if (!formData.email.includes("@")) {
			alert("Please enter a valid email address.");
			return;
		}

		// Validate Instagram handle
		if (formData.instagram && !formData.instagram.startsWith("@")) {
			alert("Instagram handle must start with '@'.");
			return;
		}

		// Validate date (prevent past dates)
		const today = new Date();
		const selectedDate = new Date(formData.date);
		if (formData.date && selectedDate < today.setHours(0, 0, 0, 0)) {
			alert("Please select a valid date in the future.");
			return;
		}

		// Create mailto link
		const subject = encodeURIComponent("New Order Description");
		const body = encodeURIComponent(
			`Name: ${formData.name}\nEmail: ${formData.email}\nInstagram: ${formData.instagram}\nDate: ${formData.date}\n\nMessage:\n${formData.message}`,
		);

		const mailtoLink = `mailto:contact@crochetelo.com?subject=${subject}&body=${body}`;

		// Open default mail client
		try {
			window.location.href = mailtoLink;
		} catch (error) {
			alert("Failed to open the email client. Please try again.");
		}
	};

	const today = new Date().toISOString().split("T")[0];

	return (
		<div className=" mx-auto p-6 bg-white shadow-lg rounded-lg absolute w-full -[630px]">
			<h2 className="text-2xl font-bold text-center text-gray-800 mb-5">
				Input Order Description
			</h2>

			<form onSubmit={handleSubmit} className="space-y-4">
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
				</div>

				<button
					type="submit"
					className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
				>
					Send Email
				</button>
			</form>
		</div>
	);
}
