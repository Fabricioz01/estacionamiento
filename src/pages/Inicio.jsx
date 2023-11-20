import React, { useState } from 'react';
import '../css/inicio.css';

export const Inicio = (paginas) => {
  useState(() => {
    document.body.classList.add('inicio-body');

    document.body.classList.remove('eliminate-body');
    document.body.classList.remove('datos-body');
    document.body.classList.remove('EyS-body');
    document.body.classList.remove('index-body');
    document.body.classList.remove('mapa-body');
    document.body.classList.remove('problem-body');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    paginas.onFormSwitch('index');
  };

  return (
    <div>
      <div>
        <header>
          <nav>
            <button className="clic" onClick={() => paginas.onFormSwitch('eyS')}>Registro de E/S</button>
            <button className="clic" onClick={() => paginas.onFormSwitch('reservar')}>Reservar estacionamiento</button>
            <button className="clic" onClick={() => paginas.onFormSwitch('mapa')}>¿Cómo llegar?</button>
            <button className="clic" onClick={() => paginas.onFormSwitch('datos')}>Datos personales</button>
            <button className="clic" onClick={() => paginas.onFormSwitch('problem')}>Informar un problema</button>
            <button className="clic" onClick={handleLogout}>Salir</button>
          </nav>
        </header>
      </div>
      <center>
        <div id="centro">
          <main className='centro-cosas'>
            <p>
              ¡Bienvenido al estacionamiento de la Universidad Laica Eloy Alfaro de Manabí (ULEAM)!
              Nuestro objetivo es brindar un servicio seguro, eficiente y accesible para
              estudiantes, profesores y visitantes que necesiten estacionar sus vehículos 
              en el campus universitario. Contamos con amplias instalaciones que pueden
              albergar una gran cantidad de vehículos, así como con un personal capacitado
              para asistirlo en lo que necesite. Nos enorgullece ser parte de la comunidad 
              universitaria y estamos comprometidos con su bienestar y comodidad.
            </p>
          </main>
        </div>
      </center>
      <div>
        <footer>
          <nav>
            <a href="https://www.uleam.edu.ec/" target="_blank" rel="noopener noreferrer">Uleam </a>
            <a href="https://img.freepik.com/vector-premium/lindo-adorable-hamster-ilustracion-dibujos-animados-animal-bebe-divertido-feliz_746614-74.jpg?w=2000" target="_blank" rel="noopener noreferrer"> Alegre</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Inicio;
