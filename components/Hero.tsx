
import Link from "next/link"

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center xl:flex-row gap-10">
      <div>
        <img src="/back.jpg" width={250} className="rounded-full sm:w-[400px] xl:w-[800px]"/>
      </div>
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col gap-2 justify-between items-center text-center">
            <h2 className="text-white text-5xl">
                Welcome To Our <span className="bg-clip-text text-transparent bg-green-950 italic font-semibold">Starbucks</span> Coffee
            </h2>
            <p className="text-slate-200">
            Starbucks was founded by Jerry Baldwin, Gordon Bowker, and Zev Siegl, opening its first store in 1971 near the historic Pike Place Market in Seattle. The three Starbucks founders had two things in common: they were all coming from academia.
            </p>
        </div>
        <Link href="/products">
          <div className="px-10 py-5 bg-green-950 text-white rounded-full hover:bg-gradient-to-r from-green-300 via-green-500 to-green-800 hover:text-green-950 transition-all duration-500">
            Get Started
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Hero