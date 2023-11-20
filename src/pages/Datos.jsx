import React, { useState } from 'react';

import '../css/Datos.css';

const Datos = (paginas) => {
  useState(() => {
    document.body.classList.add('datos-body');

    document.body.classList.remove('inicio-body');
    document.body.classList.remove('eliminate-body');
    document.body.classList.remove('EyS-body');
    document.body.classList.remove('index-body');
    document.body.classList.remove('mapa-body');
    document.body.classList.remove('problem-body');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar los datos del formulario de datos
    const nombre = e.target.nombre.value;
    const apellido = e.target.apellido.value;
    const placa = e.target.placa.value;
    const modelo = e.target.modelo.value;
    const color = e.target.color.value;
    const email = e.target.email.value;
    const telefono = e.target.telefono.value;
    const direccion = e.target.direccion.value;

    const telefonoRegex = /^\d{10}$/; // Expresión regular para validar el formato del teléfono (10 dígitos numéricos)

    if (nombre && apellido && placa && modelo && color && email && telefono && direccion) {
      if (!isNaN(telefono) && telefonoRegex.test(telefono)) {
        // Validar el formato del correo electrónico
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (emailRegex.test(email)) {
          // Guardar los datos en localStorage
          const datos = {
            nombre,
            apellido,
            placa,
            modelo,
            color,
            email,
            telefono,
            direccion,
          };
          localStorage.setItem('datos', JSON.stringify(datos));

          // Realizar alguna acción con los datos
          alert('Datos guardados');
        } else {
          // Mostrar mensaje de error para correo electrónico inválido
          alert('El correo electrónico no es válido');
        }
      } else {
        // Mostrar mensaje de error para teléfono inválido
        alert('El teléfono no es válido');
      }
    } else {
      // Mostrar mensaje de error o realizar alguna acción
      alert('Falta información en el formulario');
    }
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
      <div className="container-datos">
        <h1>Datos del Usuario</h1>
        <div className="conteendor-cubo">
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />

            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required />

            <label htmlFor="placa">Placa:</label>
            <input type="text" id="placa" name="placa" required />

            <label htmlFor="modelo">Modelo del carro:</label>
            <input type="text" id="modelo" name="modelo" required />

            <label htmlFor="color">Color del carro:</label>
            <input type="color" id="color" name="color" required />

            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" pattern="[0-9]{10}" required />

            <label htmlFor="direccion">Dirección:</label>
            <textarea id="direccion" name="direccion" required></textarea>

            <button type="submit">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Datos;
