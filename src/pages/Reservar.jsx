import React, { useState } from 'react';
import '../css/Reservar.css';

export const Reservar = (paginas) => {
  const [reservaciones, setReservaciones] = useState({});

  const spots = [
    { id: 'A1' },
    { id: 'A2' },
    { id: 'A3' },
    { id: 'A4' },
    { id: 'A5' },
    { id: 'A6' },
    { id: 'A7' },
    { id: 'A8' },
    { id: 'A9' },
    { id: 'B1' },
    { id: 'B2' },
    { id: 'B3' },
    // Agrega más lugares de estacionamiento según sea necesario
  ];

  const reserveSpot = (spotId) => {
    if (reservaciones[spotId]) {
      alert(`Lugar ${spotId} ya está reservado`);
      return;
    }

    const fecha = document.querySelector('input[type="date"]').value;
    const hora = document.querySelector('input[type="time"]').value;
    const newReservation = { fecha, hora };

    setReservaciones((prevState) => ({
      ...prevState,
      [spotId]: newReservation,
    }));

    alert(`Lugar ${spotId} reservado`);
  };

  const cancelReservation = (spotId) => {
    if (!reservaciones[spotId]) {
      alert(`Lugar ${spotId} no está reservado`);
      return;
    }

    const updatedReservaciones = { ...reservaciones };
    delete updatedReservaciones[spotId];
    setReservaciones(updatedReservaciones);

    alert(`Reservación para el lugar ${spotId} cancelada`);
  };

  useState(() => {
    document.body.classList.add('reservar-body');

    document.body.classList.remove('inicio-body');
    document.body.classList.remove('eliminate-body');
    document.body.classList.remove('EyS-body');
    document.body.classList.remove('index-body');
    document.body.classList.remove('mapa-body');
    document.body.classList.remove('datos-body');
    document.body.classList.remove('problem-body');
  }, []);

  return (
    <div>
      <header>
        <nav>
          <span className="clic" onClick={() => paginas.onFormSwitch('inicio')}>
            Regresar a inicio
          </span>
        </nav>
      </header>
      <h1>Elige la fecha y hora</h1>
      <div className="datos-fecha">
        <input type="date" />
        <br />
        <input type="time" />
      </div>
      <h1>Elige tu lugar de estacionamiento</h1>
      <div className="grid-container">
  {spots.map((spot) => (
    <div className="grid-item" id={spot.id} key={spot.id}>
      {spot.id}
      <br />
      {reservaciones[spot.id] ? (
        <>
          <span className="reserve-status">Reservado</span>
          <button className="reserve-button" onClick={() => cancelReservation(spot.id)}>
            Eliminar reserva
          </button>
        </>
      ) : (
        <button className="reserve-button" onClick={() => reserveSpot(spot.id)}>
          Reservar
        </button>
      )}
    </div>
  ))}
</div>


    </div>
  );
};

export default Reservar;
