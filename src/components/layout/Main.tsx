import React, { Component } from 'react';
import Home from '../pages/Home.tsx';
import { Route } from 'react-router-dom';

interface Props {
    children?: {},
    to?: string
}

export default class Main extends Component<Props, any> {
    render() {
        return (
            <main className="mobile-menu-transition">
                <Route path="/" component={Home} />
                {/* loading different pages here */}
            </main>
        );
    }
}