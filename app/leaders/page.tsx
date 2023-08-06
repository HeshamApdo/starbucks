import Footer from "@/components/Footer"
import { leadersK } from "@/constant"
import Link from "next/link"

export default function leaders(){
    return(
        <>
        <div className="w-[90%] mx-auto mt-[100px] xl:mt-[140px] font-serif">
            <div className="flex flex-row flex-wrap gap-10 justify-center items-center">
                {leadersK.map((leader) =>(
                    <div key={leader.id} className="flex flex-col gap-2 justify-center items-center text-center p-5 lg:p-0">
                        {leader.leadersCompo.map((el) =>(
                            <>
                            <Link href={`/leaders/${el.id}`}>
                                <div>
                                    <img src={el.image} className="rounded-full md:rounded-xl w-[200px] h-[300px] object-cover flex justify-center items-center hover:scale-75 transition-all duration-300 shadow-2xl"/>
                                </div>
                            </Link>
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-semibold text-xl">
                                        {el.name}
                                    </h3>
                                    <div className="flex flex-col gap-1 w-[200px] h-[100px]">
                                        <div>
                                            <p className=" text-zinc-950">
                                                {el.career}
                                            </p>
                                        </div>
                                        <Link href={`/leaders/${el.id}`} className="flex justify-center items-center">
                                            <div className="px-3 w-[70px] py-2 bg-green-950 text-white rounded-full hover:bg-gradient-to-r from-green-300 via-green-500 to-green-800 hover:text-green-950 transition-all duration-500 md:hidden">
                                                more...
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                ))}
            </div>
        </div>
        <Footer />
        </>
    )
}