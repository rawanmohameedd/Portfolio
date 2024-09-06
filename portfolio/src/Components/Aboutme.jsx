import React from 'react'
import profile from '../Images/Rawan (1).jpg'
export default function Aboutme() {
    const langStyle = "bg-primary  rounded-2xl text-center p-2 mr-1 mb-2 text-white w-fit inline-block"
    return (
        <div className=' flex flex-row md:flex-col w-fit  bg-background items-center justify-center absolute top-0  p-2'>
            <div className='w-fit flex flex-col md:flex-row md:m-4 font-bold items-center justify-center  text-primary md:text-xl text-2xl mr-[100px]'>
                <img src={profile} width='200px' height='200px' className='rounded-full' />
                <div className='m-4 text-center '>
                    <h2> Rawan Mohamed </h2>
                    <h2> Full-Stack Developer </h2>
                </div>
            </div>
            <div className='ml-4 text-[20px] text-secondary'>
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

                </div>
                allowing me to build robust and scalable applications.

                
                    <a 
                    className='flex justify-center text-primary underline' 
                    href='https://drive.google.com/file/d/1VsV1OFmbglMFxgU3zzuPh5-RdWtvAsR4/view'>
                        See full Resume
                    </a>
            </div>
        </div>
    )
}
