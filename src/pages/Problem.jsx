import React, { useState } from 'react';
import '../css/Problem.css';

export const Problem = (paginas) => {
  useState(() => {
    document.body.classList.add('problem-body');
    document.body.classList.remove('eliminate-body');
    document.body.classList.remove('datos-body');
    document.body.classList.remove('EyS-body');
    document.body.classList.remove('index-body');
    document.body.classList.remove('mapa-body');
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Obtener los valores de los campos del formulario
    const nombre = event.target.elements['nombre'].value.trim();
    const correo = event.target.elements['correo'].value.trim();
    const asunto = event.target.elements['asunto'].value.trim();
    const mensaje = event.target.elements['mensaje'].value.trim();
  
    // Realizar validaciones personalizadas
    if (nombre === '' || correo === '' || asunto === '' || mensaje === '') {
      alert('Por favor, complete todos los campos del formulario');
      return;
    }
  
    // Aquí puedes agregar la lógica para enviar el mensaje
    alert('Reporte Enviado');
  };
  
  return (
    <div>
      <header>
        <nav>
          <span className="clic" onClick={() => paginas.onFormSwitch('inicio')}>
            Regresar a inicio
          </span>
        </nav>
      </header>
      <h1>Reportar problema en la página de estacionamientos de la ULEAM</h1>

      <form className="cajita" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre completo</label>
        <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre completo" />

        <label htmlFor="correo">Correo electrónico</label>
        <input type="email" id="correo" name="correo" placeholder="Ingrese su correo electrónico" />

        <label htmlFor="asunto">Asunto</label>
        <input type="text" id="asunto" name="asunto" placeholder="Ingrese el asunto de su mensaje" />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows="5" placeholder="Ingrese su mensaje"></textarea>

        <button type="submit">Enviar mensaje</button>

      </form>
    </div>
  );
};

export default Problem;
