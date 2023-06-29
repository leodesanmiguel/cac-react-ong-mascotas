import facebookIcon from "../../assets/img/face-icon-min.png";
import twitterIcon from "../../assets/img/twitter-min.png";
import instagramIcon from "../../assets/img/instagram-min.png";
import youtubeIcon from "../../assets/img/youtube-min.png";

export default function SocialBar() {

    return (
        <>
            <section className="d-flex barra-social">
                <div className="mensaje">
                    <h6>Rescatamos y ayudamos animales en situacion de abandono para luego darlos en adopcion responsable</h6>
                </div>
                <div className="d-flex social-icons">
                    <img className="social-imagenes" src={facebookIcon} alt="Logo Facebook" srcset="" />
                    <img className="social-imagenes" src={instagramIcon} alt="Logo Instagram" srcset="" />
                    <img className="social-imagenes-small" src={twitterIcon} alt="Logo Twitter" srcset="" />
                    <img className="social-imagenes-small" src={youtubeIcon} alt="Logo Youtube" srcset="" />
                </div>
            </section>
        </>
    )
}