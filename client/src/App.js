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
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/web'

import Scene from './Scene'

function App() {
  const [{ background, fill }, set] = useSpring({ background: '#f0f0f0', fill: '#202020' }, [])
  return (

    <div className="App">
      {/* <ul class="background">
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
</ul> */}
      <Navbar />
      <a.main style={{ background }}>
      <Canvas className="canvas" dpr={[1, 2]}>
        <Scene setBg={set} />
        <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Canvas>

    </a.main>
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