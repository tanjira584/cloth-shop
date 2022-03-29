import React from "react";
import "./Link.css";

const Link = ({ route }) => {
    return (
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href={route.link}>
                {route.name}
            </a>
        </li>
    );
};

export default Link;
