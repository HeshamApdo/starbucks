import Link from "next/link"

const Footer = () => {
  return (
    <div className='mt-[50px] flex justify-center items-center bg-green-900 font-serif'>
      <div className="lg:flex lg:items-center lg:flex-nowrap lg:gap-20">
        <div className="flex flex-col gap-8 p-10">
          <div className="flex flex-row gap-4">
            <Link href="/about">
            <div>
              <img src="/logo.png" alt="location" width={80}/>
            </div>
            </Link>
            <p className="text-white"><a href="/about" className=" underline underline-offset-4 decoration-green-500 font-semibold">Our story</a>  begins in 1971 along the cobblestone <br />streets of Seattle’s historic Pike Place Market.<br/> It was here where Starbucks opened its first store,<br /> offering fresh-roasted coffee beans, <br />tea and spices from around the world for our customers to take home.</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-white p-10">
          <div className="flex flex-row gap-3 items-center">
            <div>
              <img src="/phone (1).png"/>
            </div>
            <span>+20 10500 55 294</span>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div>
              <img src="/email.png"/>
            </div>
            <span>heshamabdulkareem6@gmail.com</span>
          </div>
        </div>
        <div className="flex flex-row gap-4 p-10">
          <Link href="https://www.facebook.com/Starbucks/" target="_black">
            <img src="/facebook (2).png"/>
          </Link>
          <Link href="https://www.instagram.com/starbucks/" target="_black">
            <img src="/instagram (3).png"/>
          </Link>
          <Link href="https://twitter.com/Starbucks" target="_black">
            <img src="/twitter (2).png"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer