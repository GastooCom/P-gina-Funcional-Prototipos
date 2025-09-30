import React from 'react';
import '../css/GestionCalidadSoft.css';
import imagen6 from "../imagenes/imagen6.png";
import { useNavigate } from 'react-router-dom';

const GestionCalidadSoft = () => {
  const navigate = useNavigate();

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
    </div>
  );
};

export default GestionCalidadSoft;
