import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Inicio from './components/Inicio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/*
        <Route path="/asistencia" element={< />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
