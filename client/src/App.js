import './App.css';
import FAQ from './Components/FAQ/FAQ';
//import Landing from './Pages/Landing';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      {/*<Landing/>*/}
      <Navbar/>
      <FAQ/>
    </div>
  );
}

export default App;
