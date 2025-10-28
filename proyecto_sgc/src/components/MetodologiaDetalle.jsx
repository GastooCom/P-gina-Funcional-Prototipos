import React from "react";
import '../css/MetodologiaDetalle.css';
import { useNavigate, Link } from 'react-router-dom';
import mimagen from "../imagenes/mimagen.png";
import { useEffect, useState } from "react";

const MetodologiaDetalle = () => {
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
    
return(
   <div className="pds-container">
      {/* Barra de navegación */}
      <div className="navbar">
        <button className="nav-btn" onClick={() => navigate("/")}>← Inicio</button>
        <button className="nav-btn" onClick={() => navigate("/procesodesarrollosoft")}>Procesos de Desarrollo. Soft</button>
        <button className="nav-btn " onClick={() => navigate("/gestioncalidadsoft")}>Gestion de Calidad. Soft</button>
        <button className="nav-btn " onClick={() => navigate("/recursosaprendizaje")}>Recursos y Aprendizaje</button>
        <button className="nav-btn d" onClick={() => navigate("/metodologiadetalle")}>Metodologia en detalle</button>
        <button className="nav-btn" onClick={() => navigate("/adicionales")}>Adicionales →</button>
      </div>
    
    <div className="metodologia-container">
        <div className="m-caja">
            <div className="m-scrum">
                <h1>SCRUM</h1>
                <p>  Scrum es un marco de trabajo ágil diseñado para desarrollar productos de manera iterativa e incremental,
            favoreciendo la adaptación constante y la colaboración en equipo. Se basa en ciclos cortos llamados Sprints
            y en una serie de roles, eventos y artefactos que estructuran el trabajo.</p>
            </div>
            <div className="m-sprint">
                <h1>Sprints</h1>
                 <ul>
                    <li>Ciclos de trabajo de 1 a 4 semanas (generalmente 2 semanas).</li>
                    <li>
                    Cada Sprint inicia con una planificación (<em>Sprint Planning</em>) y finaliza con una revisión (
                    <em>Sprint Review</em>) y una retrospectiva (<em>Sprint Retrospective</em>).
                    </li>
                    <li>
                    <strong>Objetivo:</strong> entregar un incremento de producto funcional en cada iteración.
                    </li>
                </ul>
            </div>
        </div>
        <div className="m-roles">
            <h1>Roles en SCRUM</h1>
            <ul>
            <li>
              <strong>Product Owner (PO):</strong> responsable de maximizar el valor del producto. Define y prioriza el
              Product Backlog.
            </li>
            <li>
              <strong>Scrum Master (SM):</strong> facilita el proceso, elimina impedimentos y ayuda al equipo a aplicar
              Scrum correctamente.
            </li>
            <li>
              <strong>Equipo de Desarrollo (Developers):</strong> grupo multidisciplinario que se encarga de construir el
              producto durante cada Sprint.
            </li>
          </ul>
        </div>
    </div>
    <div className="metodologia2-container">
        <div className="m-columna1">
            <div className="m-backlog">
                <h2>Backlogs</h2>
                <ul>
                    <li>
                    <strong>Product Backlog:</strong> lista priorizada de requisitos y mejoras del producto, gestionada por el PO.
                    </li>
                    <li>
                    <strong>Sprint Backlog:</strong> conjunto de elementos seleccionados del Product Backlog que se implementarán en el Sprint.
                    </li>
                </ul>
            </div>
            <div className="m-kanban">
                <h2>Kanban</h2>
                <p>
                    Kanban es una metodología ágil enfocada en la gestión visual de procesos de trabajo. Su objetivo es mejorar el flujo de tareas, optimizar la productividad y permitir que los equipos se adapten de manera flexible a cambios.
                </p>
                <p>
                    Se basa en el uso de un tablero visual donde las tareas se representan con tarjetas que se mueven a través de distintas etapas del flujo de trabajo.
                </p>
            </div>
        </div>
        <div className="m-columna2">
            <div className="m-eventos">
                <h2>Eventos</h2>
                <ul>
                    <li>
                    <strong>Daily Scrum:</strong> reunión breve (máx. 15 min) donde el equipo sincroniza actividades, responde a:
                    <ul>
                        <li>¿Qué hice ayer?</li>
                        <li>¿Qué haré hoy?</li>
                        <li>¿Qué impedimentos tengo?</li>
                    </ul>
                    </li>
                    <li>
                    <strong>Sprint Review:</strong> al final del Sprint, el equipo presenta el incremento a los interesados y recibe feedback.
                    </li>
                    <li>
                    <strong>Sprint Retrospective:</strong> reunión interna del equipo para reflexionar sobre el Sprint y definir mejoras en el proceso.
                    </li>
                </ul>
            </div>
            <div className="m-principios">
                <h2>Principios básicos de Kanban</h2>
                <ul>
                    <li>
                    <strong>Visualizar el flujo de trabajo:</strong> usar un tablero con columnas para representar etapas (Ej: Por hacer → En progreso → Hecho).
                    </li>
                    <li>
                    <strong>Limitar el trabajo en progreso (WIP):</strong> establecer un número máximo de tareas por columna para evitar sobrecarga.
                    </li>
                    <li>
                    <strong>Gestionar el flujo:</strong> monitorear el avance de las tareas y resolver cuellos de botella.
                    </li>
                    <li>
                    <strong>Mejora continua:</strong> ajustar procesos de manera incremental según las métricas y feedback del equipo.
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="metodologia3-container">
        <div className="m-elementos">
            <h2>Elementos principales del tablero Kanban</h2>
             <p>
                <strong>2.</strong> Elementos principales del tablero Kanban
            </p>
            <ul>
                <li>
                <strong>Columnas:</strong> representan estados del proceso (ejemplo: To Do, Doing, Done).
                </li>
                <li>
                <strong>Tarjetas:</strong> cada tarjeta representa una tarea o trabajo a realizar.
                </li>
                <li>
                <strong>Límites WIP:</strong> número máximo de tareas en una columna.
                </li>
                <li>
                <strong>Swimlanes (opcional):</strong> filas horizontales para clasificar tareas por prioridad, responsable o tipo de trabajo.
                </li>
            </ul>
        </div>
        <div className="m-caja2">
            <div className="m-beneficios">
                <h2>Beneficios</h2>
                <ul>
                <li>Mayor transparencia del estado del trabajo.</li>
                <li>Flexibilidad para aceptar cambios en cualquier momento.</li>
                <li>Mejor detección de cuellos de botella.</li>
                <li>Promueve la colaboración y autoorganización del equipo.</li>
                </ul>
            </div>
            <div className="m-imagen">
                <div className="mimagen1"><img src={mimagen} alt="Imagen" width={350}/></div>
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
 )
}

export default MetodologiaDetalle;