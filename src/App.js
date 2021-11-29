import logo from './josseline.jpg';
import './App.css';
import Projects from "./components/Projects"
import Home from "./components/Home"
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import {Routes, Route, Link} from 'react-router-dom'
import Button from '@mui/material/Button'


function App() { 
  return (
    <div className="App">
     
         <nav className='NavBar'>
         <div> 
           <ul>
            <li> 
           <Link  to = 'ContactMe'>Contact Me</Link>  {" "}
            </li>
             <li> 
          <Link style={{color:"black"}}to = 'Projects'>Projects</Link>  {" "}
            </li>
             <li> 
          <Link  to = 'AboutMe'>About Me</Link>  {" "}
            </li>
            <li> 
          <Link to = '/'>Home</Link> 
            </li>
          </ul>
          </div>
      </nav>
 
     <Routes>
       <Route path="Projects" element={<Projects/>} />
       <Route path="/" element={<Home/>}/>
       <Route path="AboutMe" element={<AboutMe/>}/>
       <Route path="ContactMe" element={<ContactMe/>}/>
     </Routes>

    </div>
  );
}

export default App;
