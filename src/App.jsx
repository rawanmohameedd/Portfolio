import { Route, Routes } from 'react-router-dom';
import { Aboutme } from './Components/Aboutme';
import Contactme from './Components/contactme';
import { Projects } from './Components/Projects';
import Experience from './Components/Experience';
import { Sidebar } from './Components/sidebar';
import './App.css';

export default function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-[25%] m-0 fixed left-0 top-0 h-screen">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-[75%] ml-[25%] justify-center items-center">
        <Routes>
          <Route path="/" element={<Aboutme />} />
          <Route path="/contactme" element={<Contactme />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}