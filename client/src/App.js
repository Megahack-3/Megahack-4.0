import './App.css';
import FAQ from './Components/FAQ/FAQ';
//import Landing from './Pages/Landing';
import Navbar from './Components/Navbar/Navbar';
import CountDowm from "./Components/CountDown/Countdown"
import CollegeMessage from "./Components/CollegeMEssage/CollegeMessage"
import HomePage from './Components/Home/HomePage';
import Prize from './Components/Prize/Prize';
<<<<<<< HEAD
import ContactUs from './Components/Contact Us/ContactUs';
import Footer from './Components/Footer/Footer';
=======
import Gallery from './Components/Gallery/Gallery';
import {BrowserRouter as Router,
Route,
Routes} from 'react-router-dom'
>>>>>>> 32dcd64fad70f727445affe2491a6f4cb1b74e76
function App() {
  return (
  
    <div className="App">
      {/*<Landing/>*/}
    <Router>
      <Navbar/>
<<<<<<< HEAD
      <HomePage/>
      <FAQ/>
      <CountDowm/>
      <CollegeMessage/>
      <Prize/>
      <ContactUs/>
      <Footer/>
=======
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
>>>>>>> 32dcd64fad70f727445affe2491a6f4cb1b74e76
    </div>
   
  );
}

export default App;