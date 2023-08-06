"use client"
import { leadersK } from "@/constant"
import Link from "next/link"


export default function sec({params} : any){
    return(
        <div className="w-[90%] mx-auto mt-[130px] xl:mt-[140px] font-serif pb-10">
                {leadersK.map((el) =>(
                    el.id === params.sec &&
                    <>
                    <div className="flex flex-col lg:flex-row gap-5">
                        {el.leadersCompo.map((leader) =>(
                            <div className="flex flex-col gap-20">
                            <>
                            <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
                                    <div className="lg:w-[500px]">
                                        <img src={leader.image} className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-cover object-top"/>
                                    </div>
                                    <div className="flex flex-col gap-3 items-center text-center lg:text-start">
                                        <div className="flex flex-col gap-1">
                                            <div className="text-4xl lg:text-6xl xl:text-9xl font-semibold">
                                                {leader.name}
                                            </div>
                                            <div className="text-2xl mt-3">
                                                {leader.career}
                                            </div>
                                            <div className="lg:w-[500px] xl:w-[600px] mt-5">
                                                {leader.define}
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center lg:w-[800px] xl:w-[1000px] mx-auto text-2xl font-medium gap-5">
                                <div className="">
                                    {leader.para1}
                                </div>
                                <div>
                                    {leader.para2}
                                </div>
                                <div>
                                    {leader.para3}
                                </div>
                            </div>
                            </>
                            </div>
                        ))}
                    </div>
                    </>
                ))}
                    <div className="flex justify-center items-center mt-3">
                        <div className="px-5 w-[70px] py-2 bg-green-950 text-white rounded-full hover:bg-gradient-to-r from-green-300 via-green-500 to-green-800 hover:text-green-950 transition-all duration-500 cursor-pointer" onClick={() => window.history.back()}>
                            <img src="/back.png"/>
                        </div>
                    </div>
        </div>
    )
}