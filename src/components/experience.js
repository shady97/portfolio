import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Experience extends Component {

    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <h5>
                        {this.props.startYear} - {this.props.endYear}
                    </h5>

                </Cell>
                <Cell col={8}>
                    <h4> {this.props.jobName}</h4>
                    <p>{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }

}

export default Experience;