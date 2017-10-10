import React, { Component } from 'react';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';

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