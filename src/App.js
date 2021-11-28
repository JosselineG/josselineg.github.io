import logo from './josseline.jpg';
import './App.css';
import Projects from "./components/Projects"
import Home from "./components/Home"
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import {Routes, Route, Link} from 'react-router-dom'


function App() { 
  return (
    <div className="App">
     
     <Routes>
       <Route path="projects" elements={<Projects/>} />
       <Route path="/" element={<Home/>}/>
       <Route path="About Me" element={<AboutMe/>}/>
       <Route path="Contact Me" element={<ContactMe/>}/>
     </Routes>



    </div>
  );
}

export default App;
