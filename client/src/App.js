import './App.css';
import FAQ from './Components/FAQ/FAQ';
//import Landing from './Pages/Landing';
import Navbar from './Components/Navbar/Navbar';
import CountDowm from "./Components/CountDown/Countdown"
import CollegeMessage from "./Components/CollegeMEssage/CollegeMessage"
import HomePage from './Components/Home/HomePage';
import Prize from './Components/Prize/Prize';
import Gallery from './Components/Gallery/Gallery';
import {BrowserRouter as Router,
Route,
Routes} from 'react-router-dom'
function App() {
  return (
  
    <div className="App">
      {/*<Landing/>*/}
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        {/* <Route path="/about" element={<About/>}/> */}
        <Route path="/collegemesage" element={<CollegeMessage/>}/>
        <Route path="/about" element={<CountDowm/>}/>
        {/* <Route path="/speaker" element={<Speaker/>}/> */}
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/sponsors" element={<HomePage/>}/>
        <Route path="/prize" element={<Prize/>}/>

        <Route path="/faqs" element={<FAQ/>}/>
        <Route path="/contact" element={<HomePage/>}/>
      



      

      
      </Routes>
      </Router>
    </div>
   
  );
}

export default App;