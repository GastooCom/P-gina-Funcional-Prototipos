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
    </div>
  );
};

export default GestionCalidadSoft;
