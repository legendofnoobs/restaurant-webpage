import Navbar from "./components/Navbar"
import AboutSection from "./sections/AboutSection"
import Contact from "./sections/Contact"
import HomeSection from "./sections/HomeSection"
import MenuSection from "./sections/MenuSection"

function App() {
  return (
    <div>
      <header className=" w-full h-fit bg-transparent backdrop-blur-lg px-24 fixed shadow-lg max-[634px]:px-10 max-[634px]:w-screen">
        <Navbar/>
      </header>
      <section className=" min-h-screen p-24 pb-0 flex justify-center items-center max-[634px]:px-10" id="Home">
        <HomeSection/>
      </section>
      <section className=" min-h-screen p-24 pb-0 flex justify-center items-center max-[634px]:px-10" id="About">
        <AboutSection/>
      </section>
      <section className=" min-h-screen p-24 pb-0 flex justify-center items-center max-[634px]:px-10" id="Menu">
        <MenuSection/>
      </section>
      <section className=" min-h-screen p-24 flex justify-center items-center max-[634px]:px-10 pb-24" id="Contact">
        <Contact/>
      </section>
    </div>
  )
}

export default App
