import React from "react";
import "./styles/Home.css";
import { Grid } from '@mui/material';
import Robot from './Img/main-bg.png';
import Brain from './Img/offer1.png';
import { Button } from "@mui/material";
import 'animate.css';
import CountUp from 'react-countup';
import Banner1 from './Img/baner.png';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AddchartSharpIcon from '@mui/icons-material/AddchartSharp';
import BusinessIcon from '@mui/icons-material/Business'; 
import CoPresentIcon from '@mui/icons-material/CoPresent';
import AspectRatioSharpIcon from '@mui/icons-material/AspectRatioSharp';
import CreditScoreSharpIcon from '@mui/icons-material/CreditScoreSharp';
import DC from './Img/DC.png';
import Logo from './Img/Logo-light.png';
export default function Home(){
  const student =  <CountUp end={4000} duration={35} />;
  const mentor = <CountUp end={20} duration={10}/>

    return(
<>
    <div className="Home-main">
        <Grid container spacing={0}>
            <Grid id="text" item md={4}>
            <img src={Logo} alt="Logo" className="Logo animate__animated animate__backInLeft animate__delay-0.5s "  id="school"/>
                 <h1>শেখার নতুন জগতে তোমায় স্বাগতম!</h1>
                 <h2>জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক এর বাহিরে নতুন  কিছু শিখার ও  নিজেকে দক্ষ নাগরিক হিসেবে  গড়ে তুলার জন্য স্মার্ট সল্যুশন!</h2>
                 <Button className="animate__animated animate__bounceInUp animate__slower" id="btn-admit" variant="contained"> এখনই ভর্তি হও</Button>
            </Grid>
            <Grid item md={6}>
           
                 <img id="Robot" src={Robot} alt="man" />
            </Grid>
        </Grid>
               
    <Grid container spacing={5}>
        <Grid item md={6}>
            <div className="Why-robotics animate__animated animate__fadeInDownBig animate__delay-1s" > 
                <h1 id="Why-robotics" >কেন রোবটিক্স এবং প্রোগ্রামিং শিখবেন?</h1>
                <h3>
                চতুর্থ শিল্প বিপ্লবের এ যুগে আমাদের ছেলেমেয়েদের রোবটিক্স, আইওটি, প্রোগ্রামিং প্রভৃতি বিষয়ে বিশেষ দক্ষতা অর্জন করা
                প্রয়োজন। বিশেষ করে স্কুল পর্যায়ে প্রোগ্রামিং, রোবটিক্স এ হাতেখড়ি দেয়া হলে তা শিশুদের চিন্তাশক্তি বিকাশে বিশেষ ভূমিকা
                রাখবে- বিশেষ করে তাদের যৌক্তিক মানুষ হিসেবে গড়ে তুলতে। চীন, কোরিয়া, সিঙ্গাপুর, মালয়েশিয়া, ইন্দোনেশিয়াসহ বিশ্বের বিভিন্ন
                দেশে স্কুল পর্যায়ে রোবটিক্স ক্লাব এর মাধ্যমে বাচ্চাদের হাতে-কলমে রোবট বানানোর কাজ শেখানো হয়।
                </h3>
            </div>
            </Grid>
            <Grid item md={6}>
                 <img id="banner-1" src={Banner1} alt="banner" />
            </Grid>
    </Grid>
    <h1 id="why-choose" >কেন কালেক্টরেট স্কুল অফ রোবটিক্স কুমিল্লা থেকে শিখবেন?</h1>
    <Grid className="res" container spacing={3}>
     
        <Grid id="reason" item md={4}>
            <div className="reasons  hover:shadow-2xl ease-in duration-300 hover:scale-105 ">
            <VolunteerActivismIcon sx={{ fontSize: 50 }}/> 
            <h2> Loved by {student}+ students</h2>
            </div>
           
        </Grid>

        <Grid id="reason" item md={4}>
           
            <div className="reasons  hover:shadow-2xl ease-in duration-300 hover:scale-105"> 
                    <AddchartSharpIcon sx={{ fontSize: 50 }}/>
                  <h2>  Project-Based Learning</h2>
            </div>
        </Grid>

        <Grid id="reason" item md={4}>
            
        <div className="reasons  hover:shadow-2xl ease-in duration-300 hover:scale-105">
                <BusinessIcon sx={{ fontSize: 50 }}/>
                 <h2>The first robotics school in BD</h2>
        </div>
        </Grid>
        <Grid id="reason  " item md={4}>
        <div className="reasons  hover:shadow-2xl ease-in duration-300 hover:scale-105"> 
              <CoPresentIcon sx={{ fontSize: 50 }}  />
            <h2>{mentor}+ Expert Mentors</h2>
        </div>
        </Grid>

        <Grid id="reason" item md={4}>
        <div className="reasons  hover:shadow-2xl ease-in duration-300 hover:scale-105"> 
              <AspectRatioSharpIcon sx={{ fontSize: 50 }}/>
            <h2>4 L learning system </h2>
        </div>
        </Grid>

        <Grid id="reason" item md={4}>
        <div className="reasons  hover:shadow-2xl ease-in duration-300 hover:scale-105"> 
             <CreditScoreSharpIcon sx={{ fontSize: 50 }}/>
            <h2>Goverment certification</h2>
        </div>
        </Grid>
    </Grid>
    <div className="Brain">
       <img id="Brain" src={Brain} alt="Brain" />
    
      </div>
    <Grid container spacing={5}>  
        <Grid item md={6}>
            <div className="dc-talk"> <h1 > জেলা প্রশাসকের ভিডিও বার্তা</h1>
              <img  src={DC} alt="DC sir" />
              </div>
            </Grid>
            <Grid item md={6}>
                <div className="Why-robotics-vdo">
                <iframe width="600" height="420" src="https://www.youtube.com/embed/i837h2sQSw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </Grid>
    </Grid>

   
    </div>
</>
    );
}