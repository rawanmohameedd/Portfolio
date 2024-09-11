import React, {useEffect, useRef, useState} from 'react'
import projectLogo from '../Images/logo.PNG'

import photo1 from '../Images/Screenshot 2024-09-10 045628.png'
import photo2 from '../Images/Screenshot 2024-09-10 045916.png'
import photo3 from '../Images/Screenshot 2024-09-10 050021.png'
import video1 from '../Images/Media1.mp4'
import video2 from '../Images/Media2.mp4'
import video3 from '../Images/Media3.mp4'
import { langStyle } from './Aboutme'
import { handleFullscreen } from '../fullscreen'

export const Gallery = () => {

    const [index , setIndex] = useState(0)
    const imageref = useRef(null)

    const media =[
        {type: "image", src: projectLogo, caption:""},
        {type: "image", src: photo1, caption:"Start of the mobile application"},
        {type: "image", src: photo2, caption:"Tourists can search through the available tour guides and find the most suitable one."},
        {type: "image", src: photo3, caption:"The accurate room capacities are based on real-time results from the AI model."},
        {type: "video", src: video1, caption:"Changes made on the administrator website will be updated on the mobile app instantly after the first refresh."},
        {type: "video", src: video2, caption:"Testing indoor localization for crowd management, showing your location and your tour guide’s location (if exists), and evaluating the impact on the administrator’s website."},
        {type: "video", src: video3, caption:"Tourists send a request to the tour guide, who can accept or decline it."},
    ]

    const next =()=>{
        setIndex((prevIndex)=>(prevIndex + 1)% media.length)
    }

    const prev =()=>{
        setIndex((prevIndex) => {
            return prevIndex === 0 ? media.length - 1 : prevIndex - 1;
          });
          
    }

    useEffect (()=>{
        const interval = setInterval(()=>{
            next()
        }, 5000)

        return ()=>clearInterval(interval)
    }, [index])

  return (
    <div className='flex flex-col text-center justify-center items-center' >
        
        {media[index].type === "image"?(
            <img src={media[index].src}
            width='400px'
            height='400px'
            ref={imageref}
            onClick={()=>handleFullscreen(imageref)}
            />
        ):(
            <video src={media[index].src}
            controls
            width='400px'
            height='400px'
            />
        )}
        <h2>{media[index].caption}</h2>
        <div className='flex flex-row justify-between'>
            <button onClick={prev} className={langStyle}> &lt;</button>
            <button onClick={next} className={langStyle}> &gt;</button>
        </div>
    </div>
  )
}
