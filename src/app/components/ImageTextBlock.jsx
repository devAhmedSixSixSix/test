import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

const ImageTextBlock = ({title, description, image}) => {
    return (
    <div className="bg-light">
        <Container>
            <Row className="d-flex align-items-center">
                <Col >
                    <h2>{title}</h2>
                    <p className="text-secondary">{description}</p>
                </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        
                    <Image src={image} alt="test" className="w-100 h-100"/> 
                </Col>
        </Row>
        </Container>
    </div>
  )
}

export default ImageTextBlock
