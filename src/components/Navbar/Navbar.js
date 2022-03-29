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
import Link from "./Link";
const Navbar = () => {
    const routes = [
        { id: 1, name: "Home", link: "/home" },
        { id: 1, name: "Products", link: "/products" },
        { id: 1, name: "Deals", link: "/deals" },
        { id: 1, name: "Contacts", link: "/contacts" },
    ];
    return (
        <header className="mb-5">
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
                <nav className="navbar navbar-expand-lg header-nav navbar-light">
                    <div className="container">
                        <a className="navbar-brand" href=" ">
                            Cloth Shop
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {routes.map((route) => (
                                    <Link route={route}></Link>
                                ))}
                            </ul>
                            <form className="d-flex search-form">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button
                                    className="btn btn-success"
                                    type="submit"
                                >
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
