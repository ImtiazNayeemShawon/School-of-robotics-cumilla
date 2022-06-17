import React, { useState }  from 'react'
//import {BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom"
import icon from "./Img/Nav-icon.png"

function Navbar() {
    const [open, setOpen] = useState(false);
  return (
    //<Router>
     <nav>
      <div className='logo'>Logo</div>
      
            <ul className='nav-links' style={{ transform: open ? "translateX(0px)" : "" }}>
              <li>
                <Link  id='link' to="/">হোম</Link>
              </li>
              <li>
                <Link id='link' to="course">কোর্স</Link>
              </li>
              <li>
                <Link id='link' to="teachers">শিক্ষকগণ</Link>
              </li>
            </ul>
               <i onClick={() => setOpen(!open)} className=' burger'><img src={icon} alt="nav icon" /></i>
     </nav>
 // </Router>
  
  )
}

export default Navbar