import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <section className="footer-area">
            <div className="container-fluid container-md">
                <div className="row mb-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="about-comet px-2 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-3">about comet</h4>
                            <p>
                                Fourth Floor New York, NY 10011 <br />
                                hello@comet.com
                            </p>
                            <button>hire us</button>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="culture px-2 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-3">culture</h4>
                            <ul>
                                <li>
                                    <a href=" ">teams</a>
                                </li>
                                <li>
                                    <a href=" ">process</a>
                                </li>
                                <li>
                                    <a href=" ">story</a>
                                </li>
                                <li>
                                    <a href=" ">careers</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="case-studies px-2 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-3">
                                case studies
                            </h4>
                            <ul>
                                <li>
                                    <a href=" ">neleman kava</a>
                                </li>
                                <li>
                                    <a href=" ">sweets lane</a>
                                </li>
                                <li>
                                    <a href=" ">jeff burger</a>
                                </li>
                                <li>
                                    <a href=" ">juice med's</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="subscribe px-2">
                            <h4 className="text-uppercase mb-3">
                                stay in touch
                            </h4>
                            <p>Sign Up to get the latest updates.</p>
                            <form action="" className="d-flex">
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="Your Email"
                                />
                                <input type="submit" value="SUBSCRIBE" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="copy-right">
                    <p className="text-center m-0">
                        Copyright &copy; 2022 By Tanjir Ahmed
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
