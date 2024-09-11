import React from 'react';
import Aboutme from './Components/Aboutme';
import Contactme from './Components/contactme';
import { Projects } from './Components/Projects';
import Experience from './Components/Experience';

export default function App() {
  return (
    <div className='flex flex-col items-center '>
      <Aboutme />
      <Experience />
      <Projects />
      <Contactme />
    </div>
  );
}
