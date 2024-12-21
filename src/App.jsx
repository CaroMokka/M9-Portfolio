import { useState } from 'react'
import './App.css'
//components
import { Navbar } from "./components/Navbar/Navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Navbar isScrolling={scroll}/>
        {/* <Cover/>
        <About/>
        <Proyects/>
        <Tecnology/>
        <Info/>
        <Footer/> */}

      </div>
  )
}

export default App
