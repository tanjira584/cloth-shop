import React from "react";
import "./TopHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faGooglePlusSquare,
    faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const TopHeader = () => {
    return (
        <section className="headertop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="top-left">
                            <FontAwesomeIcon
                                className="icon"
                                icon={faMobileAlt}
                            ></FontAwesomeIcon>
                            <a href=" ">Download App</a>
                        </div>
                    </div>
                    <div className="col-lg-6 top-right">
                        <a href=" ">Login / Resgeister</a>
                        <div className="social-icon">
                            <a href=" ">
                                <FontAwesomeIcon
                                    icon={faFacebookSquare}
                                ></FontAwesomeIcon>
                            </a>
                            <a href=" ">
                                <FontAwesomeIcon
                                    icon={faTwitterSquare}
                                ></FontAwesomeIcon>
                            </a>
                            <a href=" ">
                                <FontAwesomeIcon
                                    icon={faGooglePlusSquare}
                                ></FontAwesomeIcon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopHeader;
