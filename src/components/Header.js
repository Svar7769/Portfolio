import React from "react";
import Typed from "react-typed";

const Header = () => {
    return(
        <div>
            <div className="header-wraper">
                <div className="main-info">
                    <h1>SVAR PATEL</h1>
                    <Typed
                        className="typed-text"
                        strings={["BackEnd WebDevelopment", "Machine Learning", "Deep Learning"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                    <a href="#" className="btn-main-offer">Contact Me</a>
                </div>
            </div>

        </div>
    )
}

export default Header;