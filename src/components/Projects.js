import {Link} from 'react-router-dom'
import { Button } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article';

export default function Projects(){ 
    return(
        <div className="project"> 
          <h1>Projects</h1>
            <div className="projectButton"> 
       
                 <Link  
                  style={{ textDecoration: 'none' }} 
                  to="/Projects/Project1">
                    
                    <Button 
                     style={{backgroundColor: 'black'}}
                     endIcon={<ArticleIcon/>} 
                     variant="contained">Project 1
                    </Button>
                </Link> 
                
                <Link 
                  style={{ textDecoration: 'none' }} 
                  to="/Projects/Project2">
                    <Button 
                     style={{backgroundColor: 'black'}}
                     endIcon={<ArticleIcon/>}  
                     variant="contained">Project 2
                    </Button>
                </Link>

                <Link 
                  style={{ textDecoration: 'none' }} 
                  to="/Projects/Project3">
                    <Button 
                     style={{backgroundColor: 'black'}}
                     endIcon={<ArticleIcon/>} 
                     variant="contained">Project 3
                    </Button>
                </Link> 
        
            </div>
        </div>
   )

}