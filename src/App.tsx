import "@fontsource/outfit/300.css";  // Light
import "@fontsource/outfit/400.css";  // Regular
import "@fontsource/outfit/500.css";  // Medium
import "@fontsource/outfit/600.css";  // SemiBold
import "@fontsource/outfit/700.css";  // Bold
import "@fontsource/inter/400.css";   // Para textos regulares
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceSection from './pages/Services';
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import About from "./pages/About";
import CircularNavMenu from "./components/CircularNavMenu";


function App() {
  return (
    <div className="font-poppins">
      <Router>
        <div className="min-h-screen bg-atlascoreDark/80">
          <CircularNavMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServiceSection />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App

