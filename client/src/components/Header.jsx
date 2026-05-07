import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./styles/Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efecto para detectar el scroll y cambiar el fondo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lista de enlaces de navegación (Fácilmente editables)
  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Servicios", href: "#servicios" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo / Nombre */}
        <a href="/" className="logo">
          José María <span>Cortés</span>
        </a>

        {/* Navegación de Escritorio */}
        <nav className="nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Botón Call to Action (Escritorio) */}
          <a href="#contacto" className="cta-button">
            Contactar
          </a>
        </nav>

        {/* Botón Menú Móvil */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-nav-link"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-cta-button"
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
