import React from "react";
import logo from"../logo.png";

import {Link} from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"


const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={logo} alt="logo"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link smooth={true} to="home" offset={-100} className="nav-link" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="about" offset={-100} className="nav-link" href="#">about</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="projects" offset={-100} className="nav-link" href="#">projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contact" offset={-100} className="nav-link" href="#">contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar