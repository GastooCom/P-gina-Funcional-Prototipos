import React from "react";
import '../css/Adicionales.css';
import { useNavigate } from "react-router-dom";
import sobrenosotros from "../imagenes/sobrenosotros.png";
import programador from "../imagenes/programador.png";
import diseñador from "../imagenes/diseñador.png";
import master from "../imagenes/master.png"
import marketing from "../imagenes/marketing.png";
import documentador from "../imagenes/documentador.png"
import { useEffect, useState } from "react";

const Adicionales = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
    nombre: "",
    gmail: "",
    asunto: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.gmail || !formData.asunto || !formData.mensaje) {
      alert("Por favor completa todos los campos.");
      return;
    }

    console.log("Datos enviados:", formData);
    setEnviado(true);

    // Aquí podrías integrar envío a Firebase, correo o API
    // Ejemplo: await addDoc(collection(db, "consultas"), formData);

    // Limpiar campos después del envío
    setFormData({
      nombre: "",
      gmail: "",
      asunto: "",
      mensaje: "",
    });

    setTimeout(() => setEnviado(false), 3000);
  };

  const handleClear = () => {
    setFormData({
      nombre: "",
      gmail: "",
      asunto: "",
      mensaje: "",
    });
    setEnviado(false);
  };

  {/*Boton ir arriba*/}

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
   <div className="pds-container4">
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

      <div className="formulario-container">
      <h2>Formulario de Contacto</h2>
      <p>¿Te enviamos alguna consulta o comentario?</p>

      <form onSubmit={handleSubmit} className="formulario">
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ingresa tu nombre"
        />

        <label>Gmail</label>
        <input
          type="email"
          name="gmail"
          value={formData.gmail}
          onChange={handleChange}
          placeholder="example@gmail.com"
        />

        <label>Asunto</label>
        <input
          type="text"
          name="asunto"
          value={formData.asunto}
          onChange={handleChange}
          placeholder="Motivo del mensaje"
        />

        <label>Mensaje</label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Escribe tu mensaje..."
        ></textarea>

        <div className="botones">
          <button type="submit">Enviar</button>
          <button type="button" onClick={handleClear}>
            Eliminar
          </button>
        </div>

        {enviado && <p className="mensaje-enviado">¡Mensaje enviado con éxito!</p>}
      </form>
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

export default Adicionales;