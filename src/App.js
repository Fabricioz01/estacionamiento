import React, { useState } from 'react';
import Datos from "./pages/Datos.jsx";
import EyS from "./pages/EyS.jsx";
import Index from "./pages/Index.jsx";
import Inicio from "./pages/Inicio.jsx";
import Mapa from "./pages/Mapa.jsx";
import Problem from "./pages/Problem.jsx";
import Reservar from "./pages/Reservar.jsx";

export function App() {
  const [currentForm, setCurrentForm] = useState('index');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const components = {
    index: <Index onFormSwitch={toggleForm} />,
    datos: <Datos onFormSwitch={toggleForm} />,
    eyS: <EyS onFormSwitch={toggleForm} />,
    inicio: <Inicio onFormSwitch={toggleForm} />,
    mapa: <Mapa onFormSwitch={toggleForm} />,
    problem: <Problem onFormSwitch={toggleForm} />,
    reservar: <Reservar onFormSwitch={toggleForm} />
  };

  const CurrentComponent = components[currentForm];

  return (
    <div>
      {CurrentComponent}
      
    </div>
  );
}

export default App;
