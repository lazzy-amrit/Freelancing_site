import { useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import NetworkingPage from "./pages/NetworkingPage";
import OpportunitiesPage from "./pages/OpportunitiesPage";
import GrowthPage from "./pages/GrowthPage";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <ScrollToTop />
      <Routes>

        <Route
          path="/"
          element={
            <Home
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        <Route
          path="/about"
          element={<AboutPage darkMode={darkMode} />}
        />

        <Route
          path="/networking"
          element={<NetworkingPage darkMode={darkMode} />}
        />

        <Route
          path="/opportunities"
          element={<OpportunitiesPage darkMode={darkMode} />}
        />

        <Route
          path="/growth"
          element={<GrowthPage darkMode={darkMode} />}
        />

      </Routes>
    </div>
  );
}