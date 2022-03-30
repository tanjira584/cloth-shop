import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = () => {
    return (
        <div className="cart">
            <ul>
                <li className="d-flex">
                    <div className="product-img">
                        <img src="images/1.jpg" alt="" />
                    </div>
                    <div className="product-price">
                        <a href=" ">Product pricing</a>
                        <span>$199.99</span>
                    </div>
                    <input
                        type="number"
                        className="quantity"
                        value="1"
                        name=""
                        id=""
                    />
                    <div className="deleteIcon ms-auto">
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </div>
                </li>
                <li>
                    <div className="product-img">
                        <img src="images/2.jpg" alt="" />
                    </div>
                    <div className="product-price">
                        <a href=" ">Product pricing</a>
                        <span>$299.99</span>
                    </div>
                    <input
                        type="number"
                        className="quantity"
                        value="1"
                        name=""
                        id=""
                    />
                    <div className="deleteIcon ms-auto">
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </div>
                </li>
                <li>
                    <div className="product-img">
                        <img src="images/3.jpg" alt="" />
                    </div>
                    <div className="product-price">
                        <a href=" ">Product pricing</a>
                        <span>$150.50</span>
                    </div>
                    <input
                        type="number"
                        className="quantity"
                        value="1"
                        name=""
                        id=""
                    />
                    <div className="deleteIcon ms-auto">
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </div>
                </li>
                <li>
                    <div className="product-img">
                        <img src="images/4.jpg" alt="" />
                    </div>
                    <div className="product-price">
                        <a href=" ">Product pricing</a>
                        <span>$99.99</span>
                    </div>
                    <input
                        type="number"
                        className="quantity"
                        value="1"
                        name=""
                        id=""
                    />
                    <div className="deleteIcon ms-auto">
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </div>
                </li>
            </ul>
            <div className="total-amount">
                <p>Total</p>
                <p>$1250.00</p>
            </div>
            <div className="checkout text-center">
                <button className="checkoutBtn">Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
