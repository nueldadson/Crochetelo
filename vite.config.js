// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
// 	plugins: [react()],
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	base: "/", // Ensure correct path handling for deployment
	build: {
		outDir: "dist", // Ensure output is placed in the 'dist' directory for Vercel
		rollupOptions: {
			output: {
				// Ensure all assets are correctly referenced during the build
				assetFileNames: "assets/[name].[hash].[ext]",
			},
		},
	},
});
