import React from 'react'
import DCSir from "../Img/DC-sir.png";
import '../styles/teachers.css';
import { Button, Container } from '@mui/material';
import { EmailOutlined } from '@mui/icons-material';
import { PhoneOutlined } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { Grid } from '@mui/material';
function DC() {
  return (
    <Container>
        <Grid container  spacing={0}>
            <Grid item={4}>
            <div className='Profile-content hover:shadow-2xl ease-in duration-300'>
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

            <Grid item={4}>
            <div className='Profile-content hover:shadow-2xl ease-in duration-300'>
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

            <Grid item={4}>
            <div className='Profile-content hover:shadow-2xl ease-in duration-300'>
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

            <Grid item={4}>
            <div className='Profile-content hover:shadow-2xl ease-in duration-300'>
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

        </Grid>
       
    </Container>
  )
}

export default DC