import { useState, useEffect } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";

function App() {
  const stored = localStorage.citas;
  const initial = stored ? JSON.parse(stored) : [];
  const [citas, setCitas] = useState(initial);

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  const crearCitas = (cita) => {
    setCitas([...citas, cita]);
  };

  function eliminarCita(id) {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  }

  const titulo =
    citas.length === 0 ? "No tienes Citas" : "Administra tus Citas";

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCitas={crearCitas} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita, index) => {
              return (
                <Cita key={index} cita={cita} eliminarCita={eliminarCita} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
