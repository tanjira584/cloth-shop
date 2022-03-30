import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="px-3">
            <div className="category mb-5">
                <h5 className="text-uppercase">Categories</h5>
                <hr />
                <ul className="sidebar-nav">
                    <li>
                        <a href=" ">Beauty</a>
                    </li>
                    <li>
                        <a href=" ">blazers</a>
                    </li>
                    <li>
                        <a href=" ">bags</a>
                    </li>
                    <li>
                        <a href=" ">jeans</a>
                    </li>
                    <li>
                        <a href=" ">shorts</a>
                    </li>
                    <li>
                        <a href=" ">dressed</a>
                    </li>
                </ul>
            </div>
            <div className="tranding mb-5">
                <h5 className="text-uppercase">tranding products</h5>
                <hr />
                <ul>
                    <li className="d-flex">
                        <div className="tranding-img">
                            <img src="images/1.jpg" alt="" />
                        </div>
                        <div className="tranding-price">
                            <a href=" ">Product pricing</a>
                            <span>$199.99</span>
                        </div>
                    </li>
                    <li>
                        <div className="tranding-img">
                            <img src="images/2.jpg" alt="" />
                        </div>
                        <div className="tranding-price">
                            <a href=" ">Product pricing</a>
                            <span>$299.99</span>
                        </div>
                    </li>
                    <li>
                        <div className="tranding-img">
                            <img src="images/3.jpg" alt="" />
                        </div>
                        <div className="tranding-price">
                            <a href=" ">Product pricing</a>
                            <span>$150.50</span>
                        </div>
                    </li>
                    <li>
                        <div className="tranding-img">
                            <img src="images/4.jpg" alt="" />
                        </div>
                        <div className="tranding-price">
                            <a href=" ">Product pricing</a>
                            <span>$99.99</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="search-bar mb-5">
                <h5 className="text-uppercase">Search</h5>
                <hr />
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search..."
                    name=""
                    id=""
                />
            </div>
            <div className="popular-tags">
                <h5 className="text-uppercase">Popular Tags</h5>
                <hr />
                <div>
                    <a href=" ">hipster</a>
                    <a href=" ">fashion</a>
                    <a href=" ">shirt</a>
                    <a href=" ">modern</a>
                    <a href=" ">vintage</a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
