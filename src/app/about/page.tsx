import Logo from "@/Components/Logo"
import Sidebar from "@/Components/Sidebar"
import SobreMi from "@/Components/SobreMi"

export default function About() {
  return (
    <>
    <Logo/>
    <div className="flex">
        <Sidebar/>
          <div className="w-[83%]">

            <section id="porfolio" className=" snap-start ">
                       <SobreMi/>        
            </section>
          </div>
      </div>
 
    </>
  )
}