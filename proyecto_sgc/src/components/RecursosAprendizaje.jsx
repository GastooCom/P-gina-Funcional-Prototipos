import React from "react";
import '../css/RecursosAprendizaje.css';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import imagen7 from "../imagenes/imagen7.png";
import imagen8 from "../imagenes/imagen8.png";
import imagen9 from "../imagenes/imagen9.png";

const RecursosAprendizaje = () => {
  const navigate = useNavigate();


  const terms = [
    { term: "Calidad de software", definition: " Grado en que un sistema cumple con requisitos y expectativas." },
    { term: "Métrica", definition: "Valor numérico que mide atributos de calidad." },
    { term: "Defecto", definition: "Error en el software que produce un resultado inesperado." },
    { term: "Prueba unitaria", definition: "Validación de un módulo o función individual." },
    { term: "Prueba de integración", definition: "Verificación de interacción entre componentes." },
    { term: "Prueba de aceptación", definition: "Validación final del software frente al cliente." },
    { term: "ISO 25000", definition: "Estándar internacional de medición de calidad." },
    { term: "MTBF", definition: "Tiempo promedio entre fallos." },
    { term: "Automatización", definition: "Ejecución automática de pruebas con herramientas." },
    { term: "Backlog", definition: "Lista priorizada de requisitos o tareas en proyectos ágiles." },
    { term: "Scrum", definition: "Marco de trabajo ágil basado en iteraciones cortas." },
    { term: "Kanban", definition: "Método de gestión visual de tareas mediantte tableros." },
    { term: "Defect density (densidad de defectos)", definition: "Número de errores por cada mil líneas de código." },
    { term: "CI/CD", definition: "Integración y entrega continua." },
    { term: "Refactorización", definition: "Mejora del código sin alterar su funcionalidad" },
  ];

  const [search, setSearch] = useState("");

  // Filtrado dinámico
  const filteredTerms = terms
    .filter((item) =>
      item.term.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.term.localeCompare(b.term)); // Orden alfabético

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
        <button className="nav-btn r" onClick={() => navigate("/recursosaprendizaje")}>Recursos y Aprendizaje</button>
        <button className="nav-btn">Metodologia en detalle</button>
        <button className="nav-btn">Adicionales →</button>
      </div>

    <div className="glosario-container">
        <div className="glosario-title">
            <h1>Glosario</h1>
        </div>
        <div className="glosario-content"></div>

    {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar término..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="glossary-search"
      />

      {/* Listado */}
      <ul className="glossary-list">
        {filteredTerms.length > 0 ? (
          filteredTerms.map((item, index) => (
            <li key={index} className="glossary-item">
              <strong className="glossary-term">{item.term}:</strong> {item.definition}
            </li>
          ))
        ) : (
          <p className="glossary-no-results">No se encontraron resultados.</p>
        )}
      </ul>

      <h2>Preguntas Frecuentes</h2>

      <ol className="preguntas-frecuentes">
        <li>
          <strong>¿Qué es la calidad de software?</strong>
          <p>
            Es el grado en que un producto cumple con los requisitos funcionales y no funcionales,
             asegurando confiabilidad, usabilidad, eficiencia y satisfacción del usuario.
          </p>
        </li>

        <li>
          <strong>¿Cuál es la diferencia entre calidad interna y externa?</strong>
          <ul>
            <li>
            <strong>Interna:</strong> se centra en aspectos técnicos como código, mantenibilidad y arquitectura.
            </li>
            <li>
          <strong>Externa:</strong> se percibe en la experiencia del usuario: facilidad de uso, rapidez, seguridad y estabilidad.
          </li>
          </ul>
        </li>

        <li>
          <strong>
            ¿Qué normas y modelos se utilizan para evaluar la calidad?
          </strong>
          <p>
            La más reconocida es ISO/IEC 25000 (SQuaRE). También se aplican métricas como MTBF (Mean Time Between Failures) para medir confiabilidad.
          </p>
        </li>

        <li>
          <strong>¿Qué es el SDLC?</strong>
          <p>
            El Ciclo de Vida del Desarrollo de Software (SDLC) describe las etapas del desarrollo: análisis, diseño, implementación, pruebas, despliegue y mantenimiento.
          </p>
        </li>

        <li>
          <strong>¿Cuál es la importancia de los modelos tradicionales (Cascada, V, Incremental e Iterativo)?</strong>
          <ul>
            <li>
            <strong>Cascada:</strong> Ordenado y secuencial, bueno para proyectos con requisitos claros.
            </li>
            <li>
            <strong>Modelo en V:</strong> Añade verificación y validación en paralelo.
            </li>
            <li>
            <strong>Incremental/Iterativo</strong> Permiten entregas parciales, feedback temprano y flexibilidad.
            </li>
          </ul>
        </li>

        <li>
          <strong>¿Qué diferencia hay entre Scrum y Kanban?</strong>
          <ul>
            <li>
            <strong>Scrum:</strong> Estructura en ciclos cortos, entregables definidos.
            </li>
            <li>
          <strong>Kanban</strong> Flujo continuo, visualización del trabajo en tableros.
          </li>
          </ul>
        </li>

        <li>
          <strong>
            ¿Qué es XP (Extreme Programming)?
          </strong>
          <p>
            Metodología que promueve TDD (Test Driven Development), programación en parejas, integración continua y refactorización.
          </p>
        </li>

        <li>
          <strong>
            ¿Qué características tiene Trello?
          </strong>
          <p>
            Es un tablero visual con tarjetas, ideal para aplicar Kanban en proyectos simples o personales.
          </p>
        </li>

        <li>
          <strong>¿Qué es V&V en pruebas?</strong>
          <ul>
            <li>
            <strong>Verificación:</strong> Se construyó correctamente el software?
            </li>
            <li>
          <strong>Validación:</strong> ¿Se construyó el software correcto según lo que quería el cliente?
          </li>
          </ul>
        </li>

        <li>
          <strong>¿Dónde puedo aprender más sobre gestión de calidad de software?</strong>
          <ul>
            <li>
            <strong>Sitios web:</strong> IEEE, ISTQB, ISO.org.
            </li>
            <li>
          <strong>Herramientas:</strong> Jira, Trello, SonarQube, Selenium.
          </li>
           <li>
          <strong>Cursos online:</strong> Coursera, Udemy, edX.
          </li>
          </ul>
        </li>
      </ol>
    </div>

    <div className="enlaces-interes">
        <div className="enlaces-interes-title">
            <div className="icon-enlace"><img src={imagen7} alt="Imagen" width={150}/></div>
            <h1>Enlaces de interes</h1>
            <div className="icon-enlace2"><img src={imagen7} alt="Imagen" width={150}/></div>
        </div>
        <div className="enlaces-interes-desc">
            <p>Ingresa a nuestros enlaces para encontrar recursos internos, libros y
            organizaciones relevantes.</p>
        </div>

        <div className="enlaces-interes-div">
            <div className="enlaces-col1">
                <h2>Organizaciones y estandares</h2>
                <nav>
                <ul>
                    <li>
                    <Link to="https://www.iso.org/es/gestion-calidad/software">La fuerza del software de gestión de calidad (ISO)</Link>
                    </li>
                    <li>
                    <Link to="https://www.softwaredoit.es/gestion-de-calidad/index.html">Software de gestión de calidad (QMS)</Link>
                    </li>
                    <li>
                    <Link to="https://safetyculture.com/es/aplicaciones/sistema-de-gestion-de-calidad">Software de gestión de calidad (SGC)</Link>
                    </li>
                </ul>
                </nav>
            </div>
            <div className="enlaces-col2">
                <h2>Recursos educativos</h2>
                <nav>
                <ul>
                    <li>
                    <Link to="https://www.3digits.es/blog/gestion-de-la-calidad-en-el-desarrollo-de-software.html">Gestión de la calidad en el desaarrollo de software</Link> 
                    </li>
                    <li>
                    <Link to="https://qalified.com/es/blog/software-qa-testing-herramientas/">Las 10 mejores herramientas de testing de software</Link> 
                    </li>
                    <li>
                    <Link to="https://www.hiberus.com/crecemos-contigo/las-mejores-herramientas-para-cada-tipo-de-testing/">Las mejores herramientas para cada tipo de testing</Link> 
                    </li>
                    <li>
                    <Link to="https://blog.softexpert.com/es/mejores-softwares-para-gestion-de-calidad/">Los 8 mejores softwares para gestión de calidad en 2025</Link> 
                    </li>
                    <li>
                    <Link to="https://kinsta.com/es/blog/herramientas-pruebas-rendimiento/">Las 27 mejores herramientas de pruebas de rendimiento</Link> 
                    </li>
                    <li>
                    <Link to="https://www.carmatec.com/es_mx/blog/las-20-herramientas-de-pruebas-de-automatizacion-mas-populares/">Las 20 herramientas de pruebas de automatización más populares</Link> 
                    </li>
                    <li>
                    <Link to="https://es.wikipedia.org/wiki/SonarQube">SonarQube</Link> 
                    </li>
                </ul>
                </nav>
            </div>
            <div className="enlaces-col3">
                <h2>Libros educativos</h2>
                <nav>
                <ul>
                    <li>
                    <Link to="https://es.wikipedia.org/wiki/Revista_Espa%C3%B1ola_de_Innovaci%C3%B3n%2C_Calidad_e_Ingenier%C3%ADa_del_Software">REICIS: Revista Española de Innovación, Calidad e Ingeniería del Software</Link> 
                    </li>
                </ul>
                </nav>
            </div>
        </div>
    </div>

    <div className="ejercicioscasos-container">
        <div className="ejercicioscasos-title">
            <h1>Ejercicios y Casos Prácticos</h1>
        </div>
        <div className="ejercicioscasos-box">
        <div className="ejercicioscasos-div1">
            <ul>
            <li>
              <strong>Ejercicio de Caja Negra:</strong>
              Diseña casos de prueba para un campo de entrada que solo acepte edades entre 18 y 65 años.
              Casos válidos: 18, 30, 65.

              Casos inválidos: 0, 17, 66, 100, texto (“veinte”).

              Objetivo: Comprobar que el sistema valida correctamente los límites y el tipo de dato.

              Resultado esperado: Solo las entradas dentro del rango permitido deben ser aceptadas.
            </li>
            <li>
              <strong>Ejercicio de Caja Blanca:</strong>
              Dibuja un diagrama de flujo de un algoritmo simple (por ejemplo, cálculo de promedio de notas) e identifica los caminos independientes para probarlo.

              Objetivo: Evaluar la lógica interna del código y asegurar que todas las rutas de ejecución sean cubiertas.

              Pruebas recomendadas: condiciones IF/ELSE, bucles y posibles errores de división por cero.             </li>
            <li>
              <strong>Ejercicio de Partición de Equivalencia:</strong> 
              Divide en clases de equivalencia el rango de entrada de un formulario que recibe notas de 0 a 10.

              Clases válidas: 0–10 (numéricos).

              Clases inválidas: menores que 0, mayores que 10, valores alfabéticos.

              Objetivo: Reducir el número de pruebas necesarias sin perder cobertura funcional.
            </li>
          </ul>
           <div className="imagenr">
                    <img src={imagen8} alt="Imagen" width={300}/>
                    </div>
        </div>
        <div className="ejercicioscasos-div2">
             <ul>
            <li>
              <strong>Caso 1:</strong> Una empresa desarrolla un sistema de
              gestión de inventarios. ¿Qué pruebas funcionales y no funcionales
              realizarías?
            </li>
            <li>
              <strong>Caso 2:</strong> Durante una actualización de un sistema
              bancario, un botón dejó de funcionar. ¿Qué tipo de prueba aplicarías?
              <em> (Respuesta: regresión).</em>
            </li>
            <li>
              <strong>Caso 3:</strong> Diseña un plan de pruebas para una
              aplicación de e-commerce que debe soportar 10.000 usuarios
              simultáneos.
            </li>
          </ul>
           <div className="imagenr">
                    <img src={imagen9} alt="Imagen" width={300}/>
                    </div>
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

export default RecursosAprendizaje;
