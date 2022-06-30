import './myComponents/styles/nav.css';
import Navbar from './myComponents/nav';
import Home from './myComponents/Home';
import Course from './myComponents/Course';
import Teachers from './myComponents/Teachers';
import { Routes,Route,}from "react-router-dom";
import Initiation from './myComponents/Initiation';
import Target from './myComponents/Target';
import Purpose from './myComponents/Purpose';
import Background from './myComponents/Background';
import Routine from './myComponents/Routine';
import Prospectus from './myComponents/Prospectus';
import Syllabus from './myComponents/Syllabus';
import Footer from './myComponents/Footer';
function App() {
  return (  
  <div> 
    
      <Navbar />
     
      
            <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/course" element={<Course />} />
                  <Route path="/teachers" element={<Teachers />} />
                  <Route path="/initiation" element={<Initiation />} />
                  <Route path="/purpose" element={<Purpose />} />
                  <Route path="/background" element={<Background />} />
                  <Route path="/target" element={<Target />} />
                  <Route path="/routine" element={<Routine />} />
                  <Route path="/propectus" element={<Prospectus />} />
                  <Route path="/syllabus" element={<Syllabus />} />
           </Routes>
   <Footer/>
    

   
    </div>
  );
}

export default App;