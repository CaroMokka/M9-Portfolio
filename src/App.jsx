import { useState, useEffect } from 'react'
import './App.css'
//components
import { Navbar } from "./components/Navbar/Navbar"
import { Cover } from "./components/Cover/Cover"
import { About } from "./components/About/About"
import { Proyects } from "./components/Proyects/Proyects"
import { Techno } from "./components/Tech/Techno"
import { Footer } from "./components/Footer/Footer"


export function App() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  }

  useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, [scroll]);


  return (
    <div className="App">
        <Navbar isScrolling={scroll}/>
        <Cover/>
        <About/>
        <Proyects/>
        <Techno/>
        <Footer/>
      </div>
  )
}
