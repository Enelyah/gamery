import React, { Component } from 'react';
import { MyContext } from '../MyContext'
import axios from 'axios';
import { Link } from "react-router-dom";
import Button from "../Button";
import Signup from '../auth/Signup'

class EditColTitle extends Component {

    state = {
        collection: {},
        modalOpened: false,
        colTitle:this.props.colTitle,
        confirmationMsg:""
    }

    modalToggle = () => {
        this.setState({ modalOpened: !this.state.modalOpened });
      
      };

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_APIURL || ""}/api/user/collections/${this.props.id}`, )
          .then(response=> response.data)
          .then(data => this.setState({collection: data}))
      }

    handleSubmit = (event) => {
        event.preventDefault();
        //1. Edit collection
    
        const editCol = axios.create({
          withCredentials: true
        })
        editCol
          .put(  `${process.env.REACT_APP_APIURL || ""}/api/user/collections/${this.props.id}`, {
            colTitle: this.state.colTitle
            
          })
          .then(res => res.data)
          .then(this.componentDidMount)
          .catch(err => { /* not hit since no 401 */ })
    
        //2. Display message
        this.setState({confirmationMsg:"Collection renamed!"});
        //3. Close modal
        setTimeout(() => {
          //this.modalToggle() // close
          this.setState({modalOpened: false,
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
            <div className="flex link my-collections" to={`/${this.context.user.username}/collections/${this.state.collection._id}/${this.state.collection.colTitle}`}>
                <div  style={{alignItems:'center', width:'90%'}}>
                    <h2 className="link relative">{this.state.colTitle}</h2>
                </div>
                <div>
                {this.props.edit==true? 
                <div className="create-edit">
                <img
                  className="icon hidden-desktop"
                  onClick={this.modalToggle}
                  src="/images/icons/edit_icon_white.png"
                  alt=""
                />
                <button onClick={this.modalToggle} className="hidden-mobile btn margin-bottom">Rename collection</button>
              </div> :
                <p className="link relative" style={{top:'8px'}}>❯</p>}
                </div>
            </div>

            {/* modal */}

        <div className={containerClass}>
        <div className="modal-header dark-text">
          <p className="modal-title center">Edit collection</p>
          <hr />
        </div>
        <form className="modal-body dark-text flex-column" onSubmit={this.handleSubmit}>
          <label htmlFor="colTitle">Rename your collection</label>
          <input
            name="colTitle"
            value={this.state.colTitle}
            onChange={this.handleChange}
            className="chp-modal center custom-select margin-bottom"
            type="text"
          />
          <Button> Confirm new name</Button>
          {/* <button className="btn" onClick={this.handleSubmit}>Confirm new collection</button> */}
          {this.state.confirmationMsg}
        </form>
        
      </div>
      <div className={coverClass} onClick={this.modalToggle}></div>
    </div>

            );
    }
}
EditColTitle.contextType = MyContext;
export default EditColTitle;