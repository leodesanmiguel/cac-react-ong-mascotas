import Carousel from 'react-bootstrap/Carousel';
import { Container, Button } from 'react-bootstrap';
import "./carruselMenu.css";

function CarruselMenu() {
    return (
        <Carousel fade controls={false} indicators={false} className="backgImg">
            <Carousel.Item>
                <Container className="contenedorMenuCarrusel">
                    <h1>Ayudanos</h1>
                    <h3>sumate <span>como voluntario</span></h3>
                    <p>Sumate a nuestro equipo de Voluntarios que dia a dia nos ayudan en nuestro trabajo.</p>
                    <Button variant="warning" className="buttons">QUIERO SER VOLUNTARIO</Button>
                </Container>

                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Container className="contenedorMenuCarrusel">
                    <h1>Adoptá y</h1>
                    <h3>hacé <span>la diferencia</span></h3>
                    <p>Hay cientos de perros y gatos esperando tener un hogar.
                        ¿Querés adoptar?
                    </p>
                    <Button variant="warning" className="buttons">ADOPTÁ</Button>
                </Container>


                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Container className="contenedorMenuCarrusel">
                    <h1>Colaborá y</h1>
                    <h3>ayudanos a <span>ayudarlos</span></h3>
                    <p>Tu ayuda nos permite seguir rescatando y ayudando animales en situación de abandono</p>
                    <Button variant="warning" className="buttons">QUIERO COLABORAR</Button>
                </Container>

                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarruselMenu;