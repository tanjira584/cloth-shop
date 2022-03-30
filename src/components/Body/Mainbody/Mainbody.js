import React, { useEffect, useState } from "react";
import Product from "../../Product/Product";
import "./Mainbody.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Mainbody = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    console.log(products);
    return (
        <div className="main-body px-3">
            <div className="result-count d-flex justify-content-between align-items-center mb-3">
                <p className="text-uppercase">
                    Total {products.length} Products Found
                </p>
                <select className="selectInput" name="" id="">
                    <option value="">Sort By</option>
                    <option value="">What's News</option>
                    <option value="">Price High to Low</option>
                    <option value="">Price Low to High</option>
                </select>
            </div>
            <div className="products-all">
                <div className="row">
                    {products.slice(0, 9).map((product) => (
                        <Product product={product} key={product.id}></Product>
                    ))}
                </div>
            </div>
            <div className="pagination text-center mt-4">
                <ul>
                    <li>
                        <a href=" ">
                            <FontAwesomeIcon
                                icon={faArrowLeft}
                            ></FontAwesomeIcon>
                        </a>
                    </li>
                    <li className="active">
                        <a href=" ">1</a>
                    </li>
                    <li>
                        <a href=" ">2</a>
                    </li>
                    <li>
                        <a href=" ">3</a>
                    </li>
                    <li>
                        <a href=" ">4</a>
                    </li>
                    <li>
                        <a href=" ">5</a>
                    </li>
                    <li>
                        <a href=" ">
                            <FontAwesomeIcon
                                icon={faArrowRight}
                            ></FontAwesomeIcon>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Mainbody;
