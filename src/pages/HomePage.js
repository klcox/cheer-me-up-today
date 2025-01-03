import {Container, Row, Col, Button} from "reactstrap";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <Container>            

            <Row>
                <Col>
                    <h2>How can I cheer you up today?</h2>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Link to="/dadjoke">
                        <Button>Dad Joke</Button>
                    </Link>
                </Col>

                <Col>
                    <Link to="/kittypic">
                        <Button>Kitty Pic</Button>
                    </Link>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Link to="/calmingvideo">
                        <Button>Calming Video</Button>
                    </Link>
                </Col>

                <Col>
                    <Link to="/inspquote">
                        <Button>Inspirational Quote</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;