import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import "./styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Grid Principal del Footer */}
        <div className="footer-grid">
          {/* Columna 1: Marca y Bio */}
          <div className="footer-brand">
            <a href="/">
              José María <span>Cortés</span>
            </a>
            <p className="footer-description">
              Psicólogo autónomo especializado en terapia cognitivo-conductual,
              ayudando a individuos a superar desafíos emocionales y alcanzar un
              bienestar mental óptimo.
            </p>
            {/* Redes Sociales */}
            <div className="social-links">
              <SocialLink
                href="#"
                icon={<LinkedinIcon />}
                ariaLabel="LinkedIn"
              />
              <SocialLink href="#" icon={<TwitterIcon />} ariaLabel="Twitter" />
              <SocialLink href="#" icon={<GithubIcon />} ariaLabel="GitHub" />
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="footer-section">
            <h3>Navegación</h3>
            <ul className="footer-links">
              <FooterLink href="#inicio">Inicio</FooterLink>
              <FooterLink href="#sobre-mi">Sobre mí</FooterLink>
              <FooterLink href="#servicios">Servicios</FooterLink>
              <FooterLink href="#blog">Blog</FooterLink>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div className="footer-section">
            <h3>Especialidades</h3>
            <ul className="footer-links">
              <FooterLink href="#servicios">Terapia Individual</FooterLink>
              <FooterLink href="#servicios">Terapia de Pareja</FooterLink>
              <FooterLink href="#servicios">Manejo del Estrés</FooterLink>
              <FooterLink href="#servicios">Tratamiento de Ansiedad</FooterLink>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="footer-section">
            <h3>Contacto</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="mailto:contacto@josemariacortes.com"
                  className="footer-link"
                >
                  <Mail />
                  contacto@josemariacortes.com
                </a>
              </li>
              <li>
                <a href="tel:+34600000000" className="footer-link">
                  <Phone />
                  +34 600 000 000
                </a>
              </li>
              <li className="footer-link">
                <MapPin />
                <span>
                  Madrid, España
                  <br />
                  (Sesiones presenciales y online)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="footer-separator">
          <p className="footer-copyright">
            © {currentYear} José María Cortés. Todos los derechos reservados.
          </p>

          <div className="footer-legal">
            <a href="#privacidad">Política de Privacidad</a>
            <a href="#cookies">Política de Cookies</a>
            <a href="#aviso-legal">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Componente auxiliar para los enlaces del footer con efecto flecha
const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="footer-link">
      <ArrowRight />
      <span>{children}</span>
    </a>
  </li>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554V14.66c0-1.38-.027-3.156-1.922-3.156-1.924 0-2.219 1.5-2.219 3.053v5.895H9.197V9h3.415v1.561h.048c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.269 2.37 4.269 5.456v6.285ZM5.337 7.433c-1.144 0-2.07-.928-2.07-2.072 0-1.144.926-2.072 2.07-2.072 1.143 0 2.07.928 2.07 2.072 0 1.144-.927 2.072-2.07 2.072ZM6.119 20.452H4.554V9h1.565v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.205 24 24 23.227 24 22.271V1.729C24 .774 23.205 0 22.225 0Z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M23.954 4.569a10.02 10.02 0 0 1-2.825.775 4.937 4.937 0 0 0 2.163-2.723 9.864 9.864 0 0 1-3.127 1.195 4.924 4.924 0 0 0-8.388 4.482A13.978 13.978 0 0 1 1.671 3.149 4.822 4.822 0 0 0 3.195 9.723a4.902 4.902 0 0 1-2.229-.616v.062a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 4.935 4.935 0 0 0 4.604 3.417A9.868 9.868 0 0 1 0 19.54a13.941 13.941 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646a9.936 9.936 0 0 0 2.411-2.537Z" />
  </svg>
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.112.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.135-.305-.54-1.53.105-3.185 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.655.24 2.88.12 3.185.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.1.81 2.22 0 1.60-.015 2.88-.015 3.27 0 .32.21.695.825.575C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// Componente auxiliar para los botones de redes sociales
const SocialLink = ({ href, icon, ariaLabel }) => (
  <a
    href={href}
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
  >
    {icon}
  </a>
);

export default Footer;
