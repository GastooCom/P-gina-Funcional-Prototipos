import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Inicio from './components/Inicio';
import ProcesoDesarrolloSoft from "./components/ProcesoDesarrolloSoft";
import GestionCalidadSoft from './components/GestionCalidadSoft';
import RecursosAprendizaje from './components/RecursosAprendizaje';
import MetodologiaDetalle from './components/MetodologiaDetalle';
import Adicionales from './components/Adicionales';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/procesodesarrollosoft" element={<ProcesoDesarrolloSoft />}/>
        <Route path="/gestioncalidadsoft" element={<GestionCalidadSoft />} />
        <Route path="/recursosaprendizaje" element={<RecursosAprendizaje />} />
        <Route path="/metodologiadetalle" element={<MetodologiaDetalle />} />
        <Route path="/adicionales" element={<Adicionales />} />
        </Routes>
    </Router>
  );
}

export default App;
