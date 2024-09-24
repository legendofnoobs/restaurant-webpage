import Navbar from "./components/Navbar"
import AboutSection from "./sections/AboutSection"
import Contact from "./sections/Contact"
import HomeSection from "./sections/HomeSection"
import MenuSection from "./sections/MenuSection"

function App() {
  return (
    <div>
      <header className=" w-full h-fit bg-transparent backdrop-blur-lg px-24 fixed shadow-lg">
        <Navbar/>
      </header>
      <section className=" min-h-screen p-24 pb-0 flex justify-center items-center" id="Home">
        <HomeSection/>
      </section>
      <section className=" min-h-screen p-24 pb-0 flex justify-center items-center" id="About">
        <AboutSection/>
      </section>
      <section className=" min-h-screen p-24 pb-0 flex justify-center items-center" id="Menu">
        <MenuSection/>
      </section>
      <section className=" min-h-screen p-24 pb-0 flex justify-center items-center" id="Contact">
        <Contact/>
      </section>
    </div>
  )
}

export default App
