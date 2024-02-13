import './App.css';
import FAQ from './Components/FAQ/FAQ';
//import Landing from './Pages/Landing';
import Navbar from './Components/Navbar/Navbar';
import CountDowm from "./Components/CountDown/Countdown"
import CollegeMessage from "./Components/CollegeMEssage/CollegeMessage"
import HomePage from './Components/Home/HomePage';
import Prize from './Components/Prize/Prize';
import ContactUs from './Components/Contact Us/ContactUs';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      {/*<Landing/>*/}
      <Navbar/>
      <HomePage/>
      <FAQ/>
      <CountDowm/>
      <CollegeMessage/>
      <Prize/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;