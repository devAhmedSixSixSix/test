import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
import MainTitleAndDescription from "./MainTitleAndDescription";
import image1 from "../../../public/sector-1.png"
import image2 from "../../../public/sector-2.png"
import image3 from "../../../public/sector-3.png"
import image4 from "../../../public/sector-2.png"

const OurWideRangeServisesSection = () => {
  return (
    <div>
        <Container>
            <MainTitleAndDescription mainTitle="لماذا نحن شريكك التقني الأفضل؟" description={null} />
            <Row>
                <Col>
                    <Card textAlignment="center" borderStyleing="" displayMore={false} icon={image1} title="قطاع التعليم والتدريب" description=""/>
                </Col>
                <Col>
                    <Card textAlignment="center" borderStyleing="" displayMore={false} icon={image2} title="قطاع بيع التجزئة" description=""/>
                </Col>
                <Col>
                    <Card textAlignment="center" borderStyleing="" displayMore={false} icon={image3} title="قطاع المطاعم والمقاهي" description=""/>
                </Col>
                <Col>
                    <Card textAlignment="center" borderStyleing="" displayMore={false} icon={image4} title="قطاع العقارات" description=""/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OurWideRangeServisesSection
