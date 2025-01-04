import {Container, Row, Col, Button} from "reactstrap";
import SubHeader from "../components/SubHeader";
import BackButton from "../components/BackButton";
import {Link} from "react-router-dom";

const InspQuotePage = () => {
    return (
        <Container>

            <SubHeader current="an Inspirational Quote" />

            <Row>
                <Col>
                    <p>test</p>
                </Col>
            </Row>

            <Row>
                <Col>
                    <BackButton />
                </Col>

                <Col>                    
                    <Button>API</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default InspQuotePage;