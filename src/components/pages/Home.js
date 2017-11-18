import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div id="homeContainer">
                <section id="homeSectionOne">
                    <section id="developerCaptionContainer">
                        <span className="name-caption">
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
                          My name is Walid Kurchied, Im a Front-End Engineer and a UX specialist located in Dublin, Ireland.
                          I have more than 4 years of commercial experience in software design and development using a wide range of technologies. My main focus is currently on the web
                          trying to create a better and clean websites and applications with improved design and minimal use of resources. I have experience developing mobile applications, SEO (Search Engine Optimization), Back-End and Front-End Applications.
                          I love working with Javascript! I'm currently working with Reactjs and React Native. Check Mylinkedin profile for more information. 
                        </p>
                    </article>

                    <article id="rightArticle">
                        <h1>
                            WHAT CAN I DO FOR YOU
                        </h1>
                        <p>
                          I provide help and advice to thousands of people on my Instagram account <b> VanillaJavascript </b> and to many more who ask for a 1 on 1 session which usually takes place on skype.
                          So what can i do for you ? well lets start with this. I can provide you with knowledge and tips about SEO which will help search engines understand your site and products properly and keep you ahead of the competition.
                          I can give you UX or User Experience feedback and suggestions about your website or application so that you make it easy for your users to understand your website and easily navigate through it while keeping them
                          attracted to what you want them to notice the most. Finally i can teach development and work as a freelancer. All that depends on my availability.
                        </p>
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

                <section id="fun">
                
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