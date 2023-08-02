import React from "react"
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Analytics from "./Components/Analytics";
import Newsletter from "./Components/Newsletter";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import {useState,useRef,useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
function App() {
  const[scrollstate,setscrollstate] = useState()
  const analyticsRef = useRef();
  if(scrollstate ==='analyticsRef'){
    setscrollstate('');
    analyticsRef.current.scrollIntoView({
      behavior: "smooth",
    })
  }
  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);

    return (
    <div >
      <Navbar passscrollstate={setscrollstate}/>
      <Hero />
      <Analytics ref={analyticsRef} />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
