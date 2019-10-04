import React from 'react';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="portal" />
      <div className="content">
        <p>Gestao de <strong>Recursos Humanos</strong></p>
        <form>
          <label htmlFor="email">E-mail*</label>
          <input id="email" type="email" placeholder="Seu e-mail" />
          <button type="submit" className="btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
