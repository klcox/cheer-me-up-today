import {Container, Row, Col, Button} from "reactstrap";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <Container>          

            <Row className="mb-2">
                <Col>
                    <Link to="/dadjoke">
                        <Button>Tell me a Dad Joke</Button>
                    </Link>
                </Col>

                <Col>
                    <Link to="/kittypic">
                        <Button>Show me a cute Kitty Pic</Button>
                    </Link>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Link to="/calmingvideo">
                        <Button>Play a Calming Video</Button>
                    </Link>
                </Col>

                <Col>
                    <Link to="/inspquote">
                        <Button>Show me an Inspirational Quote</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;