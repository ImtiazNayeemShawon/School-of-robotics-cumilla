import React from 'react'
import DCSir from "../Img/DC-sir.png";
import '../styles/teachers.css';
import { Button } from '@mui/material';
import { EmailOutlined } from '@mui/icons-material';
import { PhoneOutlined } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
//const bull = (
 // <Box
   // component="span"
 //  // sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
 // >
   // •
//);

function DC() {
  return (
    <div>
        <Grid container  spacing={2}>
            <Grid item={6}>
            <div className='Profile-content hover:shadow-2xl ease-in duration-300'>
            <h1 class="shadow-md" >প্রোফাইল</h1>
            <h6>কামরুল হাসান</h6>
        <img id='Prfl-pic' src={DCSir} alt="DC sir" />
        <h4>ডেপুটি কমিশনার(ডিসি), কুমিল্লা</h4>
        <Button variant="contained">প্রতিষ্ঠাতা: স্কুল অব রোবোটিক্স কুমিল্লা</Button>
        <p>   <PhoneOutlined /> 01733354900  <EmailOutlined/> dccomilla@mopa.gov.bd</p>
        <div className='Profile-text'>
               
             <p><Twitter/> <Facebook/> <LinkedIn/> </p>
            </div>
        </div>
            </Grid>
  
           <Grid item={7}>
            
            </Grid>
        </Grid>
   
    </div>
  )
}

export default DC