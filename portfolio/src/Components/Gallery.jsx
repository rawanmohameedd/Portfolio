import React, { useEffect, useRef, useState } from 'react'
import projectLogo from '../Images/logo.PNG'

import photo1 from '../Images/Screenshot 2024-09-10 045628.png'
import photo2 from '../Images/Screenshot 2024-09-10 045916.png'
import photo3 from '../Images/Screenshot 2024-09-10 050021.png'
import video1 from '../Images/Media1.mp4'
import video2 from '../Images/Media2.mp4'
import video3 from '../Images/Media3.mp4'
import photo4 from '../Images/1.png'
import photo5 from '../Images/2.png'
import photo6 from '../Images/3.png'
import photo7 from '../Images/4.png'
import photo8 from '../Images/5.png'
import photo9 from '../Images/6.png'

import { langStyle } from './Aboutme'
import { handleFullscreen } from '../fullscreen'

const media = [
    { type: "image", src: projectLogo, caption: "" },
    { type: "image", src: photo1, caption: "Start of the mobile application" },
    { type: "image", src: photo2, caption: "Tourists can search through the available tour guides and find the most suitable one." },
    { type: "image", src: photo3, caption: "The accurate room capacities are based on real-time results from the AI model." },
    { type: "video", src: video1, caption: "Changes made on the administrator website will be updated on the mobile app instantly after the first refresh." },
    { type: "video", src: video2, caption: "Testing indoor localization for crowd management, showing your location and your tour guide’s location (if exists), and evaluating the impact on the administrator’s website." },
    { type: "video", src: video3, caption: "Tourists send a request to the tour guide, who can accept or decline it." },
]

const media2 =[
    {type:"image", src:photo4 , caption: "Home Page before Registeration"},
    {type:"image", src:photo5 , caption: "Alert when trying to start a project"},
    {type:"image", src:photo6 , caption: "Registration"},
    {type:"image", src:photo7, caption: "Welcome message when user signed in successfully"},
    {type:"image", src:photo8 , caption: "Campaign"},
    {type:"image", src:photo9 , caption: "User Profile"}
] 

export const Gallery = ({ mediaList }) => {
    const [index, setIndex] = useState(0)
    const [pause, setPause] = useState(false)
    const mediaref = useRef(null)

    if (mediaList == 1)
        mediaList = media
    else 
        mediaList = media2
    const next = () => {
        setPause(false)
        setIndex((prevIndex) => (prevIndex + 1) % mediaList.length)
    }

    const prev = () => {
        setPause(false)
        setIndex((prevIndex) => {
            return prevIndex === 0 ? mediaList.length - 1 : prevIndex - 1;
        })
    }

    useEffect(() => {
        if (pause) return
        const interval = setInterval(() => {
            next()
        }, 2000)

        return () => clearInterval(interval)
    }, [index, pause])

    const currentItem = mediaList[index]

    return (
        <div className='text-center'>
            <div className='flex flex-col justify-center items-center'
                onClick={() => {
                    handleFullscreen(mediaref)
                    setPause(true)
                }}>
                {currentItem.type === "image" ? (
                    <img src={currentItem.src}
                        width='400px'
                        height='400px'
                        ref={mediaref}
                    />
                ) : (
                    <video src={currentItem.src}
                        width='400px'
                        height='400px'
                        autoPlay
                        loop
                        ref={mediaref}
                    />
                )}
            </div>
            <h2 className='px-5'>{currentItem.caption}</h2>
            <div className='flex flex-row justify-between'>
                <button onClick={prev} className={langStyle}> &lt;</button>
                <button onClick={next} className={langStyle} > &gt;</button>
            </div>
        </div>
    )
}
