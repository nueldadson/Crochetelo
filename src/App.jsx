// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { routes } from "./routes";
import SEO from "./components/SEO";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw", // Start off-screen to the left
  },
  animate: {
    opacity: 1,
    x: 0, // Slide into place
    transition: { type: "tween", duration: 0.5 },
  },
  exit: {
    opacity: 0,
    x: "100vw", // Slide out to the right
    transition: { type: "tween", duration: 0.5 },
  },
};

const AnimatedRoutes = () => {
  const location = useLocation(); // Get current route

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, component: Component, title, description }) => (
          <Route
            key={path}
            path={path}
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <SEO title={title} description={description} />
                <Component />
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <Router>
    <Layout>
      <AnimatedRoutes />
    </Layout>
  </Router>
);

export default App;
