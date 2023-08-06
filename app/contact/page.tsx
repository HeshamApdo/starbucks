

export default function contact(){
    return(
        <div className="w-[90%] mx-auto mt-[130px] xl:mt-[140px] font-serif pb-2">
            <div className="flex flex-col lg:flex-row gap-1  bg-green-900 shadow-lg shadow-green-600 rounded-tr rounded-br rounded-bl rounded-3xl">
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440888.4087640742!2d32.024265500865496!3d30.309980349587608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457f77be1dfd4a1%3A0xd365851310ffb78!2sStarbucks!5e0!3m2!1sar!2seg!4v1691210989938!5m2!1sar!2seg" width="500" height="450"  loading="lazy" className="w-full lg:w-[500px] xl:w-[600px]"></iframe>
                </div>
                <form className="flex flex-col gap-3 text-center mx-auto">
                <div className="flex flex-col gap-3 text-center mx-auto">
                    <div className="text-white">
                        <div className="text-3xl font-semibold pt-10 pb-5">
                            Contact Us
                        </div>
                        <div>
                            <p className="text-slate-300">We will be very happy to contact you.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                    <div className="flex flex-col justify-center items-center bg-white w-[350px] rounded-full">
                        <div className="flex items-center">
                            <span>
                                <img src="/name.png" width={24} height={24} className=""/>
                            </span>
                            <input type="text" className="outline-none w-[300px] h-[40px] rounded-full indent-2 bg-inherit caret-green-500" maxLength={10} placeholder="Name" required/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white w-[350px] rounded-full">
                        <div className="flex items-center">
                            <span>
                                <img src="/email (1).png" width={24} height={24} className=""/>
                            </span>
                            <input type="email" className="outline-none w-[300px] h-[40px] rounded-full indent-2 bg-inherit caret-green-500" maxLength={30} placeholder="Email" required/>
                        </div>
                    </div>
                    <div>
                        <textarea className="rounded-xl outline-none indent-5 caret-green-500" cols={30} rows={5} maxLength={50} placeholder="Your Message"/>
                    </div>
                    </div>
                    <div className="flex justify-center items-center pb-5 lg:pb-0">
                        <input type="submit" value="Send" className='px-6 py-3 bg-green-950 text-white rounded-full hover:bg-gradient-to-r from-green-300 via-green-500 to-green-800 hover:text-green-950 transition-all duration-500 group w-[100px] cursor-pointer'/>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}