import React from 'react';
import '../css/GestionCalidadSoft.css';
import imagen6 from "../imagenes/imagen6.png";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

const GestionCalidadSoft = () => {
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
    <div className="pds-container">
      {/* Barra de navegación */}
      <div className="navbar">
        <button className="nav-btn" onClick={() => navigate("/")}>← Inicio</button>
        <button className="nav-btn" onClick={() => navigate("/procesodesarrollosoft")}>Procesos de Desarrollo. Soft</button>
        <button className="nav-btn g" onClick={() => navigate("/gestioncalidadsoft")}>Gestion de Calidad. Soft</button>
        <button className="nav-btn" onClick={() => navigate("/recursosaprendizaje")}>Recursos y Aprendizaje</button>
        <button className="nav-btn">Metodologia en detalle</button>
        <button className="nav-btn">Adicionales →</button>
      </div>

    <div className="fundamentos-container">
  
      <div className="fundamentos-title">
        <h1>Fundamentos</h1>
      </div>

      <div className="fundamentos-content">
        {/* Sección izquierda */}
        <div className="fundamentos-div-left">
          <h2>Explicación:</h2>
          <ul>
            <li>
              <strong>Fundamentos:</strong> Los fundamentos de calidad en software se apoyan en normas internacionales como ISO/IEC 9126 y ISO/IEC 25000 (SQuaRE).
            </li>
          </ul>
          <h2>Estándares internacionales:</h2>
          <ul>
            <li>
              <strong>Calidad interna:</strong> Mide aspectos técnicos como arquitectura, código fuente, complejidad o seguridad.
            </li>
            <li>
              <strong>Calidad externa:</strong> Evalúa la experiencia del usuario final (rendimiento, usabilidad, confiabilidad).
            </li>
          </ul>
        </div>

        {/* Sección derecha */}
        <div className="fundamentos-columna-right">
        <div className="fundamentos-div-right">
          <h2>Calidad de Software</h2>
          <p>
            Grado en el que un sistema cumple con los requisitos funcionales y
            no funcionales, así como con las expectativas del usuario.
          </p>

          <h2>Métricas comunes</h2>
          <p>
            Densidad de defectos, cobertura de pruebas, MTBF (tiempo medio entre fallos).
             Esto permite un marco objetivo para evaluar si el software cumple con las expectativas y estándares definidos.
          </p>

        </div>
        <div className="imagen6">
          <img src={imagen6} alt="Imagen6" width={350}/>
        </div>
        </div>
      </div>
    </div>

    <div className="tecnicas-container">
      <div className="tecnicas-titulo">
          <h1>Técnicas de Aseguramiento de la Calidad</h1>
        </div>
      <div className="tecnicas-div-superior">
        <div className="tiposprueba">
          <h2>Tipos de prueba de Software</h2>
          <p><b>Se clasifican según el objetivo que persiguen:</b></p>

          <h3>1. Pruebas funcionales</h3>
          <ul>
            <li>Verifican que el sistema cumpla con los requisitos definidos.</li>
            <li><b>Ejemplos:</b> pruebas de unidad, integración, sistema, aceptación, regresión.</li>
          </ul>

          <h3>2. Pruebas no funcionales</h3>
          <ul>
            <li>Evalúan características como rendimiento, seguridad o usabilidad.</li>
            <li><b>Ejemplos:</b> pruebas de carga, estrés, escalabilidad, seguridad, compatibilidad.</li>
          </ul>

          <h3>3. Pruebas de mantenimiento</h3>
          <ul>
            <li>Se realizan después de cambios en el software.</li>
            <li><b>Ejemplos:</b> pruebas de regresión, pruebas de confirmación (retest).</li>
          </ul>
        </div>
        <div className="nivelesprueba">
          <h2>Niveles de Prueba</h2>
          <ul>
            <li><b>Pruebas unitarias</b><br/>Verifican cada componente de forma aislada.</li>
            <li><b>Pruebas de integración</b><br/>validan la interacción entre módulos</li>
            <li><b>Pruebas de sistema</b><br/>Comprueban el comportamiento global.</li>
            <li><b>Pruebas de aceptación</b><br/>Confirman que el producto cumple lo solicitado por el cliente.</li>
            <li><b>Pruebas de seguridad</b><br/>Evalúan vulnerabilidades frente a ataques..</li>
            <li><b>Automización</b><br/>Uso de frameworks como JUnit, Cypress, Selenium para acelerar y repetir pruebas automáticamente.</li>
          </ul>
        </div>
      </div>
      <div className="tenicas-div-inferior">
        <div className="cajascolores">
           <ol>
          <li>
            <b>Caja blanca (estructurales)</b>
            <ul>
              <li>Se centran en la lógica interna del código.</li>
              <li><b>Ejemplos:</b> cobertura de sentencias, cobertura de decisiones, caminos lógicos.</li>
            </ul>
          </li>

          <li>
            <b>Caja negra (funcionales)</b>
            <ul>
              <li>Se basan en las entradas y salidas sin mirar el código.</li>
              <li><b>Ejemplos:</b> partición de equivalencia, valores límite, tablas de decisión, pruebas de casos de uso.</li>
            </ul>
          </li>

          <li>
            <b>Caja gris (mixtas)</b>
            <ul>
              <li>Combinan elementos de caja blanca y negra.</li>
              <li>Útiles cuando el probador conoce parcialmente la estructura interna.</li>
            </ul>
          </li>
        </ol>
        </div>
      </div>
    </div>

    <div className="herramientas-container">
      <div className="herramientas-columna1">
        <div className="herramientas-div">
          <div className="herramientas-titulo">
            <h1>Herramientas de Calidad</h1>
          </div>
          <p>
            Aplicaciones o plataformas que apoyan a los equipos en la verificación,
            validación y mejora continua del producto.
          </p>
          <p>
            Su objetivo principal es detectar errores de forma temprana, garantizar la trazabilidad de defectos y medir la calidad del código para entregar software confiable y eficiente.
          </p>
        </div>
        <div className="herramientas-div2">
          <h2>Jira (Atlassian)</h2>
          <p>
            Herramienta líder en gestión de proyectos ágiles y seguimiento de defectos.
          </p>
          <p>
            Características principales:

            Creación de historias de usuario, incidencias y tareas.

            Flujos de trabajo personalizables.

            Reportes de métricas y paneles en tiempo real.

            Integración con GitHub, Confluence y CI/CD.
          </p>
        </div>
      </div>
      <div className="herramientas-columna2">
        <h2>Trello</h2>
          <p>
            Sistema visual basado en tableros Kanban.
          </p>
          <p>
            Características principales:
          </p>
          <p>
            Tableros con listas y tarjetas para organizar tareas
          </p>
          <p>
            Etiquetas, fechas de vencimiento y asignación de responsables.
          </p>
          <p>
            Integración con Slack, Google Drive y automatizaciones (Butler).
          </p>
          <p>
            Ideal para equipos pequeños o proyectos educativos.
          </p>
      </div>
      <div className="herramientas-columna3">
        <h2>Selenium</h2>
          <p>
            Framework de automatización de pruebas para aplicaciones web.
          </p>
          <p>
           Características principales:
          </p>
          <p>
            Permite simular interacciones de usuario (clics, formularios, navegación).
          </p>
          <p>
            Compatible con múltiples lenguajes (Java, Python, C#).
          </p>
          <p>
            Integración con navegadores (Chrome, Firefox, Edge).
          </p>
          <p>
            Escalable para pruebas en paralelo y regresión.
          </p>
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
};

export default GestionCalidadSoft;
