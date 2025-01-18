import React from "react";
import { Layout } from "./components/Layout";
import { Reveal } from "react-awesome-reveal";
import { Home } from "./pages";
import "./App.css";

const App = () => {
	return (
		<Layout>
			<Reveal
				globalDefaults={{
					triggerOnce: true, // Trigger animations only once
					rootMargin: "-50px 0px", // Start animations earlier
					threshold: 0.05, // 10% of the element in the viewport triggers the animation
				}}
			>
				<Home />
			</Reveal>
		</Layout>
	);
};

export default App;
