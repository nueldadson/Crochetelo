/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				secondary: "#7F6650",
			},
      backgroundImage: {
        'custom-gradient': 'linear-gradient(342.38deg, #E0440F -27.77%, #770767 87.95%)',
      },
		},
	},
	plugins: [],
};
