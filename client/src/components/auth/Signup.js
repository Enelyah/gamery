import React, { Component } from 'react';
import Header from '../Header'

import {Link} from 'react-router-dom';

import authService from './auth-service.js';

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",

    error: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // 1. Signup
    authService.signup(this.state.username, this.state.email, this.state.password)
      .then((response) => {
        this.setState({error: ""});
        this.props.updateUser(response)
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
        <div className="Signup">
         {this.props.h1!==false? <Header history={this.props.history}>Create account</Header> :""}
          
          <form onSubmit={this.handleSubmit}>

            {this.state.error && (
              <p className="error">{this.state.error}</p>
            )}

            <p>
              <label>
                <input className="chp" type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
              </label>
              
            </p>

            <p>
              <label>
                <input className="chp" type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
              </label>
              
            </p>

            <p>
              <label>
                <input className="chp"  type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
              </label>
            </p>

            {/* <p>
              <label>
                <em>confirm password</em>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              </label>
            </p> */}

            <button className="btn" onClick={this.handleSubmit}>Create account</button>

          </form>

          <p>            {this.props.black?
            <small><Link className="link-black" to="/login">Already a user? Log in</Link></small> :
            <small><Link className="link" to="/login">Already a user? Log in</Link></small>}
          </p>

        </div>
      );
  }
}


export default Signup;