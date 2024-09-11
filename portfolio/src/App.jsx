import React from 'react';
import  { Profile, Aboutme } from './Components/Aboutme';
import Contactme from './Components/contactme';
import { Projects } from './Components/Projects';
import Experience from './Components/Experience';

export default function App() {
  return (
    <div className='flex flex-col items-center'>
      <div className='grid grid-cols-2 md:flex md:flex-col'>
        <Profile />
        <div className='flex flex-col'>
          <Aboutme />
          <Experience />
        </div>

      </div>
      <Projects />
      <Contactme />
    </div>
  );
}
