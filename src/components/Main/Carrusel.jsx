import Pet1 from "../../assets/img/pexels-kat-smith-551628.jpg";
import Pet2 from "../../assets/img/pexels-snapwire-46024.jpg";
import Pet3 from "../../assets/img/pexels-cats-coming-1543793.jpg";
import Carousel from 'react-bootstrap/Carousel';
import "./carrusel.css";

function Carrusel() {
  return (
    <Carousel fade controls={false} indicators={false} className="margin-left ">
      <Carousel.Item>
        <img
          className="d-block w-100 imgSlice"
          src={Pet1}
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgSlice"
          src={Pet2}
          alt="Second slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgSlice"
          src={Pet3}
          alt="Third slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;