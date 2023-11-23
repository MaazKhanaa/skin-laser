import React from "react";
import "./pages.css";
import MainHeading from "../components/common/mainHeading/mainheading.js";
import BreadCrumb from "../components/common/breadCrumb/breadcrumb";
import TopHeading from "../components/common/topHeading/topheading";
import Img1 from "../../src/images/Gallery/1.jpg";
import Img2 from "../../src/images/Gallery/2.jpg";
import Img3 from "../../src/images/Gallery/3.PNG";
import Img4 from "../../src/images/Gallery/4.PNG";
import Img5 from "../../src/images/Gallery/5.jpg";
import Img6 from "../../src/images/Gallery/6.jpg";

export default function Gallery() {
    return (
        <React.Fragment>
            <div className="topHeading">
                <div className="container">
                    <BreadCrumb text_1="Home" text_2="Gallery" />
                    <TopHeading text="Gallery" description="Explore our treatment images here" />
                </div>
            </div>

            <div className="container my-4">
                <MainHeading text="Gallery" />
                <div className='row'>
                    <div className='col-lg-4 mb-4 mb-lg-0'>
                        <img src={Img1} className=' d-inline-flex galleryImage' />
                    </div>
                    <div className='col-lg-4'>
                        <div className='row'>
                            <div className='col-lg-6 mb-4'>
                                <img src={Img5} className='d-inline-flex object-fit-cover galleryImage' />
                            </div>
                            <div className='col-lg-6 mb-4'>
                                <img src={Img3} className='d-inline-flex object-fit-cover galleryImage' />
                            </div>
                            <div className='col-lg-6 mb-4 mb-lg-0'>
                                <img src={Img4} className='d-inline-flex object-fit-cover galleryImage' />
                            </div>
                            <div className='col-lg-6 mb-4 mb-lg-0'>
                                <img src={Img6} className='d-inline-flex object-fit-cover galleryImage' />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <img src={Img2} className='d-inline-flex galleryImage' />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}