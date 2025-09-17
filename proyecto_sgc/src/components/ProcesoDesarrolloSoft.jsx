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

    </div>
  );
}
