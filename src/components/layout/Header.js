import React, { Component } from 'React';
import { Link } from 'react-router-dom';

export default class Header extends Component {

    render() {
        return (
            <header id="header">
                <nav>
                    <Link to="/public">Home</Link>
                    <a href="#">Coming Soon</a>
                    <a href="#">Coming Soon</a>
                </nav>
                { /* <img src={require("../../images/me.jpg")} width="60px" height="80px" /> */ }

                <section id="headerIconsContainer">
                    <a href="https://www.linkedin.com/in/walidkurchied"><i className="fa fa-linkedin-square header-icon" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/vanillajavascript"><i className="fa fa-instagram header-icon" aria-hidden="true"></i></a>
                    <a href="https://github.com/WalidKurchied"><i className="fa fa-github header-icon" aria-hidden="true"></i></a>
                    <a href="https://codepen.io/vanillajavascript"><i className="fa fa-codepen header-icon" aria-hidden="true"></i></a>
                </section>
            </header>
        );
    }
}