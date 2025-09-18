import "../css/ProcesoDesarrolloSoft.css";

export default function Inicio() {
  return (
    <div className="pds-container">
      {/* Barra de navegación */}
      <div className="navbar">
        <button className="nav-btn">← Procesos de Desarrollo. Soft</button>
        <button className="nav-btn">Gestion de Calidad. Soft</button>
        <button className="nav-btn">Recursos y Aprendizaje</button>
        <button className="nav-btn">Metodologia en detalle</button>
        <button className="nav-btn">Adicionales →</button>
      </div>
    
    <div className="caja-pds">
    {/* Contenido principal */}
      <div className="contenido">
        <h1>Ciclo de Vida del Desarrollo de Software</h1>
        <p>
          El <b>SDLC (Software Development Life Cycle)</b> describe las etapas
          que sigue un proyecto de software, desde la concepción de la idea
          hasta su mantenimiento en producción. Su objetivo es organizar y
          controlar el desarrollo para asegurar calidad y cumplimiento de
          requisitos.
        </p>

        <h2>Etapas principales:</h2>
        <ol className="lista-etapas">
          <li>
            <span className="rojo">Recolección de requisitos:</span> Análisis de
            lo que el cliente necesita.
          </li>
          <li>
            <span className="rojo">Diseño:</span> Definición de la arquitectura,
            modelos y especificaciones técnicas.
          </li>
          <li>
            <span className="rojo">Implementación (codificación):</span>{" "}
            Desarrollo del software según el diseño.
          </li>
          <li>
            <span className="rojo">Pruebas:</span> Validación del sistema para
            garantizar que funciona correctamente.
          </li>
          <li>
            <span className="rojo">Implementación/Despliegue:</span> Entrega y
            puesta en producción del software.
          </li>
          <li>
            <span className="rojo">Mantenimiento:</span> Corrección de errores,
            mejoras y adaptaciones futuras.
          </li>
        </ol>
      </div>
      <div className="cascada-container">
      {/* Texto descriptivo */}
      <div className="texto">
        <h1>Modelos tradicionales</h1>
        <p>
          Los modelos tradicionales se caracterizan por ser más estructurados y
          secuenciales, adecuados en contextos donde los requisitos son claros y
          poco cambiantes.
        </p>

        <h2>Modelo en cascada</h2>
        <ul>
          <li>
            <b>Características:</b> secuencia rígida de fases (requisitos →
            diseño → implementación → pruebas → despliegue → mantenimiento).
          </li>
          <li>
            <b>Ventajas:</b> simple, fácil de entender, adecuado para proyectos
            pequeños y bien definidos.
          </li>
          <li>
            <b>Desventajas:</b> poca flexibilidad, cambios tardíos son costosos.
          </li>
          <li>
            <b>Cuándo usarlo:</b> proyectos con requisitos estables.
          </li>
        </ul>
      </div>

      {/* Diagrama en cascada */}
      <div className="diagrama">
        <div className="etapa">Analisis</div>
        <div className="flecha">↓</div>
        <div className="etapa">Diseño</div>
        <div className="flecha">↓</div>
        <div className="etapa">Codificacion</div>
        <div className="flecha">↓</div>
        <div className="etapa grande">Validacion y Verificacion</div>
        <div className="flecha">↓</div>
        <div className="etapa">Implementacion</div>
        <div className="flecha">↓</div>
        <div className="etapa grande">Evolucion y Mantenimiento</div>
      </div>
    </div>
    </div>
    </div>
  );
}
