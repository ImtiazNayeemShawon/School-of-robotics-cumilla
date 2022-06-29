import React from "react";
import "./styles/Home.css";
import { Grid } from '@mui/material';
import Robot from './Img/main-bg.png';
import { Button } from "@mui/material";
import 'animate.css';
export default function Home(){
    return(
<>
    <div className="Home-main">
        <Grid container spacing={0}>
            <Grid id="text" item md={4}>
            <img  alt="Logo" className="Logo animate__animated animate__backInLeft animate__delay-0.5s "  id="school"/>
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
    </Grid>
    </div>
</>
    );
}