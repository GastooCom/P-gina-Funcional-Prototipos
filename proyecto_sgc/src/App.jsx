import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Inicio from './components/Inicio';
import ProcesoDesarrolloSoft from "./components/ProcesoDesarrolloSoft";
import GestionCalidadSoft from './components/Gestion_de_calidad';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/procesodesarrollosoft" element={<ProcesoDesarrolloSoft />}/>
        <Route path="/gestioncalidadsoft" element={<GestionCalidadSoft />} />
        {/*
        <Route path="/recursosaprendizaje" element={<RecursosAprendizaje />} />
        <Route path="/metodologiadetalle" element={<MetodologiaDetalle />} />
        */}
        </Routes>
    </Router>
  );
}

export default App;
