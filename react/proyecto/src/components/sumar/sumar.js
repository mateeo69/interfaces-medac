import { useRef } from "react";
import "./sumar.css";

function Sumar() {
  const sumaTotal = useRef();
  const valor1 = useRef();
  const valor2 = useRef();

  const sumar = ()=>{
    sumaTotal.current.value = parseInt(valor1.current.value) + parseInt(valor2.current.value);
  }

  return (
    <> 
      <div className='container'>
        <input type='number' ref={valor1}/>
        +
        <input type='number' ref={valor2}/>
        =
        <input type='text' ref={sumaTotal} value="" readOnly/>
        <input type="button" value="Suma" onClick={sumar}/>
      </div>
    </>
  );
}

export default Sumar;