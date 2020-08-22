import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';
import logo from './circle-cropped.png'
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';


class Landing extends Component {
    render() {

        
        return(
            <Animated animationIn = "bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <div className="landing" style={{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src={logo}
                        alt="avatar"
                        className="avatar-image"
                        />

                        <div className="banner-text">
                            <ScrollAnimation animateIn="bounceIn">
                            <h1>Aspiring Developer</h1>
                            </ScrollAnimation>
                            <hr/>

                            <p>
                                Backend - Java | C++ | Python | 
                                <br></br>Frontend - React | HTML | CSS  
                                <br></br>Databases - MySQL |  MongoDB
                            </p>

                            <div className="social-links">

                                {/*= Linkedin */}
                                <a href="https://www.linkedin.com/in/srinathiyer31/" rel="noopener noreferrer" target="_blank">
                                <i className= "fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/*= Github */}
                                <a href="https://github.com/shady97/projects" rel="noopener noreferrer" target="_blank">
                                <i className= "fa fa-github-square" aria-hidden="true" />
                                </a>

                                
                            

                            </div>
                        </div>
                    </Cell>
                </Grid>

            </div>
            </Animated>
        )
    }
}

export default Landing;