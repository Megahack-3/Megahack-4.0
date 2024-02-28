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
import Venue from './Components/Event/EventVenue';
import Sponsor from './Components/Sponser/Sponser';
import Gallery from './Components/Gallery/Gallery';
import Schedule from './Components/Event/Schedule';
import Speaker from './Components/Event/Speaker';



function App() {

  return (

    <div className="App">
      <Navbar />
      <HomePage />
      <About />
      <CollegeMessage />
      <CountDowm />
      <Schedule/>
      <Speaker/>
      <Prize />
      <Sponsor />
      <Gallery />
      <Venue />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>

  );
}

export default App;