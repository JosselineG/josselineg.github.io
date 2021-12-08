import * as React from "react"
import Box from '@mui/material/Box'

export default function AboutMe(){ 
    return(
        <div className="About"> 
          <h1 style={{color:"black"}}>About Me</h1> 
            <Box className="AboutBox">
        
                <p>
              
                 "My name is Josseline, I'm currently a computer science student at Lehman College.
                 Over this past months, I've had the opportunity to learn front end development and
                 have enjoyed every minute of it. It is something that I see myself doing more
                 in the future. Apart from that, things I enjoy doing during my freetime are going camping, 
                 mountain biking and playing soccer."
              
                </p>

                <a style={{color: "white"}}  rel="noreferrer" target="_blank" href="https://docs.google.com/document/d/1DZ76DWPY-4bB-ZilVb0-XhOz2GmatUnKuqahIN586uc/edit?usp=sharing">Resume Link!</a>        
                  {/* <a> tag defines a hyperlink, which is used to link from one page to another. 
                  <href> attribute indicates the link's destination. <target>="_blank" opens the link in a new tab.
                   */}

            </Box>
            

        </div>
       
    )

}