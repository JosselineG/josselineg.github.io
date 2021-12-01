import * as React from 'react';
import TextField from '@mui/material/TextField';

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
        <div > 
            <form >
            
            <h1>Contact Me</h1>
                <div className="contact">
            
            <p>Email: guardadojosseline@gmail.com</p>
            <p>Phone Number: (914)257-9220 </p>
           
                </div>

            <div className="box">

            <TextField    
                  id="outlined-name" 
                  label="Name" 
                  variant="outlined" 
                
                  value= {this.state.value}
                  onChange={(e)=>this.handleChange(e)}
                />
                 <br/>
                
            <TextField  
                id="outlined-email" 
                label="Email" 
                variant="outlined" />


                <br/>

            <TextField 
                id="outlined-message" 
                label="Message" 
                variant="outlined" />

                <button onClick={(e)=>this.handleSubmit(e)} type="submit">Submit</button>
           

          
                </div>
            </form>
        </div>
       
        )
    }
}

export default ContactMe;