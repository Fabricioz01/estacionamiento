import React, { useState } from 'react';
import '../css/EyS.css';

const EyS = ({ onFormSwitch }) => {
  const [registros, setRegistros] = useState([]);
  const [placa, setPlaca] = useState('');

  const handleEntrada = () => {
    const fechaHoraActual = new Date();
    const nuevoRegistro = {
      placa,
      fechaHora: fechaHoraActual.toLocaleString(),
    };

    setRegistros([...registros, nuevoRegistro]);

    // Resetear el campo de placa
    setPlaca('');
  };

  const handleSalida = (index) => {
    const confirmacion = window.confirm('¿Estás seguro de que deseas registrar la salida?');
    if (confirmacion) {
      const nuevosRegistros = [...registros];
      nuevosRegistros[index].fechaHoraSalida = new Date().toLocaleString();
      setRegistros(nuevosRegistros);
    }
  };

  const handleEliminarRegistro = (index) => {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    if (confirmacion) {
      const nuevosRegistros = [...registros];
      nuevosRegistros.splice(index, 1);
      setRegistros(nuevosRegistros);
    }
  };

  return (
    <div className="eyS-container">
      <header>
        <nav>
          <button className="salir" onClick={() => onFormSwitch('inicio')}>
            Salir
          </button>
        </nav>
      </header>
      <h1 className="eyS-heading">Registro de Entrada y Salida de Vehículos</h1>
      <div className="eyS-input">
        <h2>Registro de Entrada</h2>
        <input
          type="text"
          placeholder="Placa"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
        />
        <button className="eyS-button" onClick={handleEntrada}>Registrar Entrada</button>
      </div>
      <div className="eyS-registros">
        <h2>Registros</h2>
        <table>
          <thead>
            <tr>
              <th>Placa</th>
              <th>Fecha y Hora de Entrada</th>
              <th>Fecha y Hora de Salida</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((registro, index) => (
              <tr key={index}>
                <td>{registro.placa}</td>
                <td>{registro.fechaHora}</td>
                <td>{registro.fechaHoraSalida || '-'}</td>
                <td>
                  {registro.fechaHoraSalida ? (
                    'Salida registrada'
                  ) : (
                    <button className="eyS-button" onClick={() => handleSalida(index)}>Registrar Salida</button>
                  )}
                  <button className="eyS-button" onClick={() => handleEliminarRegistro(index)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EyS;
