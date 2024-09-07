import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import projectLogo from '../Images/logo.PNG'

export const Projects = () => {
  return (
    <div className="flex flex-col w-5/6 md:w-screen bg-background  relative p-3 pt-10">
      <h2 className="text-center text-primary md:text-xl text-2xl font-bold mb-6 ">
        Projects
      </h2>
      <div >

        <h3 className="text-xl font-bold inline-flex ">
          Tourist Companion <span className='m-2'><FaGraduationCap /></span>
        </h3>
        <div className='grid grid-cols-6 md:flex md:flex-col space-y-5'>
          <div className='flex col-span-3 text-justify'>
            was a team lead of a team of 5 members. Tourist Companion is a comprehensive solution designed to enhance tourism and improve the overall experience for tourists. Our project is divided into three main components:

            1. Indoor Localization
            We developed an indoor navigation system that is depended on collecting a dataset containing RSSI of WiFi readings from specific routers. We used KNN models and Flask after the training phase for models deployment. This ensures precise indoor localization for tourists. The Flask response, containing the location, is stored in the database and updated every 30 seconds to support app features.

            2. Mobile Application
            Our mobile application offers several key features:

            User Accounts: Tourists and tour guides can create accounts.

            Connection Requests: Tourists can send connection requests to their preferred tour guides, who can then accept or decline the requests.

            Tour Details: Tour guides can view tour details.
            Museum Information: Users can access detailed information about museums.

            High-Accuracy Localization: Tourists can see their own location and their tour guide's location with high accuracy.

            Room Capacity Monitoring: Users can view the capacity of each room, with a color-coded system to simplify understanding (Green: below average, Yellow: average to full, Red: above full). This helps in managing crowding issues in museums.

            3. Administrator Website
            Admins can add, edit, and delete museum information. They can also monitor all users and their locations within the museum.
            Our entire system was implemented and tested at The Great Cairo Library with great accuracy. This journey has been incredibly educational, and we are eager to continue enhancing and expanding our project.
          </div>
          <div className="flex col-span-3 justify-center items-center">
            <img
              src={projectLogo}
              height="500px"
              width="500px"
              className="animate-spin"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
