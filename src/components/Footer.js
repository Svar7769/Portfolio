import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LineIcon,
    LinkedinIcon
} from "react-share"

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-mg-6 col-sm-6">
                        <div className="d-flex">
                            <p>Lorem ipsum dolor sit amet,
                                consectetur</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:982559229">982559229</a>
                        </div>
                        <div className="d-flex">
                            <a href="mailto:svarpatel7749@gmail.com">svarpatel7749@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About</a>
                                <br />
                            </div><div  className ="col">
                                <a className="footer-nav">Skill</a>
                                <br />
                                <a className="footer-nav">Projects</a>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"http://localhost:3000/favicon.ico"}
                                quote={"Here Goes the Quote"}>
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"http://localhost:3000/favicon.ico"}
                                quote={"Here Goes the Quote"}>
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>
                            <RedditShareButton
                                url={"http://localhost:3000/favicon.ico"}
                                quote={"Here Goes the Quote"}>
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                            <LinkedinShareButton
                                url={"http://localhost:3000/favicon.ico"}
                                quote={"Here Goes the Quote"}>
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <div className="pt-3 text-cecnter">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Svar Patel | All Right Reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;