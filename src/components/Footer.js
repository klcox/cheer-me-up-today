import {Container, Row, Col} from "reactstrap";
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <footer className="mt-5">
            <Container>
                <Row>
                    <Col md="1">
                        <Link to="/about">About</Link>                      
                    </Col>

                    <Col md="1">
                        <Link to="/contactus">Contact Us</Link>                      
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;