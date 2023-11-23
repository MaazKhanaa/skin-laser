import React from "react";
import "./pages.css";
import MainHeading from "../components/common/mainHeading/mainheading.js";
import BreadCrumb from "../components/common/breadCrumb/breadcrumb";
import TopHeading from "../components/common/topHeading/topheading";
import { aboutUsPic } from "../components/constants/aboutus.ts";
import { aboutUsData } from "../components/constants/aboutus.ts";

export default function About() {
    return (
        <React.Fragment>
            <div className="topHeading">
                <div className="container">
                    <BreadCrumb text_1="Home" text_2="About" />
                    <TopHeading text="About" description="Discover your best skin journey here" />
                </div>
            </div>

            <div className="container my-4">
                <MainHeading text="About" />
                <div className="row">
                    <div className="col-lg-5">
                        {aboutUsPic.map((item) => (
                            <img src={item.imag} className='docImg' />
                        ))}
                    </div>
                    <div className="col-lg-7 mt-4 mt-lg-0">
                        {aboutUsData.map((item) => (
                            <div>
                                <h2 className="primary-color">Dr Rahmat Ali</h2>
                                <h4 className="primary-color">MBBS, MRCP(London), FCPS(Derma)</h4>
                                <h5 className="primary-color">Skin & Laser Specialist</h5>
                                <p>{item.text}</p>
                                <p>{item.text1}</p>
                                <p>{item.text2}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}