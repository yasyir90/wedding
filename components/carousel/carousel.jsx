
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./carousel.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

// import image
import tes from '../../src/assets/motherMale.jpg'

const Carousel=()=> {
  return (
    <div className="containerCarousel">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        initialSlide={2}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={tes} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tes} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tes} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tes} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tes} />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}


export default Carousel