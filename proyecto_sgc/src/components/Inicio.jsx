import React from "react";
import "../css/Inicio.css"; // Asegurate de crear este CSS y copiar los estilos

export default function Inicio() {
  return (
    <div className="inicio-container">
      {/* Barra de navegación */}
      <div className="navbar">
        <button className="nav-btn">← Procesos de Desarrollo. Soft</button>
        <button className="nav-btn">Gestion de Calidad. Soft</button>
        <button className="nav-btn">Recursos y Aprendizaje</button>
        <button className="nav-btn">Metodologia en detalle →</button>
      </div>

      {/* Título y descripción */}
      <div className="header-section">
        <div className="icon-circle">⚙️✔️</div>
        <div className="header-text">
          <h1>Sistema de Gestion de Calidad de Software</h1>
          <p>
            Este sitio proporciona informacion y recursos esenciales para
            comprender los principios y practicas mas importantes en el
            desarrollo de software de alta calidad.
          </p>
        </div>
        <div className="icon-circle">⚙️✔️</div>
      </div>

      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input type="text" placeholder="" />
        <span className="search-icon">🔍</span>
      </div>

      {/* Primera fila de tarjetas */}
      <div className="cards-container">
        <div className="card">
          <h3>Procesos de Desarrollo de Sofware</h3>
          <p>
            Este es un conjunto de actividades estructuradas que se siguen para
            crear, mantener y mejorar sistemas de software.
          </p>
          <p className="enlace">Enlace2___________</p>
          <div className="card-icon">✏️⚙️</div>
        </div>

        <div className="card">
          <h3>Gestion de Calidad de Software</h3>
          <p>
            En este apartado veremos conjunto de actividades y procesos
            destinados a garantizar que un producto de software cumpla con los
            requisitos especificados.
          </p>
          <p className="enlace">Enlace2___________</p>
          <div className="card-icon">⚙️👍⬆️</div>
        </div>
      </div>

      {/* Segunda fila de tarjetas (nueva) */}
      {/* Segunda sección de tarjetas (nueva distribución) */}
        <div className="second-section">
        {/* Columna izquierda */}
        <div className="left-column">
            <div className="card red-card">
            <h3>Recursos y Aprendizaje</h3>
            <p>
                En la gestión de calidad de software, los recursos son los medios
                para garantizar la calidad (personas, herramientas, tiempo,
                presupuesto) y el aprendizaje es la mejora continua mediante
                capacitación y experiencia para perfeccionar procesos y resultados.
            </p>
            <p className="enlace">Enlace1___________</p>
            <div className="card-icon">👤⚙️</div>
            </div>

            <div className="card blue-card">
            <h3>Metodologias en Detalle</h3>
            <p>
                Es el nivel donde una metodología (de investigación, de enseñanza,
                de desarrollo de software, de trabajo, etc.) se desglosa con
                precisión: qué pasos sigue, en qué orden, qué se necesita en cada
                fase y cómo se evalúan los resultados.
            </p>
            <p className="enlace">Enlace2___________</p>
            <div className="card-icon">📋✔️</div>
            </div>
        </div>

        {/* Columna derecha */}
        <div className="card pink-card tall-card">
            <h3>Adicionales</h3>
            <p>
            Encuentra la sección “Sobre Nosotros”, dedicado a asegurar que cada
            proyecto cumpla con los más altos estándares de confiabilidad,
            eficiencia y usabilidad. Nuestro trabajo se centra en aplicar
            metodologías, herramientas y buenas prácticas que permiten detectar
            riesgos, prevenir errores y garantizar productos de software estables
            y de calidad.
            </p>
            <p className="enlace">Enlace3___________</p>
            <div className="card-icon">👥</div>
        </div>
        </div>
    </div>
  );
}
