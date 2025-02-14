import React, { useEffect, useRef, useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { GrGithub } from 'react-icons/gr'
import { SiGmail } from 'react-icons/si'

export default function Contactme() {
    const [isOpen, setOpen] = useState(false)

    const contactRef = useRef(null)

    const toggle = () => {
        setOpen(!isOpen)
    }

    
    const handleClickOutside = (event) => {
        if (contactRef.current && !contactRef.current.contains(event.target))
            setOpen(false)
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <div
            ref={contactRef}
            onClick={toggle}
            className='flex flex-col items-center fixed right-0 bottom-0 space-y-4 p-4 rounded-md bg-contactBg'>
            <h2 className='font-bold text-background hover:text-hoverPrimary'> Contact</h2>
            {isOpen && (
                <div className='flex flex-col items-center'>
                    <a href='https://www.linkedin.com/in/rawan-mohamed-969a3a220/' className=' text-white hover:text-blue-500'>
                        <FaLinkedin size={35} />
                    </a>
                    <a href='https://github.com/rawanmohameedd' className='text-white hover:text-gray-500'>
                        <GrGithub size={35} />
                    </a>
                    <a href='mailto:nrawana12345@gmail.com' className='text-white hover:text-red-500'>
                        <SiGmail size={35} />
                    </a>
                </div>
            )}
        </div>
    )
}
