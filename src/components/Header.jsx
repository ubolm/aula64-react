import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  const closeMenu = () => setOpen(false);

  const handleNavClick = (targetPath) => {
    closeMenu();

    if (pathname === targetPath) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!open) return undefined;

    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className="site-header" ref={headerRef}>
      <NavLink className="brand" to="/" aria-label="Aula64 inicio" onClick={() => handleNavClick("/")}>
        <img
          src="/img/logo-aula64-header-cropped.webp"
          alt="Logo Aula64"
          onError={(event) => {
            event.currentTarget.src = "/img/logo-aula64-header.png";
          }}
        />
      </NavLink>

      <button
        className={`menu-toggle ${open ? "is-open" : ""}`}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Menú principal">
        <NavLink to="/" onClick={() => handleNavClick("/")}>Inicio</NavLink>
        <NavLink to="/chesscity" onClick={() => handleNavClick("/chesscity")}>ChessCity</NavLink>
        <NavLink to="/clases" onClick={() => handleNavClick("/clases")}>Clases</NavLink>
        <NavLink to="/sobre-nosotros" onClick={() => handleNavClick("/sobre-nosotros")}>Sobre nosotros</NavLink>
        <NavLink to="/contacto" className="nav-cta" onClick={() => handleNavClick("/contacto")}>Contacto</NavLink>
      </nav>
    </header>
  );
}
