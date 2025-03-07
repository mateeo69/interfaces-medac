import React from "react";
import Mensaje from "./Mensaje";
import Puntuacion from "./Puntuacion";

export default function ScoreSection({mensaje, puntuacion, puntuacionAlta}) {
    return (
        <>
            <div className="score-section">
                <br />
                <Mensaje mensaje={mensaje}/>
                <br />
                <Puntuacion etiqueta="Puntuacion: " valor={puntuacion} id="score"/>
                <Puntuacion etiqueta="Puntuación mas alta: " valor={puntuacionAlta} id="highscore" />
            </div>
        </>
    );
}