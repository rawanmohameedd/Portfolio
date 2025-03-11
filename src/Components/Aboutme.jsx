import { useRef } from 'react';
import profile from '../Images/Rawan (1).jpg';
import { handleFullscreen } from '../fullscreen';

export const langStyle = "bg-primary text-white rounded-full px-3 py-1 m-1 text-sm font-semibold shadow-md";

export function Aboutme() {
    const imageref = useRef(null);

    return (
        <div className="bg-background h-screen flex items-center justify-center p-6 overflow-hidden ">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full  p-6 md:p-12 gap-10">
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
                    <p className="text-lg text-gray-600">Full-Stack Developer</p>
                    <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left mt-4">
                        Full-Stack Developer <span className='font-bold'>with a strong focus on back-end development</span>, passionate about building scalable and high-performance web applications.
                        My expertise spans system design, applying design patterns for code reusability, and optimizing front-end and back-end architectures.
                        I am committed to delivering high-quality software that balances performance, security, and user experience.
                    </p>
                </div>

                {/* Right Section: About Text */}
                <div className="text-center md:text-left">
                    

                    {/* Tech Stack */}
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-primary">Frontend Development:</h2>
                        <div className="flex flex-wrap justify-center md:justify-start mt-2">
                            {["HTML", "CSS", "JavaScript", "TypeScript", "Next.js", "React", "React Native", "Tailwind", "Bootstrap", "SCSS"].map((tech) => (
                                <span key={tech} className={langStyle}>{tech}</span>
                            ))}
                        </div>

                        <h2 className="text-xl font-semibold text-primary mt-4">Backend Development:</h2>
                        <div className="flex flex-wrap justify-center md:justify-start mt-2">
                            {["Node.js", "Express.js", "NestJS", "tRPC", "REST API", "GraphQL"].map((tech) => (
                                <span key={tech} className={langStyle}>{tech}</span>
                            ))}
                        </div>

                        <h2 className="text-xl font-semibold text-primary mt-4">Data Management:</h2>
                        <div className="flex flex-wrap justify-center md:justify-start mt-2">
                            {["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"].map((tech) => (
                                <span key={tech} className={langStyle}>{tech}</span>
                            ))}
                        </div>

                        <h2 className="text-xl font-semibold text-primary mt-4">Tools:</h2>
                        <div className="flex flex-wrap justify-center md:justify-start mt-2">
                            <span className={langStyle}>Docker, Docker Compose</span>
                        </div>
                    </div>

                    {/* Resume Link */}
                    <p className="mt-6 text-lg text-gray-700">
                        Allowing me to build robust and scalable applications.
                    </p>
                    <a
                        className="inline-block text-primary font-semibold underline mt-2 text-lg hover:text-blue-600 transition"
                        href="https://drive.google.com/file/d/1KP3Zja62gV4-MX81dwylVCFn8irtcwqD/view?usp=sharing"
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
