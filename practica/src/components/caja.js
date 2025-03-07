import React from "react";
import "./caja.css"

export default function Caja({ color, nombre, cambiar}) {
    return (
        <div className="container">
            <div className="caja" style={{backgroundColor : color}}>
                <h3>{nombre}</h3>
                <input type="button" value="Seleccionar" onClick={cambiar} />
            </div>
        </div>
    );
}