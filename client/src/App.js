import './App.css';
import FAQ from './Components/FAQ/FAQ';
import Navbar from './Components/Navbar/Navbar';
import CountDowm from "./Components/CountDown/Countdown"
import CollegeMessage from "./Components/CollegeMEssage/CollegeMessage"
import HomePage from './Components/Home/HomePage';
import Prize from './Components/Prize/Prize';
import ContactUs from './Components/Contact Us/ContactUs';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Event from './Components/Event/Event';
import Sponsor from './Components/Sponser/Sponser';
import Gallery from './Components/Gallery/Gallery';
function App() {
  return (

    <div className="App">
      <Navbar />
      <HomePage />
      <About />
      <CollegeMessage />
      <CountDowm />
      <Event/>
     
      <Gallery/>
      <Sponsor/>
      <FAQ />
      <Prize />
      <ContactUs />
      <Footer />
    </div>

  );
}

export default App;