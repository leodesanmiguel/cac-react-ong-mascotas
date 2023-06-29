import Logo from "../../assets/img/logo.png";
import "./header.css";
export default function ImgLogo() {

    return (
        <>
            <div className="d-flex align-items-center ps-3 py-2 bg-warning" >
                <img className="ps-3 imagen-logo" src={Logo} alt="Imagen Logo" />
                <h1 className="ps-5 fw-bold">PELUDITOS ONG</h1>
            </div>

        </>
    )
}
