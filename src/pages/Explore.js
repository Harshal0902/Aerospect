import React from 'react';
import { Link } from 'react-router-dom';
import C17 from "../assets/C17.jpeg"
import DragonXL from "../assets/DragonXL.jpeg"
import Grob from "../assets/Grob.jpeg"
import Reven from "../assets/Reven.jpeg"
import SpaceX from "../assets/spaceX.jpeg"

const Explore = () => {
    return (
        <div>

            <div className="explore_title">
                <h1 className="explore_title_text">
                    Select Aircraft
                </h1>
                <div className="explore_title_line"></div>
            </div>

            <div className="cards-list">
        
                <Link to="/spaceX" className="card" style={{ textDecoration: "none" }}>
                    <div className="card-image">
                        <img alt="" src={SpaceX} rel="" />
                    </div>
                    <div className="card-title title-black">
                        <p>SpaceX Falcon 9</p>
                    </div>
                </Link>

                <Link to="/dragonXL" className="card" style={{ textDecoration: "none" }}>
                    <div className="card-image">
                        <img alt="" src={DragonXL} rel="" />
                    </div>
                    <div className="card-title title-black">
                        <p>DragonXL</p>
                    </div>
                </Link>

                <Link to="/c17" className="card" style={{ textDecoration: "none" }}>
                    <div className="card-image">
                        <img alt="" src={C17} rel="" />
                    </div>
                    <div className="card-title title-black">
                        <p>C17 Globemaster III</p>
                    </div>
                </Link>

                <Link to="/grob" className="card" style={{ textDecoration: "none" }}>
                    <div className="card-image">
                        <img alt="" src={Grob} rel="" />
                    </div>
                    <div className="card-title title-black">
                        <p>Grob G 115</p>
                    </div>
                </Link>

                <Link to="/reven" className="card" style={{ textDecoration: "none" }}>
                    <div className="card-image">
                        <img alt="" src={Reven} rel="" />
                    </div>
                    <div className="card-title title-black">
                        <p>Reven</p>
                    </div>
                </Link>

            </div>

        </div>
    );
}
export default Explore;
