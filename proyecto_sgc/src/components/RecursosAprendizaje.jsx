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
    { term: "Algoritmo", definition: "Conjunto de instrucciones ordenadas que resuelven un problema." },
    { term: "Backend", definition: "Parte del software que maneja la lógica y acceso a datos." },
    { term: "Componente", definition: "Bloque reutilizable en React que encapsula lógica y vista." },
    { term: "DOM", definition: "Modelo de objetos del documento HTML que los navegadores interpretan." },
    { term: "Frontend", definition: "Parte visual de una aplicación con la que interactúa el usuario." },
    { term: "JSX", definition: "Extensión de JavaScript que permite escribir HTML dentro del código JS." },
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
            Es el conjunto de características que hacen que un software sea
            confiable, usable, seguro y cumpla con los requisitos del cliente.
          </p>
        </li>

        <li>
          <strong>¿Por qué son necesarias las pruebas de software?</strong>
          <p>
            Porque permiten detectar errores antes de que el sistema llegue al
            cliente, reduciendo costos y evitando fallos en producción.
          </p>
        </li>

        <li>
          <strong>
            ¿Cuál es la diferencia entre pruebas funcionales y no funcionales?
          </strong>
          <ul>
            <li>
              <strong>Funcionales:</strong> verifican que el software cumpla con
              lo que debe hacer.
            </li>
            <li>
              <strong>No funcionales:</strong> evalúan características como
              rendimiento, seguridad, escalabilidad y usabilidad.
            </li>
          </ul>
        </li>

        <li>
          <strong>¿Qué significa V&amp;V en software?</strong>
          <p>
            <strong>Verificación:</strong> comprobar si el software está bien
            construido. <br />
            <strong>Validación:</strong> comprobar si el software cumple lo que
            el cliente necesita.
          </p>
        </li>

        <li>
          <strong>¿Qué son las pruebas de regresión?</strong>
          <p>
            Son pruebas repetidas tras modificaciones para verificar que el
            cambio no haya introducido nuevos errores.
          </p>
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
                    <Link to="/">Inicio</Link> {/* Enlace para la página de inicio */}
                    </li>
                    <li>
                    <Link to="/about">Acerca de</Link> {/* Enlace a la página "Acerca de" */}
                    </li>
                </ul>
                </nav>
            </div>
            <div className="enlaces-col2">
                <h2>Recursos educativos</h2>
                <nav>
                <ul>
                    <li>
                    <Link to="/">Inicio</Link> {/* Enlace para la página de inicio */}
                    </li>
                    <li>
                    <Link to="/about">Acerca de</Link> {/* Enlace a la página "Acerca de" */}
                    </li>
                </ul>
                </nav>
            </div>
            <div className="enlaces-col3">
                <h2>Libros educativos</h2>
                <nav>
                <ul>
                    <li>
                    <Link to="/">Inicio</Link> {/* Enlace para la página de inicio */}
                    </li>
                    <li>
                    <Link to="/about">Acerca de</Link> {/* Enlace a la página "Acerca de" */}
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
              <strong>Ejercicio de Caja Negra:</strong> Diseña casos de prueba
              para un campo de entrada que solo acepta edades entre 18 y 65 años.
            </li>
            <li>
              <strong>Ejercicio de Caja Blanca:</strong> Dibuja un diagrama de
              flujo de un algoritmo y determina los caminos independientes para
              probarlo.
            </li>
            <li>
              <strong>Ejercicio de Partición de Equivalencia:</strong> Divide en
              clases de equivalencia el rango de entrada de un formulario que
              recibe notas de 0 a 10.
            </li>
          </ul>
           <div className="imagenr">
                    <img src={imagen8} alt="Imagen" width={150}/>
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
                    <img src={imagen9} alt="Imagen" width={150}/>
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
