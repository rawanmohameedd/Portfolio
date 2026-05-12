import { useRef } from 'react';
import certificate from '../Images/Screenshot 2025-03-11 071822.png';
import award from '../Images/Portfolio.jpg';
import personal from '../Images/WhatsApp Image 2024-12-01 at 20.34.19_1f88b386.jpg';
import ischool2 from '../Images/undefined Certificate (1).png';
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

          {/* The United Bank */}
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                Information Security Engineer - The United Bank{' '}
                <span className="text-base font-normal text-gray-500">(full time)</span>
              </h3>
              <span className="text-lg text-gray-600 mt-2 md:mt-0 font-mono">08/2025 - present</span>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed text-justify space-y-1">
              <div>
                <span className="font-semibold text-primary">•</span> Monitored and investigated security events using{' '}
                <span className="font-semibold text-accent">QRadar SIEM</span>; performed log analysis, alert triage, and rule tuning in collaboration with SOC analysts.
              </div>
              <div>
                <span className="font-semibold text-primary">•</span> Supported{' '}
                <span className="font-semibold">incident response</span> activities including alert validation, threat escalation, and documentation aligned with IR playbooks.
              </div>
              <div>
                <span className="font-semibold text-primary">•</span> Operated and maintained security controls including{' '}
                <span className="font-semibold">Privileged Access Management (PAM)</span> and{' '}
                <span className="font-semibold">File Integrity Monitoring (FIM)</span>.
              </div>
              <div>
                <span className="font-semibold text-primary">•</span> Conducted{' '}
                <span className="font-semibold">vulnerability assessments</span> and basic penetration testing; assisted remediation efforts and tracked findings through closure.
              </div>
              <div>
                <span className="font-semibold text-primary">•</span> Implemented{' '}
                <span className="font-semibold">CIS Benchmarks</span> and baseline security configurations to reduce attack surface.
              </div>
              <div>
                <span className="font-semibold text-primary">•</span> Automated repetitive SOC workflows using{' '}
                <span className="font-mono text-primary">n8n</span>, reducing manual operational effort and improving analyst efficiency.
              </div>
              <div>
                <span className="font-semibold text-primary">•</span> Maintained accurate asset inventory by removing duplicates and identifying unknown or unmanaged assets to support risk visibility.
              </div>
            </div>
            <div className="flex flex-wrap justify-start mt-4 gap-2">
              {["QRadar SIEM", "Incident Response", "PAM", "FIM", "Vulnerability Management", "CIS Benchmarks", "n8n", "MITRE ATT&CK"].map((tech) => (
                <span key={tech} className={langStyle}>{tech}</span>
              ))}
            </div>
          </div>
          <ProjectSeparator />

          {/* Penetration Testing Training */}
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                Penetration Testing - WE Innovate Academy{' '}
                <span className="text-base font-normal text-gray-500">(training)</span>
              </h3>
              <span className="text-lg text-gray-600 mt-2 md:mt-0 font-mono">11/2025 - 01/2026</span>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed text-justify space-y-1">
              <div>
                <span className="font-semibold text-primary">•</span> Covered penetration testing methodologies, engagement lifecycle, and professional report writing.
              </div>
              <div>
                <span className="font-semibold text-primary">•</span> Practiced reconnaissance, enumeration, network / web application / system exploitation, and post-exploitation techniques.
              </div>
              <div>
                <span className="font-semibold text-primary">•</span> Studied web application security (<span className="font-semibold">OWASP Top 10</span>), vulnerability assessment, and remediation recommendations.
              </div>
              <div>
                <span className="font-semibold text-primary">•</span> Performed Linux and Windows <span className="font-semibold">privilege escalation</span>; Active Directory attacks and post-exploitation basics.
              </div>
              <div>
                <span className="font-semibold text-primary">•</span> Covered password attacks, authentication weaknesses, and <span className="font-semibold">Android application</span> penetration testing.
              </div>
            </div>
            <div className="flex flex-wrap justify-start mt-4 gap-2">
              {["Nmap", "Burp Suite", "Metasploit", "Frida", "Drozer", "OWASP Top 10", "Active Directory", "Linux PrivEsc"].map((tech) => (
                <span key={tech} className={langStyle}>{tech}</span>
              ))}
            </div>
          </div>
          <ProjectSeparator />

          {/* ASCIT */}
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                Full-Stack Developer - ASCIT{' '}
                <span className="text-base font-normal text-gray-500">(full time)</span>
              </h3>
              <span className="text-lg text-gray-600 mt-2 md:mt-0 font-mono">11/2024 - 07/2025</span>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed text-justify space-y-1">
              <div>
                <span className="font-semibold text-primary">•</span> Designed and developed{' '}
                <span className="font-semibold text-accent">scalable backend services</span> using{' '}
                <span className="font-mono text-primary">TypeScript</span>,{' '}
                <span className="font-mono text-primary">tRPC</span>,{' '}
                <span className="font-mono text-primary">Prisma ORM</span>, and{' '}
                <span className="font-mono text-primary">PostgreSQL</span> for enterprise asset and employee management systems.
              </div>
              <div>
                <span className="font-semibold text-primary">•</span> Implemented{' '}
                <span className="font-semibold">Role-Based Access Control (RBAC)</span> and type-safe APIs, applying secure development practices throughout the SDLC.
              </div>
              <div>
                <span className="font-semibold text-primary">•</span> Optimized database queries and system architecture, improving application{' '}
                <span className="font-semibold">performance</span> and long-term <span className="font-semibold">maintainability</span>.
              </div>
              <div>
                <span className="font-semibold text-primary">•</span> Collaborated with frontend teams to ensure{' '}
                <span className="font-semibold">secure, consistent API integration</span> and data handling.
              </div>
            </div>
            <div className="flex flex-wrap justify-start mt-4 gap-2">
              {["Next.js", "TypeScript", "tRPC", "PrismaORM", "Node.js", "Express.js", "PostgreSQL", "React", "Tailwind"].map((tech) => (
                <span key={tech} className={langStyle}>{tech}</span>
              ))}
            </div>
          </div>
          <ProjectSeparator />

          {/* MCIT Training */}
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                React Web Developer - MCIT, Egypt (DEPI){' '}
                <span className="text-base font-normal text-gray-500">(training)</span>
              </h3>
              <span className="text-lg text-gray-600 mt-2 md:mt-0">06/2024 - 10/2024</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Acquired expertise in React and Node.js, including Docker deployment, unit testing, and functional documentation, enhancing development speed.
              Ranked <span className="font-semibold">1st place</span> in the track; graduation project{' '}
              <Link to="/projects#chitChat" className="text-primary font-semibold underline hover:text-blue-600 transition">
                ChitChat
              </Link>{' '}
              demonstrated end-to-end full-stack engineering.
            </p>

            {/* Credentials Dropdown */}
            <details open className="mt-4 bg-hoverPrimary p-4 rounded-md">
              <summary className={summaryStyle}>Credentials</summary>
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
              {["React", "Tailwind", "Node.js", "Express", "Databases", "Unit Testing", "Docker"].map((tech) => (
                <span key={tech} className={langStyle}>{tech}</span>
              ))}
            </div>
          </div>
          <ProjectSeparator />

          {/* iSchool */}
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                Coding Instructor - iSchool{' '}
                <span className="text-base font-normal text-gray-500">(part time)</span>
              </h3>
              <span className="text-lg text-gray-600 mt-2 md:mt-0">06/2024 - 08/2024</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Taught grade 5 students coding concepts as part of the Digital Egypt Marvel Initiative.
              A rewarding experience helping students develop problem-solving skills in cooperation
              with the Ministry of Communications and Information Technology, Egypt.
            </p>

            {/* Credentials Dropdown */}
            <details open className="mt-4 bg-hoverPrimary p-4 rounded-md">
              <summary className={summaryStyle}>Credentials</summary>
              <div className="mt-4">
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
          <ProjectSeparator />

          {/* NTI - AI & ML */}
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                Introduction to AI & Machine Learning - NTI{' '}
                <span className="text-base font-normal text-gray-500">(training)</span>
              </h3>
              <span className="text-lg text-gray-600 mt-2 md:mt-0">07/2022 - 08/2022</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Covered foundational Python programming, mathematics for deep learning, and TensorFlow basics —
              building the quantitative and scripting foundation that underpins later security automation work.
            </p>
            <div className="flex flex-wrap justify-start mt-4 gap-2">
              {["Python", "TensorFlow", "Deep Learning", "Mathematics"].map((tech) => (
                <span key={tech} className={langStyle}>{tech}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
