"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; 

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import logo1 from "../../../public/logo-1.png"
import logo2 from "../../../public/logo-2.png"
import logo3 from "../../../public/logo-3.png"
import logo4 from "../../../public/logo-4.png"
import logo5 from "../../../public/logo-5.png"
import logo6 from "../../../public/logo-6.png"
import logo7 from "../../../public/logo-7.png"

const Slider = () => {
    return (
    <>
        <Swiper
            slidesPerView={6}
            spaceBetween={30}
                freeMode={true}
                loop={true}
            pagination={{
            clickable: true,
                }}
            autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
            modules={[Autoplay, Pagination]}
            className="mySwiper my-5"
        >
        <SwiperSlide>
            <Image src={logo1} alt="test" className="w-50 mb-5"/> 
        </SwiperSlide>
        <SwiperSlide>
            <Image src={logo2} alt="test" className="w-50"/> 
        </SwiperSlide>
        <SwiperSlide>
            <Image src={logo3} alt="test" className="w-50"/> 
        </SwiperSlide>
        <SwiperSlide>
            <Image src={logo4} alt="test" className="w-50"/> 
        </SwiperSlide>
        <SwiperSlide>
            <Image src={logo5} alt="test" className="w-50"/> 
        </SwiperSlide>
        <SwiperSlide>
            <Image src={logo6} alt="test" className="w-50"/> 
        </SwiperSlide>
        <SwiperSlide>
                <Image src={logo7} alt="test" className="w-75"/> 
        </SwiperSlide>
        </Swiper>
    </>
  )
}

export default Slider
