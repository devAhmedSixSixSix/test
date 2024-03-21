import { Col, Container, Row } from "react-bootstrap";
import MainTitleAndDescription from './MainTitleAndDescription'
import Card from "./Card";
import icon1 from "../../../public/service-1.png"
import icon2 from "../../../public/service-2.png"
import icon3 from "../../../public/service-3.png"

const OurServicesSection = () => {
  return (
    <div className="bg-light">
        <MainTitleAndDescription mainTitle="خدماتنا" description={null} />
        <Container>
            <Row>
                <Col>
                    <Card textAlignment="end" displayMore={true} icon={icon1} title="خدمات برمجة المواقع والتطبيقات" description="اطلق موقعك أو تطبيقك الإلكتروني الآن بجودة تصميم عالية وبنية برمجية قوية."/>
                </Col>
                <Col>
                    <Card textAlignment="end" displayMore={true} icon={icon2} title="خدمة الإستـضافة السحابية" description="كفاءة الأداء والمرونة في الإدارة بسرعة وأمان مع خدماتنــا السحـــابية."/>
                </Col>
                <Col>
                    <Card textAlignment="end" displayMore={true} icon={icon3} title="خدمات تصميم الأنظمة" description="اجمع التصميم الذكي والحل التقني في نظام واحد يسهّل سير أعمالك."/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OurServicesSection
