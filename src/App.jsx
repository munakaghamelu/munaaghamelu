import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import './app.scss';
import { useState } from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(true)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        {<><Landing /><About /><Skills/>
        <Portfolio/>
        <Contact/> </>}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
