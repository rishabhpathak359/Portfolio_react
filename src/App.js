import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Projects/>
   <Contact/>
    </div>
  );
}

export default App;
