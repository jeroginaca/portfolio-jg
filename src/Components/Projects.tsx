import React from 'react'

type Props = {}

export default function Projects({}: Props) {
  return (
    <>
    <div className="h-screen flex flex-col justify-center items-center">
    
    <div className="portfolio-background font-unbounded flex flex-col  justify-end items-center">
      <div className="w-[90%]">
      <h1 className="text-white text-[3rem]">Porfolio</h1>
      </div>
      <div className="w-[90%] h-[80%]  flex flex-wrap overflow-scroll ">
        <div className="bg-black w-[70%] min-w-64 h-64 rounded-[30px] mx-5 " ></div>
        <div className="bg-black w-64 h-64 rounded-[30px]"></div>
        <div className="bg-black w-64 h-64 rounded-[30px] mx-5" ></div>
        <div className="bg-black w-[70%] min-w-64 h-64 rounded-[30px]  " ></div>
        
      </div>
    </div>
    </div>
   

      </>
  )
}