import React, { Component } from "react";
import Header from '../Header'

import {Link, Redirect} from 'react-router-dom';
// import Loader from '../Loader.js';

import authService from "./auth-service.js";

import { MyContext } from '../MyContext'


class Profile extends Component {  
  logout = () => {
    authService.logout().then(response => {

      this.props.updateUser(false);
      this.props.history.push('/');
    });
  };

  // componentDidUpdate(prevProps) {
  //   if (prevProps.user !== this.props.user) {
  //     console.log(
  //       "props user has changes value: from",
  //       prevProps.user,
  //       "to",
  //       this.props.user
  //     );
  //     if (!this.props.user._id) {
  //       //alert("✋You need to be logged in to show your profile");
  //       this.props.history.push("/login");
  //     }
  //   }
  // }


  handleUpload = (event) => {
    let formData = new FormData();
    formData.append('photo', event.target.files[0]);

    authService.upload(formData)
      .then(response => {
        this.props.updateUser(response);
      })
    ;
  }

  render() {
    if (!this.context.user._id) return <Redirect to="/login"/>
    return (

      <div className="profile">
        <Header history={this.props.history}>{this.context.user.username}</Header>
        <form>
          <label>
            <img className="avatar" src={this.context.user.image || "https://material.io/tools/icons/static/icons/baseline-person-24px.svg"} />
            {/* <input type="file" name="image" onChange={this.handleUpload} /> */}
          </label>
        </form>
        <h3><Link className='link' to="/profileedit">Personal informations</Link></h3>
        <h3><Link to={`/${this.context.user.username}/collections`} className="link">My Collections</Link></h3>
        {/* <h3>Games reviewed</h3> */}

        <div className="cta">
          <button className="btnwith" onClick={this.logout}>
            logout
          </button>
        </div>

      </div> 

    );
  }
}

Profile.contextType = MyContext;


export default Profile;


