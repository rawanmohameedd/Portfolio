import { Route, Routes, useLocation } from "react-router-dom";
import { Aboutme } from "./Components/Aboutme";
import Contactme from "./Components/contactme";
import { Projects } from "./Components/Projects";
import Experience from "./Components/Experience";
import { Sidebar } from "./Components/sidebar";
import { useEffect } from "react";
import "./App.css";
import "./transitions.css"; 

export default function App() {
  const location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[25%] m-0 fixed left-0 top-0 h-screen">
        <Sidebar />
      </div>

      {/* Main Content with Transition */}
      <div className="flex flex-col w-[75%] ml-[25%] justify-center items-center">
        <div className="w-full h-full transition-container">
          <div className="fade">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Aboutme />} />
              <Route path="/contactme" element={<Contactme />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}