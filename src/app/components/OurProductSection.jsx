import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card"
import icon1 from "../../../public/product-1.svg"
import icon2 from "../../../public/product-2.svg"
import icon3 from "../../../public/product-3.svg"
import icon4 from "../../../public/product-4.svg"
import icon5 from "../../../public/product-5.svg"
import icon6 from "../../../public/product-6.svg"
import MainTitleAndDescription from "./MainTitleAndDescription";

const OurProductSection = () => {
    
  return (
    <div className="bg-light py-5">
        <Container>
        <MainTitleAndDescription mainTitle="منتجاتنا" description="تعرّف على حلولنا المرنة المصممة خصيصاً لتناسب أعمالك"/>
        <Row className="mb-4">
            <Col>
                <Card textAlignment="center" displayMore={true} className="h-100" icon={icon1} title="SAAED REALESTATE | نظام السعد العقاري" description="قم بإدارة جميع عقاراتك الآن من لوحة تحكم واحدة." />   
            </Col>
            <Col>
                <Card textAlignment="center" displayMore={true} className="h-100" icon={icon2} title="SAAED CRM | إدارة علاقات العملاء" description="اضمن رضا عملائك عبر إداراتنا الفعالة لجميع مراحل رحلة العميل." />  
            </Col>
            <Col>
                <Card textAlignment="center" displayMore={true} className="h-100" icon={icon3} title="SAAED POS | نقاط البيع" description="نقدم لك نقطة بيع عالية الأداء تسهل لك إدارة المبيعات والمشتريات بكفاءة" />
            </Col>
        </Row>
        <Row>
            <Col>
                <Card textAlignment="center" displayMore={true} className="h-100" icon={icon4} title="SAAED RST | نظام إدارة المطاعم والمقاهي" description="إدارة جميع عمليات مطعمك من مكان واحد وبكفاءة عالية" />  
            </Col>
            <Col>
                <Card textAlignment="center" displayMore={true} className="h-100" icon={icon5} title="SAAEDPAY | نظام السعد للمدفوعات" description="نقدم لكم حلول دفع مرنة ومتعددة الميزات" />     
            </Col>
            <Col>
                <Card textAlignment="center" displayMore={true} className="h-100" icon={icon6} title="SAAED ERP | نظام السعد للمؤسسات" description="احصل على آلية إدارة سلسة لجميع موارد وعمليات شركتك ." />    
            </Col>
        </Row>
        </Container>
    </div>
  
)}

export default OurProductSection
