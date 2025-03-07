import './iterador.css';
import {useRef, useState} from "react";

function Iterador() {
  const cajaIterador = useRef();
  // const [inicio, setInicio] = useState();
  
  const sumar1= (event)=>{
    event.target.innerHTML++;
    if(event.target.innerHTML == 8){
      cajaIterador.current.style.backgroundColor = "orange";
      
    }else if(event.target.innerHTML == 10){
      iniciar();
    }else{
      cajaIterador.current.style.backgroundColor = "";
    }
  }

  const iniciar = ()=>{
    cajaIterador.current.innerHTML=1;
  }
  
  // const iniciarNum= (event)=>{
  //   cajaIterador.current.innerHTML = event.target.value;
  // }

  return (
    <>
      <div className='contIterador'>
        <div ref={cajaIterador} className='iterador' onClick={sumar1}>
          1
        </div>
        <button onClick={iniciar}>Iniciar</button>
        <br/><br/>
        {/* Iniciar el iterador con 
        <input value={inicio} type="number" onChange={iniciarNum} /> */}
      </div>
    </>
  );
}

export default Iterador;
