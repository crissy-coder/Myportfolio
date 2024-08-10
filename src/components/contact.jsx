import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";
import loc from './resume/Kommanavikas.pdf';
import { colors } from "@mui/material";

import bgimage024 from './images/bg022.jpg';

function Contactinfo() {

    // const handleDownload = () => {
    //     const link = document.createElement('a');
    //     link.href = './resume/Kommanavikas.pdf'; // path to the file in the public folder
    //     link.download = 'Kommanavikas.pdf'; // the name of the downloaded file
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    //   }
    return (
        <>
            <div style={{ backgroundColor: "#212121" }}>
                <div className="container p-5">
                    <h4 className="text-center biscut mobilehire"><button class="button">
                        Hire Me
                        <div class="hoverEffect">
                            <div></div>
                        </div>
                    </button></h4>
                    <div className="row text-center">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <h2 className="biscut">Resume</h2>


                            <a class="fancy" href={loc} download="Kommanavikas.pdf">
                                <span class="top-key"></span>
                                <span class="text">Download</span>
                                <span class="bottom-key-1"></span>
                                <span class="bottom-key-2"></span>
                            </a>


                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 mobilespace">
                            <h4 className="biscut">Make a Call/E-mail Me</h4><hr />
                            <h5 className=""><FaPhoneVolume className="biscut" />  <a href="tel:+919014295598"> +91 901429 5598</a><br /></h5>
                            <h5> <IoMailUnread className="biscut" /><a href="mailto:kommana02@gmail.com"> kommana02@gmail.com</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contactinfo;