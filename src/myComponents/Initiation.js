import React from 'react'
import "./styles/Initiation.css";
import { Container } from '@mui/system';
import { Grid } from '@material-ui/core';
import IR from "./Img/4ir.png"; 
import 'animate.css';

function Initiation() {
  return (
    <div className='Initiation'>
       <Container>
          <h1 id='Initiation-text'>প্রারম্ভিকা</h1>
         <Grid container spacing={0}>
              <Grid item md={6}>
                 <div className='text-1 hover:shadow-2xl animate__animated animate__fadeInDownBig'>
                   <p>‘চতুর্থ শিপ্লবিপ্লবে বাংলাদেশ পিছিয়ে থাকবে না, বাংলাদেশ হবে একটি নেতৃত্বদানকারী দেশ’, মাননীয় প্রধানমন্ত্রীর এই দর্শনকে ধারণ করে ২০৪১ সালের 'উন্নত ও সমৃদ্ধ বাংলাদেশ’ গড়ার প্রত্যয়ে সুদক্ষ মানব সম্পদ তৈরি এবং শিক্ষার্থীদের বিজ্ঞান, তথ্য- প্রযুক্তি খাতে আগ্রহী করে তোলার কার্যক্রম গ্রহণ করা হয়।</p>
                 </div>
                 <div className='text-2 hover:shadow-2xl animate__animated animate__fadeInUp'>
                   <p>এ লক্ষ্যে জেলা প্রশাসন, কুমিল্লা শিক্ষার্থীদের দক্ষতা উন্নয়নের জন্য ‘স্কুল অব রোবটিক্স, কুমিল্লা’ নামক একটি প্রতিষ্ঠান স্থাপনের উদ্যোগ নেয়া হয়।</p>
                 </div>
              </Grid>
              <Grid item md={6}>
                 <img id='ir' src={IR} />
              </Grid>
         </Grid>

         <Grid container spacing={0}>
              <Grid item md={6}>
              
              </Grid>
              <Grid item md={6}>
             
              </Grid>
         </Grid>
       </Container>

    </div>
  )
}

export default Initiation