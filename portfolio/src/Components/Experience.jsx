import { useRef } from 'react';
import ischool2 from '../Images/undefined Certificate (1).png';
import certificate from '../Images/Screenshot 2025-03-11 071822.png';
import award from '../Images/Portfolio.jpg';
import personal from '../Images/WhatsApp Image 2024-12-01 at 20.34.19_1f88b386.jpg';
import { handleFullscreen } from '../fullscreen';
import { langStyle } from './Aboutme';

export default function Experience() {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);

  const imgStyle ="w-full h-48 object-contain rounded-lg transition duration-300 cursor-pointer";
  
  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full p-6 md:p-12">
        <h2 className="text-center text-primary text-2xl md:text-3xl font-bold mb-10">
          Experience
        </h2>

        <div className="grid grid-cols-1 gap-10">
          {/* ASCIT */}
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                Full-Stack Developer - ASCIT (full time)
              </h3>
              <span className="text-lg text-gray-600 mt-2 md:mt-0">11/2024 - present</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Take ownership of designing, developing, and integrating backend systems while working under the supervision of a project manager. I focus on building scalable and efficient solutions by implementing new features, optimizing database interactions, and integrating APIs. I collaborate closely with the frontend team to ensure a smooth connection between the backend and user interfaces, keeping communication open to clarify requirements, share progress, and troubleshoot any challenges for a seamless user experience.
            </p>
            <div className="flex flex-wrap justify-start mt-4 gap-2">
              {["Next.js", "TypeScript", "PrismaORM", "Node.js", "Express.js", "PosrtgreSQL", "React", "Tailwind"].map((tech) => (
                <span key={tech} className={langStyle}>{tech}</span>
              ))}

            </div>
          </div>

          {/* React Web Developer */}
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                React Web Developer - Ministry of Communications and Information Technology (Training)
              </h3>
              <span className="text-lg text-gray-600 mt-2 md:mt-0">06/2024 - 10/2024</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Acquired expertise in React and Node.js, including Docker deployment, unit testing, and functional documentation, enhancing development speed.
              Securing the 1st place in the track thanks to graduation project ChitChat.
            </p>

            {/* Credentials Dropdown */}
            <details className="mt-4">
              <summary className="cursor-pointer text-primary font-semibold underline hover:text-blue-600 transition">
                Credentials
              </summary>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-4">
                <img
                  ref={imageRef1}
                  src={certificate}
                  className={imgStyle}  onClick={() => handleFullscreen(imageRef1)}
                />
                <img
                  ref={imageRef3}
                  src={personal}
                  className={imgStyle}  onClick={() => handleFullscreen(imageRef3)}
                />
                <img
                  ref={imageRef2}
                  src={award}
                  className={imgStyle}  onClick={() => handleFullscreen(imageRef2)}
                />
              </div>

            </details>

            <div className="flex flex-wrap justify-start mt-4 gap-2">
              {["React", "Tailwind", "NodeJs", "Express", "Databases", "Unit Testing", "Docker"].map((tech) => (
                <span key={tech} className={langStyle}>{tech}</span>
              ))}
            </div>
          </div>

          {/* iSchool */}
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                Coding Instructor - iSchool (part time)
              </h3>
              <span className="text-lg text-gray-600 mt-2 md:mt-0">06/2024 - 08/2024</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Taught grade 5 students coding concepts as part of the Digital Egypt Marvel Initiative.
              It was a rewarding experience to help students develop problem-solving skills in cooperation
              with the Ministry of Communications and Information Technology, Egypt.
            </p>

            {/* Credentials Dropdown */}
            <details className="mt-4">
              <summary className="cursor-pointer text-primary font-semibold underline hover:text-blue-600 transition">
                Credentials
              </summary>
              <img
                ref={imageRef4}
                src={ischool2}
                className={imgStyle}
                onClick={() => handleFullscreen(imageRef4)}
              />
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
