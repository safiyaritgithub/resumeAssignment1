import './App.css';
import { Picsection } from "./components/1picsection"
import { BestSellers } from "./components/bestSellers"
import { Flavour } from "./components/flavour"
import { Navbar } from "./components/navbar"
import { Fire } from "./components/fire";
import { Inbox } from './components/inbox';
import { Maker } from './components/maker';
import { ThreeCards } from './components/threeCards';
import { Footer } from './components/footer';


function App() {
  

  return (
    <>
    <div className="font-roboto bg-[#F2EFDD] ">
    <Navbar/>
    <Picsection/>
    <BestSellers/>
    <Flavour/>
    <Fire/>
    <Inbox/>
    <Maker/>
    <ThreeCards/>
    <Footer/>

    </div>
   </>
  )
}

export default App
