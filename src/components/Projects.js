import {Link} from 'react-router-dom'
import { Button } from '@mui/material'

export default function Projects(){ 
    return(
        <div className="project"> 
          <h1>Projects</h1>
            <div className="projectButton"> 
       
                 <Link to="/Projects/Project1"><Button variant="contained">Project 1</Button></Link> 
                 <Link to="/Projects/Project2"><Button variant="contained">Project 2</Button></Link> 
                 <Link to="/Projects/Project3"><Button variant="contained">Project 3</Button></Link> 
        
            </div>
        </div>
        )

}