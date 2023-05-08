// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Cards from "./Cards";

const WhatWeDo = ({isMobile}) => {
    return ( 
        <Swiper
          slidesPerView={isMobile ? 2 :  4}
          spaceBetween={isMobile ?  250 : 18}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Cards icon='./productlife.svg' title='Product Life'/>
          </SwiperSlide>
          <SwiperSlide>
            <Cards icon='./production.svg' title='Production'/>
          </SwiperSlide>
          <SwiperSlide>
            <Cards icon='./commercialization.svg' title='Commercialiazation'/>
          </SwiperSlide>
          <SwiperSlide>
            <Cards icon='./rd.svg' title='R&D'/>
          </SwiperSlide>
          <SwiperSlide>
            <Cards icon='./productdesign.svg' title='Product Design'/>
          </SwiperSlide>
          <SwiperSlide>
            <Cards icon='./supplychain.svg' title='Supply CHain'/>
          </SwiperSlide>
          <SwiperSlide>
            <Cards icon='./ideation.svg' title='Ideation'/>
          </SwiperSlide>
          {
            isMobile &&(
          <SwiperSlide>
            <Cards icon='./ideation.svg' title='Ideation'/>
          </SwiperSlide>)

          }
        </Swiper>
     );
}
 
export default WhatWeDo;