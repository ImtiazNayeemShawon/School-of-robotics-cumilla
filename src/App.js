import './myComponents/styles/nav.css';
import Navbar from './myComponents/nav';
import Home from './myComponents/Home';
import Course from './myComponents/Course';
import Teachers from './myComponents/Teachers';
import { Routes,Route,}from "react-router-dom";
//import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (  
  <div> 
    
      <Navbar />
     
      
            <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/course" element={<Course />} />
                  <Route path="/teachers" element={<Teachers />} />
           </Routes>
   
    

   
    </div>
  );
}

export default App;