import React, { useRef } from 'react';
import ischool1 from '../Images/undefined Certificate.png';
import ischool2 from '../Images/undefined Certificate (1).png';
import { handleFullscreen } from '../fullscreen';
import { langStyle } from './Aboutme';

export default function Experience() {
  const imageRef = useRef(null);

  return (
    <div className="flex flex-col w-2/3 md:w-screen bg-background justify-center items-center relative p-3 pt-10">
      <h2 className="text-center text-primary md:text-xl text-2xl font-bold mb-6 ">
        Experience
      </h2>

      <div className="w-full flex flex-col space-y-4 mb-6 ">
        <div className="flex flex-row justify-between items-center ">
          <h3 className="text-xl font-bold">Full-stack Projects - Freelance</h3>
          <span className="text-xl">11/2023 - present</span>
        </div>

        <div className="hover:bg-primary text-xl">
          <h4 className="font-bold">Learning Management System Website</h4>
          <p>
            Collaborated in developing a website that enables users to:
          </p>
          <ul className="list-disc pl-6">
            <li>Sign up or log in</li>
            <li>Browse course categories</li>
            <li>Select specific courses and access content including videos</li>
            <li>View instructor ratings and biographies</li>
          </ul>
          <p>Enhanced the overall learning experience for users by providing seamless access to learning materials.</p>
        </div>

        <div className="hover:bg-primary text-xl">
          <h4 className="font-bold">E-Commerce Website</h4>
          <p>
            Collaborated in developing an innovative e-commerce platform, ensuring:
          </p>
          <ul className="list-disc pl-6">
            <li>Efficient management of product listings, orders, and customer data</li>
            <li>Seamless user experience for shoppers</li>
          </ul>
        </div>

        <div className=" flex w-screen">
          <span className={langStyle}>React</span>
          <span className={langStyle}>Node.js</span>
          <span className={langStyle}>Express</span>
          <span className={langStyle}>PostgreSQL</span>
          <span className={langStyle}>MongoDB</span>
        </div>
      </div>

      <div className="w-full flex flex-col space-y-4 hover:bg-primary">
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-xl font-bold">Coding Instructor - iSchool</h3>
          <span className="text-xl">06/2024 - 08/2024</span>
        </div>

        <div className="grid grid-cols-4 items-center space-x-4">
          <div className="col-span-2 flex justify-center items-center" onClick={() => handleFullscreen(imageRef)}>
            <img ref={imageRef} src={ischool2} width="500px" height="500px" />
          </div>
          <div className="col-span-2 flex justify-center items-start">
            <p className="text-justify text-lg self-center">
              Taught grade 5 students coding concepts as part of the Digital Egypt Marvel Initiative.
              It was a rewarding experience to help students develop problem-solving skills in cooperation
              with the Ministry of Communications and Information Technology, Egypt.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
