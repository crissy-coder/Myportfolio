import React,{useEffect} from "react";
import './Profile.css'
import Contactinfo from './contact'
import profilepic from './images/vikas.jpeg'

import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Aos from "aos";
import { duration } from "@mui/material";
import SliderParallax from "./sliderparallax";
import Myservices from './services';

function TypewriterTest() {

let [text] = useTypewriter({
    words: ['Developer','Designer','Photographer','Video Editor','Wordpress Developer','Team Co-Ordinator'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed : 80,
});
 
useEffect( () => {
  Aos.init({duration:2000})
},[])


    return (
        <>
            <div className="maindiv"> 
                <div className="container">
                    <div className="row">   
                        <div className="col-lg-6 col-md-6 col-sm-12"><hr className="text-white line" />
                            <span className="text-white text-left dev mx-2 mobiletext" data-aos="zoom-in-up" >Developer</span>
                            <h1 className="Autor" data-aos="fade-up">Kommana <br/>Vikas</h1><hr className="text-white" width={60}  data-aos="fade-up"/>
                            <span className="text-white mobilefont" data-aos="fade-up"> I Am</span> <br />
                            <span className="typoo mobilefont"  >
                              {text } <Cursor />
                            </span>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 me">
                            <img src={profilepic} alt="" width={550}  className="pic" data-aos="zoom-in-up"/>
                        </div>
                    </div>
                   
                </div> 
                <SliderParallax/>
                {/* <Myservices/> */}
               <Contactinfo/>
            </div>
        </>
    )
}

export default TypewriterTest;
