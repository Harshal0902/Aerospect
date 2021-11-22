import React from 'react';
import { NavLink,Link  } from "react-router-dom";
import C17 from "../assets/C17.jpeg"
import DragonXL from "../assets/DragonXL.jpeg"
import Grob from "../assets/Grob.jpeg"
import Reven from "../assets/Reven.jpeg"
import SpaceX from "../assets/spaceX.jpeg"
const Home = () =>{
    return (
        <main className="main">
            <section className="introduction">
                <div className="flex-jc-sa">
                    <div className="text-part">
                        <h1>
                            Aerospect<br />
                            Education <span className="success">Redefined</span>
                        </h1>
                        <h4>With our <span className="danger">3D</span> responsive educative models <span className="primary">everyone</span> can learn</h4>
                        <div className="searchBox">
                                <NavLink className="primary-btn" to="/explore">Explore</NavLink>
                        </div>
                    </div>
                        <div className="img-holder">
                        <img src="https://i.ibb.co/MC4DjBQ/undraw-knowledge-g5gf.png" />
                    </div>
                </div>
            </section>
            <section className="features">
                <h3>Features</h3>
                <div className="cards-list">
                    <NavLink to="#" className="card" style={{ textDecoration: "none" }}>
                        <div className="card-image">
                            <img alt="" src="https://images.vexels.com/media/users/3/152685/isolated/preview/3ef140cb2dd1975cd81b33ccc79103e6-virtual-reality-icon.png" rel="" />
                        </div>
                        <div className="card-title">
                            <br />
                            <p className="title">Virtual</p><br />
                            <p className="title-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </NavLink>
                    <NavLink to="#" className="card" style={{ textDecoration: "none" }}>
                        <div className="card-image">
                            <img alt="" src="https://www.freeiconspng.com/uploads/accuracy-icon-14.png" rel="" />
                        </div>
                        <div className="card-title">
                            <br />
                            <p className="title">Accurate</p><br />
                            <p className="title-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </NavLink>
                    <NavLink to="#" className="card" style={{ textDecoration: "none" }}>
                        <div className="card-image">
                            <img alt="" src="http://assets.stickpng.com/images/58481842cef1014c0b5e49a2.png" rel="" />
                        </div>
                        <div className="card-title">
                            <br />
                            <p className="title">Virtual</p><br />
                            <p className="title-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </NavLink>
                </div>
            </section>
            <section className="some-aircrafts">
                <h3>Some Aircrafts</h3>
                <div className="cards-list">
                    <NavLink to="/dragonXL" className="card" style={{ textDecoration: "none" }}>
                        <div className="card-image">
                            <img alt="" src={DragonXL} rel="" />
                        </div>
                        <div className="card-title title-black">
                            <p>DragonXL</p>
                        </div>
                    </NavLink>
                    <Link to="/spaceX" className="card" style={{ textDecoration: "none" }}>
                        <div className="card-image">
                            <img alt="" src={SpaceX} rel="" />
                        </div>
                        <div className="card-title title-black">
                            <p>SpaceX Falcon 9</p>
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
                </div>
            </section>
        </main>
    );
}
export default Home;
