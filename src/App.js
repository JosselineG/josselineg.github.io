import logo from './LogoJGHalfcolor.png';
import './App.css';
import Projects from "./components/Projects"
import Home from "./components/Home"
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import {Routes, Route, Link} from 'react-router-dom'
import Project1 from './components/pages/Project1';
import Project2 from './components/pages/Project2';
import Project3 from './components/pages/Project3';


function App() { 
  return (
    <div className="App">
     
      <nav className='NavBar'>
         <div> 
            <ul>
            <li> 
           <Link  style={{color:"white"}}  to = '/'>Home</Link>  
            </li>
             <li> 
             <Link style={{color:"white"}} to = 'AboutMe'>About Me</Link> 
            </li>
             <li> 
          <Link style={{color:"white"}}to = 'Projects'>Projects</Link>  
            </li>
            <li> 
          <Link style={{color:"white"}}to = 'ContactMe'>Contact Me</Link> 
            </li>
              
             <img src={logo} className="App-LogoJGHalfcolor" alt="LogoJGHalfcolor" width="170" height="170"/>
             
          </ul>
        </div>
      </nav>
 
     <Routes>
       <Route path="Projects" element={<Projects/>} />
       <Route path="Projects/Project1" element={<Project1/>}/>
       <Route path="Projects/Project2" element={<Project2/>}/>
       <Route path="Projects/Project3" element={<Project3/>}/>
      
       <Route path="/" element={<Home/>}/>
       <Route path="AboutMe" element={<AboutMe/>}/>
       <Route path="ContactMe" element={<ContactMe/>}/>
     </Routes>

     
    </div>
  );
}

export default App;
