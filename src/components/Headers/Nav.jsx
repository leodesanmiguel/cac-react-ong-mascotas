
import "./header.css";
import { Link } from "react-router-dom";

function BarraNavegador() {
    return (
        <>
            <nav className="navegador">
                <button className="boton" type="button">
                    <Link class="nav-link" to="quienes-somos">Quienes Somo</Link>
                </button>
                <button className="boton" type="button">
                    <Link class="nav-link" to="quieres-adoptar">Quieres Adoptar?</Link>
                </button>
                <button className="boton" type="button">
                    <Link class="nav-link" to="historias">Historias</Link>
                </button>
                <button className="boton" type="button">
                    <Link class="nav-link" to="contacto">Contacto</Link>
                </button>
            </nav>
        </>
    )
}

export default BarraNavegador;