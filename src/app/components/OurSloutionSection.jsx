import { Col, Container, Row } from "react-bootstrap";
import InfoCard from "./InfoCard"
import MainTitleAndDescription from "./MainTitleAndDescription"
import icon1 from "../../../public/icon-service-1.svg"
import icon2 from "../../../public/icon-service-2.svg"
import icon3 from "../../../public/icon-service-3.svg"

const OurSloutionSection = () => {
  return (
    <div>
        <Container>
            <MainTitleAndDescription mainTitle="حلول متكاملة وخيارات لا محدودة" description={null} />
            <Row>
                <Col>
                    <InfoCard title="خدمة احترافية" description="نحرص على رضا عملائنا عبر تنفيذ أفضل الحلول التقنية." icon={icon1}/>
                </Col>
                <Col>
                    <InfoCard title="تقنيات حديثة" description="آخر مستجدات التقنية بين يديك." icon={icon2}/>
                </Col>
                <Col>
                    <InfoCard title="دعم فني لجميع المراحل" description="دعم فني معك من البداية وعبر جميع المراحل." icon={icon3}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OurSloutionSection
