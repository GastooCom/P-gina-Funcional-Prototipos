import "../css/ProcesoDesarrolloSoft.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import modelov from "../imagenes/modeloenv.png";
import modeloincremental from "../imagenes/modeloincremental.png";
import agile from "../imagenes/metodologiaagile.png";
import scrum from "../imagenes/graficoscrum.png";

export default function ProcesoDesarrolloSoft() {
  const navigate = useNavigate();

  const [mostrarBoton, setMostrarBoton] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      if (window.scrollY > 300) {
        setMostrarBoton(true);
      } else {
        setMostrarBoton(false);
      }
    };

    window.addEventListener("scroll", manejarScroll);
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  const irArriba = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pds-container3">
      {/* Barra de navegación */}
      <div className="navbar">
        <button className="nav-btn" onClick={() => navigate("/")}>← Inicio</button>
        <button className="nav-btn p">Procesos de Desarrollo. Soft</button>
        <button className="nav-btn" onClick={() => navigate("/gestioncalidadsoft")}>Gestion de Calidad. Soft</button>
        <button className="nav-btn" onClick={() => navigate("/recursosaprendizaje")}>Recursos y Aprendizaje</button>
        <button className="nav-btn" onClick={() => navigate("/metodologiadetalle")}>Metodologia en detalle</button>
        <button className="nav-btn" onClick={() => navigate("/adicionales")}>Adicionales →</button>
      </div>
    
    <div className="caja-pds">
    {/* Contenido principal */}
      <div className="contenido">
        <h1>Ciclo de Vida del Desarrollo de Software</h1>
        <p>
          El Ciclo de Vida del Desarrollo de Software (SDLC) es un conjunto de etapas que guían la creación de un producto de software desde su concepción hasta su mantenimiento.
          Su propósito es organizar el trabajo, reducir riesgos y asegurar la calidad del producto final, proporcionando un marco claro para el equipo de desarrollo.
        </p>

        <h2>Etapas principales:</h2>
        <ol className="lista-etapas">
          <li>
            <span className="rojo">Recolección y análisis de requisitos:</span> 
            Comprensión profunda de las necesidades del cliente.
          </li>
          <li>
            <span className="rojo">Diseño:</span> Definición de la arquitectura,
            interfaces y componentes del sistema.
          </li>
          <li>
            <span className="rojo">Desarrollo o implementación:</span>{" "}
            Programación del código fuente y construcción de las funcionalidades.
          </li>
          <li>
            <span className="rojo">Pruebas:</span> 
            Verificación y validación para detectar defectos antes de la entrega.
          </li>
          <li>
            <span className="rojo">Despliegue:</span>
            Puesta en producción del software para su uso real.
          </li>
          <li>
            <span className="rojo">Mantenimiento:</span>
            Corrección de errores posteriores, actualizaciones y mejoras continuas.
            El SDLC permite aplicar modelos de gestión (como cascada, incremental o ágil) para adaptarse a diferentes tipos de proyectos y niveles de complejidad
          </li>
        </ol>
      </div>
      <div className="container-todos-modelos">
      <div className="cascada-container">
      {/* Texto descriptivo */}
      <div className="texto">
        <h1>Modelos tradicionales</h1>
        <p>
          Los Modelos Tradicionales del SDLC proporcionan un enfoque estructurado y secuencial para el desarrollo de software.
          Entre los más utilizados se encuentran:

        </p>

        <h2>Modelo en cascada</h2>
        <ul>
          <li>
            <b>Descripción:</b> Sigue una secuencia lineal de etapas (requisitos → diseño → desarrollo → pruebas → mantenimiento)..
          </li>
          <li>
            <b>Ventajas:</b> Claridad en cada fase, ideal para proyectos con requisitos bien definidos y sin cambios frecuentes.
          </li>
          <li>
            <b>Desventajas:</b> Poca flexibilidad ante cambios, errores detectados tarde pueden ser costosos.
          </li>
          <li>
            <b>Uso recomendado:</b> Proyectos gubernamentales, entornos regulados o sistemas críticos donde los requisitos son estables.
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

      <div className="modelos-container">
        <div className="modelov">
          <img src={modelov} alt="Modelo en V" width={700}/>
        </div>
      {/* Texto descriptivo */}
      <div className="texto">
        <h2>Modelo en V</h2>
        <ul>
          <li>
            <b>Descripción:</b> Extiende el modelo en cascada, enfatizando la verificación y validación en cada fase. Cada etapa de desarrollo tiene su prueba asociada.
          </li>
          <li>
            <b>Ventajas:</b> Detección temprana de errores, asegura calidad en proyectos críticos.
          </li>
          <li>
            <b>Desventajas:</b> Requiere alta planificación y documentación.
          </li>
          <li>
            <b>Uso recomendado:</b> Sistemas médicos, aeronáuticos o bancarios.
          </li>
        </ul>
      </div>
      </div>
    
      <div className="modelos-container2">
         <div className="texto">
        <h2>Modelo Incremental</h2>
        <ul>
          <li>
            <b>Descripción:</b> El software se construye en módulos funcionales que se entregan en varias iteraciones.
          </li>
          <li>
            <b>Ventajas:</b> Entrega temprana de partes utilizables, flexibilidad para incorporar cambios.
          </li>
          <li>
            <b>Desventajas:</b> Requiere una arquitectura bien planificada para integrar los incrementos.
          </li>
          <li>
            <b>Uso recomendado:</b> Aplicaciones comerciales, plataformas web en crecimiento.
          </li>
        </ul>
      </div>
      <div className="modeloincremental">
          <img src={modeloincremental} alt="Modelo Incremental" width={700}/>
        </div>
      </div>
      <div className="modelos-container3">
       <div className="texto">
        <h2>Modelo Iterativo</h2>
        <ul>
          <li>
            <b>Descripción:</b> : Se desarrollan versiones sucesivas del sistema, cada una más completa, permitiendo ajustes continuos.
          </li>
          <li>
            <b>Ventajas:</b> Permite retroalimentación temprana, reduce riesgos.
          </li>
          <li>
            <b>Desventajas:</b> Puede requerir más recursos y tiempo si los cambios son constantes.
          </li>
          <li>
            <b>Uso recomendado:</b> Proyectos donde los requisitos no están completamente definidos.
          </li>
        </ul> 
        </div>
      </div>
      
      </div>


    {/* ===================== */}
    {/* Metodologías Ágiles */}
    {/* ===================== */}
    <div className="metodologias-container">
      <div className="metodologias-box">
      {/* Título principal */}
      <div className="titulo-metodologias">
        <h1>Metodologías Ágiles</h1>
        <p>
          Las Metodologías Ágiles surgen como respuesta a la rigidez de los modelos tradicionales. Su objetivo es adaptarse al cambio, entregar valor de forma continua y fomentar la colaboración entre equipos y clientes.
        </p>
      </div>
        {/* SCRUM */}
        <div className="scrum">
          <h2>SCRUM</h2>
          <ul>
            <li><b>Principios:</b> Desarrollo iterativo e incremental en ciclos cortos llamados Sprints (1 a 4 semanas).</li>
            <li><b>Roles:</b> Product Owner (define prioridades), Scrum Master (facilita procesos) y Equipo de Desarrollo (construye el producto).</li>
            <li><b>Ceremonias:</b> Sprint Planning (planificación), Daily Scrum (reunión diaria), Sprint Review (revisión de resultados) y Retrospective (mejora del proceso).</li>
            <li><b>Artefactos:</b> Product Backlog (lista de requisitos), Sprint Backlog e Incremento (entregable funcional).</li>
          </ul>
        </div>
      </div>
        <div className="content-grid">
        {/* Imagen de gráfico */}
        <div className="scrumgrafico">
          <img src={scrum} alt="Scrum gráfico" width={500}/>
        </div>

        {/* XP */}
        <div className="xp">
          <h2>Extreme Programming (XP)</h2>
          <ul>
            <li><b>Principios:</b> simplicidad, comunicación...</li>
            <li><b>Prácticas destacadas:</b> Programación en parejas (pair programming), integración continua, desarrollo guiado por pruebas (TDD) y refactorización constante.</li>
            <li><b>Beneficios:</b> Calidad del código y satisfacción del cliente.</li>
          </ul>
        </div>

        {/* Kanban */}
        <div className="kanban">
          <h2>Kanban</h2>
          <ul>
            <li><b>Principios:</b> Gestión visual del flujo de trabajo mediante tableros con columnas (Por hacer → En progreso → Hecho).</li>
            <li><b>Prácticas clave:</b> Limitar el trabajo en progreso (WIP), mejorar el flujo de tareas y eliminar cuellos de botella</li>
            <li><b>Beneficio principal:</b> Flexibilidad para aceptar cambios en cualquier momento.</li>
          </ul>
        </div>
      </div>
       <div className="graficos">
        <div className="agile">
          <img src={agile} alt="Metodologia agile" width={700}/>
        </div>
  
        </div>
    </div>

     {/* Botón Scroll to Top */}
      {mostrarBoton && (
        <button className="btn-arriba" onClick={irArriba}>
          ⬆
        </button>
      )}
  </div>   
  );
}
