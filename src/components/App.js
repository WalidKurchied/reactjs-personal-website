import React, { Component } from 'react';
import Header from './layout/Header.js';
import Main from './layout/Main.js';
import Footer from './layout/Footer.js';

export default class App extends Component {

   render() {
       return (
            <div id="site-container">
                <Header />
                <Main />
                <Footer />
            </div>
       );
   }
}