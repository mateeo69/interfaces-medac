import logo from './logo.svg';
import BtnReiniciar from './components/BtnReiniciar';
import Adivina from './components/Adivina';
import Formulario from './components/Formulario';
import Index from './components/Textos';
import { useState } from 'react';

import './App.css';

function App() {
  
  const generarNumSecreto = () => {
    return Math.trunc(Math.random()*20)+1;
  }

  const [numSecreto, setNumSecreto] = useState(generarNumSecreto);
  const [mensaje, setMensaje] = useState("Empieza a adivinar...");
  const [puntuacion, setPuntuacion] = useState(20);
  const [puntuacionAlta, setPuntuacionAlta] = useState(0);
  
  const reiniciar = () =>{
    setNumSecreto(generarNumSecreto);
    setMensaje("Empieza a adivinar...");
    setPuntuacion(20);
    document.body.style.backgroundColor = "#222";
  }

  const comparar = (num) =>{
    if (!num) setMensaje("Debes introducir un número");
    else{
      if(Number(num) == numSecreto) {
        setMensaje("Has ganado");
        document.body.style.backgroundColor = "green";
        if(puntuacion > puntuacionAlta) setPuntuacionAlta(puntuacion);
      }
      else {
        if(puntuacion > 1 ){
            if(Number(num) > numSecreto) setMensaje("Tu número es alto");
            else setMensaje("Tu número es bajo")
            setPuntuacion(puntuacion-1);
        }else{
          setMensaje("Has perdido!!");
          document.body.style.backgroundColor = "red";
        }
      }
    }
  }

  return (
    <div className="container">
      <BtnReiniciar reiniciar={reiniciar}/>
      <h1>¡Adivina mi número entre 1 y 20!</h1> {numSecreto}
      <Adivina />
      <br />
      <Formulario comparar={comparar}/>
      <Index mensaje={mensaje} puntuacion={puntuacion} puntuacionAlta={puntuacionAlta}/>
    </div>
  );
}

export default App;
