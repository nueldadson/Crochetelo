// src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Layout } from "./components/Layout";
// import { routes } from "./routes"; // Correct

// const App = () => {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           {routes.map(({ path, component: Component }) => (
//             <Route
//               key={path}
//               path={path}
//               element={<Component />}  // JSX syntax
//             />
//           ))}
//         </Routes>
//       </Layout>
//     </Router>
//   );
// };

// export default App;




// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { routes } from "./routes";
import SEO from "./components/SEO";

const App = () => (
  <Router>
    <Layout>
      <Routes>
        {routes.map(({ path, component: Component, title, description }) => (
          <Route
            key={path}
            path={path}
            element={
              <>
                <SEO title={title} description={description} />
                <Component />
              </>
            }
          />
        ))}
      </Routes>
    </Layout>
  </Router>
);

export default App;

