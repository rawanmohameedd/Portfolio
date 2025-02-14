import React, { useRef } from 'react'
import profile from '../Images/Rawan (1).jpg'
import { handleFullscreen } from '../fullscreen'

export const langStyle = "bg-primary  rounded-2xl text-center p-2 mr-1 my-2 text-white w-fit inline-block"
export function Profile() {
    const imageref = useRef(null);

    return (
        <div className='bg-background flex items-center justify-center'>
        <div className=' md:m-4 bg-background'>
            <div className='w-fit flex flex-col items-center justify-center text-primary font-bold  md:text-xl text-2xl'>
                <div onClick={() => handleFullscreen(imageref)} className='cursor-pointer'>
                    <img
                        src={profile}
                        className='rounded-full w-[300px] h-[300px] md:w-[200px] md:h-[200px]'
                        ref={imageref}
                    />
                </div>
                <div className='m-4 text-center'>
                    <h2>Rawan Mohamed</h2>
                    <h2>Full-Stack Developer</h2>
                </div>
            </div>
        </div>
        </div>
    );
}


export function Aboutme() {
    return (
        <div className='bg-background'>
        <div className='ml-4 text-[20px] text-secondary mt-5 bg-background'>
            <span > Full-Stack Developer with a passion for creating innovative responsive solutions.</span>
            <p> I specialize in a range of technologies including:
            </p>
            <div>

                <h2 className='font-bold'> Frontend:</h2>
                <span className={langStyle}>HTML</span>
                <span className={langStyle}>CSS</span>
                <span className={langStyle}>JavaScript</span>
                <span className={langStyle}>TypeScript</span>
                <span className={langStyle}>React</span>
                <span className={langStyle}> React Native</span>
                <h2 className='font-bold'> Backend:</h2>
                <span className={langStyle}>Node.js</span>
                <span className={langStyle}>Express.js</span>

                <span className={langStyle}>Flask</span>
                <h2 className='font-bold'> Tools:</h2>
                <span className={langStyle}>Tailwind</span>
                <span className={langStyle}>Bootstrap</span>
                <h2 className='font-bold'> Data Mangament System:</h2>
                <span className={langStyle}>PostgreSQL</span>
                <span className={langStyle}>MySQL</span>
                <span className={langStyle}>MongoDB</span>
                <span className={langStyle}>Prisma ORM</span>

            </div>
            allowing me to build robust and scalable applications.


            <a
                className='flex justify-center text-primary underline'
                href='https://drive.google.com/file/d/1KP3Zja62gV4-MX81dwylVCFn8irtcwqD/view?usp=sharing'>
                See full Resume
            </a>
        </div>
        </div>
    )
}
