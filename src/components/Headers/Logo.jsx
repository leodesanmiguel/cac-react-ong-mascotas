import Logo from "../../assets/img/logo.png";
import "./header.css";
export default function ImgLogo() {

    return (
        <>
            <div className="imagen-header">
                <img className="" src={Logo} alt="Imagen Logo" />
                <h1 className="titulo-header">PELUDITOS ONG</h1>
            </div>

        </>
    )
}
