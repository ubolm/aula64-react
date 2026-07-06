import { Link } from "react-router-dom";

const socialLinks = [
  {
    label: "LinkedIn de Aula64",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/alejandro-daniel-uboldi-30512998",
    path: "M6.94 8.98H3.7V20h3.24V8.98ZM5.32 4A1.88 1.88 0 1 0 5.3 7.76 1.88 1.88 0 0 0 5.32 4Zm5.56 4.98H7.78V20h3.24v-5.46c0-1.44.27-2.84 2.06-2.84 1.76 0 1.78 1.65 1.78 2.93V20h3.24v-6.06c0-2.98-.64-5.27-4.12-5.27-1.67 0-2.79.92-3.25 1.79h-.05V8.98Z"
  },
  {
    label: "Instagram de Aula64",
    title: "Instagram",
    href: "https://www.instagram.com/aula64.ajedrez/",
    path: "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.4a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z"
  },
  {
    label: "Facebook de Aula64",
    title: "Facebook",
    href: "https://www.facebook.com/aula64alejandrouboldi?locale=es_LA",
    path: "M14 8.4V6.8c0-.78.18-1.2 1.4-1.2H17V2.2c-.78-.1-1.65-.2-2.45-.2-2.65 0-4.45 1.62-4.45 4.58V8.4H7.1V12h3v8h3.9v-8h2.95l.45-3.6H14Z"
  },
  {
    label: "YouTube de Aula64",
    title: "YouTube",
    href: "https://www.youtube.com/@aprendeajedrez64",
    path: "M21.58 7.19a2.72 2.72 0 0 0-1.92-1.92C17.96 4.8 12 4.8 12 4.8s-5.96 0-7.66.47a2.72 2.72 0 0 0-1.92 1.92A28.1 28.1 0 0 0 1.95 12s0 3.1.47 4.81a2.72 2.72 0 0 0 1.92 1.92c1.7.47 7.66.47 7.66.47s5.96 0 7.66-.47a2.72 2.72 0 0 0 1.92-1.92c.47-1.7.47-4.81.47-4.81s0-3.1-.47-4.81ZM10 15.4V8.6L15.9 12 10 15.4Z"
  }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="footer-logo" to="/" aria-label="Aula64 inicio">
            <img
              src="/img/logo-aula64-footer.webp"
              alt="Logo Aula64"
              onError={(event) => {
                event.currentTarget.src = "/img/logo-aula64.png";
              }}
            />
          </Link>
          <p className="footer-tagline">Ajedrez educativo para 5 a 8 años, adultos e instituciones.</p>
          <p className="footer-small">ChessCity es para niños y niñas de 5 a 8 años.</p>
        </div>

        <div className="footer-column">
          <h3>Explorar</h3>
          <Link to="/">Inicio</Link>
          <Link to="/chesscity">ChessCity</Link>
          <Link to="/clases">Clases</Link>
          <Link to="/sobre-nosotros">Sobre nosotros</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/condiciones-de-uso">Condiciones de uso</Link>
          <Link to="/politica-de-privacidad">Política de privacidad</Link>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contacto</h3>
          <a className="footer-email" href="mailto:profeale1914@gmail.com">profeale1914@gmail.com</a>
          <a
            className="footer-whatsapp"
            href="https://wa.me/5491168313769?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20clases%20de%20ajedrez%20en%20Aula64.%20Edad%3A%20%20Nivel%3A%20%20Objetivo%3A%20"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar por WhatsApp
          </a>

          <h3 className="social-title">Seguinos</h3>
          <div className="social-links" aria-label="Redes sociales de Aula64">
            {socialLinks.map((social) => (
              <a
                key={social.title}
                href={social.href}
                aria-label={social.label}
                title={social.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Aula64. Ajedrez educativo, tecnología y creatividad.</p>
        <p>Aprender ajedrez puede ser una aventura. Pensar mejor, también.</p>
      </div>
    </footer>
  );
}
