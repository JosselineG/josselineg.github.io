import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';

class ContactMe extends React.Component{

constructor(props){
    super(props);
    this.state  = {value: " "};
}
handleChange=(e)=>{
   
    this.setState({value: e.target.value})

}

handleSubmit =(e)=>{
   
    alert("Hey" + this.state.value  + " your message was sent successfully!")
    e.preventdefault()
}

 render(){
    return(
        <div className = "contactMe" > 
            <form >
            
            <h1>Contact Me</h1>
                <div className="contact">
                    <a style={{color: "black"}} href="mailto: guardadojosseline@gmail.com"> 
                     <  p>Email: guardadojosseline@gmail.com</p>
                    </a>
            
                    <a style={{color: "black"}} href="tel: 914-257-9220"> 
                        <p>Phone Number: 914-257-9220 </p>
                    </a>
                </div>

            <div className="box">

            <TextField    
                  id="outlined-name" 
                  label="Name" 
                  variant="filled" 
                  value= {this.state.value}
                  onChange={(e)=>this.handleChange(e)}
                />
             <br/>
                
            <TextField  
                id="outlined-email" 
                label="Email" 
                variant="filled" />
               

             <br/>

            <TextField 
                id="outlined-message" 
                label="Message" 
                variant="filled" />

                <Button 
                 style={{backgroundColor: 'black'}} 
                 endIcon={<SendIcon/>} size='small' 
                 variant='contained' 
                 onClick={(e)=>this.handleSubmit(e)} 
                 type="submit">Submit
                </Button>
           

          
                </div>
            </form>
        </div>
       
        )
    }
}

export default ContactMe;