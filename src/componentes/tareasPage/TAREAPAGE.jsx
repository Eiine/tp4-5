import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function TareasPage() {
    const [tareas, setTarea]=useState([])
     useEffect(() => {
 setTimeout(() => {
  setTarea(["limpiar el auto","buscar los chicos de la escuela","formatear la pc", "terminar los cuadernos"])
}, 1000); 
}, []);
return (
    <div>
      {tareas.map((tarea, index) => (
        <div key={index}>
          <Link to={`/Tareas/${index}`}>{tarea}</Link>
        </div>
      ))}
    </div>
  );
}
