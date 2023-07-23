import Navbar from '@/layouts/navbar'
import Footer from './layouts/footer';
import Home from '@/layouts/home';
import Benefits from '@/layouts/benefits';
import OurClasses from '@/layouts/ourClasses';
import ContactUs from './layouts/contact';
import { useState, useEffect } from 'react'
import { SelectedAnchor } from "@/shared/types"

function App() {

  /* ==== VARIABLES ==== */
  const [selectedAnchor, setSelectedAnchor] = useState<SelectedAnchor>(SelectedAnchor.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  /* ==== USEEFFECT ==== */
  useEffect(() => {
    const handleScroll = ( ) => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedAnchor(SelectedAnchor.Home);
      }
      else {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  


  return (
    <div className='app bg-gray-20'>
      <Navbar 
      isAtTop={isTopOfPage}
      selectedAnchor={selectedAnchor}
      setSelectedAnchor={setSelectedAnchor}/>
      
      <Home
      setSelectedAnchor={setSelectedAnchor} />

      <Benefits
      setSelectedAnchor={setSelectedAnchor} />

      <OurClasses
      setSelectedAnchor={setSelectedAnchor} />

      <ContactUs
      setSelectedAnchor={setSelectedAnchor} />

      <Footer coco={''}/>

    </div>
  )
}

export default App
