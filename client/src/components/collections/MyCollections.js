import React, { Component } from "react";
import ColTitle from "./ColTitle";
import { Link,Redirect } from "react-router-dom";
import Button from "../Button";
import axios from 'axios';
import { MyContext } from '../MyContext'
import Signup from '../auth/Signup'
// import authService from "../auth/auth-service.js";
import Header from '../Header'

class MyCollections extends Component {
  state = {
    modalOpened: false,
    colTitle:"",
    confirmationMsg:"",
    collections: []
  };


componentDidMount = () => {
  axios.create({
    withCredentials: true
  }).get(`${process.env.REACT_APP_APIURL || ""}/api/user/collections`)
  .then(response => response.data)
 //.then(data => data.map(col => col.colTitle))
     .then(data => this.setState({collections: data}))
  }

  // componentDidUpdate() {
  //   axios.create({
  //     withCredentials: true
  //   }).get(`${process.env.REACT_APP_APIURL || ""}/api/user/collections`)
  //     .then(response=> response.data)
  //     .then(data => this.setState({collections: data}))
  // }


  modalToggle = () => {
    this.setState({ modalOpened: !this.state.modalOpened });
  
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //1. Create new collection

    const createCol = axios.create({
      withCredentials: true
    })
    createCol
      .post(  `${process.env.REACT_APP_APIURL || ""}/api/user/collections`, {
        colTitle: this.state.colTitle
        
      })
      .then(res => res.data)
      .then(this.componentDidMount)
      .catch(err => { /* not hit since no 401 */ })

    //2. Display message
    this.setState({confirmationMsg:"Collection created!"});
    //3. Close modal
    setTimeout(() => {
      //this.modalToggle() // close
      this.setState({modalOpened: false,
        colTitle:"",
        confirmationMsg:""})
    }, 2000);
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  } 

  render() {
    if (!this.context.user._id) return <div><h1>Create an account to start collecting your favorite games !</h1><Signup h1={false}/></div>
    const coverClass = this.state.modalOpened
      ? "modal-cover modal-cover-active"
      : "modal-cover";
    const containerClass = this.state.modalOpened
      ? "modal-container modal-container-active"
      : "modal-container";
    return (
      
      <div>
        <Header history={this.props.history}>My collections</Header>
        {this.state.collections.length>=1 ? (
          <div className="listing">
            {this.state.collections.map(col => {
              return <ColTitle colTitle={col.colTitle} id={col._id} edit={false}/>;
            })}
          </div>
        ) : (
          <div>
            <h2 className="center ">No collections yet, click below to start a new collection</h2>
          </div>
        )}
        <div className="create-edit">
          <img
            className="icon hidden-desktop"
            onClick={this.modalToggle}
            src="/images/icons/plus_icon_white.png"
            alt=""
          />
          <button onClick={this.modalToggle} className="hidden-mobile btn margin-bottom">Create new collection</button>
          <Link className="link" to={`/${this.context.user.username}/collections/edit`}>
            <img
              className="icon hidden-desktop"
              src="/images/icons/edit_icon_white.png"
              alt=""
            />
            <button className="hidden-mobile btn">Edit collections</button>
          </Link>
        </div>

        {/* modal */}

        <div className={containerClass}>
          <div className="modal-header dark-text">
            <p className="modal-title center">Create collection</p>
            <hr />
          </div>
          <form className="modal-body dark-text flex-column" onSubmit={this.handleSubmit}>
            <label htmlFor="colTitle">Name your new collection</label>
            <input
              name="colTitle"
              value={this.state.colTitle}
              onChange={this.handleChange}
              className="chp-modal center custom-select margin-bottom"
              type="text"
            />
            <Button> Confirm new collection</Button>
            {/* <button className="btn" onClick={this.handleSubmit}>Confirm new collection</button> */}
            {this.state.confirmationMsg}
          </form>
          
        </div>
        <div className={coverClass} onClick={this.modalToggle}></div>
      </div>
    );
  }
}
MyCollections.contextType = MyContext;
export default MyCollections;
