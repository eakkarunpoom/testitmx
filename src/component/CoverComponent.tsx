import { Row,Col,Button } from "react-bootstrap";
import "./coverComponent.css";

function CoverComponent():JSX.Element{
    return(
        <Row className="cover-bg">
            <Col>
                <h1>
                    CRUD Product
                </h1>
            </Col>
        </Row>
    )
}

export default CoverComponent;