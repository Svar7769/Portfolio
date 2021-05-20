import React from "react";
import FaceImag from "../face.jpg"


const AboutMe = () => {
    return(
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5 mt-5">
                        <img className="profile-img" src={ FaceImag } alt="Face Image"/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">ABOUT ME</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Quam nulla porttitor massa id.
                        Ut placerat orci nulla pellentesque dignissim. Nulla posuere sollicitudin aliquam ultrices.
                        Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Libero justo laoreet sit amet cursus.
                        Nisl pretium fusce id velit ut tortor pretium. Lacus luctus accumsan tortor posuere ac.
                        Sed vulputate mi sit amet mauris commodo. Eu scelerisque felis imperdiet proin fermentum leo.
                        Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris.
                        Gravida quis blandit turpis cursus. Porttitor lacus luctus accumsan tortor.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default AboutMe