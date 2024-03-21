import { Col, Container, Row } from "react-bootstrap";
import MainTitleAndDescription from "./MainTitleAndDescription";
import InfoCard from "./InfoCard";
import image1 from "../../../public/icon-1.png"
import image2 from "../../../public/icon-2.png"
import image3 from "../../../public/icon-3.png"
import image4 from "../../../public/icon-4.png"
import image5 from "../../../public/icon-5.png"
import image6 from "../../../public/icon-6.png"
// change what upove and under this line
import image7 from "../../../public/vision.png"
import image8 from "../../../public/mission.png"
import image9 from "../../../public/value.png"

import Card from "./Card";

const WhyUsSection = () => {
  return (
      <div>
          <Container>
              <MainTitleAndDescription mainTitle="لماذا نحن شريكك التقني الأفضل؟" description={null} />
                <Row>
                    <Col>
                        <InfoCard icon={image1} title="خدمات احترافية" description="نحرص على رضا عملائنا عبر تنفيذ أفضل الحلول التقنية."/>
                    </Col>
                    <Col>
                        <InfoCard icon={image2} title="تقنيات حديثة" description="نضع آخر مستجدات التقنية بين يديك مع تحديثات مستمرة للأنظمة."/>
                    </Col>
                    <Col>
                        <InfoCard icon={image3} title="دعم فني لجميع المراحل" description="دعم فني معك من البداية وعبر جميع المراحل."/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InfoCard icon={image4} title="خدمات احترافية" description="نقدم لك حلول مبتكرة تتناسب مع نموذج عملك."/>
                    </Col>
                    <Col>
                        <InfoCard icon={image5} title="خدمات احترافية" description="أنظمتنا مصممة خصيصاً لتلائم مختلف العمليات في مؤسستك."/>
                    </Col>
                    <Col>
                        <InfoCard icon={image6} title="خدمات احترافية" description="نتيح لك ربط أنظمتنا مع خدمات أخرى لتحقيق التكامل."/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Card textAlignment="center" borderStyleing="border border-5 rounded p-2 w-50 m-auto" displayMore={false} icon={image7} title="رؤيتنا" description="أن نكون النموذج الأمثل للريادة التقنية في المنطقة."/>
                </Col>
                <Col>
                    <Card textAlignment="center" borderStyleing="border border-5 rounded p-2 w-50 m-auto" displayMore={false} icon={image8} title="رسالتنا" description="تحقيق أبعد مدى يمكن أن تصل إليه التقنية في حل مشاكل مختلف الأعمال."/>
                </Col>
                <Col>
                    <Card textAlignment="center" borderStyleing="border border-5 rounded p-2 w-50 m-auto" displayMore={false} icon={image9} title="قيمنا" description="قيمتنا تكمن في تقديم حلول استثنائية تدفعكم للنجاح وإلى المقدمة."/>
                    </Col>
                </Row>
        </Container>
    </div>
  )
}

export default WhyUsSection
