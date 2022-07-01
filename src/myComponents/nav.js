import React, { useState }  from 'react';
import {Link} from "react-router-dom";
import icon from "./Img/Nav-icon.png";
import Logo from './Img/logo.png';



function Navbar() {
    const [open, setOpen] = useState(false);
    const [show1, setShow1]= useState (false);
  return (
    
     <nav>
      <img  src={Logo} alt="Logo" className="logo animate__animated animate__backInLeft animate__delay-0.5s "  id="school"/>
      
            <ul className='nav-links' style={{ transform: open ? "translateX(0px)" : "" }}>
              <li>
                <Link  id='link' to="/">হোম</Link>
              </li>
              <li>
                <Link  id='link' to="initiation">প্রারম্ভিকতা</Link>
              </li>  
              <li><Link  id='link' to="background">পটভূমি</Link>
              </li>
              <li>
              
              <Link  id='link' to="target">লক্ষ্য ও উদ্দেশ্য</Link>
              </li>
              <li>
                <Link id='link' to="teachers">শিক্ষকগণ</Link>
              </li>
              <li>
                <Link  onMouseOver={()=>setShow1(!show1)} id='link' to="course">কোর্স</Link>
              </li>
       {
         show1 &&
      
              <ul  id='Dp1'>  
              <li><Link  id='link' to="propectus">প্রসপেক্টাস</Link>
              </li>
              <li>
              
              <Link  id='link' to="syllabus">সিলেবাস</Link>
              </li>
              <li>
            
              <Link  id='link' to="routine">রুটিন</Link>
              </li>
              </ul>
               }
              
            </ul>
               <i onClick={() => setOpen(!open)} className=' burger'><img src={icon} alt="nav icon" /></i>
     </nav>

  
  )
}

export default Navbar