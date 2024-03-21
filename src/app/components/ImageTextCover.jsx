import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import image from "../../../public/header-img.png";

const ImageTextCover = ({title}) => {
    return (
    <div className="bg-light">
        <Container>
            <Row className="d-flex align-items-center">
                <Col xs={3} lg={4}>
                    <h2>{title}</h2>
                </Col>
                <Col xs={9} lg={8} className="d-flex align-items-center justify-content-center">
                    <Image src={image} alt="test" className="w-100 h-100"/> 
                </Col>
        </Row>
        </Container>
    </div>
  )
}

export default ImageTextCover
