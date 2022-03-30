import React from "react";
import Mainbody from "./Mainbody/Mainbody";
import Sidebar from "./Sidebar/Sidebar";

const Body = () => {
    return (
        <section className="body-area py-5">
            <div className="container-fluid container-md">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9">
                        <Mainbody></Mainbody>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Body;
