import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BarraNavegador() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="./logo.png/" alt="Logo" width="30px" height="30px" className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <Nav className="me-auto aligne-right">
                        <Nav.Link href="#">QUIENES SOMOS</Nav.Link>
                        <Nav.Link href="#">QUIERES ADOPTAR?</Nav.Link>
                        <Nav.Link href="#">HISTORIAS</Nav.Link>
                        <Nav.Link href="#">CONTACTO</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default BarraNavegador;