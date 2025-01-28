/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit", // Ensure JIT mode is enabled
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				jost: ["Jost", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				brown: "#150601",
				lightbrown: "#764616",
				brightbrown: "#e0440f",
				black: "#1D1D1D",
			},
			backgroundImage: {
				"custom-gradient":
					"linear-gradient(342.38deg, #E0440F -27.77%, #770767 87.95%)",
			},
		},
	},
	plugins: [],
};

