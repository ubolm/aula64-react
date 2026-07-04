import { Link } from "react-router-dom";

const audiences = [
  {
    label: "Niños",
    title: "ChessCity",
    text: "Una aventura visual para empezar ajedrez con entusiasmo, juego y desafíos guiados.",
    image: "/img/propuesta-ninos.webp",
    to: "/chesscity",
    link: "Conocer ChessCity"
  },
  {
    label: "Adultos",
    title: "Aprender o retomar",
    text: "Clases tranquilas para entender el juego desde cero o volver a jugar con claridad.",
    image: "/img/propuesta-adultos.webp",
    to: "/contacto",
    link: "Consultar"
  },
  {
    label: "Jugadores",
    title: "Mejorar con método",
    text: "Entrenamiento sobre partidas, cálculo, estrategia, aperturas y toma de decisiones.",
    image: "/img/propuesta-jovenes.webp",
    to: "/contacto",
    link: "Consultar entrenamiento"
  },
  {
    label: "Instituciones",
    title: "Talleres educativos",
    text: "Propuestas para escuelas, clubes y espacios culturales que quieren acercar el ajedrez.",
    image: "/img/propuesta-instituciones.webp",
    to: "/contacto",
    link: "Consultar taller"
  }
];

const steps = [
  {
    title: "Nos contás la situación",
    text: "Edad, nivel, experiencia previa y objetivo."
  },
  {
    title: "Te orientamos",
    text: "Elegimos la propuesta más adecuada dentro de Aula64."
  },
  {
    title: "Empezamos",
    text: "Clase online con tablero, explicación clara y práctica guiada."
  }
];

const formats = [
  "Clases online por Zoom",
  "Tablero digital y recursos visuales",
  "Ejercicios guiados",
  "Ritmo adaptado al estudiante"
];

export default function Clases() {
  return (
    <main className="classes-page classes-simple">
      <section className="classes-simple-hero">
        <div>
          <span className="eyebrow">Clases Aula64</span>
          <h1>Clases de ajedrez para aprender con claridad.</h1>
          <p>
            Para niños, jóvenes, adultos e instituciones. Primero entendemos el
            objetivo; después elegimos el camino más simple para avanzar.
          </p>
          <div className="actions">
            <Link className="btn primary" to="/contacto">Consultar por clases</Link>
            <a className="btn secondary" href="#propuestas">Ver propuestas</a>
          </div>
        </div>
        <div className="classes-simple-hero-image">
          <img src="/img/clases-hero-clean.webp" alt="Clase online de ajedrez en Aula64" />
          <div className="classes-hero-logo" aria-hidden="true">
            <img src="/img/logo-aula64-header-cropped.webp" alt="" />
          </div>
        </div>
      </section>

      <section className="classes-simple-section" id="propuestas">
        <div className="classes-simple-heading">
          <span className="eyebrow">Propuestas</span>
          <h2>Una clase para cada momento.</h2>
          <p>
            Aula64 se adapta a la edad, el nivel y el motivo por el que cada
            persona se acerca al ajedrez.
          </p>
        </div>
        <div className="classes-audience-grid">
          {audiences.map((audience) => (
            <article className="classes-audience-card" key={audience.title}>
              <img src={audience.image} alt="" />
              <div>
                <span>{audience.label}</span>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
                <Link to={audience.to}>{audience.link}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="classes-flow">
        <div className="classes-simple-heading">
          <span className="eyebrow">Cómo empezar</span>
          <h2>Sin vueltas.</h2>
        </div>
        <div className="classes-step-grid">
          {steps.map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="classes-format-simple">
        <div>
          <span className="eyebrow">Formato</span>
          <h2>Online, visual y personalizado.</h2>
          <p>
            Cada encuentro combina explicación, diálogo y práctica. La clase no
            se trata de memorizar: se trata de comprender qué está pasando en el
            tablero.
          </p>
          <Link className="btn secondary" to="/contacto">Consultar disponibilidad</Link>
        </div>
        <ul>
          {formats.map((format) => (
            <li key={format}>{format}</li>
          ))}
        </ul>
      </section>

      <section className="classes-trust-simple">
        <div>
          <span className="eyebrow">Experiencia</span>
          <h2>Guiadas por el Maestro FIDE Alejandro Uboldi.</h2>
          <p>
            Más de 40 años enseñando ajedrez a alumnos de distintas edades y
            niveles, con una mirada educativa, humana y práctica.
          </p>
        </div>
        <div className="classes-proof-grid" aria-label="Datos de experiencia">
          <article>
            <strong>40+</strong>
            <span>años enseñando</span>
          </article>
          <article>
            <strong>MF</strong>
            <span>Maestro FIDE</span>
          </article>
          <article>
            <strong>Aula64</strong>
            <span>método propio</span>
          </article>
        </div>
      </section>

      <section className="classes-final-cta classes-final-simple">
        <div>
          <span className="eyebrow">Consulta</span>
          <h2>Contanos edad, nivel y objetivo.</h2>
          <p>Con eso alcanza para orientarte hacia la propuesta adecuada.</p>
        </div>
        <Link className="btn primary" to="/contacto">Consultar ahora</Link>
      </section>
    </main>
  );
}
