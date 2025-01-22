import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-atlascoreDark p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white">
          <img src="/logo-white.png" alt="Mi Sitio Logo" className="h-8 pl-10" />
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Inicio
          </Link>
          <Link to="/services" className="text-white hover:text-gray-300">
            Servicios
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
}
