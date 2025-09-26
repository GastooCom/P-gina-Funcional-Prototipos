import React from "react";
import "../css/Inicio.css"; // Asegurate de crear este CSS y copiar los estilos
import imagen0 from "../imagenes/imagen0.png";
import imagen1 from "../imagenes/imagen1.png";
import imagen2 from "../imagenes/imagen2.png";
import imagen3 from "../imagenes/imagen3.png";
import imagen4 from "../imagenes/imagen4.png";
import imagen5 from "../imagenes/imagen5.png";
import { useNavigate } from "react-router-dom";

export default function Inicio() {
  const navigate = useNavigate();
  return (
    <div className="inicio-container">
      {/* Barra de navegación */}
      <div className="navbar">
        <button className="nav-btn" onClick={() => navigate("/")}>← Inicio</button>
        <button className="nav-btn" onClick={() => navigate("/procesodesarrollosoft")}>← Procesos de Desarrollo. Soft</button>
        <button className="nav-btn"onClick={() => navigate("/gestioncalidadsoft")}>Gestion de Calidad. Soft</button>       
        <button className="nav-btn">Gestion de Calidad. Soft</button>
        <button className="nav-btn">Recursos y Aprendizaje</button>
        <button className="nav-btn">Metodologia en detalle</button>
        <button className="nav-btn">Adicionales →</button>
      </div>

      {/* Título y descripción */}
      <div className="header-section">
        <div className="icon-circle"><img src={imagen0} alt="Imagen" width={150}/></div>
        <div className="header-text">
          <h1>Sistema de Gestion de Calidad de Software</h1>
          <p>
            Este sitio proporciona informacion y recursos esenciales para
            comprender los principios y practicas mas importantes en el
            desarrollo de software de alta calidad.
          </p>
        </div>
        <div className="icon-circle"><img src={imagen0} alt="Imagen" width={150}/></div>
      </div>

      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input type="text" placeholder="" />
        <span className="search-icon">🔍</span>
      </div>

      {/* Primera fila de tarjetas */}
      <div className="cards-container">
        <div className="card">
          <div className="textoi">
          <h3>Procesos de Desarrollo de Sofware</h3>
          <p>
            Este es un conjunto de actividades estructuradas que se siguen para
            crear, mantener y mejorar sistemas de software.
          </p>
          <button className="enlace" onClick={() => navigate("/procesodesarrollosoft")}>Enlace1: Proceso de Desarrollo de Software</button>
          </div>
          <div className="imageni">
          <img src={imagen1} alt="Imagen" width={150}/>
          </div>
        </div>

        <div className="card">
          <div className="textoi">
          <h3>Gestion de Calidad de Software</h3>
          <p>
            En este apartado veremos conjunto de actividades y procesos
            destinados a garantizar que un producto de software cumpla con los
            requisitos especificados.
          </p>
          <p className="enlace">Enlace2___________</p>
          </div>
          <div className="imagen2">
          <img src={imagen2} alt="Imagen2" width={150}/>
          </div>
        </div>
      </div>

      {/* Segunda fila de tarjetas (nueva) */}
      {/* Segunda sección de tarjetas (nueva distribución) */}
        <div className="second-section">
        {/* Columna izquierda */}
        <div className="left-column">
            <div className="card red-card">
              <div className="textoi">
            <h3>Recursos y Aprendizaje</h3>
            <p>
                En la gestión de calidad de software, los recursos son los medios
                para garantizar la calidad (personas, herramientas, tiempo,
                presupuesto) y el aprendizaje es la mejora continua mediante
                capacitación y experiencia para perfeccionar procesos y resultados.
            </p>
            <p className="enlace">Enlace1___________</p>
            </div>
            <div className="imagen3">
            <img src={imagen3} alt="Imagen3" width={150}/>
            </div>
            </div>

            <div className="card blue-card">
              <div className="textoi">
            <h3>Metodologias en Detalle</h3>
            <p>
                Es el nivel donde una metodología (de investigación, de enseñanza,
                de desarrollo de software, de trabajo, etc.) se desglosa con
                precisión: qué pasos sigue, en qué orden, qué se necesita en cada
                fase y cómo se evalúan los resultados.
            </p>
            <p className="enlace">Enlace2___________</p>
            </div>
            <div className="imagen4">
            <img src={imagen4} alt="Imagen4" width={150}/>
            </div>
            </div>
        </div>

        {/* Columna derecha */}
        <div className="card pink-card tall-card">
          <div className="textoi">
            <h3>Adicionales</h3>
            <p>
            Encuentra la sección “Sobre Nosotros”, dedicado a asegurar que cada
            proyecto cumpla con los más altos estándares de confiabilidad,
            eficiencia y usabilidad. Nuestro trabajo se centra en aplicar
            metodologías, herramientas y buenas prácticas que permiten detectar
            riesgos, prevenir errores y garantizar productos de software estables
            y de calidad.
            </p>
            </div>
            <div className="imagen5">
            <img src={imagen5} alt="Imagen5" width={150}/>
            </div>
            <p className="enlace">Enlace3___________</p>
        </div>
        </div>
    </div>
  );
}
