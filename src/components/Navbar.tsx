import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, HomeIcon, WrenchIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-atlascoreDark p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white">
            <img src="/logo-full-white.png" alt="Mi Sitio Logo" className="h-8 pl-2" />
          </Link>
          
          {/* Botón menú hamburguesa */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          {/* Menú desktop */}
          <div className="hidden lg:flex space-x-6">
            <Link to="/" className="font-tech text-white hover:text-atlascoreSecundario flex items-center gap-2">
              <HomeIcon className="h-5 w-5" />
              <span>Inicio</span>
            </Link>
            <Link to="/services" className="font-tech text-white hover:text-atlascoreSecundario flex items-center gap-2">
              <WrenchIcon className="h-5 w-5" />
              <span>Servicios</span>
            </Link>
            <Link to="/contact" className="font-tech text-white hover:text-atlascoreSecundario flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5" />
              <span>Contacto</span>
            </Link>
          </div>
        </div>

        {/* Menú móvil */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-atlascoreSecundario flex items-center gap-2">
              <HomeIcon className="h-5 w-5" />
              <span>Inicio</span>
            </Link>
            <Link to="/services" className="text-white hover:text-atlascoreSecundario flex items-center gap-2">
              <WrenchIcon className="h-5 w-5" />
              <span>Servicios</span>
            </Link>
            <Link to="/contact" className="text-white hover:text-atlascoreSecundario flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5" />
              <span>Contacto</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
