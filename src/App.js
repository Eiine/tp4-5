import { Routes, Route, Link } from "react-router-dom";
import Home from "./componentes/home/HOME.jsx";
import CreatePage from "./componentes/crearTareasPage/CREARTAREASPAGE.jsx"
import TareasPage from "./componentes/tareasPage/TAREAPAGE.jsx";
import TareaDetallePage from "./componentes/TareaDetallePage/TareaDetallePage.jsx";
export default function App() {
  return (
    <div>
      {/* Menú de navegación */}
      <nav>
        <Link to="/">home</Link> |{" "}
        <Link to="/CreatePage">crear</Link> |{" "}
        <Link to="/Tareas">tareas</Link>
      </nav>

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreatePage" element={<CreatePage />} />
        <Route path="/Tareas" element={<TareasPage />} />
       <Route path="/Tareas/:id" element={<TareaDetallePage />} />
      </Routes>
    </div>
  );
}
