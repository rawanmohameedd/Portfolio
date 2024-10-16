import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { langStyle } from './Aboutme'
import { Gallery } from './Gallery'

export const Projects = () => {
  const summaryStyle = "font-bold list-none cursor-pointer"
  return (
    <div className="flex flex-col   relative p-6 pt-12 mx-auto bg-background">
      <h2 className="text-center text-primary text-3xl md:text-2xl font-bold mb-10">
        Projects
      </h2>

      <div className="mb-12">
        <h3 className="text-2xl font-bold inline-flex items-center">
          Tourist Companion <span className="ml-2 text-primary"><FaGraduationCap /></span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-8 mt-6">
          <div className="space-y-4 ">
            <p className='text-justify'>
              This project was developed by a team of five members, with me as the team leader and responsible for full stack and software development. <span className="font-bold">The project divided into:</span>
            </p>

            <details className="bg-hoverPrimary p-4 rounded-md">
              <summary className={summaryStyle}>1. Indoor Localization</summary>
              <p className="mt-2 text-justify">
                We developed an indoor navigation system that relies on collecting a dataset containing RSSI of WiFi readings from specific routers.
                We used KNN models and Flask for model deployment after the training phase. This ensures precise indoor localization for tourists.
                The Flask response, containing the location, is stored in the database and updated every 30 seconds to support app features.
                <span className='font-bold'> The utilized mobile app to collect the dataset used react native to fetch the Wi-Fi strength for a given
                  BSSID and sends this data to an Express.js server as an object. The server appends this object to the necessary details and stores them in CSV files.</span>
                <br />
                <span className={langStyle}>React Native</span>
                <span className={langStyle}>Node.js</span>
                <span className={langStyle}>PostgreSQL</span>
                <span className={langStyle}>Flask</span>
                <a
                  className='flex justify-center text-primary underline'
                  href='https://github.com/rawanmohameedd/Collecting-data'>
                  See Full Code
                </a>
              </p>
            </details>

            <details className="bg-hoverPrimary p-4 rounded-md mt-2">
              <summary className={summaryStyle}>2. Mobile Application</summary>
              Our mobile application offers several key features:
              <ul className="list-disc pl-5 mt-1 text-justify">
                <li>User Accounts: Tourists and tour guides can create accounts.</li>
                <li>Connection Requests: Tourists can send connection requests to their preferred tour guides.</li>
                <li>Tour Details: Tour guides can view tour details.</li>
                <li>Museum Information: Users can access detailed information about museums.</li>
                <li>High-Accuracy Localization: Tourists can see their location and their tour guide’s location.</li>
                <li>Room Capacity Monitoring: Color-coded system for room crowding (Green: low, Yellow: medium, Red: full).</li>
              </ul>
              <br />
              <span className={langStyle}>React Native</span>
              <span className={langStyle}>Node.js</span>
              <span className={langStyle}>PostgreSQL</span>
              <div className='flex flex-row space-x-4 justify-center'>

                <a
                  className='flex justify-center text-primary underline'
                  href='https://github.com/rawanmohameedd/Tourist_Companion-Frontend'>
                  See Frontend Code
                </a>
                <a
                  className='flex justify-center text-primary underline'
                  href='https://github.com/rawanmohameedd/Tourist_Companion-Backend'>
                  See Backend Code
                </a>
              </div>
            </details>

            <details className="bg-hoverPrimary p-4 rounded-md">
              <summary className={summaryStyle}>3. Administrator Website</summary>
              <p className="mt-2 text-justify">
                Admins can add, edit, and delete museum information. They can also monitor all users and their locations within the museum. <br />
                <span className={langStyle}>React</span>
                <span className={langStyle}>Node.js</span>
                <span className={langStyle}>PostgreSQL</span>

                <a
                  className='flex justify-center text-primary underline'
                  href='https://github.com/rawanmohameedd/Tourist_Companion-Website'>
                  See Frontend Code
                </a>
              </p>
            </details>

            <p>Our entire system was implemented and tested at <a href='https://g.co/kgs/ZCXsY7N' className='font-bold no-underline text-inherit'>The Great Cairo Library </a>with great accuracy.</p>
          </div>

          <div className="flex justify-center items-center">
            <Gallery mediaList={1}/>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold inline-flex items-center">
          Keep Note Application
        </h3>

        <div className="grid grid-cols-1 gap-8 mt-6">
          <p className="mt-2 text-justify">
            The Keep Note Application is a note-taking app designed to allow users to:
            <ul className="list-disc pl-5 mt-1">
              <li><span className='font-bold'>Take Notes:</span> Create and manage notes on various topics.</li>
              <li><span className='font-bold'>Add Notes to Labels/Categories:</span> Organize notes into different categories or labels for easier navigation and filtering.</li>
              <li><span className='font-bold'>Set Reminders for a Note:</span> Assign reminders to notes, helping users keep track of important tasks and deadlines.</li>
            </ul>

            <br />

            Creating a Docker image and made a container for the application, exploring Docker configuration to facilitate seamless deployment and management of the application in various environments.
            <br />
            <span className={langStyle}>Express.js</span>
            <span className={langStyle}>MySQL</span>
            <span className={langStyle}>Docker</span>
            <div className='flex flex-row space-x-4 justify-center mt-4'>
              <a
                className='flex justify-center text-primary underline'
                href='https://github.com/rawanmohameedd/Note_Manager-Backend'>
                See Full Code
              </a>
              <a
                className='flex justify-center text-primary underline'
                href='https://app.swaggerhub.com/apis/NRAWANA12345/note-manager/1.0.0'>
                See API Documentation
              </a>
            </div>
          </p>

        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold inline-flex items-center">
          FundSphere Website
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-8 mt-6">
          <p className="mt-2 text-justify">
            The goal of this project is to create a simple crowdfunding application using React for the frontend and Express for the backend. The app will allow users to create and manage crowdfunding campaigns, view existing campaigns, and make donations. Key features include:


            <ul className="list-disc pl-5 mt-1">
              <li><span className='font-bold'>User Authentication:</span> Sign up, login, encryption, and JWT-based authentication.</li>
              <li><span className='font-bold'>Campaign Management:</span> Campaign creation with validation, a campaign list, and detailed views of individual campaigns.</li>
              <li><span className='font-bold'>Donation Management: </span>Users can post donations to campaigns</li>
              <li><span className='font-bold'>Dashboard:</span> Displays created campaigns, campaign progress, donations made, and additional potential features.</li>

            </ul>

            <span className={langStyle}>React</span>
            <span className={langStyle}>Tailwind</span>
            <span className={langStyle}>Express.js</span>
            <span className={langStyle}>Prisma ORM</span>
            <div className='flex flex-row space-x-4 justify-center mt-4'>
              <a
                className='flex justify-center text-primary underline'
                href='https://github.com/rawanmohameedd/FundSphere_frontend'>
                See Frontend Code
              </a>
              <a
                className='flex justify-center text-primary underline'
                href='https://github.com/rawanmohameedd/FundSphere_backend'>
                See Backend Code
              </a>
              <a
                className='flex justify-center text-primary underline'
                href='https://app.swaggerhub.com/apis/NRAWANA12345/fund-sphere/1.0.0'>
                See API Documentation
              </a>
            </div>
          </p>
          <div className="flex justify-center items-center">
            <Gallery mediaList={2}/>
          </div>
        </div>
      </div>
    </div>
  )
}
