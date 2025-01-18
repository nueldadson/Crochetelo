// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import routes from "./routes"; // Import the combined routes and links array

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={<Component />}  // JSX syntax
            />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
