import React, { Component } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    children?: React.ReactNode,
    to?: string
}

export default class Header extends Component {

    toggleMobileMenu() {
        const nav = document.getElementById('mainNav');
        const main = document.querySelector('main');

        if(nav.classList.contains('push-nav')) {
            main.classList.remove('push-main');
            nav.classList.remove('push-nav');
        } else {
            main.classList.add('push-main');
            nav.classList.add('push-nav');
        }
    }

    render() {
        return (
            <header id="header">
                <span id="burgerMenu" onClick={this.toggleMobileMenu}>&#x2630;</span>

                <nav id="mainNav" className="mobile-menu-transition">
                    <Link to="/">Home</Link>
                    <Link to="#">Coming Soon</Link>

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