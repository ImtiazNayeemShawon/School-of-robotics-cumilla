import React, { useState }  from 'react';
import {Link} from "react-router-dom";
import icon from "./Img/Nav-icon.png";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [show,setShow] = useState(false);

  return (
    
     <nav>
      <div className='logo'>11</div>
      
            <ul className='nav-links' style={{ transform: open ? "translateX(0px)" : "" }}>
              <li>
                <Link  id='link' to="/">হোম</Link>
              </li>
              <li>
                <Link  onMouseOver={()=>setShow(!show)}  id='link' to="initiation">প্রারম্ভিকতা</Link>
              </li> 
                { 
              show && 
 
              <ul  id='Dp'> 
              <li><Link  id='link' to="background">পটভূমি</Link>
              </li>
              <li>
              
              <Link  id='link' to="target">লক্ষ্য</Link>
              </li>
              <li>
            
              <Link  id='link' to="purpose">উদ্দেশ্য</Link>
              </li>
              </ul>
              }


              <li>
                <Link id='link' to="course">কোর্স</Link>
              </li>
              <li>
                <Link id='link' to="teachers">শিক্ষকগণ</Link>
              </li>
              
            </ul>
               <i onClick={() => setOpen(!open)} className=' burger'><img src={icon} alt="nav icon" /></i>
     </nav>

  
  )
}

export default Navbar