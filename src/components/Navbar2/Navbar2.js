import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faShoppingCart,
    faHeart,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar2.css";

const Navbar2 = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
        console.log(toggle);
    };
    return (
        <section className="main-header bg-warning py-2">
            <div className="container-fluid container-md">
                <div className="menu-container d-flex justify-content-end justify-content-md-beetween align-items-center">
                    <div className="logo me-auto">
                        <h1>ClothShop</h1>
                    </div>
                    <div
                        className={`menu mobile-menu ${toggle ? "open" : " "}`}
                    >
                        <ul className="">
                            <li>
                                <a href=" ">Home</a>
                            </li>
                            <li>
                                <a href=" ">Products</a>
                            </li>
                            <li>
                                <a href=" ">Deals</a>
                            </li>
                            <li>
                                <a href=" ">Contacts</a>
                            </li>
                        </ul>
                    </div>
                    <form className="search-form d-md-flex d-none ms-auto">
                        <input
                            className="form-control me-2 w-75"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-success" type="submit">
                            Search
                        </button>
                    </form>

                    <div className="cart-icon d-flex justify-content-center text-align-center">
                        <a href=" ">
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                            ></FontAwesomeIcon>
                        </a>
                        <a href=" ">
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        </a>
                        <a href=" ">
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className="toggle-btn d-block d-md-none">
                        <FontAwesomeIcon
                            onClick={handleToggle}
                            icon={faBars}
                        ></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar2;
