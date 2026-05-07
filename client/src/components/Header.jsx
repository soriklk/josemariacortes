import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efecto para detectar el scroll y cambiar el fondo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lista de enlaces de navegación (Fácilmente editables)
  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo / Nombre */}
        <a 
          href="/" 
          className="text-2xl font-bold tracking-tight text-gray-900 transition-colors hover:text-blue-600"
        >
          José María <span className="text-blue-600 font-light">Cortés</span>
        </a>

        {/* Navegación de Escritorio */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Botón Call to Action (Escritorio) */}
          <a
            href="#contacto"
            className="px-5 py-2.5 text-sm font-medium text-white bg-gray-900 hover:bg-blue-600 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Contactar
          </a>
        </nav>

        {/* Botón Menú Móvil */}
        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-2 pb-1">
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center w-full px-5 py-3 text-base font-medium text-white bg-gray-900 hover:bg-blue-600 rounded-lg transition-colors"
            >
              Contactar
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;