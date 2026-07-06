import { trackContactClick } from "../utils/analytics";

const whatsappText = encodeURIComponent(
  "Hola, quiero información sobre clases de ajedrez en Aula64.\nEdad del estudiante:\nNivel aproximado:\nObjetivo:\nDisponibilidad horaria:"
);

const whatsappUrl = `https://wa.me/5491168313769?text=${whatsappText}`;

const contactReasons = [
  "ChessCity para 5 a 8 años",
  "Clases para mayores de 8",
  "Clases para adultos",
  "Talleres para instituciones"
];

const messageLines = [
  "Hola, quiero información sobre clases de ajedrez en Aula64.",
  "Edad del estudiante:",
  "Nivel aproximado:",
  "Objetivo:",
  "Disponibilidad horaria:"
];

export default function Contacto() {
  return (
    <main className="contact-page contact-simple">
      <section className="contact-simple-hero">
        <div>
          <span className="eyebrow">Contacto</span>
          <h1>Contanos edad, nivel y objetivo.</h1>
          <p>
            Con esos tres datos podemos orientarte hacia la propuesta más clara:
            ChessCity, clases para adultos, entrenamiento o talleres.
          </p>
          <div className="actions">
            <a
              className="btn primary"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactClick("whatsapp", "contact_hero")}
            >
              Escribir por WhatsApp
            </a>
            <a
              className="btn secondary"
              href="mailto:profeale1914@gmail.com"
              onClick={() => trackContactClick("email", "contact_hero")}
            >
              Escribir por email
            </a>
          </div>
          <p className="contact-response-note">
            Respondemos con una orientación breve para elegir modalidad, nivel y
            próximos pasos.
          </p>
        </div>

        <aside className="contact-direct-card" aria-label="Datos de contacto">
          <span>Contacto directo</span>
          <strong>+54 9 11 6831-3769</strong>
          <p>WhatsApp es el camino más simple para coordinar una primera consulta.</p>
          <a
            href="mailto:profeale1914@gmail.com"
            onClick={() => trackContactClick("email", "contact_card")}
          >
            profeale1914@gmail.com
          </a>
        </aside>
      </section>

      <section className="contact-simple-section">
        <div className="contact-simple-heading">
          <span className="eyebrow">Consultas</span>
          <h2>Podés escribir por cualquiera de estas propuestas.</h2>
        </div>
        <div className="contact-reasons-grid">
          {contactReasons.map((reason, index) => (
            <article key={reason}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{reason}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-message-simple">
        <div>
          <span className="eyebrow">Mensaje sugerido</span>
          <h2>Copiá esta estructura si querés ir directo.</h2>
          <p>
            No hace falta escribir mucho. Estos datos alcanzan para orientar la
            primera respuesta.
          </p>
        </div>
        <div className="contact-message-box">
          {messageLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <section className="contact-final-simple">
        <div>
          <span className="eyebrow">Aula64</span>
          <h2>Te ayudamos a elegir el mejor camino.</h2>
          <p>Escribinos y te respondemos con una orientación simple.</p>
        </div>
        <a
          className="btn primary"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContactClick("whatsapp", "contact_final")}
        >
          Consultar ahora
        </a>
      </section>
    </main>
  );
}
