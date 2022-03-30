import React from "react";
import "./Product.css";

const Product = ({ product }) => {
    return (
        <div className="col-md-4 col-sm-6 mb-4">
            <div className="product p-2">
                <div className="img mb-2">
                    <img src={product.img} alt="" className="img-fluid" />
                    <div className="cart-btn">
                        <button>Add To Cart</button>
                    </div>
                </div>
                <p className="m-0">{product.name}</p>
                <span>${product.price}</span>
            </div>
        </div>
    );
};

export default Product;
