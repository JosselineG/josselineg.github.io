import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function ContactMe(){ 
    return(
        <div> 
            <form>
            <h1>Contact Me</h1>

            <p>Email: guardadojosseline@gmail.com</p>
            <p>Phone Number: (914)257-9220 </p>
           
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Message" variant="outlined" />

            </form>
        </div>
       
        )

}