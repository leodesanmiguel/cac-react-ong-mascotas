import Carousel from 'react-bootstrap/Carousel';
import "./carruselMenu.css";

function CarruselMenu() {
    return (
        <Carousel fade controls={false} indicators={false} className="backgImg">
            <Carousel.Item>
                <h1>Ayudanos</h1>
                <h3>sumate <span>como voluntario</span></h3>
                <p>Sumate a nuestro equipo de Voluntarios que dia a dia nos ayudan en nuestro trabajo.</p>
                <button>QUIERO SER VOLUNTARIO</button>
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <h1>Adopta y</h1>
                <h3>hace <span>la diferencia</span></h3>
                <p>Hay cientos de perros y gatos esperando tener un hogar.
                    ¿Queres adoptar?
                </p>
                <button>ADOPTA</button>
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <h1>Colabora y</h1>
                <h3>ayudanos a <span>ayudarlos</span></h3>
                <p>Tu ayuda nos permite seguir rescatando y ayudando animales en situacion de abandono</p>
                <button>QUIERO COLABORAR</button>
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarruselMenu;