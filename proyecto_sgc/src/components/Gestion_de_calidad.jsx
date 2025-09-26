import React from 'react';
import '../css/Gestion_de_calidad.css';
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

      {/* Contenido */}
      <div className="fundamentos-container">
        <h1>Fundamentos:</h1>

        <div className="panel izquierdo">
          <h2>Estándares Internacionales</h2>
          <ul>
            <li>
              <strong>ISO/IEC 9126:</strong>
              <p>
                Define un modelo de calidad de software basado en características como funcionalidad, confiabilidad, usabilidad, eficiencia, mantenibilidad y portabilidad.
              </p>
            </li>
            <li>
              <strong>ISO/IEC 25000 (SQuaRE):</strong>
              <p>
                Evolución de la ISO 9126, proporciona un marco más amplio para la evaluación de la calidad, estableciendo guías para medir tanto la calidad interna (código y diseño) como la calidad externa (experiencia del usuario).
              </p>
            </li>
          </ul>
        </div>

        <div className="panel derecho">
          <ul>
            <li>
              <strong>Calidad del producto:</strong>
              <p>
                Grado en que el sistema cumple requisitos funcionales, no funcionales y expectativas del usuario.
              </p>
            </li>
            <li>
              <strong>Métricas:</strong>
              <p>
                Indicadores cuantitativos que permiten medir características como confiabilidad, mantenibilidad, eficiencia o usabilidad.
              </p>
            </li>
          </ul>
        </div>

        <h1 className="titulo principal">Técnicas de Aseguramiento de la Calidad</h1>

        {/* Tipos de Prueba */}
        <section className="section">
          <h2 className="titulo">Tipos de Prueba de Software</h2>
          <ul>
            <li>
              <strong>Pruebas funcionales:</strong> 
              <ul>
                <li>Verifican que el sistema cumpla con los requisitos definidos.</li>
                <li>Ejemplos: pruebas de unidad, integración, sistema, aceptación, regresión.</li>
              </ul>
            </li>
            <li>
              <strong>No funcionales:</strong> 
              <ul>
                <li>Evalúan caracteristicas como rendimiento, seguridad o usabilidad.</li>
                <li>Ejemplos: pruebas de carga, estrés, escalabilidad, seguridad, compatibilidad.</li>
              </ul>
            </li>
            <li>
              <strong>Pruebas de mantenimiento:</strong>
              <ul>
                <li>Se realizan después de cambios en el software</li>
                <li>Ejemplos: pruebas de regresión, pruebas de confirmación (retest)</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Niveles de Prueba */}
        <section className="section">
          <h2 className="titulo">Niveles de Prueba</h2>
          <ul>
            <li><strong>Pruebas de unidad:</strong> Validan módulos o componentes individuales del código.</li>
            <li><strong>Pruebas de integración:</strong> Verifican que los módulos funcionen correctamente al interactuar entre sí.</li>
            <li><strong>Pruebas del sistema:</strong> Evalúan el software completo como un todo.</li>
            <li><strong>Pruebas de aceptación:</strong> Confirman si el sistema cumple los requisitos del cliente y está listo para usarse.</li>
          </ul>
        </section>

        {/* Enfoques de Caja */}
        <section>
          <h2 className="titulo">Enfoques de Caja</h2>
          <ul>
            <li>
              <strong>Caja Blanca (estructurales):</strong> 
              <ul>
                <li>Se centran en la lógica interna del código.</li>
                <li>Ejemplos: cobertura de sentencias, cobertura de decisiones, caminos lógicos.</li>
              </ul>
            </li>
            <li>
              <strong>Caja Negra (funcionales):</strong>
              <ul>
                <li>Se basan en las entradas y salidas sin mirar el código.</li>
                <li>Ejemplos: partición de equivalencia, valores límite, tablas de decisión, pruebas de casos de uso.</li>
              </ul>
            </li>
            <li>
              <strong>Caja Gris (mixtas):</strong>
              <ul>
                <li>Combinan elementos de caja blanca y caja negra.</li>
                <li>Útiles cuando el probador conoce parcialmente la estructura interna.</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Bloques */}
        <div className="bloque desarrollo">
          <h2>Herramientas de calidad</h2>
          <p>Aplicaciones o plataformas que apoyan a los equipos en la verificación, validación y mejora continua del producto.</p>
          <p>Su objetivo principal es detectar errores de forma temprana, garantizar la trazabilidad de defectos y medir la calidad del código para entregar un software confiable y eficiente.</p>
        </div>

        <div className="bloque gestion">
          <h3>Herramientas de gestión de pruebas</h3>
          <p>Aplicaciones que permiten planificar, diseñar, ejecutar y documentar pruebas de software.</p>
          <p>Con ellas, los equipos pueden asegurar que las funcionalidades cumplen con los requisitos y que no se introducen errores en nuevas funciones.</p>
        </div>

        <div className="bloque recursos">
          <h2>Seguimiento de defectos</h2>
          <p>Son sistemas que facilitan el registro, priorización, asignación y monitoreo de los defectos encontrados en el software.</p>
          <p>Ayudan a organizar el flujo de trabajo cuando aparecen bugs, evitando que queden sin resolver.</p>
          <ul>
            <li>Ejemplo:</li>
            <li><strong>Jira:</strong> Muy popular en entornos ágiles, permite gestionar defectos y tareas.</li>
          </ul>
        </div>

        <div className="bloque metodologia">
          <h2>Análisis de calidad</h2>
          <p>Son programas que realizan un análisis estático o dinámico del código fuente, evaluando su estructura, seguridad y mantenibilidad.</p>
          <p>Se enfocan en la calidad técnica, reduciendo la deuda técnica y fomentando buenas prácticas.</p>
          <ul>
            <li>Ejemplo:</li>
            <li><strong>SonarQube:</strong> Analiza métricas como complejidad, duplicaciones y seguridad.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GestionCalidadSoft;
