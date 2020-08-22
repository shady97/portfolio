import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import axios from 'axios';

const API_PATH = 'http://localhost:1992/portfolio/api/contact/index.php';

class Contact extends Component {

constructor(props){
super(props);
this.state = {
fname: '',
email: '',
subject: '',
mailSent: false,
error: null

}

}

handleFormSubmit = e => {
e.preventDefault();
axios({
    method: 'post',
    url: '$(API_PATH}',
    headers: {'content-type': 'application/json'},
    data: this.state
})

.then(result => {
    this.setState({
        mailSent: result.data.mailSent
    })
})
.catch(error => this.setState({error: error.message}));

}


    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>

                        <h2>Srinath Iyer</h2>
                        <img 
                        src = "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        alt="avatar"
                        style={{height: '250px'}}
                        />

                        <p style ={{width: '80%', margin: 'auto', paddingTop: '1em' }}>
                            Do I look like a bitch!?
                        </p>

                    </Cell>

                    <Cell col={6}>

                        <div>

                            <h2> Reach out to me </h2>
                            <form action="#">

                                <label>
                                    Full name
                                </label>
                                <input type="text" id="fname" name="fullname" placeholder="Your name.."
                                value={this.state.fname}
                                onChange={e => this.setState({fname: e.target.value})}
                                />
                                
                                <label>
                                    Email
                                </label>
                                <input type="email" id="email" name="email" placeholder="Your email.."
                                 value={this.state.email}
                                 onChange={e => this.setState({email: e.target.value})}
                                />

                                <label>
                                    Subject
                                </label>
                                <textarea id="subject" name="subject" placeholder="Write something.."
                                onChange={e => this.setState({message: e.target.value})}
                                value={this.state.message}
                                >

                                </textarea>
                                <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit">
                                </input>
                            </form>
                            


                        </div>

                    </Cell>

                </Grid>
            </div>

        )
    }
}

export default Contact;