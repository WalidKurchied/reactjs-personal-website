import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div id="homeContainer">
                <section id="homeSectionOne">
                    <section id="developerCaptionContainer">
                        <span className="captionText name-caption">
                            WALID KURCHIED
                        </span>
                    </section>
                </section>

                <section id="devInfo">
                    <article id="leftArticle">
                        <h1>
                            WHAT I DO
                        </h1>
                        <p>
                            My name is Walid Kurchied, Im a Front-End Engineer and a UX specialist located in Ireland.
                          I have more than 4 years of commercial experience in software design and development and currently focused mainly on the web
                          trying to make it a better place. I have experience in working with Android, SEO (Search Engine Optimization), Back-End and Front-End development.
                        </p>
                    </article>

                    <article id="rightArticle">
                        <h1>
                            WHAT CAN I DO FOR YOU
                        </h1>
                        <p>
                          I provide help and advice to thousands of people on my Instagram account "VanillaJavascript" and to many more who ask for a 1 on 1 session which usually takes place on skype or other communications means,
                          I can provide you with anything from SEO advice and tips to User experience and development teaching, get in touch today.
                        </p>

                        <button className="find-out-btn">Find Out More</button>
                    </article>
                </section>

                <section id="homeSectionTwo">
                    <h1>TECHNOLOGIES I WORKED WITH</h1>
                   <div id="technologiesListContainer">
                        <i className="devicon-angularjs-plain colored"></i>
                        <i className="devicon-react-original colored"></i>
                        <i className="devicon-html5-plain colored"></i>
                        <i className="devicon-css3-plain colored"></i>
                        <i className="devicon-javascript-plain colored"></i>
                        <i className="devicon-jquery-plain colored"></i>
                        <i className="devicon-babel-plain colored"></i>
                        <i className="devicon-git-plain colored"></i>
                        <i className="devicon-java-plain colored"></i>
                        <i className="devicon-mocha-plain colored"></i>
                        <i className="devicon-nodejs-plain colored"></i>
                        <i className="devicon-sass-original colored"></i>
                        <i className="devicon-heroku-original colored"></i>
                        <i className="devicon-gradle-plain colored"></i>
                        <i className="devicon-github-plain colored"></i>
                        <i className="devicon-gimp-plain colored"></i>
                        <i className="devicon-express-original colored"></i>
                        <i className="devicon-cucumber-plain colored"></i>
                        <i className="devicon-webpack-plain colored"></i>
                   </div>
                </section>

                <section id="expSection">
                    <h1>COMPANIES I WORKED FOR</h1>
                    <div id="companiesContainer">
                        <img src={require("../../images/ibm.png")} width="60px" height="33px" className="company-img" />
                        <img src={require("../../images/groupon2.png")} width="60px" height="33px" className="company-img" />
                        <img src={require("../../images/topfloor.png")} width="60px" height="33px" className="company-img" />
                        <img src={require("../../images/wholeschool.png")} width="60px" height="33px" className="company-img" />
                    </div>       
                </section>
            </div>
        );
    }
}