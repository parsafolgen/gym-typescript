import { useState } from "react";
import Navbar from "@/scense/navbar";
import { SelectedPage } from "./shared/types";
import { useEffect } from "react";
import Home from "@/scense/home";
import Benefits from "@/scense/benefits";
import OurClasses from "@/scense/ourclasses";
import ContactUs from "./scense/contactus";
import Footer from "./scense/footer/Footer";


function App() {
  const [selectedPage , setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage , setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
          setIsTopOfPage(true);
          setSelectedPage(SelectedPage.Home)
      }
      if(window.scrollY !== 0 ) setIsTopOfPage(false)
    }
  window.addEventListener("scroll" , handleScroll)
  return () => window.removeEventListener("scroll" , handleScroll)
  },[])
  return (
    <>
      <Navbar
      isTopOfPage = {isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage} />
    <Home setSelectedPage={setSelectedPage} />
    <Benefits setSelectedPage={setSelectedPage} />
    <OurClasses setSelectedPage={setSelectedPage} />
    <ContactUs setSelectedPage={setSelectedPage} />
    <Footer />
    </>

  )
}

export default App
