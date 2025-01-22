import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnderConstruction from "./components/UnderConstruction"
import Navbar from "./components/Navbar"
import Home from './components/Home';

function App() {
  return (
    <div className="font-poppins">
      <Router>
        <div className='min-h-screen bg-gradient-to-bl from-atlascorePrimario to-atlascoreSecundario '>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<UnderConstruction />} />
            <Route path="/contact" element={<UnderConstruction />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
