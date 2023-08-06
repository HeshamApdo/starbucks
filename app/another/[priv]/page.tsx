"use client"
import { anotherk } from "@/constant"
import Link from "next/link"

export default function id({params}: any){
    return(
        <div className="w-[90%] mx-auto mt-[100px] xl:mt-[140px] font-serif">
            <div>
                {anotherk.map((prods) =>(
                    prods.id === params.priv &&
                    <div>
                        {prods.compo.map((el) =>(
                            <div className="flex flex-col md:flex-row gap-4 items-center">
                                <div className="flex flex-col gap-3 justify-center items-center w-[300px] h-[300px] p-[90px] md:p-[150px] sm:w-[600px] sm:h-[600px]  relative group">
                                    <img src={el.image} className="lg:w-[400px] h-[500px] object-contain"/>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="text-3xl flex justify-center items-center text-center pt-10 sm:pt-0">
                                        {el.title}
                                    </div>
                                    <div className="flex flex-col left-[100px]">
                                        <div className="text-3xl font-semibold">
                                            {el.cost}
                                        </div>
                                        <div className="line-through text-xl text-zinc-900">
                                            {el.price}
                                        </div>
                                        <div className="flex flex-row gap-2 items-center pt-5">
                                            <div className="text-3xl font-semibold">
                                                {el.calories}
                                            </div>
                                            <div>
                                                <img src="/calories.png"/>
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-2 items-center pt-5">
                                            <div className="text-3xl font-semibold">
                                                {el.views}
                                            </div>
                                            <div>
                                                <img src="/eye.png"/>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center pt-5 flex-col">
                                            <Link href={`/contact`}>
                                                <div className='px-6 py-3 bg-green-950 text-white rounded-full hover:bg-gradient-to-r from-green-300 via-green-500 to-green-800 hover:text-green-950 transition-all duration-500 group w-[100px]'>
                                                    Custom
                                                </div>
                                            </Link>
                                            <div className="flex justify-center items-center mt-2">
                                                <div className="px-5 w-[70px] py-2 bg-green-950 text-white rounded-full hover:bg-gradient-to-r from-green-300 via-green-500 to-green-800 hover:text-green-950 transition-all duration-500 cursor-pointer" onClick={() => window.history.back()}>
                                                <img src="/back.png"/>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div>
            </div>
        </div>
    )
}