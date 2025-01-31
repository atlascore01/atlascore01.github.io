import "@fontsource/outfit/300.css";  // Light
import "@fontsource/outfit/400.css";  // Regular
import "@fontsource/outfit/500.css";  // Medium
import "@fontsource/outfit/600.css";  // SemiBold
import "@fontsource/outfit/700.css";  // Bold
import "@fontsource/inter/400.css";   // Para textos regulares
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from './components/Home2';
import Services from './components/Services';
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-poppins">
      <Router>
        <div className='min-h-screen bg-gradient-to-bl from-atlascorePrimario to-atlascoreSecundario '>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
