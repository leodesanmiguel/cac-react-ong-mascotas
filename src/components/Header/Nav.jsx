import ImgLogo from "./Logo";
import "./header.css";
import { Link } from "react-router-dom";

 
function BarraNavegador() {
    return (
        <>
            <div className="sticky-top">
                <ImgLogo />
                <nav className="d-flex flex-row aligne-items-center  justify-content-end pe-4 border-top border-dark navegador">
                    <button className="boton" type="button">
                        <Link class="nav-link" to="quienes-somos">Quiénes Somos</Link>
                    </button>
                    <button className="boton" type="button">
                        <Link class="nav-link" to="quieres-adoptar">Querés Adoptar?</Link>
                    </button>
                    <button className="boton" type="button">
                        <Link class="nav-link" to="historias" href="/Cardslist">Historias</Link>
                    </button>
                    <button className="boton" type="button">
                        <Link class="nav-link" to="contacto">Contacto</Link>
                    </button>
                </nav>
            </div>

        </>
    )
}

export default BarraNavegador;