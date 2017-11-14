import React, { Component } from 'React';
import { Link } from 'react-router-dom';

export default class Header extends Component {

    toggleMobileMenu() {
        const header = document.getElementById('header');
        const nav = document.getElementById('mainNav');

        if(header.classList.contains('headerMobile')) {
            header.classList.remove('headerMobile');
            nav.classList.remove('navMobile');
        } else {
            header.classList.add('headerMobile');
            nav.classList.add('navMobile');
        }
    }

    render() {
        return (
            <header id="header">
                <span id="burgerMenu" onClick={this.toggleMobileMenu}>&#x2630;</span>
                <nav id="mainNav">
                    <Link to="/">Home</Link>
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