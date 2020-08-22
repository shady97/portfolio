import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Education extends Component {

    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <h5>
                        {this.props.startYear} - {this.props.endYear}
                    </h5>

                </Cell>
                <Cell col={8}>
                    <h4> {this.props.schoolName}</h4>
                    <h5>{this.props.schoolCGPA}</h5>
                    <p>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
        )
    }

}

export default Education;