import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Comp from "./components/Companies/Comp";
import Resi from "./components/Residence/Resi";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Get from"./components/Get/Get";
import Foot from "./components/Footer/Foot";
import { FaRegCopyright } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import "./App.css"
function App() {
  

  return (
    <>
     <div className="app">

      <div className="circle-gradient"/>
      <div>
      
        <Header/>
        <Hero/>
        </div>
        </div>
        <Comp/>
        <Resi/>
        <Value/>
        <Contact/>
        <Get/>
        <Foot/>
        <div className="trade">
          <p><FaRegCopyright id="icc" size={16} color={"blue"}/>made by <CiHeart  id="iee"size={16} color={"red"} /> Abdul Hanan abbasi</p>
        </div>
        
    </>
  )
}

export default App
