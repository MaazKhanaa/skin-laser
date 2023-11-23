import React from "react";
import BreadCrumb from "../components/common/breadCrumb/breadcrumb";
import TopHeading from "../components/common/topHeading/topheading";
import './pages.css';
import { servicesArray } from "../components/constants/services.ts";
import MainHeading from "../components/common/mainHeading/mainheading.js";

export default function Services() {
    return (
        <React.Fragment>
            <div className="topHeading">
                <div className="container">
                    <BreadCrumb text_1="Home" text_2="Services" />
                    <TopHeading text="Services" description="We provided the best skin, hair and laser services" />
                </div>
            </div>

            <div className="container mt-4">
                <MainHeading text="Our Services" />
                {servicesArray.map((items, index) => (
                    <div className="my-4">
                        <div className="row" key={index}>
                            <div className="col-lg-4">
                                <img src={items.imag} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", maxHeight: '400px' }} />
                            </div>
                            <div className="col-lg-8 mt-4 mt-lg-0">
                                <h3>{items.heading}</h3>
                                <p>{items.text}</p>
                                <p>{items.text1}</p>
                                <h5>{items.optionText}</h5>
                                {items.option1 && <h6 className="serviceTag">{items.option1}</h6>}
                                {items.option2 && <h6 className="serviceTag">{items.option2}</h6>}
                                {items.option3 && <h6 className="serviceTag">{items.option3}</h6>}
                                {items.option4 && <h6 className="serviceTag">{items.option4}</h6>}
                                {items.option5 && <h6 className="serviceTag">{items.option5}</h6>}
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}