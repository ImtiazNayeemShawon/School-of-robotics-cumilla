import React from 'react'
import { Container } from '@mui/system';
import { Grid } from '@material-ui/core';
import "./styles/Target.css";

function Target() {
  return (
    <div className='Target'>
        <Container>
        <h1 id='target'>স্কুলের লক্ষ্য ও উদ্দেশ্য</h1>
          <Grid container> 
          <Grid item md={2}>
                 
              </Grid>
                <Grid item md={8}>
                  <div className='Text-1 animate__animated animate__fadeInDown'>
                        <p>১। শিক্ষার্থীদের রোবটিক্স, প্রোগ্রামিং, বেসিক কম্পিউটার ও ফ্রিল্যান্সিং সর্ম্পকে ধারণা প্রদানের মাধ্যমে সমৃদ্ধ বাংলাদেশ গঠনে অবদান রাখবে এমন দক্ষ জনবল তৈরি করা। </p>
                  </div>
                  <div className='Text-1 animate__animated animate__fadeInDown'>
                        <p>২। শিক্ষার্থীদের তথ্য ও যোগাযোগ প্রযুক্তি খাতে ক্ষুদ্র ও মাঝারি উদ্যোক্তা হিসেবে তৈরি করা। </p>
                  </div>
                  <div className='Text-1 animate__animated animate__fadeInDown'>
                        <p>৩। ফ্রিল্যান্সিং এর মাধ্যমে বেকারত্ব দূরীকরণ ও স্বনির্ভর স্বপ্নের সোনার বাংলা গড়া।  </p>
                  </div>
                </Grid>
            </Grid>
          

           

        </Container>
    </div>
  )
}

export default Target