import logo from './logo.svg';
import Titulo from './components/titulo';
import Caja from './components/caja';

import { useState } from 'react';
import './App.css';

function App() {

  const famosos = [
    {
      nombre: "Pablo Alborán",
      color: "red",
      precio: 100
    },
    {
      nombre: "Aitana",
      color: "purple",
      precio: 120
    },
    {
      nombre: "Abraham Mateo",
      color: "blue",
      precio: 140
    },
    {
      nombre: "Ana Mena",
      color: "violet",
      precio: 150
    },
    {
      nombre: "Manuel Carrasco",
      color: "green",
      precio: 125
    },
    {
      nombre: "Rosalia",
      color: "orange",
      precio: 180
    }
  ]

  const [titulo, setTitulo] = useState("nadie");
  const [dinero, setDinero] = useState(0);

  const cambiar = (nombre, dineroF) => {
    setDinero(dineroF);
    
    setTitulo(nombre,dinero);
  
  }

  return (
    <>
      <div className='container'>
        <Titulo persona={titulo} dinero={dinero} />
        <Caja nombre={famosos[0]["nombre"]} color={famosos[0]["color"]} dinero={famosos[0]["dinero"]} onClick={cambiar}/>
        <Caja nombre={famosos[1]["nombre"]} color={famosos[1]["color"]} dinero={famosos[1]["dinero"]} onClick={cambiar}/>
        <Caja nombre={famosos[2]["nombre"]} color={famosos[2]["color"]} dinero={famosos[2]["dinero"]} onClick={cambiar}/>
        <Caja nombre={famosos[3]["nombre"]} color={famosos[3]["color"]} dinero={famosos[3]["dinero"]} onClick={cambiar}/>
        <Caja nombre={famosos[4]["nombre"]} color={famosos[4]["color"]} dinero={famosos[4]["dinero"]} onClick={cambiar}/>
        <Caja nombre={famosos[5]["nombre"]} color={famosos[5]["color"]} dinero={famosos[5]["dinero"]} onClick={cambiar}/>
      </div>
    </>
  );
}

export default App;
