import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faAndroid, faJoomla, faFreeCodeCamp  } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
    return(
        <div className="services">
            <h1 className="py-5">MY SKILLS</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faJoomla} size="2x"/>
                            </div>
                            <h3>Web Development</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faPython} size="2x"/>
                            </div>
                            <h3>Machine Learning</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faAndroid} size="2x"/>
                            </div>
                            <h3>Android App Development</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faFreeCodeCamp} size="2x"/>
                            </div>
                            <h3>Data Science</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default Services;