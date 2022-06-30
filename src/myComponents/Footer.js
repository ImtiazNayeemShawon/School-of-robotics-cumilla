import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react';
import "./styles/Footer.css";
import Logo from "./Img/logo.png";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EmailIcon from '@mui/icons-material/Email';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import YouTube from '@mui/icons-material/YouTube';
import LinkedIn from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Container>
       
        <Grid container spacing={0}>
            <Grid item md={3}>
               <img id='logo' src={Logo}/>
            </Grid>
            <Grid item md={5}>
                <div className='Location'>
                  <ul>
                    <li>
                       <AddLocationAltIcon/>    <span>শাহিদ সাইফুল ইসলাম রোড, রাজবাড়ি কম্পাউন্ড, কুমিল্লা ৩৫০০</span>
                    </li>
                    <li>
                       <EmailIcon /><span>schoolofroboticscumilla@gmail.com</span>
                    </li>
                    <li>
                        <PermPhoneMsgIcon/>   <span>01784450546</span>
                    </li>
                  </ul>
                </div>
            </Grid>
            <Grid item md={4}>
            <div className='Social'>
                <h3>Follow us</h3>
                  <ul>
                    <li> <a href='https://web.facebook.com/schoolofroboticscumilla' target="_blank"> <Facebook/>  <span>Facebook</span> </a> </li>
                    <li> <Instagram/> <span>Instagram</span> </li>
                    <li> <LinkedIn/> <span>LinkedIn</span> </li>
                    <li> <YouTube/> <span>YouTube</span> </li>
                  </ul>
                  <p id="Imtiaz">Copyright © 2022 ||School of Robotics </p>
                </div>
            </Grid>
            
        </Grid>
        
    </Container>
  )
}

export default Footer