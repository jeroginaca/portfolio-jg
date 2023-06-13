import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function Hero({}: Props) {
  return (
<>

<div className="font-unbounded hero-background flex flex-col justify-center items-center text-white">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-1 xl:gap-8 -mt-[70px] ">

        <div className="relative lg:col-span-3 w-full h-full items-center justify-center hidden lg:block">
            <p className="absolute xl:top-[220px] lg:top-[270px] xl:left-[150px] lg:left-[80px] -rotate-12 ">Front-End Developer</p>
            <p className="absolute xl:top-[250px] lg:top-[300px] lg:right-[8rem] xl:right-[14rem] rotate-12  ">Web Designer</p>
        </div>

        <div className="lg:col-span-2 pt-0 lg:pt-12 xl:pt-0">
            <div className="relative">
               <Link href="https://www.youtube.com/watch?v=y1bVDOhbrrc&t=6s&ab_channel=GoRelaxProductions"> <img src="https://res.cloudinary.com/dh7m2mxgh/image/upload/v1686150417/portfolio/Youtube_yv8nt3.png" alt="Youtube" className="absolute z-10 w-[50px] md:w-[70px] lg:w-[82px] top-[4rem] md:top-[5rem] lg:top-[1rem] md:left-[13.3rem] left-[0.5rem] lg:left-0"/></Link>
               <Link href="https://www.linkedin.com/in/jeronimoginaca/"> <img src="https://res.cloudinary.com/dh7m2mxgh/image/upload/v1686150418/portfolio/LinkedIN_kmses3.png" alt="Linkedin" className="absolute z-10 w-[50px] md:w-[70px] lg:w-[82px] top-[9rem] md:top-[11.4rem] md:left-[13.3rem] lg:top-[7.7rem] lg:-left-12"/></Link>
               <Link href="https://github.com/jeroginaca"> <img src="https://res.cloudinary.com/dh7m2mxgh/image/upload/v1686150417/portfolio/Github_hogmy9.png" alt="Github" className="absolute z-10 w-[50px] md:w-[70px] lg:w-[82px] top-[14rem] md:top-[18rem] md:left-[13.3rem] lg:top-[15.2rem] lg:-left-3"/></Link>

                {/* Perfil Desktop */}
                <img src="https://i.ibb.co/93j4xvG/perfil.png" alt="Profile" className="w-[350px] hidden lg:block"/>
                {/* Perfil IPAD */}
                <img src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1686648018/perfil-2_jliqb6.png" alt="Profile" className="hidden md:block lg:hidden w-[400px] ml-[15rem]"/>
                {/* Perfil Mobile */}
                <img src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1686648018/perfil-2_jliqb6.png" alt="Profile" className="md:hidden w-[300px] mx-auto mt-14"/>
            </div>
        </div>

        <div className="lg:col-span-3 w-full h-full lg:row-start-2 flex flex-col items-start lg:items-center justify-center xl:justify-start relative lg:pl-0 pl-5 md:pl-9 md:pt-3 lg:pt-0 xl:pt-8">
            <h1 className=" xl:text-[80px] lg:text-[4rem]  text-[2rem] md:text-[4rem] tracking-[12px]  font-bold  leading-[1.1] uppercase">Jerónimo <br/> Ginaca</h1> 
        </div>
        
        <div className="text-[1.1rem] md:text-[1.3rem] lg:text-[1rem] xl:text-[1.3rem] md:w-5/6 lg:w-full xl:w-5/6 lg:col-span-2 w-full h-full lg:row-start-2 flex flex-col items-start justify-center  lg:p-12 p-0  relative lg:pl-6 xl:pl-0 xl:pt-8 pl-5 md:pl-9">
            <p >Este sitio esta en desarrollo, pronto estará terminado y publicado.</p>
            <Link href="/" className="text-[#170739] bg-white mt-6 py-4 px-6 rounded-[10px]">Gracias</Link>
        </div>
        
      </div>
    </div>
</div>

  </>
  )
}