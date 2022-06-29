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
           </Routes>
   
    

   
    </div>
  );
}

export default App;