import React, { Component } from 'React';
import Home from '../pages/Home';
import { Route } from 'react-router-dom';

export default class Main extends Component {
    render() {
        return (
            <main className="mobile-menu-transition">
                <Route path="/" component={Home} />
                {/* loading different pages here */}
            </main>
        );
    }
}