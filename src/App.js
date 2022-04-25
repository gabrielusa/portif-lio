import './App.css';
import './index.css';
import foto1 from './img/rosto1.webp';
import React from 'react';


function App() {
  return (
    <div className='maior' >
      <div className='card' >
        <h2>conheça:</h2>
        <h1>Gabriel Senna</h1>
        <img className='img' src={foto1}/>
      </div>

      <div className='box'>Ilustrações</div><hr></hr>
      <div className='box'>Branding e Papelaria</div><hr></hr>
      <div className='box'>Gestão de tráfego</div><hr></hr>
      <div className='box'>Programação</div><hr></hr>
      <div className='box'>E-commerce</div><hr></hr>

    </div>
  );
}

export default App;
