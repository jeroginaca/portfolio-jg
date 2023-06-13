
import Portfolio from "./portfolio/page"
import Hero from "../Components/Hero"
import Logo from "../Components/Logo"



export default function Home() {
  return (
    <>
    <Logo/>

    <div className="h-screen flex flex-col justify-center items-center snap-y snap-mandatory scrollbar-none">
          <div className="w-[90%] h-[95%] lg:w-[95%] lg:h-[93%] rounded-[20px] lg:rounded-[50px] overflow-hidden scrollbar-none">
                  <section id='hero' className="snap-start ">      
                      <Hero/>    
                      
                  </section>
          </div>  
    </div>
    </>
  )
};