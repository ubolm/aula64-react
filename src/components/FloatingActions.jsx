import { useEffect, useState } from "react";
import { trackContactClick } from "../utils/analytics";

const whatsappText = encodeURIComponent(
  "Hola, quiero informacion sobre clases de ajedrez en Aula64.",
);
const whatsappUrl = `https://wa.me/5491168313769?text=${whatsappText}`;

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="floating-actions" aria-label="Accesos rápidos">
      <a
        className="floating-action whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        onClick={() => trackContactClick("whatsapp", "floating_action")}
      >
        WA
      </a>
      <button
        className={`floating-action top ${showTop ? "is-visible" : ""}`}
        type="button"
        aria-label="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </div>
  );
}
