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
        <button className="nav-btn">Recursos y Aprendizaje</button>
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
          <h2>Estándares internacionales:</h2>
          <ul>
            <li>
              <strong>ISO/IEC 9126:</strong> define un modelo de calidad de
              software basado en características como funcionalidad,
              confiabilidad, usabilidad, eficiencia, mantenibilidad y
              portabilidad.
            </li>
            <li>
              <strong>ISO/IEC 25000 (SQuaRE):</strong> evolución de la ISO 9126,
              proporciona un marco más amplio para la evaluación de la calidad,
              estableciendo guías para medir tanto la calidad interna (código y
              diseño) como la calidad externa (experiencia del usuario).
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

          <h2>Métricas</h2>
          <p>
            Indicadores cuantitativos que permiten medir características como
            confiabilidad, mantenibilidad, eficiencia o usabilidad.
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
            <li><b>Pruebas de unidad</b><br/>Validan módulos o componentes individuales del código.</li>
            <li><b>Pruebas de integración</b><br/>Verifican que los módulos funcionen correctamente al interactuar entre sí.</li>
            <li><b>Pruebas de sistema</b><br/>Evalúan el software completo como un todo.</li>
            <li><b>Pruebas de aceptación</b><br/>Confirman si el sistema cumple los requisitos del cliente y está listo para usarse.</li>
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
          <h2>Herramientas de gestión de pruebas</h2>
          <p>
            Aplicaciones que permiten planificar, diseñar, ejecutar y documentar pruebas de software.
          </p>
          <p>
            Con ellas, los equipos pueden asegurar que las funcionalidades cumplen con los requisitos y que no se introducen errores en nuevas versiones.
          </p>
        </div>
      </div>
      <div className="herramientas-columna2">
        <h2>Seguimiento de defectos</h2>
          <p>
            Son sistemas que facilitan el registro, priorización, asignación y monitoreo de los defectos encontrados en el software.
          </p>
          <p>
            Ayudan a organizar el flujo de trabajo cuando aparecen bugs, evitando que queden sin resolver.
          </p>
          <p>
            <b>Ejemplo:</b> Jira → muy popular en entornos ágiles, permite gestionar defectos y tareas.
          </p>
      </div>
      <div className="herramientas-columna3">
        <h2>Análisis de calidad</h2>
          <p>
            Son programas que realizan un análisis estático o dinámico del código fuente, evaluando su estructura, seguridad y mantenibilidad.
          </p>
          <p>
            Se enfocan en la calidad técnica, reduciendo la deuda técnica y fomentando buenas prácticas.
          </p>
          <p>
            <b>Ejemplos:</b> SonarQube → analiza métricas como complejidad, duplicaciones y seguridad.
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
