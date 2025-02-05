"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import { HomeIcon, WrenchIcon, EnvelopeIcon } from "@heroicons/react/24/outline"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedHamburgerButton } from "./HamburgerButton"

const CircularNavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="p-4 relative z-50">
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src="/logo-full-white.png" alt="Mi Sitio Logo" className="hidden lg:block h-8 pl-2" />
            <img src="/logo-white.png" alt="Mobile Logo" className="lg:hidden h-10 pl-2" />
          </Link>

          {/* Botón menú hamburguesa */}
          <div className="lg:hidden z-[60]">
            <AnimatedHamburgerButton 
              isOpen={isOpen} 
              toggle={() => setIsOpen(!isOpen)} 
              className="relative"
            />
          </div>

          {/* Menú desktop */}
          <div className="hidden lg:flex space-x-6 text-zinc-200">
            <NavLink href="/" icon={<HomeIcon className="h-5 w-5" />} text="Inicio" />
            <NavLink href="/services" icon={<WrenchIcon className="h-5 w-5" />} text="Servicios" />
            <NavLink href="/contact" icon={<EnvelopeIcon className="h-5 w-5" />} text="Contacto" />
          </div>
        </div>

        {/* Menú móvil con efecto circular */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ clipPath: 'circle(0% at 100% 0%)' }}
                animate={{ clipPath: isOpen ? 'circle(150% at 100% 0%)' : 'circle(0% at 100% 0%)' }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.32, 0, 0.67, 0],
                }}
                className="fixed top-0 right-0 w-full h-full bg-atlascoreDark z-40"
                onClick={closeMenu}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="fixed inset-0 flex items-center justify-center z-50"
              >
                <div 
                  className="flex flex-col space-y-8 text-zinc-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MobileNavLink href="/" icon={<HomeIcon className="h-7 w-7" />} text="Inicio" onClick={closeMenu} />
                  <MobileNavLink
                    href="/services"
                    icon={<WrenchIcon className="h-7 w-7" />}
                    text="Servicios"
                    onClick={closeMenu}
                  />
                  <MobileNavLink
                    href="/contact"
                    icon={<EnvelopeIcon className="h-7 w-7" />}
                    text="Contacto"
                    onClick={closeMenu}
                  />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

const NavLink: React.FC<{ href: string; icon: React.ReactNode; text: string }> = ({ href, icon, text }) => (
  <Link 
    to={href} 
    className="font-tech hover:text-[#e8e4e6] flex items-center gap-2 relative group transition-all duration-300"
  >
    {icon}
    <span className="transition-all duration-300 group-hover:translate-x-1">{text}</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e8e4e6] transition-all duration-500 group-hover:w-full ease-out-cubic"></span>
  </Link>
)

const MobileNavLink: React.FC<{ href: string; icon: React.ReactNode; text: string; onClick: () => void }> = ({
  href,
  icon,
  text,
  onClick,
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="text-white flex items-center gap-2"
  >
    <Link 
      to={href} 
      onClick={onClick} 
      className="flex items-center gap-2 hover:text-atlascorePrimario transition-colors duration-300"
    >
      <motion.span whileHover={{ scale: 1.1 }} className="inline-block">
        {icon}
      </motion.span>
      <span className="text-xl">{text}</span>
    </Link>
  </motion.div>
)

export default CircularNavMenu

