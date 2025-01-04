import {Row, Col, Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";

const SubHeader = ({current}) => {
    return (
        <Row>
            <Col>
                <Breadcrumb>

                    <BreadcrumbItem>
                        <Link to="/">Home</Link>
                    </BreadcrumbItem>                  
                                      
                    <BreadcrumbItem active>
                        {current.slice(2)}                       
                    </BreadcrumbItem>

                </Breadcrumb>

                <h2 className="text-center">Here's {current} for you:</h2>
                <hr />
            </Col>
        </Row>
    );
}

export default SubHeader;