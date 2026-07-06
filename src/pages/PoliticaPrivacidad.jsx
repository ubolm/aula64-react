import { trackContactClick } from "../utils/analytics";

export default function PoliticaPrivacidad() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <span className="eyebrow">Aula64</span>
        <h1>Política de privacidad</h1>
        <p>
          Esta política explica qué datos puede recibir Aula64, para qué se usan
          y cómo podés solicitar su modificación o eliminación.
        </p>
        <p className="legal-date">Última actualización: junio de 2026</p>
      </section>

      <section className="legal-content">
        <div className="legal-note">
          <strong>Alcance de esta política:</strong> esta política se aplica al
          sitio web institucional de Aula64, a las consultas recibidas por los
          canales de contacto publicados y a la organización de clases,
          contenidos y comunicaciones educativas. Si en el futuro Aula64
          incorpora pagos online, cuentas de usuario, plataforma privada,
          formularios avanzados, newsletter o campañas publicitarias, esta
          política será actualizada para reflejar esos nuevos usos antes de su
          implementación o junto con ella.
        </div>

        <h2>1. Responsable del tratamiento de datos</h2>
        <p>
          El responsable de este sitio y de la propuesta Aula64 es Alejandro
          Uboldi. Para consultas relacionadas con privacidad, podés escribir a{" "}
          <a
            href="mailto:contacto@aula64.com.ar"
            onClick={() => trackContactClick("email", "privacy_responsible")}
          >
            contacto@aula64.com.ar
          </a>.
        </p>

        <h2>2. Datos que podemos recibir</h2>
        <p>
          Aula64 puede recibir datos cuando una persona escribe por WhatsApp o
          envía un correo electrónico.
        </p>
        <ul>
          <li>Nombre de la persona que consulta.</li>
          <li>Correo electrónico o número de WhatsApp.</li>
          <li>Edad aproximada del estudiante.</li>
          <li>Nivel de ajedrez.</li>
          <li>Objetivo de la clase.</li>
          <li>Disponibilidad horaria.</li>
          <li>Información necesaria para orientar la propuesta educativa.</li>
        </ul>

        <h2>3. Datos de menores de edad</h2>
        <p>
          ChessCity está dirigido a niños y niñas de 5 a 8 años. Para mayores de
          8 años, Aula64 puede orientar otros recorridos de aprendizaje. Toda
          consulta relacionada con menores de edad debe ser realizada por una
          madre, padre, tutor o adulto responsable.
        </p>
        <p>
          Aula64 solicita únicamente la información necesaria para organizar y
          orientar la clase.
        </p>

        <h2>4. Finalidad del uso de datos</h2>
        <p>Los datos se utilizan para:</p>
        <ul>
          <li>Responder consultas.</li>
          <li>Orientar sobre la propuesta más adecuada.</li>
          <li>Coordinar horarios y modalidad de clase.</li>
          <li>Realizar seguimiento educativo.</li>
          <li>Enviar materiales relacionados con la clase, cuando corresponda.</li>
          <li>Informar novedades de Aula64 vinculadas al proyecto.</li>
        </ul>

        <h2>5. Canales y servicios externos</h2>
        <p>
          La comunicación puede realizarse por WhatsApp, correo electrónico u
          otros medios acordados. Esos servicios tienen sus propias condiciones y
          políticas de privacidad.
        </p>

        <h2>6. Imágenes, videos y testimonios</h2>
        <p>
          Aula64 no publica imágenes, videos, nombres completos, testimonios
          identificables o datos de menores sin autorización previa del adulto
          responsable.
        </p>

        <h2>7. Conservación de datos</h2>
        <p>
          Los datos se conservarán durante el tiempo necesario para responder
          consultas, organizar clases y mantener una relación educativa o
          administrativa razonable.
        </p>

        <h2>8. Derechos de las personas</h2>
        <p>
          Podés solicitar acceso, rectificación, actualización o supresión de tus
          datos personales escribiendo a{" "}
          <a
            href="mailto:contacto@aula64.com.ar"
            onClick={() => trackContactClick("email", "privacy_rights")}
          >
            contacto@aula64.com.ar
          </a>.
        </p>

        <h2>9. Seguridad</h2>
        <p>
          Aula64 procura cuidar la información recibida y utilizarla únicamente
          para los fines educativos y de comunicación indicados en esta política.
        </p>

        <h2>10. Cambios en esta política</h2>
        <p>
          Aula64 puede actualizar esta política para reflejar cambios en el
          sitio, en los canales de comunicación, en los servicios ofrecidos o en
          la normativa aplicable. La versión vigente será siempre la publicada
          en esta página, con su fecha de última actualización.
        </p>
      </section>
    </main>
  );
}
