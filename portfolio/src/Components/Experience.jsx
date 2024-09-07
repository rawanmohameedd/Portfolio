import React, {useRef} from 'react';
import ischool1 from '../Images/undefined Certificate.png';
import ischool2 from '../Images/undefined Certificate (1).png';

export default function Experience() {
  const imageRef = useRef(null);

  const handleFullscreen = () => {
    if (imageRef.current) {
      if (imageRef.current.requestFullscreen) {
        imageRef.current.requestFullscreen();
      } else if (imageRef.current.mozRequestFullScreen) { /* Firefox */
        imageRef.current.mozRequestFullScreen();
      } else if (imageRef.current.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        imageRef.current.webkitRequestFullscreen();
      } else if (imageRef.current.msRequestFullscreen) { /* IE/Edge */
        imageRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="flex flex-col w-screen bg-background justify-center items-center relative p-6 pt-10">
      <h2 className="text-center text-primary md:text-xl text-2xl font-bold mb-6">Experience</h2>
      <div className="w-full md:w-2/3">
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Full-stack Projects - Freelance </h2>
          <h2 className="text-lg">01/2024 - present</h2>
        </div>
        <div className="flex flex-col items-start space-x-4">
          <div className="flex flex-row md:flex-col space-x-4 md:space-y-4">

          </div>
          <div>

          </div>
        </div>
      </div>

      <div className="w-full ">
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Coding Instructor - iSchool</h2>
          <h2 className="text-lg">06/2024 - 08/2024</h2>
        </div>
        <div className="flex flex-row items-start space-x-4">
          <div className="flex flex-col space-y-4" onClick={handleFullscreen}>
            <img ref={imageRef} src={ischool2} width='500px' height='500px' />
          </div>
          <div>

          <p className="text-base text-justify">
            Teaching grade 5! It has been a truly wonderful experience watching young minds engage with coding concepts and develop their problem-solving skills, for the Digital Egypt Marvel Initiative in cooperation with the Ministry of Communications and Information Technology, Egypt.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
