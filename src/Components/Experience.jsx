import { useRef } from 'react';
import ischool2 from '../Images/undefined Certificate (1).png';
import certificate from '../Images/Screenshot 2025-03-11 071822.png';
import award from '../Images/Portfolio.jpg';
import personal from '../Images/WhatsApp Image 2024-12-01 at 20.34.19_1f88b386.jpg';
import { handleFullscreen } from '../fullscreen';
import { langStyle } from './Aboutme';
import { Link } from 'react-router-dom';
import { ProjectSeparator } from './Seperator';

export default function Experience() {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);

  const imgStyle = "w-full h-48 object-contain rounded-lg transition duration-300 cursor-pointer";
  const summaryStyle = "cursor-pointer text-primary font-semibold underline hover:text-blue-600 transition";

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
                Full-Stack Developer - ASCIT<span className="text-base font-normal text-gray-500">(full time)</span>
              </h3>
              <span className="text-lg text-gray-600 mt-2 md:mt-0 font-mono">11/2024 - present</span>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed text-justify space-y-1">
              <div>
                <span className="font-semibold text-primary">•</span> Developed <span className="font-semibold text-accent">scalable backend systems</span> using <span className="font-mono text-primary">tRPC</span>, <span className="font-mono text-primary">Prisma ORM</span>, and <span className="font-mono text-primary">PostgreSQL</span> for enterprise-level asset, inventory, and employee management.
              </div>
              <div>
                <span className="font-semibold text-primary">•</span> Implemented <span className="font-semibold">type-safe APIs</span>, transactional operations, and <span className="font-semibold">role-based access control (RBAC)</span>.
              </div>
              <div>
                <span className="font-semibold text-primary">•</span> Collaborated with frontend developers to ensure <span className="font-semibold">seamless API integration</span>, improving delivery consistency and usability.
              </div>
              <div>
                <span className="font-semibold text-primary">•</span> Optimized database queries and enhanced system architecture for improved <span className="font-semibold">performance</span> and <span className="font-semibold">maintainability</span>.
              </div>
            </div>
            <div className="flex flex-wrap justify-start mt-4 gap-2">
              {["Next.js", "TypeScript", "PrismaORM", "Node.js", "Express.js", "PostgreSQL", "React", "Tailwind"].map((tech) => (
                <span key={tech} className={langStyle}>{tech}</span>
              ))}
            </div>
          </div>
          <ProjectSeparator />
          {/* MCIT Training */}
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                React Web Developer - MCIT, Egypt (DEPI) <span className="text-base font-normal text-gray-500">(training)</span>
              </h3>
              <span className="text-lg text-gray-600 mt-2 md:mt-0">06/2024 - 10/2024</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Acquired expertise in React and Node.js, including Docker deployment, unit testing, and functional documentation, enhancing development speed.
              Securing the 1st place in the track thanks to graduation project <Link to='/projects#chitChat' className="text-primary font-semibold underline hover:text-blue-600 transition">ChitChat</Link>.
            </p>

            { /* Credentials Dropdown */}
            <details open className="mt-4 bg-hoverPrimary p-4 rounded-md">
              <summary className={summaryStyle}>
                Credentials
              </summary>
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <img
                  ref={imageRef1}
                  src={certificate}
                  className={imgStyle}
                  onClick={() => handleFullscreen(imageRef1)}
                  alt="MCIT Certificate"
                />
                <img
                  ref={imageRef3}
                  src={personal}
                  className={imgStyle}
                  onClick={() => handleFullscreen(imageRef3)}
                  alt="Personal photo"
                />
                <img
                  ref={imageRef2}
                  src={award}
                  className={imgStyle}
                  onClick={() => handleFullscreen(imageRef2)}
                  alt="Award certificate"
                />
              </div>
            </details>

            <div className="flex flex-wrap justify-start mt-4 gap-2">
              {["React", "Tailwind", "NodeJs", "Express", "Databases", "Unit Testing", "Docker"].map((tech) => (
                <span key={tech} className={langStyle}>{tech}</span>
              ))}
            </div>
          </div>
          <ProjectSeparator />

          {/* iSchool */}
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                Coding Instructor - iSchool <span className="text-base font-normal text-gray-500">(part time)</span>
              </h3>
              <span className="text-lg text-gray-600 mt-2 md:mt-0">06/2024 - 08/2024</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Taught grade 5 students coding concepts as part of the Digital Egypt Marvel Initiative.
              It was a rewarding experience to help students develop problem-solving skills in cooperation
              with the Ministry of Communications and Information Technology, Egypt.
            </p>

            {/* Credentials Dropdown */}
            <details open className=" mt-4 bg-hoverPrimary p-4 rounded-md">
              <summary className={summaryStyle}>
                Credentials
              </summary>
              <div className=" mt-4">
                <img
                  ref={imageRef4}
                  src={ischool2}
                  className={imgStyle}
                  onClick={() => handleFullscreen(imageRef4)}
                  alt="iSchool Certificate"
                />
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}