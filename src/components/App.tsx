import React, { Component } from 'react';
import Header from './layout/Header.tsx';
import Main from './layout/Main.tsx';
import Footer from './layout/Footer.tsx';

interface Props {
}

export default class App extends Component<Props, any> {
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