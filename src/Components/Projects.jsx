import { FaGraduationCap } from 'react-icons/fa';
import { langStyle } from './Aboutme';
import { Gallery } from './Gallery';
import chitChat from '../Images/Screen Recording 2024-10-23 011025.mp4';
import { useRef } from 'react';
import { handleFullscreen } from '../fullscreen';

export const Projects = () => {
  const mediaref = useRef(null);
  const summaryStyle = "font-bold list-none cursor-pointer hover:text-primary transition";
  
  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full p-6 md:p-12">
        <h2 className="text-center text-primary text-2xl md:text-3xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-10">
          {/* ChitChat */}
          <div className="flex flex-col" id="chitChat">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary">ChitChat</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className=" text-lg text-gray-700 leading-relaxed text-justify">
                ChitChat is a real-time messaging chat application, allows seamless communication with features like:
                <ul className="list-disc pl-5 mt-1">
                  <li><span className='font-bold'>Real-time Messaging:</span> Send and receive messages instantly with no refresh needed.</li>
                  <li><span className='font-bold'>Group and Direct Chats:</span> Communicate one-on-one or in groups.</li>
                  <li><span className='font-bold'>Search and Filter:</span> Easily find conversations and filter by groups or unread status.</li>
                  <li><span className='font-bold'>Responsive Design: </span>Works on all screen sizes.</li>
                  <li><span className='font-bold'>Profile Management: </span> Manage and update user profiles.</li>
                </ul>
                <div className="flex flex-wrap mt-4 gap-2">
                  {(["React", "Bootstrap", "Socket.IO", "Express.js", "MongoDB"]).map((tech) => (
                    <span key={tech} className={langStyle}>{tech}</span>
                  ))}
                </div>
                <div className='flex flex-row space-x-4 mt-4'>
                  <a className='text-primary font-semibold underline hover:text-blue-600 transition' href='https://github.com/Roaa227/ChitChat-RealTime-Messaging'>See Frontend Code</a>
                  <a className='text-primary font-semibold underline hover:text-blue-600 transition' href='https://github.com/RanaMohamad21/ChitChat-RealTime-Messaging'>See Backend Code</a>
                </div>
              </div>
              <div className=" flex justify-center items-center w-full" onClick={() => handleFullscreen(mediaref)}>
                <video 
                  src={chitChat}
                  width='400px'
                  height='400px'
                  autoPlay
                  loop
                  ref={mediaref}
                  className='contain-size cursor-pointer'
                />
              </div>
            </div>
          </div>

          {/* FundSphere Website */}
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary">FundSphere Website</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="text-lg text-gray-700 leading-relaxed text-justify">
                The goal of this project is to create a simple crowdfunding application using React for the frontend and Express for the backend. The app will allow users to create and manage crowdfunding campaigns, view existing campaigns, and make donations. Key features include:
                <ul className="list-disc pl-5 mt-1">
                  <li><span className='font-bold'>User Authentication:</span> Sign up, login, encryption, and JWT-based authentication.</li>
                  <li><span className='font-bold'>Campaign Management:</span> Campaign creation with validation, a campaign list, and detailed views of individual campaigns.</li>
                  <li><span className='font-bold'>Donation Management:</span> Users can post donations to campaigns.</li>
                  <li><span className='font-bold'>Dashboard:</span> Displays created campaigns, campaign progress, donations made, and additional potential features.</li>
                </ul>
                <div className="flex flex-wrap mt-4 gap-2">
                  <span className={langStyle}>React</span>
                  <span className={langStyle}>Tailwind</span>
                  <span className={langStyle}>Express.js</span>
                  <span className={langStyle}>Prisma ORM</span>
                </div>
                <div className='flex flex-row space-x-4 mt-4'>
                  <a className='text-primary font-semibold underline hover:text-blue-600 transition' href='https://github.com/rawanmohameedd/FundSphere_frontend'>See Frontend Code</a>
                  <a className='text-primary font-semibold underline hover:text-blue-600 transition' href='https://github.com/rawanmohameedd/FundSphere_backend'>See Backend Code</a>
                  <a className='text-primary font-semibold underline hover:text-blue-600 transition' href='https://app.swaggerhub.com/apis/NRAWANA12345/fund-sphere/1.0.0'>See API Documentation</a>
                </div>
              </div>
              <div className="flex justify-center items-center w-full">
                <Gallery mediaList={2} />
              </div>
            </div>
          </div>

          {/* Keep Note Application */}
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary">Keep Note Application</h3>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed text-justify">
              The Keep Note Application is a note-taking app designed to allow users to:
              <ul className="list-disc pl-5 mt-1">
                <li><span className='font-bold'>Take Notes:</span> Create and manage notes on various topics.</li>
                <li><span className='font-bold'>Add Notes to Labels/Categories:</span> Organize notes into different categories or labels for easier navigation and filtering.</li>
                <li><span className='font-bold'>Set Reminders for a Note:</span> Assign reminders to notes, helping users keep track of important tasks and deadlines.</li>
              </ul>
              <p className="mt-4">
                Creating a Docker image and made a container for the application, exploring Docker configuration to facilitate seamless deployment and management of the application in various environments.
              </p>
              <div className="flex flex-wrap mt-4 gap-2">
                <span className={langStyle}>Express.js</span>
                <span className={langStyle}>MySQL</span>
                <span className={langStyle}>Docker</span>
              </div>
              <div className='flex flex-row space-x-4 mt-4'>
                <a className='text-primary font-semibold underline hover:text-blue-600 transition' href='https://github.com/rawanmohameedd/Note_Manager-Backend'>See Full Code</a>
                <a className='text-primary font-semibold underline hover:text-blue-600 transition' href='https://app.swaggerhub.com/apis/NRAWANA12345/note-manager/1.0.0'>See API Documentation</a>
              </div>
            </div>
          </div>

          {/* Tourist Companion */}
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary inline-flex items-center">
                Tourist Companion <span className="ml-2 text-primary"><FaGraduationCap /></span>
              </h3>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="text-lg text-gray-700 leading-relaxed text-justify">
                <p>
                  This project was developed by a team of five members, with me as the team leader and responsible for full stack and software development. <span className="font-bold">The project divided into:</span>
                </p>

                <details className="bg-hoverPrimary p-4 rounded-md mt-4">
                  <summary className={summaryStyle}>1. Indoor Localization</summary>
                  <p className="mt-2">
                    We developed an indoor navigation system that relies on collecting a dataset containing RSSI of WiFi readings from specific routers.
                    We used KNN models and Flask for model deployment after the training phase. This ensures precise indoor localization for tourists.
                    The Flask response, containing the location, is stored in the database and updated every 30 seconds to support app features.
                    <span className='font-bold'> The utilized mobile app to collect the dataset used react native to fetch the Wi-Fi strength for a given
                      BSSID and sends this data to an Express.js server as an object. The server appends this object to the necessary details and stores them in CSV files.</span>
                  </p>
                  <div className="flex flex-wrap mt-4 gap-2">
                    <span className={langStyle}>React Native</span>
                    <span className={langStyle}>Node.js</span>
                    <span className={langStyle}>PostgreSQL</span>
                    <span className={langStyle}>Flask</span>
                  </div>
                  <a className='text-primary font-semibold underline hover:text-blue-600 transition mt-2 inline-block' href='https://github.com/rawanmohameedd/Collecting-data'>See Full Code</a>
                </details>

                <details className="bg-hoverPrimary p-4 rounded-md mt-4">
                  <summary className={summaryStyle}>2. Mobile Application</summary>
                  <p className="mt-2">Our mobile application offers several key features:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>User Accounts: Tourists and tour guides can create accounts.</li>
                    <li>Connection Requests: Tourists can send connection requests to their preferred tour guides.</li>
                    <li>Tour Details: Tour guides can view tour details.</li>
                    <li>Museum Information: Users can access detailed information about museums.</li>
                    <li>High-Accuracy Localization: Tourists can see their location and their tour guides location.</li>
                    <li>Room Capacity Monitoring: Color-coded system for room crowding (Green: low, Yellow: medium, Red: full).</li>
                  </ul>
                  <div className="flex flex-wrap mt-4 gap-2">
                    <span className={langStyle}>React Native</span>
                    <span className={langStyle}>Node.js</span>
                    <span className={langStyle}>PostgreSQL</span>
                  </div>
                  <div className='flex flex-row space-x-4 mt-2'>
                    <a className='text-primary font-semibold underline hover:text-blue-600 transition' href='https://github.com/rawanmohameedd/Tourist_Companion-Frontend'>See Frontend Code</a>
                    <a className='text-primary font-semibold underline hover:text-blue-600 transition' href='https://github.com/rawanmohameedd/Tourist_Companion-Backend'>See Backend Code</a>
                  </div>
                </details>

                <details className="bg-hoverPrimary p-4 rounded-md mt-4">
                  <summary className={summaryStyle}>3. Administrator Website</summary>
                  <p className="mt-2">
                    Admins can add, edit, and delete museum information. They can also monitor all users and their locations within the museum.
                  </p>
                  <div className="flex flex-wrap mt-4 gap-2">
                    <span className={langStyle}>React</span>
                    <span className={langStyle}>Node.js</span>
                    <span className={langStyle}>PostgreSQL</span>
                  </div>
                  <a className='text-primary font-semibold underline hover:text-blue-600 transition mt-2 inline-block' href='https://github.com/rawanmohameedd/Tourist_Companion-Website'>See Frontend Code</a>
                </details>

                <p className="mt-4">Our entire system was implemented and tested at <a href='https://g.co/kgs/ZCXsY7N' className='font-bold hover:text-blue-600 transition'>The Great Cairo Library</a> with great accuracy.</p>
              </div>

              <div className="flex justify-center items-center w-full">
                <Gallery mediaList={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}