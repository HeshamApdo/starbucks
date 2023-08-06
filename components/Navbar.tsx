"use client"
import { useState, useRef, useEffect} from 'react';
import Link from "next/link"
const Navbar = () => {
    const [links, setLinks] = useState(["Home", "Products", "About", "Leaders", "Contact"])
    const [open, setOpen] = useState(false)
    const navRef = useRef();
    useEffect(() =>{
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100){
                navRef.current.style.background = "rgb(22 101 52)"
            } else {
                navRef.current.style.background = "transparent"
            }
        })
    },[])
  return (
    <div ref={navRef} className="mx-auto flex fixed top-0 w-full justify-between items-center px-2 py-1 sm:px-10 sm:py-3 transition-all duration-150 z-20">
        <Link href="/">
            <img src="/logo.png" className='w-[90px] sm:w-[120px] pt-5 sm:pt-0'/>
        </Link>
        {open &&<div className='visible sm:hidden absolute right-[50px] top-[60px]'>
        <div className="flex flex-col gap-4 bg-green-800 w-[200px] justify-center items-center p-5 rounded-xl">
            {links.map((link) =>(
                <Link href={link === "Home"? `/` : `/${link.toLowerCase()}`} onClick={() => setOpen(false)}>
                    <div className='text-white font-semibold font-serif hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-green-300 via-green-500 to-green-800'>
                        {link}
                    </div>
                </Link>
            ))}
        </div>
        </div>
        }
        {!open &&<div>
            <img src='/menu.png' className=' sm:hidden mr-3 pt-4 cursor-pointer' onClick={() => setOpen(true)}/>
        </div>}
        {open &&<div>
            <img src='/close.png' className=' sm:hidden mr-3 pt-4 cursor-pointer' onClick={() => setOpen(false)}/>
        </div>}
        <div className="sm:flex flex-row gap-4 hidden sm:visible">
            {links.map((link) =>(
                <Link href={link === "Home"? `/` : `/${link.toLowerCase()}`}>
                    <div className='text-white font-semibold font-serif hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-green-300 via-green-500 to-green-800'>
                        {link}
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar