import { Link } from "react-router-dom";

const benefits = [
  {
    title: "Atención",
    text: "Mirar el tablero antes de actuar."
  },
  {
    title: "Decisiones",
    text: "Comparar opciones y elegir con calma."
  },
  {
    title: "Confianza",
    text: "Participar, probar y aprender sin miedo al error."
  }
];

const classSteps = [
  "Entrar en una escena visual",
  "Observar el tablero",
  "Resolver una misión guiada",
  "Reforzar la idea con ejercicios"
];

const fitList = [
  "Empieza ajedrez desde cero",
  "Aprende mejor con imágenes e historias",
  "Necesita confianza antes de competir",
  "Disfruta los desafíos y la participación"
];

export default function ChessCity() {
  return (
    <main className="chesscity-page chesscity-simple">
      <section className="cc-simple-hero">
        <div>
          <span className="eyebrow">ChessCity</span>
          <h1>Una aventura para aprender ajedrez.</h1>
          <p>
            ChessCity es la propuesta de Aula64 para que chicos y chicas entren
            al ajedrez con imágenes, historia, misiones y guía docente.
          </p>
          <div className="actions">
            <Link className="btn primary" to="/contacto">Consultar por ChessCity</Link>
            <a className="btn secondary" href="#como-funciona">Ver cómo funciona</a>
          </div>
        </div>
        <div className="cc-simple-hero-image">
          <img src="/img/chesscity-hero.webp" alt="ChessCity, aventura educativa de Aula64" />
        </div>
      </section>

      <section className="cc-simple-intro" id="como-funciona">
        <div>
          <span className="eyebrow">La idea</span>
          <h2>Aprender jugando, pero con método.</h2>
          <p>
            No se trata de jugar partidas sin rumbo. Cada escena se convierte en
            preguntas, decisiones y ejercicios sobre el tablero.
          </p>
        </div>
        <div className="cc-simple-note">
          <strong>La historia se descubre clase a clase.</strong>
          <span>La sorpresa ayuda a mantener curiosidad y ganas de avanzar.</span>
        </div>
      </section>

      <section className="cc-simple-section">
        <div className="cc-simple-heading">
          <span className="eyebrow">Qué desarrolla</span>
          <h2>Mientras juega, también aprende a pensar.</h2>
        </div>
        <div className="cc-benefit-simple-grid">
          {benefits.map((benefit) => (
            <article key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cc-class-simple">
        <div className="cc-class-image">
          <img
            src="/img/chesscity-profesor-guia-aventura.webp"
            alt="Profesor guiando una clase de ChessCity"
          />
          <div className="cc-class-caption">
            <strong>Profesor guía</strong>
            <span>La aventura se transforma en preguntas, decisiones y aprendizaje.</span>
          </div>
        </div>
        <div>
          <span className="eyebrow">La clase</span>
          <h2>La historia acompaña. El profesor guía.</h2>
          <p>
            El docente observa, pregunta y conecta cada misión con una idea real
            del ajedrez. La aventura despierta interés; la guía convierte ese
            interés en aprendizaje.
          </p>
          <ol>
            {classSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cc-fit-simple">
        <div>
          <span className="eyebrow">Para quién</span>
          <h2>Ideal para chicos que necesitan otra entrada al ajedrez.</h2>
          <p>
            ChessCity funciona especialmente bien cuando el aprendizaje necesita
            ser visual, participativo y paciente.
          </p>
        </div>
        <ul>
          {fitList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="cc-final-cta cc-final-simple">
        <div>
          <span className="eyebrow">Consulta</span>
          <h2>¿Querés que tu hijo o hija conozca ChessCity?</h2>
          <p>Contanos la edad, el nivel y qué objetivo tenés para sus clases.</p>
        </div>
        <Link className="btn primary" to="/contacto">Consultar por ChessCity</Link>
      </section>
    </main>
  );
}
