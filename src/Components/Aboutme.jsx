import { useRef } from 'react';
import profile from '../Images/Rawan (1).jpg';
import { handleFullscreen } from '../fullscreen';

export const langStyle = "bg-primary text-white rounded-full px-3 py-1 m-1 text-sm font-semibold shadow-md";

export function Aboutme() {
    const imageref = useRef(null);

    return (
        <div className="bg-background min-h-screen flex items-center justify-center p-6 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full p-6 md:p-12 gap-10">
                {/* Left Section: Profile Image & Name */}
                <div className="flex flex-col items-center text-center">
                    <div onClick={() => handleFullscreen(imageref)} className="cursor-pointer">
                        <img
                            src={profile}
                            className="rounded-full w-48 h-48 object-cover shadow-lg hover:shadow-xl transition duration-300"
                            ref={imageref}
                            alt="profile image"
                        />
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-primary">Rawan Mohamed</h2>
                    <p className="text-lg text-gray-600">Information Security Engineer</p>
                    <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left mt-4">
                        Application Security Engineer <span className="font-bold">with a software development foundation</span> —
                        bringing firsthand experience building APIs, implementing RBAC, and designing data models
                        to the work of securing them. Focused on identifying vulnerabilities at the code and
                        architecture level, integrating security into the SDLC, and translating technical risk
                        into actionable remediation. Currently applying that developer-first perspective in a
                        regulated banking environment.
                    </p>
                </div>

                {/* Right Section: Skills */}
                <div className="text-center md:text-left">
                    <div className="mt-6">

                        <h2 className="text-xl font-semibold text-primary">Application Security:</h2>
                        <div className="flex flex-wrap justify-center md:justify-start mt-2">
                            {["OWASP Top 10", "Penetration Testing", "SAST / DAST", "Secure SDLC", "Threat Modeling", "Burp Suite", "Metasploit"].map((tech) => (
                                <span key={tech} className={langStyle}>{tech}</span>
                            ))}
                        </div>

                        <h2 className="text-xl font-semibold text-primary mt-4">Security Operations:</h2>
                        <div className="flex flex-wrap justify-center md:justify-start mt-2">
                            {["SIEM (QRadar)", "Incident Response", "Vulnerability Management", "CIS Benchmarks", "MITRE ATT&CK", "PAM", "FIM"].map((tech) => (
                                <span key={tech} className={langStyle}>{tech}</span>
                            ))}
                        </div>

                        <h2 className="text-xl font-semibold text-primary mt-4">Programming & Scripting:</h2>
                        <div className="flex flex-wrap justify-center md:justify-start mt-2">
                            {["Python", "JavaScript", "TypeScript", "C/C++", "Bash"].map((tech) => (
                                <span key={tech} className={langStyle}>{tech}</span>
                            ))}
                        </div>

                        <h2 className="text-xl font-semibold text-primary mt-4">Tools & Platforms:</h2>
                        <div className="flex flex-wrap justify-center md:justify-start mt-2">
                            {["Nmap", "Wireshark", "ELK Stack", "Docker", "Git", "n8n", "Frida", "Drozer"].map((tech) => (
                                <span key={tech} className={langStyle}>{tech}</span>
                            ))}
                        </div>

                        <h2 className="text-xl font-semibold text-primary mt-4">Web & Development:</h2>
                        <div className="flex flex-wrap justify-center md:justify-start mt-2">
                            {["Node.js", "Express", "React", "REST / GraphQL APIs", "PostgreSQL", "Prisma"].map((tech) => (
                                <span key={tech} className={langStyle}>{tech}</span>
                            ))}
                        </div>
                    </div>

                    {/* Resume Link */}
                    <a
                        className="inline-block text-primary font-semibold underline mt-6 text-lg hover:text-blue-600 transition"
                        href="https://drive.google.com/file/d/1208hStK3rXkYE928v62EY9FX_HJu_nl9/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        See full Resume
                    </a>
                </div>
            </div>
        </div>
    );
}
