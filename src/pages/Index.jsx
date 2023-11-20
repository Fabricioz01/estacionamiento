import React, { useEffect, useState } from 'react';

import '../css/estilos.css';

const Index = (paginas) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    document.getElementById('btn__iniciar-sesion').addEventListener('click', iniciarSesion);
    document.getElementById('btn__registrarse').addEventListener('click', register);
    window.addEventListener('resize', anchoPage);
    document.body.classList.add('index-body');
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setLoginEmail(user.email);
      setLoginPassword(user.password);
    }
  }, []);
  

  const anchoPage = () => {
    const caja_trasera_register = document.querySelector('.caja__trasera-register');
    const caja_trasera_login = document.querySelector('.caja__trasera-login');
    const formulario_login = document.querySelector('.formulario__login');
    const formulario_register = document.querySelector('.formulario__register');
    const contenedor_login_register = document.querySelector('.contenedor__login-register');

    if (window.innerWidth > 850) {
      caja_trasera_register.style.display = 'block';
      caja_trasera_login.style.display = 'block';
    } else {
      caja_trasera_register.style.display = 'block';
      caja_trasera_register.style.opacity = '1';
      caja_trasera_login.style.display = 'none';
      formulario_login.style.display = 'block';
      contenedor_login_register.style.left = '0px';
      formulario_register.style.display = 'none';
    }
  };

  const iniciarSesion = () => {
    const caja_trasera_register = document.querySelector('.caja__trasera-register');
    const caja_trasera_login = document.querySelector('.caja__trasera-login');
    const formulario_login = document.querySelector('.formulario__login');
    const formulario_register = document.querySelector('.formulario__register');
    const contenedor_login_register = document.querySelector('.contenedor__login-register');

    if (window.innerWidth > 850) {
      formulario_login.style.display = 'block';
      contenedor_login_register.style.left = '10px';
      formulario_register.style.display = 'none';
      caja_trasera_register.style.opacity = '1';
      caja_trasera_login.style.opacity = '0';
    } else {
      formulario_login.style.display = 'block';
      contenedor_login_register.style.left = '0px';
      formulario_register.style.display = 'none';
      caja_trasera_register.style.display = 'block';
      caja_trasera_login.style.display = 'none';
    }
  };

  const register = () => {
    const caja_trasera_register = document.querySelector('.caja__trasera-register');
    const caja_trasera_login = document.querySelector('.caja__trasera-login');
    const formulario_login = document.querySelector('.formulario__login');
    const formulario_register = document.querySelector('.formulario__register');
    const contenedor_login_register = document.querySelector('.contenedor__login-register');

    if (window.innerWidth > 850) {
      formulario_register.style.display = 'block';
      contenedor_login_register.style.left = '410px';
      formulario_login.style.display = 'none';
      caja_trasera_register.style.opacity = '0';
      caja_trasera_login.style.opacity = '1';
    } else {
      formulario_register.style.display = 'block';
      contenedor_login_register.style.left = '0px';
      formulario_login.style.display = 'none';
      caja_trasera_register.style.display = 'none';
      caja_trasera_login.style.display = 'block';
      caja_trasera_login.style.opacity = '1';
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Validar los datos del formulario de inicio de sesión
    if (loginEmail && loginPassword) {
      // Comprobar si los datos de inicio de sesión son válidos
      const storedUser = localStorage.getItem(loginEmail);
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === loginPassword) {
          // Inicio de sesión exitoso
          console.log('Iniciar sesión:', loginEmail, loginPassword);
          localStorage.setItem('currentUser', JSON.stringify({ email: loginEmail, password: loginPassword }));
          paginas.onFormSwitch('inicio');
        } else {
          // Contraseña incorrecta
          alert('Contraseña incorrecta');
        }
      } else {
        // Usuario no encontrado
        alert('Usuario no encontrado');
      }
    } else {
      // Mostrar mensaje de error o realizar alguna acción
      alert('Falta información para iniciar sesión');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Validar los datos del formulario de registro
    if (registerName && registerEmail && registerUsername && registerPassword && confirmPassword) {
      if (registerPassword === confirmPassword) {
        // Validar el formato del correo electrónico
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (emailRegex.test(registerEmail)) {
          // Verificar si el usuario ya está registrado
          const storedUser = localStorage.getItem(registerEmail);
          if (storedUser) {
            // Usuario ya registrado
            alert('Ya existe un usuario registrado con este correo electrónico');
          } else {
            // Registro exitoso, guardar los datos en localStorage
            const user = {
              name: registerName,
              username: registerUsername,
              password: registerPassword,
            };
            localStorage.setItem(registerEmail, JSON.stringify(user));
            alert('Registro exitoso');
          }
        } else {
          // Mostrar mensaje de error para correo electrónico inválido
          alert('El correo electrónico no es válido');
        }
      } else {
        // Mostrar mensaje de error para contraseñas que no coinciden
        alert('Las contraseñas no coinciden');
      }
    } else {
      // Mostrar mensaje de error para campos faltantes
      alert('Falta información para registrarse');
    }
  };

  return (
    <main>
      <div className="contenedor__todo">
        <div className="caja__trasera">
          <div className="caja__trasera-login">
            <h3>¿Ya tienes una cuenta?</h3>
            <p>Inicia sesión para entrar en la página</p>
            <button id="btn__iniciar-sesion">Iniciar Sesión</button>
          </div>
          <div className="caja__trasera-register">
            <h3>¿Aún no tienes una cuenta?</h3>
            <p>Regístrate para que puedas iniciar sesión</p>
            <button id="btn__registrarse">Registrarse</button>
          </div>
        </div>

        {/* Formulario de Login y registro */}
        <div className="contenedor__login-register">
          {/* Login */}
          <form action="" className="formulario__login" onSubmit={handleLogin}>
            <h2>Iniciar Sesión</h2>
            <input type="text" placeholder="Correo Electrónico" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            <button>Iniciar Sesión</button>
          </form>

          {/* Register */}
          <form action="" className="formulario__register" onSubmit={handleRegister}>
            <h2>Registrarse</h2>
            <input type="text" placeholder="Nombre completo" value={registerName} onChange={(e) => setRegisterName(e.target.value)} />
            <input type="text" placeholder="Correo Electrónico" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
            <input type="text" placeholder="Usuario" value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
            <input type="password" placeholder="Repita la contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button>Registrarse</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Index;
