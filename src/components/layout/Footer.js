import React, { Component } from 'React';


export default class Footer extends Component {

    render() {
        return (
            <footer>
                <h1>Footer</h1>
                <img src={require("../../images/logo.svg")} width="60px" height="80px" />
            </footer>
        );
    }
}