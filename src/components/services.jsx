// import React from "react";

// function Myservices() {
//     return (
//         <div className="container">
//             <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
//                 <div class="carousel-inner">
//                     <div class="carousel-item active">
//                         {/* <img src="..." class="d-block w-100" alt="..."> */}
//                     </div>
//                     <div class="carousel-item">
//                         {/* <img src="..." class="d-block w-100" alt="..."> */}
//                     </div>
//                     <div class="carousel-item">
//                         {/* <img src="..." class="d-block w-100" alt="..."> */}
//                     </div>
//                 </div>
//                 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
//                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span class="visually-hidden">Previous</span>
//                 </button>
//                 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
//                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span class="visually-hidden">Next</span>
//                 </button>
//             </div>
//         </div>
//     )
// };

// export default Myservices;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';


import image01 from './images/black.jpg'
import image02 from './images/bg2.png'
// import image03 from './images/car.jpg'
import image04 from  './images/tech.jpg'
import image05 from './images/aboutimge.jpeg'
const Myservices = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow]}
      spaceBetween={30}
      slidesPerView={3}
      centeredSlides={true}
      effect="coverflow"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      scrollbar={{ draggable: true }}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      <SwiperSlide style={complexSlideStyle}>
        <img src={image01} alt="Slide 1" width={300}/>
      </SwiperSlide>
      <SwiperSlide style={complexSlideStyle}>
        <img src={image02} alt="Slide 2" width={300}/>
      </SwiperSlide>
      {/* <SwiperSlide style={complexSlideStyle}>
        <img src={image03} alt="Slide 3" width={300}/>
      </SwiperSlide> */}
      <SwiperSlide style={complexSlideStyle}>
        <img src={image04} alt="Slide 4" width={300}/>
      </SwiperSlide>
      <SwiperSlide style={complexSlideStyle}>
        <img src={image05} alt="Slide 5" width={300}/>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

const complexSlideStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#eee',
  height: '100%',
};

export default Myservices;