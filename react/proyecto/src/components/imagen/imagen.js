import "./imagen.css";
import { useRef } from "react";
import imagen1 from "../../img/imagen1.jpg";
import imagen2 from "../../img/imagen2.jpg";

function Imagen() {
	//Para acceder al DOM usamos el hook useRef
	const foto = useRef();

	const cambiarFoto = () => {
		let src = foto.current.src
		//No confundir include, con includes.
		//El primero es para arrays, el segundo para strings.
		if (src.includes("imagen1")) foto.current.src = imagen2;
		else if (src.includes("imagen2")) foto.current.src = imagen1;
		
	}

	return (
		<>
			<div className='contenedor'>
				<img src={imagen1} onClick={cambiarFoto} ref={foto} />
			</div>
		</>
	);
}

export default Imagen;
