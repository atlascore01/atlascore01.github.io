import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnderConstruction from "./components/UnderConstruction"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-gradient-to-bl from-atlascorePrimario to-atlascoreSecundario '>
        <Navbar />
        <Routes>
          <Route path="/" element={<UnderConstruction />} />
          <Route path="/services" element={<UnderConstruction />} />
          <Route path="/contact" element={<UnderConstruction />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
