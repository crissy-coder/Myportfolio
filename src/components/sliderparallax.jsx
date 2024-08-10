import React from "react";
import { useState } from 'react';
import { Parallax } from "react-parallax";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';


import aboutimage from './images/aboutimge.jpeg'

import bgimage01 from './images/o2.jpg';
import bgimage02 from './images/black.jpg';
import bgimage03 from './images/bglast.png';



import image01 from './images/sarwall.png'
import image02 from './images/h2.png'
import image03 from './images/elumalai.png'
import image04 from './images/isha.png'
import image05 from './images/drseena.png'
import image1 from './images/akruti.png'
import image2 from './images/arcus.png'
import image3 from './images/gummadi.png'

import image06 from './images/wordpress.png'
import image07 from './images/adobe.png'
import image08 from './images/elementor.png'
import image09 from './images/wppage.jpg'
import image10 from './images/html.png'
import image11 from './images/css.png'
import image12 from './images/js.png'
import image13 from './images/react.png'
import image14 from  './images/vidoes.jpg'


function SliderParallax() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    return (
        <>
            <div>
                <Parallax strength={600} className="bg" bgImage={bgimage01}>
                    <div className="container">
                        <div className="row p-3 ">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <img src={aboutimage} alt="" width={350} data-aos="fade-up" className="mx-5 mobilepic" />
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <h3 className="biscut fws">About me</h3>
                                <p className="text-white abttext mobiletxt">Aspiring web developer with a strong foundation in front-end technologies, including HTML, CSS, JavaScript, and React.js, seeking to leverage my skills to build dynamic and responsive web applications. Experienced in using Photoshop for graphic design and video editing tools for multimedia content creation. Passionate about creating seamless user experiences and solving complex problems through innovative solutions. Eager to contribute to a collaborative team and grow professionally in a forward-thinking organization.</p>
                                <div>
                                    <p>
                                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Skills</a>
                                        <a class="btn btn-primary mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Experience</a>
                                        <a class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">Education</a>
                                    </p>
                                    <div class="row">
                                        <div class="col-lg-4 col-md-4 col-sm-12">
                                            <div class="collapse multi-collapse" id="multiCollapseExample1">
                                                <div class="card card-body">
                                                    <ul>
                                                    <li>HTML5</li>
                                                    <li>CSS3</li>
                                                    <li>Javascript</li>
                                                    <li>React.js</li>
                                                    <li>Wordpress Developer</li>
                                                    <li>Photoshop</li>
                                                    <li>Video Editor</li>
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-12">
                                            <div class="collapse multi-collapse" id="multiCollapseExample2">
                                                <div class="card card-body">
                                                Motivated WordPress developer with less than 2 years of experience, specializing in editing and enhancing React.js websites. Adept at customizing WordPress themes and plugins, as well as making improvements to existing React.js sites to optimize performance and user experience.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-12">
                                            <div class="collapse multi-collapse" id="multiCollapseExample3">
                                                <div class="card card-body">
                                                <ul><li>Recent BCA graduate from Siddhartha Degree & PG College (2022)</li>
                                                <li>and completed my inter Education in NRI Junior College (MPC)(2019)</li>
                                                <li>and SCC completed in (2017)</li></ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>
                <Parallax strength={600} style={{backgroundColor:"#212121"}} className="bg" width={350}>

                    <h1 className="container biscut p-4">Projects</h1>
                    <div className="text-center  container">
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
                        className="pb-4">
                            <SwiperSlide style={complexSlideStyle}>
                               <a href="https://sarwalldecors.com/" target="_blank"> <img src={image01} alt="Slide 1" height={260} /></a>
                            </SwiperSlide>
                            <SwiperSlide style={complexSlideStyle}>
                               <a href="https://halohuesstudios.com/" target="_blank"> <img src={image02} alt="Slide 2" height={260} /></a>
                            </SwiperSlide>
                            <SwiperSlide style={complexSlideStyle}>
                               <a href="http://www.elumalailandscape.com/" target="_blank" rel="noopener noreferrer"> <img src={image03} alt="Slide 3" height={260} /></a>
                            </SwiperSlide>
                            <SwiperSlide style={complexSlideStyle}>
                               <a href="https://ishakidsclinic.com/" target="_blank" rel="noopener noreferrer"> <img src={image04} alt="Slide 4" height={260} /></a>
                            </SwiperSlide>
                            <SwiperSlide style={complexSlideStyle}>
                               <a href="https://drseenasdental.com/" target="_blank" rel="noopener noreferrer"><img src={image05} alt="Slide 5" height={260} /> </a>
                            </SwiperSlide>
                            <SwiperSlide style={complexSlideStyle}>
                               <a href="https://akruti.co.in/" target="_blank" rel="noopener noreferrer"><img src={image1} alt="Slide 5" height={260} /></a>
                            </SwiperSlide>
                            <SwiperSlide style={complexSlideStyle}>
                               <a href="https://www.arcusplasticsurgery.com/" target="_blank" rel="noopener noreferrer"> <img src={image2} alt="Slide 5" height={260} /></a>
                            </SwiperSlide>
                            <SwiperSlide style={complexSlideStyle}>
                               <a href="https://gummadifoods.com/" target="_blank" rel="noopener noreferrer"><img src={image3} alt="Slide 5" height={260} /></a> 
                            </SwiperSlide>
                            {/* <SwiperSlide style={complexSlideStyle}>
                                <img src={image4} alt="Slide 5" width={300} />
                            </SwiperSlide> */}
                            ...
                        </Swiper>
                    </div>

                </Parallax>
                <div className="container">
                    <h2 className="biscut text-center">Projects</h2>
                    <h3 className="text-white">Build Static Websites ( 15 + )</h3>
                    <h4 className="text-white">Objective:</h4><p className="respontext">Developed static websites on wordPress where user can easily
                        understand the ami of particular organization through website.
                    </p> <h4 className="text-white">Role:</h4><p className="respontext">To develop website with user-feel, and easy to understand the flow, and
                        making available on all devices with proper responsive and giving scroll base
                        entrance effects with appropriate timing and meet the client requirements.
                    </p>
                    <h4 className="text-white">Tools:</h4><p className="respontext">In wordpress I have used different plugins like
                        (Elementor,Elementor Pro, Wp- bakery, Contact from 7,Cache
                        Plugins,Photoshop) and other which are require for particular website to develop
                    </p>
                </div>

                <div className="container">
                    {/* <h2 className="biscut text-center">My Responsibilities</h2> */}
                    <h3 className="text-white pt-5">Build Dynamic Websites ( 3 + )</h3>
                    <h4 className="text-white">Objective:</h4><p className="respontext">Developed Dynamic websites on wordpress where user can easily interact with particular element. <b>  (Booking appointments)</b>

                    </p> <h4 className="text-white">Role:</h4><p className="respontext">To develop website in wordpress, Where use can easily book appointments
                        and get notification to client and user and simultaneously creating user dashboard
                        with respective of theme features.
                    </p>
                    <h4 className="text-white">Tools:</h4><p className="respontext"> In Wordpress I used to plugins develop dynamic actions, some are like
                        (Elementor,Elementor Pro,Contact from 7,Popup plugins,Booking related
                        plugins)
                    </p>
                </div>

                <div className="container">
                    {/* <h2 className="biscut text-center">My Responsibilities</h2> */}
                    <h3 className="text-white pt-5">React Developer (2 +):</h3>
                    <h4 className="text-white">Objective:</h4><p className="respontext">To develop website in react.

                    </p> <h4 className="text-white">Role:</h4><p className="respontext">To develop website in react, where we develop sites which are pre-build
                        Templates.

                    </p>
                    <h4 className="text-white">Tools:</h4><p className="respontext"> To develop websites in react we use tools like
                        (Vs Code,react library,Photoshop)
                    </p>
                </div>


                <div className="container">
                    {/* <h2 className="biscut text-center">My Responsibilities</h2> */}
                    <h3 className="text-white pt-5">Build Dynamic Websites ( 3 + )</h3>
                    <h4 className="text-white">Objective:</h4><p className="respontext">Developed Dynamic websites on wordpress where user can easily interact with particular element. <b>  (Booking appointments)</b>

                    </p> <h4 className="text-white">Role:</h4><p className="respontext">To develop website in wordpress, Where use can easily book appointments
                        and get notification to client and user and simultaneously creating user dashboard
                        with respective of theme features.
                    </p>
                    <h4 className="text-white">Tools:</h4><p className="respontext"> In Wordpress I used to plugins develop dynamic actions, some are like
                        (Elementor,Elementor Pro,Contact from 7,Popup plugins,Booking related
                        plugins)
                    </p>
                </div>

                <div className="container">
                    {/* <h2 className="biscut text-center">My Responsibilities</h2> */}
                    <h3 className="text-white pt-5">Role as Wordpress Developer:</h3>
                    <h4 className="text-white">Maintenance:</h4><p className="respontext">To maintain the websites and its backups and loading time by
                        optimization and updating content and adding plugins as per requirements and make
                        sure for content is relevant to SEO.</p>
                </div>
                <Parallax strength={600} bgImage={bgimage03} className="bg">
                    <h1 className="container biscut">My Skills</h1>
                    <div className="text-center container">
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
                                <img src={image06} alt="Slide 1" width={230} />
                            </SwiperSlide>
                            <SwiperSlide style={complexSlideStyle}>
                                <img src={image07} alt="Slide 2" width={230} />
                            </SwiperSlide>
                            <SwiperSlide style={complexSlideStyle}>
                                <img src={image08} alt="Slide 3" width={230} />
                            </SwiperSlide>
                            <SwiperSlide style={complexSlideStyle}>
                                <img src={image09} alt="Slide 4" width={230} />
                            </SwiperSlide>
                            <SwiperSlide style={complexSlideStyle}>
                                <img src={image10} alt="Slide 5" width={230} />
                            </SwiperSlide>
                            <SwiperSlide style={complexSlideStyle}>
                                <img src={image11} alt="Slide 5" width={230} />
                            </SwiperSlide>
                            <SwiperSlide style={complexSlideStyle}>
                                <img src={image12} alt="Slide 5" width={230} />
                            </SwiperSlide>
                            <SwiperSlide style={complexSlideStyle}>
                                <img src={image13} alt="Slide 5" width={230} />
                            </SwiperSlide>
                            <SwiperSlide style={complexSlideStyle}>
                                <img src={image14}  alt="slide 5" width={230} />
                            </SwiperSlide>
                            ...
                        </Swiper>
                    </div>
                </Parallax>
            </div>
        </>
    )
}
const complexSlideStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    height: '100%',
};
export default SliderParallax;