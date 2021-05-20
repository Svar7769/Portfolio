import React from "react";

const Experience = () => {
    return(
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1 > EXPERIENCE </h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2018-2020</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
                        </p>
                    </div>
                </div>
                {/*----*/}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020-2021</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
                        </p>
                    </div>
                </div>
                {/*----*/}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2021-2022</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;