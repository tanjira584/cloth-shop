import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <section
            className="sellerBanner"
            style={{ backgroundImage: "url(images/banner2.jpg)" }}
        >
            <div className="container d-flex">
                <div className="bannerContent">
                    <h1>Mangla Store</h1>
                    <address>
                        A-234, Lajpat Nagar, New Delhi, India - 110045 <br />
                        Mobile No: +8801613071257
                    </address>
                </div>
            </div>
        </section>
    );
};

export default Banner;
