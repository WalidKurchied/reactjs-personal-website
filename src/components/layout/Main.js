import React, { Component } from 'React';
import Home from '../pages/Home';
import { Route } from 'react-router-dom';

export default class Main extends Component {
    render() {
        return (
            <main>
                <Route path="/public" component={Home} />
                {/* loading different pages here */}
            </main>
        );
    }
}