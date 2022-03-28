import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faGooglePlusSquare,
    faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
    faHeart,
    faMobileAlt,
    faShoppingCart,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    return (
        <header>
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
            <section className="main-header">
                <nav class="navbar navbar-expand-lg header-nav">
                    <div class="container">
                        <a class="navbar-brand" href=" ">
                            Cloth Shop
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a
                                        class="nav-link active"
                                        aria-current="page"
                                        href=" "
                                    >
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href=" ">
                                        Products
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href=" ">
                                        Deals
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href=" ">
                                        Contacts
                                    </a>
                                </li>
                            </ul>
                            <form class="d-flex search-form">
                                <input
                                    class="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button class="btn btn-success" type="submit">
                                    Search
                                </button>
                            </form>
                            <div className="right-side">
                                <a href=" ">
                                    <FontAwesomeIcon
                                        icon={faShoppingCart}
                                    ></FontAwesomeIcon>
                                </a>
                                <a href=" ">
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                    ></FontAwesomeIcon>
                                </a>
                                <a href=" ">
                                    <FontAwesomeIcon
                                        icon={faUser}
                                    ></FontAwesomeIcon>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </header>
    );
};

export default Navbar;
