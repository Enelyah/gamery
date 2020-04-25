import React, { Component } from 'react';
import Header from '../Header'

import {Link} from 'react-router-dom';
//import Button from '../Button';


import authService from './auth-service.js';

class Login extends Component {
  state = {
    email: "",
    password: "",

    error: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();

    authService.login(this.state.email, this.state.password)
      .then(response => {
        this.setState({error: ""});

        this.props.updateUser(response);
        this.props.history.push('/profile');
      })
      .catch(err => this.setState({error: err.response.data.message}))
    ;
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  } 

  render() {
    return (
        <div className="Login">
          <Header history={this.props.history}>Login</Header>
          
          <form onSubmit={this.handleSubmit}>

            {this.state.error && (
              <p className="error">{this.state.error}</p>
            )}

            <p>
              <label>
                <input className="chp" type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <input className="chp" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <input type="checkbox" id="remember" name="xxxxx" value="remember"/>
                Remember me
             </label>
            </p>

            <button className="btn" onClick={this.handleSubmit}>login</button>
            {/* <Button>login</Button> */}

          </form>

          <p>
            <small><Link className="link" to="/signup">New here ? Create account</Link></small>
          </p>
        </div>

    );
  }
}

export default Login;