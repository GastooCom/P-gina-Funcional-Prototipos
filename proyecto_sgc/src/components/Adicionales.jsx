import React from "react";
import '../css/Adicionales.css';
import { useNavigate } from "react-router-dom";
import sobrenosotros from "../imagenes/sobrenosotros.png";
import programador from "../imagenes/programador.png";
import diseñador from "../imagenes/diseñador.png";
import master from "../imagenes/master.png"
import marketing from "../imagenes/marketing.png";
import documentador from "../imagenes/documentador.png"

const Adicionales = () => {
    const navigate = useNavigate();
return(
   <div className="pds-container">
      {/* Barra de navegación */}
      <div className="navbar">
        <button className="nav-btn" onClick={() => navigate("/")}>← Inicio</button>
        <button className="nav-btn" onClick={() => navigate("/procesodesarrollosoft")}>Procesos de Desarrollo. Soft</button>
        <button className="nav-btn " onClick={() => navigate("/gestioncalidadsoft")}>Gestion de Calidad. Soft</button>
        <button className="nav-btn " onClick={() => navigate("/recursosaprendizaje")}>Recursos y Aprendizaje</button>
        <button className="nav-btn " onClick={() => navigate("/metodologiadetalle")}>Metodologia en detalle</button>
        <button className="nav-btn a" onClick={() => navigate("/adicionales")}>Adicionales →</button>
      </div>

      <div className="sobrenosotros-container">
        <div className="a-titulo">
            <h1>"Sobre Nosotros"</h1>
            <div className="imagen sobrenosotros"><img src={sobrenosotros} alt="Imagen" width={300}/></div>
        </div>
        <div className="a-items">
            <div className="a-programador">
                <h2>Programador</h2>
                <p>
                    Se encarga de escribir el
                    código, implementar
                    funcionalidades,
                    corregir errores y
                    asegurar que el
                    software funcione
                    correctamente.
                </p>
                <div className="imagen programador"><img src={programador} alt="Imagen" width={150}/></div>
            </div>
            <div className="a-diseñador">
                <h2>Diseñador</h2>
                <p>
                   Crea la parte visual y
                    la experiencia de
                    usuario del
                    producto,
                    asegurando que sea
                    atractivo, intuitivo y
                    fácil de usar. 
                </p>
                <div className="imagen diseñador"><img src={diseñador} alt="Imagen" width={150}/></div>
            </div>
            <div  className="a-scrummaster">
                <h2>Scrum Master</h2>
                <p>
                    Facilita el trabajo del
                    equipo aplicando la
                    metodología Scrum,
                    eliminando
                    obstáculos y
                    guiando las
                    reuniones ágiles.
                </p>
                <div className=""><img src={master} alt="Imagen" width={150}/></div>
            </div>
            <div className="a-marketing">
                <h2>Marketing</h2>
                <p>
                    Promociona el
                    producto, diseña
                    estrategias de
                    comunicación y se
                    encarga de que llegue
                    al público objetivo de
                    manera efectiva.
                </p>
                <div className="imagen marketing"><img src={marketing} alt="Imagen" width={150}/></div>
            </div>
            <div className="a-documentador">
                <h2>Documentador</h2>
                <p>
                    Redacta y organiza
                    manuales, requisitos y
                    guías técnicas para que
                    la información del
                    proyecto sea clara y
                    accesible.
                </p>
                <div className="imagen documentadoe"><img src={documentador} alt="Imagen" width={150}/></div>
            </div>
        </div>
      </div>

    </div>
)
}

export default Adicionales;