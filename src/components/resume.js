import React, {Component, useEffect} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import resumeimage from './resume.png';
import {Animated} from "react-animated-css";
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

// import ScrollAnimation from 'react-animate-on-scroll';




class Resume extends Component {

    
    render() {
        

        
        return(
            <Animated animationIn = "bounceInLeft" animationOut="bounceOutRight" isVisible={true}>
            <div className="resume-page">
                <Grid className= "resume-left">
                    <Cell col={4}>

                        
                        <div style={{textAlign: 'center'}}>
                        <Animated animationIn="zoomInDown">
                            <img
                            src = {resumeimage}
                            alt = "avatar"
                            style= {{height: '250px'}}/>
                            </Animated>

                        </div>
                        

                        <h2 style={{paddingTop: '2em' }}>Srinath Iyer</h2>
                        <h4 style={{color: 'black'}}>
                            Programmer
                        </h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                        <p>About myself</p>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    <Animated animationIn = "bounceInLeft" >
                        <h2>Education</h2>
                        </Animated>
                        <Education 
                        startYear={2019}
                        endYear={2021}
                        schoolName="Northeastern University - Boston, MA"
                        schoolCGPA="GPA: 3.53/4"
                        schoolDescription="Coursework: Fundamentals of Computer Engineering, Database Management Systems, Fundamentals of Computer Networks, Wireless Communication Systems"/>

                        <Education 
                        startYear={2015}
                        endYear={2019}
                        schoolName="Thakur College Of Engineering & Technology - University of Mumbai, India "
                        schoolCGPA="GPA: 8.03/10"
                        schoolDescription="Coursework: Wireless Networks, Structured Programming Approach, Discrete Time Signal Processing, Image Processing, Digital Communication, Microprocessor and Peripherals, Neural Networks"/>

                        <hr style={{borderTop: '3px solid #322947'}}></hr>
                        
                        <Bounce>
                        <div>
                            
                        <h2>Experience</h2>
                        

                        <Experience 
                        startYear={2009}
                        endYear={2011}
                        jobName="Job1"
                        jobDescription="Job1 work"></Experience>

                        <Experience 
                        startYear={2009}
                        endYear={2011}
                        jobName="Job2"
                        jobDescription="Job2 work"></Experience>

                        </div>
                        </Bounce>

                        <hr style={{borderTop: '3px solid #322947'}}></hr>
                        
                    
                        <Zoom>
                        <div>
                        
                        
                        <h2>Skills</h2>
                        <Skills 
                        skill="javascript"
                        progress={100}/>

                        <Skills 
                        skill="HTML"
                        progress={70}/>

                        <Skills 
                        skill="CSS"
                        progress={50}/>

                        <Skills 
                        skill="React"
                        progress={80}/>

                    
                    </div>
                    </Zoom>
                    
                    


                    

                    </Cell>

                </Grid>


            </div>
            </Animated>
            
        )
    }
}

export default Resume;