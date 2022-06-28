import React from 'react'
import '../styles/teachers.css';
import { Button, Container } from '@mui/material';
import { EmailOutlined } from '@mui/icons-material';
import { PhoneOutlined } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { Grid } from '@mui/material';


function MainUddin() {
  return (
<Container>
   <Grid container  spacing={0}>
         <Grid item={6}>
             <div className='Profile-content hover:shadow-2xl ease-in duration-300'>
                  <h1 class="shadow-md" >প্রোফাইল</h1>
                  <h6>Main Uddin Khan</h6>
                  <img id='Prfl-pic' src="" alt="Main uddin " />
                  <Button variant="contained"> Designer:School Of Robotics </Button>
                  <p>   <PhoneOutlined /> 01734848502  <EmailOutlined/> shawonkhandesigner@gmail.com</p>
                  <div className='Profile-text'> <p><Twitter/> <Facebook/> <LinkedIn/> </p> </div>
            
              </div>
        </Grid>
          <Grid item={3}>
              <container>
                   <div className='Details'>
                        <h5><b> Institute name:</b>  Cumilla Modern High School</h5>
                        <h5><b> S.S.C:</b> 2019(GPA-4.24) group- science</h5>
                        <h5><b>Institute name:</b> Cumilla Residential College</h5>
                        <h5><b>H.S.C:</b> 2021(GPA- 4.42)group -science </h5>
                   </div>
                </container>
          </Grid>
 </Grid>
</Container>
  )
}

export default MainUddin