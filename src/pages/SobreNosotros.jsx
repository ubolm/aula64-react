import { Link } from "react-router-dom";

const values = [
  {
    title: "Claridad",
    text: "Explicar el ajedrez de forma simple, paso a paso."
  },
  {
    title: "Experiencia",
    text: "Más de 40 años enseñando a niños de 5 a 8 años, adultos e instituciones."
  },
  {
    title: "Tecnología",
    text: "Recursos visuales y digitales al servicio de la clase."
  }
];

const proof = [
  ["40+", "años enseñando ajedrez"],
  ["MF", "Maestro FIDE"],
  ["Aula64", "educación + creatividad"]
];

export default function SobreNosotros() {
  return (
    <main className="about-page about-simple">
      <section className="about-simple-hero">
        <div>
          <span className="eyebrow">Sobre nosotros</span>
          <h1>Experiencia docente, tecnología y creatividad.</h1>
          <p>
            Aula64 une la trayectoria del Maestro FIDE Alejandro Uboldi con
            recursos digitales pensados para enseñar ajedrez de una manera más
            clara, humana y participativa.
          </p>
          <div className="actions">
            <Link className="btn primary" to="/clases">Ver clases</Link>
            <Link className="btn secondary" to="/contacto">Contactar</Link>
          </div>
        </div>
        <div className="about-simple-hero-image">
          <img
            src="/img/sobre-nosotros-hero-main.webp"
            alt="Aula64 y ChessCity como proyecto educativo"
          />
        </div>
      </section>

      <section className="about-founder">
        <div className="about-founder-image">
          <img src="/img/alejandro-uboldi-aula64.webp" alt="Maestro FIDE Alejandro Uboldi" />
        </div>
        <div>
          <span className="eyebrow">Dirección docente</span>
          <h2>Alejandro Uboldi</h2>
          <p className="about-role">Maestro FIDE · Profesor de ajedrez · Creador de Aula64</p>
          <p>
            Con más de 40 años de experiencia enseñando ajedrez, Alejandro
            trabaja para que cada estudiante aprenda a mirar, pensar y decidir
            con confianza.
          </p>
          <div className="about-proof-grid" aria-label="Experiencia de Aula64">
            {proof.map(([number, label]) => (
              <article key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-tech">
        <div>
          <span className="eyebrow">Tecnología</span>
          <h2>Lucas Uboldi acompaña la parte digital.</h2>
          <p>
            Web, recursos visuales, organización de materiales y herramientas
            para que las clases online sean más claras, modernas y participativas.
          </p>
        </div>
        <div className="about-tech-image">
          <img
            src="/img/lucas-tecnologia-chesscity.webp"
            alt="Lucas Uboldi trabajando en tecnología para Aula64"
          />
        </div>
      </section>

      <section className="about-values">
        <div className="about-simple-heading">
          <span className="eyebrow">Nuestra mirada</span>
          <h2>Enseñar ajedrez es enseñar a pensar.</h2>
        </div>
        <div className="about-values-grid">
          {values.map((value) => (
            <article key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-chesscity-simple">
        <div>
          <span className="eyebrow">Primer universo educativo</span>
          <h2>ChessCity nace dentro de Aula64.</h2>
          <p>
            Es la primera historia educativa del proyecto: una propuesta visual
            para que niños y niñas de 5 a 8 años aprendan ajedrez con curiosidad
            y guía docente.
          </p>
        </div>
        <Link className="btn primary" to="/chesscity">Conocer ChessCity</Link>
      </section>

      <section className="about-final-simple">
        <div>
          <span className="eyebrow">Aula64</span>
          <h2>Una forma más clara de aprender ajedrez.</h2>
          <p>Contanos edad, nivel y objetivo. Te orientamos hacia el mejor camino.</p>
        </div>
        <Link className="btn primary" to="/contacto">Consultar por clases</Link>
      </section>
    </main>
  );
}
