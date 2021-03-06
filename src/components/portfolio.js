import React from "react";
import ProjectImage from "../project.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus} from "@fortawesome/free-solid-svg-icons";

import { PopupboxManager, PopupboxContainer } from "react-popupbox";

import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    // Project 1
    const openPopupboxProject1 = () => {
        const content = (
            <div>
                <img className="portfolio-image-popupbox" src={ProjectImage} alt="Project Image" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <b>GitHub:</b><a className="hyper-link" onClick={()=> {window.open("https://github.com/Svar7769/")}} >https://github.com/Svar7769/</a>
            </div>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigProject1 = {
        titleBar: {
            enable: true,
            text: "Project 1"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Project 2
    const openPopupboxProject2 = () => {
        const content = (
            <div>
                <img className="portfolio-image-popupbox" src={ProjectImage} alt="Project Image" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <b>GitHub:</b><a className="hyper-link" onClick={()=> {window.open("https://github.com/Svar7769/")}} >https://github.com/Svar7769/</a>
            </div>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigProject2 = {
        titleBar: {
            enable: true,
            text: "Project 2"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Project 3
    const openPopupboxProject3 = () => {
        const content = (
            <div>
                <img className="portfolio-image-popupbox" src={ProjectImage} alt="Project Image" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <b>GitHub:</b><a className="hyper-link" onClick={()=> {window.open("https://github.com/Svar7769/")}} >https://github.com/Svar7769/</a>
            </div>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigProject3 = {
        titleBar: {
            enable: true,
            text: "Project 3"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Project 4
    const openPopupboxProject4 = () => {
        const content = (
            <div>
                <img className="portfolio-image-popupbox" src={ProjectImage} alt="Project Image" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <b>GitHub:</b><a className="hyper-link" onClick={()=> {window.open("https://github.com/Svar7769/")}} >https://github.com/Svar7769/</a>
            </div>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigProject4 = {
        titleBar: {
            enable: true,
            text: "Project 4"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }


    return(
        <div id="projects" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">MY PROJECTS</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="col-lg-3 col-md-4 col-sm-6 justify-content-center align-items-center">
                        <div className="portfolio-image-box " onClick={ openPopupboxProject1 }>
                            <img className="portfolio-image" src={ProjectImage} alt="Poject1"/>
                            <div className="overflow"/>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                            <PopupboxContainer{...popupboxConfigProject1} />
                        </div>
                    </div>
                    {/*------*/}
                    <div className="col-lg-3 col-md-4 col-sm-6 justify-content-center align-items-center">
                        <div className="portfolio-image-box " onClick={ openPopupboxProject2 }>
                            <img className="portfolio-image" src={ProjectImage} alt="Poject2"/>
                            <div className="overflow"/>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>
                    <PopupboxContainer{...popupboxConfigProject2} />
                    {/*------*/}
                    <div className="col-lg-3 col-md-4 col-sm-6 justify-content-center align-items-center">
                        <div className="portfolio-image-box " onClick={ openPopupboxProject3 }>
                            <img className="portfolio-image" src={ProjectImage} alt="Poject2"/>
                            <div className="overflow"/>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>
                    <PopupboxContainer{...popupboxConfigProject3} />
                    {/*------*/}
                    <div className="col-lg-3 col-md-4 col-sm-6 justify-content-center align-items-center">
                        <div className="portfolio-image-box " onClick={ openPopupboxProject4 }>
                            <img className="portfolio-image" src={ProjectImage} alt="Poject2"/>
                            <div className="overflow"/>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                    </div>
                    <PopupboxContainer{...popupboxConfigProject4} />
                </div>
            </div>
        </div>
    )
}


export default Portfolio