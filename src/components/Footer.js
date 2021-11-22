import React from 'react';
import { NavLink  } from "react-router-dom";
const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-logo-container">
            <p>
            <span className="footer-logo">
                <a href="/">Aerospect</a>
            </span><br />
                <a href="/"><img className="sm-img" src="https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/GITHUB-256.png" alt="github" /></a>
                <a href="/"><img className="sm-img" src="https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/TWITTER-256.png" alt="twitter" /></a>
                <a href="/"><img className="sm-img" src="https://cdn2.iconfinder.com/data/icons/social-icons-grey/512/FB-256.png" alt="facebook" /></a><br />
                Made with 💖
            </p>
        </div>
        <div className="footer-link-container">
            <p>Navigate</p>
            <div className="footer-links">
                <NavLink  className="nav-link" activeClassName="active" exact to="/">Home</NavLink >
                <NavLink  className="nav-link" exact to="/aboutus">AboutUs</NavLink >
                <NavLink  className="nav-link"exact to="/explore">Explore</NavLink >
                <NavLink  className="nav-link"exact to="/contactus">ContactUs</NavLink >
            </div>
        </div>
    </footer>
    );
}
export default Footer;