import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Connect from "./components/Connect";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
function App() {
  return (
    <div>
       <NavBar/>
       <Home/>
       <About/>
       <Connect/>
       <Skills/>
       <Projects/>
       <Interests/>
    </div>

  );
}

export default App;
