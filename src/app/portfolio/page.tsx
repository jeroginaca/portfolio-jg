import Logo from '@/Components/Logo'
import Projects from '@/Components/Projects'
import Sidebar from '@/Components/Sidebar'

export default function Portfolio() {
  return (
    <>
    <Logo/>
    <div className="flex">
        <Sidebar/>
          <div className="w-[83%]">

            <section id="portfolio" className=" snap-start">
                          <Projects/>
            </section>
          </div>
      </div>
 
    </>
  )
}