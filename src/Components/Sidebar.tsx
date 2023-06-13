import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <>
    <div className="w-[17%] flex flex-col justify-center items-start">
              <ul>
            
               <Link href="/"><li className="font-unbounded my-3 ml-12">Home</li></Link> 
               <Link href="/portfolio"><li className="font-unbounded my-3 ml-12">Portfolio</li></Link> 
               <Link href="/about"><li className="font-unbounded my-3 ml-12">Sobre Mi</li></Link> 
               <li className="font-unbounded my-3 ml-12">Contacto</li>
     
              </ul>
          </div>
          </>
)
}