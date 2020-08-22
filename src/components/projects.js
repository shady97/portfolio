import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import {Card, CardTitle, CardMenu, CardText, CardActions, Button, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div >
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://vignette.wikia.nocookie.net/breakingbad/images/4/43/Bluemeth.png/revision/latest?cb=20130722044536s) center / cover'}} >
                            React Project #1

                        </CardTitle>

                        <CardText>
                            Wassup ma!
                        </CardText>

                        <CardActions border>
                            <Button colored> Github </Button>
                            <Button colored> CodePen </Button>

                        </CardActions>

                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"></IconButton>
                        </CardMenu>

                    </Card>
                </div>
            )
        }

        else if(this.state.activeTab === 1) {
            return(
                <div>
                    <h1>This is Vehicle Sensor Data Analytics </h1>
                </div>
            )
        }

        else if(this.state.activeTab === 2) {
            return(
                <div>
                    <h1>This is Smart Parking System </h1>
                </div>
            )
        }

        else if(this.state.activeTab === 3) {
            return(
                <div>
                    <h1>This is JSP </h1>
                </div>
            )
        }


    }
    

    render() {
        return(
            <div
                className="category-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple >
                        {/* Project names */}
                        <Tab>React</Tab>
                        <Tab>Vehicle Sensor Data Analytics</Tab>
                        <Tab>Smart Parking System</Tab>
                        <Tab>JSP</Tab>

                    </Tabs>


                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>

                        </Cell>

                    </Grid>
                     
                </section>
            </div>
        )
    }
}

export default Projects;