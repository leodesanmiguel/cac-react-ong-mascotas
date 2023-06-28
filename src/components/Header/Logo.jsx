import Logo from "../../assets/img/logo.png";
import "./header.css";
import { Link } from "react-router-dom";

export default function ImgLogo() {

    return (
        <>
            <div className="d-flex align-items-center ps-3 py-2 bg-warning sticky-top" >
                <Link to="*">
                    <img className="ps-3 imagen-logo" src={Logo} alt="Imagen Logo" />
                </Link>
                <h1 className="ps-5 fw-bold">PELUDITOS ONG</h1>
            </div>
        </>
    )
}
