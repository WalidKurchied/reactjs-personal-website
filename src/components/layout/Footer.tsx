import React, { Component } from 'react';

interface Props {
    children?: {},
    to?: string
}

export default class Footer extends Component<Props> {
    render() {
        const currentYear: number = new Date().getFullYear();

        return (
            <footer>
                <section id="contactMe">
                    <span>&#64;{currentYear}</span>
                    <a href="mailto:walid.kurchied@gmail.com?Subject=Work%20Query">walid.kurchied@gmail.com</a>
                </section>
            </footer>
        );
    }
}