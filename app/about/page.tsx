import Footer from "@/components/Footer";
import Link from "next/link";


export default function about(){
    return(
        <>
        <div className="w-[90%] mx-auto mt-[120px] xl:mt-[160px] font-serif">
            <div className="flex flex-col justify-center items-center gap-10 text-center">
                <div>
                    <img src="/about.jpg" className="rounded-2xl w-[1000px]"/>
                </div>
                <div className="flex flex-col gap-10 mt-[20px]">
                <div className="w-[350px] md:w-[600px] flex">
                    <p className="text-2xl">Our story begins in 1971 along the cobblestone streets of Seattle’s historic Pike Place Market. It was here where Starbucks opened its first store, offering fresh-roasted coffee beans, tea and spices from around the world for our customers to take home. Our name was inspired by the classic tale, “Moby-Dick,” evoking the seafaring tradition of the early coffee traders.</p>
                </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                <div className=" w-[300px] md:w-[700px] lg:w-[900px] mx-auto">
                    <p className="text-xl">Ten years later, a young New Yorker named Howard Schultz would walk through these doors and become captivated with Starbucks coffee from his first sip. After joining the company in 1982, a different cobblestone road would lead him to another discovery. It was on a trip to Milan in 1983 that Howard first experienced Italy’s coffeehouses, and he returned to Seattle inspired to bring the warmth and artistry of its coffee culture to Starbucks. By 1987, we swapped our brown aprons for green ones and embarked on our next chapter as a coffeehouse.</p>
                </div>
                <div className=" w-[300px] md:w-[700px] lg:w-[1000px] mx-auto">
                    <p className="text-xl">Starbucks would soon expand to Chicago and Vancouver, Canada and then on to California, Washington, D.C. and New York. By 1996, we would cross the Pacific to open our first store in Japan, followed by Europe in 1998 and China in 1999. Over the next two decades, we would grow to welcome millions of customers each week and become a part of the fabric of tens of thousands of neighborhoods all around the world. In everything we do, we are always dedicated to Our Mission: With every cup, with every conversation, with every community - we nurture the limitless possibilities of human connection.</p>
                </div>
                <div className=" w-[300px] md:w-[700px] lg:w-[1000px] mx-auto">
                    <p className="text-xl">It takes many hands to craft the perfect cup of coffee – from the farmers who tend to the red-ripe coffee cherries, to the master roasters who coax the best from every bean, and to the barista who serves it with care. We are committed to the highest standards of quality and service, embracing our heritage while innovating to create new experiences to savor.</p>
                </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 justify-between items-center mt-[100px]">
                <div>
                <iframe className="aspect-video md:w-[600px]" src="video (1080p).mp4" width={400}></iframe>
                </div>
                <div>
                    <p className="text-xl font-semibold">
                    We like to say that we are not in the coffee business serving people, but in the people business serving coffee. Our employees – who we call partners – are at the heart of the Starbucks experience. We are committed to making our partners proud and investing in their health, well-being and success and to creating a culture of belonging where everyone is welcome.
                    </p>
                </div>
            </div>
            <div>
                <div className="flex justify-center items-center mt-5 pt-10 font-semibold">
                        <Link href="/leaders">
                            <div className="flex flex-row gap-2 justify-center items-center">
                                    <div className="hover:underline no-underline hover:decoration-green-900">
                                    What's about leadership team?
                                    </div>
                                    <div>
                                        <img src="/right.png" alt="arrow" className="object-contain animate-[moveRight_1s_ease-in-out_infinite]"/>
                                    </div>
                            </div>
                        </Link>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}




// {/* <div>
// <iframe className="aspect-video" src="video (1080p).mp4" width={400}></iframe>
// </div> */}