import styles from "./page.module.css";
import ImageTextBlock from "./components/ImageTextBlock";
import OurProductSection from "./components/OurProductSection";
import OurSloutionSection from "./components/OurSloutionSection";
import OurServicesSection from "./components/OurServicesSection";
import saaedSubscriptions from "../../public/saaed_subscriptions.png";
import homeAppsImg from "../../public/home-apps-img.png";
import Slider from "./components/Slider";
import FormOne from "./components/FormOne";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ImageTextBlock
          title="احصل على حلول تقنية متكاملة"
          description="متخصصون في بناء أنظمة تقنية بأدوات متكاملة تنمي أعمالك، تزيد مبيعاتك، وتدير مختلف العمليات الإدارية والتشغيلية في منشأتك بسلاسة."
          image={saaedSubscriptions}
        />
        <OurProductSection />
        <OurSloutionSection />
        <OurServicesSection />
        <ImageTextBlock
          title="إدارة أعمالك من أي جهاز وفي أي مكــان"
          description="بإمكانك متابعة أعمالك على أي جهاز تملكه، فأنظمتنا تعمل على جميع الأجهزة والمنصـات بنفس الكفاءة"
          image={homeAppsImg}
        />
        <Slider />
        <FormOne />
      </div>
    </main>
  );
}
