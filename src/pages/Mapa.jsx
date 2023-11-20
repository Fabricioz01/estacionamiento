import React, { useState } from 'react';
import '../css/Mapa.css';

export const Mapa = (paginas) =>{
    useState(() => {
        document.body.classList.add('mapa-body');
        document.body.classList.remove('eliminate-body');
        document.body.classList.remove('datos-body');
        document.body.classList.remove('EyS-body');
        document.body.classList.remove('index-body');
        document.body.classList.remove('problem-body');
      }, []);    return (
    <div>
      <header>
        <nav>
        <span className="clic" onClick={() => paginas.onFormSwitch('inicio')}>Regresar a inicio</span>
        </nav>
      </header>

      <div className="contenedor-info">

      <h1>Cómo llegar al estacionamiento de la Universidad ULEAM</h1>
      <p>La Universidad Laica Eloy Alfaro de Manabí (ULEAM) cuenta con un estacionamiento para estudiantes, profesores y visitantes.</p>
      <h2>Ubicación del estacionamiento</h2>
      <ul>
        <li>Nombre: <em>Estacionamiento ULEAM</em></li>
        <li>Dirección: <em>Ciudadela Universitaria. Calle 12, Vía San Mateo Manta, Manabí, Ecuador</em></li>
        <li>Referencias: <em>al gimnasio Eurogym</em></li>
      </ul>
      <h2>Mapa de ubicación</h2>
      <div id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3989.2652401715845!2d-80.74578119745696!3d-0.9540258264331442!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1683640776718!5m2!1ses!2sec" width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>

    </div>
  );
};

export default Mapa;
