"use client"
import { useState, useRef, useEffect} from 'react';
import { anotherk } from "@/constant"
import Link from "next/link"
import Footer from '@/components/Footer';
export default function another(){
    const [show, setShow] = useState(false);
    return(
        <>
        <div className="w-[90%] mx-auto mt-[100px] xl:mt-[140px] font-serif">
            <div className="flex flex-col gap-3">
                <div className='flex flex-row gap-4 flex-wrap justify-center items-center'>
                    {anotherk.map((pro) =>(
                        <>
                            <div key={pro.id} className='flex flex-col gap-3 justify-center items-center w-[400px] h-[400px] bg-green-300 shadow-lg shadow-green-400 rounded-xl relative group'>
                                {pro.compo.map((el) =>(
                                    <>
                                        <div className=''>
                                        <img src={el.image} width={80} className='group-hover:rotate-45 transition-all duration-200'/>
                                        </div>
                                        <div className='flex flex-col gap-2 justify-center items-center text-center pb-20'>
                                        <h3 className='text-xl'>
                                                {el.title}
                                        </h3>
                                    </div>
                                    </>
                                ))}
                            <div className='absolute bottom-5'>
                                <Link href={`/another/${pro.id}`}>
                                    <div className='px-6 py-3 bg-green-950 text-white rounded-full hover:bg-gradient-to-r from-green-300 via-green-500 to-green-800 hover:text-green-950 transition-all duration-500 group'>
                                        Order Now!
                                    </div>
                                </Link>
                            </div>
                            </div>
                        </>
                    ))}
                </div>
                    </div>
        </div>
        <Footer />
        </>
    )
}