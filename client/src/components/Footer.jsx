import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 py-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Grid Principal del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Marca y Bio */}
          <div className="space-y-6">
            <a href="/" className="text-2xl font-bold tracking-tight text-white transition-colors hover:text-blue-500">
              José María <span className="text-blue-500 font-light">Cortés</span>
            </a>
            <p className="text-sm leading-relaxed text-gray-400">
              Ayudo a empresas y profesionales a escalar sus negocios a través de soluciones tecnológicas modernas, eficientes y orientadas a resultados.
            </p>
            {/* Redes Sociales */}
            <div className="flex items-center space-x-4 pt-2">
              <SocialLink href="#" icon={<Linkedin size={20} />} ariaLabel="LinkedIn" />
              <SocialLink href="#" icon={<Twitter size={20} />} ariaLabel="Twitter" />
              <SocialLink href="#" icon={<Github size={20} />} ariaLabel="GitHub" />
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Navegación</h3>
            <ul className="space-y-4">
              <FooterLink href="#inicio">Inicio</FooterLink>
              <FooterLink href="#sobre-mi">Sobre mí</FooterLink>
              <FooterLink href="#servicios">Servicios</FooterLink>
              <FooterLink href="#portfolio">Casos de Éxito</FooterLink>
              <FooterLink href="#blog">Blog</FooterLink>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Especialidades</h3>
            <ul className="space-y-4">
              <FooterLink href="#servicios">Consultoría Estratégica</FooterLink>
              <FooterLink href="#servicios">Desarrollo Web a Medida</FooterLink>
              <FooterLink href="#servicios">Optimización SEO</FooterLink>
              <FooterLink href="#servicios">Transformación Digital</FooterLink>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-blue-500 mt-0.5" />
                <a href="mailto:hola@josemariacortes.com" className="text-sm">hola@josemariacortes.com</a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-blue-500 mt-0.5" />
                <a href="tel:+34600000000" className="text-sm">+34 600 000 000</a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                <span className="text-sm">Madrid, España <br/>(Disponible en remoto)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Separador */}
        <div className="border-t border-gray-800/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright (Se actualiza solo cada año) */}
          <p className="text-xs text-gray-500 text-center md:text-left">
            © {currentYear} José María Cortés. Todos los derechos reservados.
          </p>

          {/* Enlaces Legales */}
          <div className="flex space-x-6 text-xs text-gray-500">
            <a href="#privacidad" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#cookies" className="hover:text-white transition-colors">Política de Cookies</a>
            <a href="#aviso-legal" className="hover:text-white transition-colors">Aviso Legal</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

// Componente auxiliar para los enlaces del footer con efecto flecha
const FooterLink = ({ href, children }) => (
  <li>
    <a 
      href={href} 
      className="group flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-300"
    >
      <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 group-hover:text-blue-500 transition-all duration-300" />
      <span>{children}</span>
    </a>
  </li>
);

// Componente auxiliar para los botones de redes sociales
const SocialLink = ({ href, icon, ariaLabel }) => (
  <a
    href={href}
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 text-gray-400 hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
  >
    {icon}
  </a>
);

export default Footer;