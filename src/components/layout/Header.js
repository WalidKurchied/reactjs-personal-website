import React, { Component } from 'React';
import { Link } from 'react-router-dom';

export default class Header extends Component {

    toggleMobileMenu() {
        const header = document.getElementById('header');
        const nav = document.getElementById('mainNav');

        if(header.style.height == "300px") {
            nav.style.display = "none";
            header.style.height = "50px";
        } else {
            nav.style.display = "inline";
            header.style.height = "300px";
        }
    }

    render() {
        return (
            <header id="header">
                <span id="burgerMenu" onClick={this.toggleMobileMenu}>&#x2630;</span>
                <nav id="mainNav">
                    <Link to="/public">Home</Link>
                    <a href="#">Coming Soon</a>
                    <a href="#">Coming Soon</a>
                </nav>

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