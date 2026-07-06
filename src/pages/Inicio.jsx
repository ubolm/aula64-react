import { Link } from "react-router-dom";

const benefits = [
  {
    title: "Clases claras",
    text: "Explicaciones simples, tablero visual y ejercicios guiados para entender antes de competir."
  },
  {
    title: "Para cada etapa",
    text: "ChessCity acompaña de 5 a 8 años. Para mayores de 8, adultos e instituciones, Aula64 propone otros recorridos."
  },
  {
    title: "Acompañamiento real",
    text: "El Maestro FIDE Alejandro Uboldi orienta el aprendizaje con experiencia y cercanía."
  }
];

const programs = [
  {
    label: "Infantil",
    title: "ChessCity",
    text: "Una aventura visual para que niños y niñas de 5 a 8 años aprendan jugando, pensando y resolviendo desafíos.",
    image: "/img/propuesta-ninos.webp",
    to: "/chesscity",
    link: "Conocer ChessCity"
  },
  {
    label: "Adultos",
    title: "Aprender sin presión",
    text: "Clases para empezar desde cero, retomar el juego o disfrutarlo como actividad inteligente.",
    image: "/img/propuesta-adultos.webp",
    to: "/clases",
    link: "Ver clases"
  },
  {
    label: "Mayores de 8",
    title: "Otros recorridos",
    text: "Clases con otro método para chicos y chicas mayores de 8 años, según edad, nivel y objetivo.",
    image: "/img/propuesta-jovenes.webp",
    to: "/clases",
    link: "Ver entrenamiento"
  }
];

const faqs = [
  {
    question: "¿Hace falta saber ajedrez para empezar?",
    answer: "No. Aula64 acompaña tanto a quienes empiezan desde cero como a quienes quieren mejorar."
  },
  {
    question: "¿Las clases son online?",
    answer: "Sí. Se realizan por Zoom con tablero digital, materiales visuales y ejercicios guiados."
  },
  {
    question: "¿Qué conviene contar al consultar?",
    answer: "Edad, nivel aproximado y objetivo: aprender, entrenar, jugar mejor o armar una propuesta institucional."
  }
];

export default function Inicio() {
  return (
    <main className="home-page">
      <section className="simple-hero">
        <div className="simple-hero-copy">
          <span className="eyebrow">Aula64</span>
          <h1>Ajedrez educativo, claro y personalizado.</h1>
          <p>
            ChessCity para niños y niñas de 5 a 8 años. Otros recorridos para
            mayores de 8, adultos e instituciones. Aprendé a mirar, pensar y
            decidir mejor con una guía cercana.
          </p>
          <div className="actions">
            <Link className="btn primary" to="/contacto">Consultar por clases</Link>
            <Link className="btn secondary" to="/chesscity">Ver ChessCity</Link>
          </div>
        </div>
        <div className="simple-hero-image">
          <img
            src="/img/inicio-hero-aula64-familia.webp"
            alt="Clase de ajedrez educativa Aula64"
          />
        </div>
      </section>

      <section className="simple-section">
        <div className="simple-section-heading">
          <span className="eyebrow">Por qué Aula64</span>
          <h2>Aprender ajedrez sin ruido.</h2>
          <p>
            Menos teoría suelta. Más comprensión, práctica guiada y confianza.
          </p>
        </div>
        <div className="simple-benefits">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="simple-card">
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="simple-feature">
        <div className="simple-feature-media">
          <img
            src="/img/chesscity-hero.webp"
            alt="ChessCity, aventura educativa de Aula64"
          />
        </div>
        <div className="simple-feature-copy">
          <span className="eyebrow">Para 5 a 8 años</span>
          <h2>ChessCity</h2>
          <p>
            La primera historia educativa de Aula64. Una aventura visual para
            que niños y niñas de 5 a 8 años aprendan ajedrez con misiones,
            personajes y desafíos progresivos.
          </p>
          <Link className="btn primary" to="/chesscity">Conocer ChessCity</Link>
        </div>
      </section>

      <section className="simple-section">
        <div className="simple-section-heading">
          <span className="eyebrow">Propuestas</span>
          <h2>Elegí el camino más adecuado.</h2>
        </div>
        <div className="simple-programs">
          {programs.map((program) => (
            <article key={program.title} className="program-summary">
              <img src={program.image} alt="" />
              <div>
                <span>{program.label}</span>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
                <Link to={program.to}>{program.link}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="simple-about">
        <div>
          <span className="eyebrow">Trayectoria</span>
          <h2>Más de 40 años enseñando ajedrez.</h2>
          <p>
            Aula64 nace de la experiencia del Maestro FIDE Alejandro Uboldi:
            formación de alumnos, entrenamiento, difusión educativa y clases
            pensadas para cada persona.
          </p>
          <Link className="btn secondary" to="/sobre-nosotros">Conocer más</Link>
        </div>
        <img
          src="/img/alejandro-uboldi-aula64.webp"
          alt="Maestro FIDE Alejandro Uboldi"
        />
      </section>

      <section className="simple-faq">
        <div className="simple-section-heading">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2>Dudas rápidas antes de empezar.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="simple-cta">
        <div>
          <span className="eyebrow">Empezar</span>
          <h2>Contanos edad, nivel y objetivo.</h2>
          <p>Con esos datos te orientamos hacia la propuesta más clara.</p>
        </div>
        <Link className="btn primary" to="/contacto">Consultar ahora</Link>
      </section>
    </main>
  );
}
