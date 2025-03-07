import React, { useState } from "react";

export default function Formulario({comparar}) {
    const [num, setNum] = useState();
    const modificar = (e) =>{
        setNum(e.target.value);
    }

    const comprobarAqui = () =>{
        comparar(num);
    }

    return (
        <>
            <div className="guess-section">
                <input type="number" id="guess" onChange={modificar} placeholder="Número" min="1" max="20" value={num} />
                <button onClick={comprobarAqui}>Check!</button>
            </div>
        </>
    );
}