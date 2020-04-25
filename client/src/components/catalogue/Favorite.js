import React, { Component } from "react";
import { MyContext } from "../MyContext";
import Button from "../Button"
import axios from 'axios'
import Signup from "../auth/Signup";

class Favorite extends Component {
  state = {
    user: this.context.user,
    modalOpened: false,
    colTitle: "",
    confirmationMsg: "",
    favorite: false,
    collections: this.context.collections,
    col_id:""
  };

// open or close modale
  modalToggle = () => {
    this.setState({ modalOpened: !this.state.modalOpened });
  };

  //change star from white to black TODO
  updateFav = () => {
    this.setState({
      favorite: !this.state.favorite
    });
  };

// add game to collection
  handleSubmit = (event) => {
    event.preventDefault();
    const updateCol = axios.create({
      withCredentials: true
    })
    //Get game to add game to collection - can be done with props only, not needed
    // updateCol
    //   .get(`https://www.boardgameatlas.com/api/search?ids=${this.props.game_id}&client_id=FWG6FKSO4N `)
    //   .then(response => response.games)

    //1a create new collection if any
    if (this.state.colTitle){
    updateCol
      .post(  `${process.env.REACT_APP_APIURL || ""}/api/user/collections`, {
        colTitle: this.state.colTitle, games: this.props.game_id} )
      .then(res => res.data)
      .catch(err => { /* not hit since no 401 */ })} else{


      // create game in back (ref needed to add to collection)
      // .then( games =>
      //   update.put(`${process.env.REACT_APP_APIURL || ""}/api/user/collections/${this.state.col_id}`, {
      //     games:games[0]
      //   })
      //   .then(this.componentDidMount)
      //   .catch(err => { /* not hit since no 401 */ })
      // )
      //.then( games =>

      //1b else update existing collection with new game
        updateCol.put(`${process.env.REACT_APP_APIURL || ""}/api/user/collections/${this.state.col_id}`, {
          games:this.props.game_id, colTitle: this.state.colTitle
        })
        .catch(err => { /* not hit since no 401 */ })}
      //)
      

    //2. Display message
    this.setState({confirmationMsg:"Game added to collection!"});
    this.updateFav();
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
    const coverClass = this.state.modalOpened
      ? "modal-cover modal-cover-active"
      : "modal-cover";
    const containerClass = this.state.modalOpened
      ? "modal-container modal-container-active"
      : "modal-container";
    return (
      <div>
      <img
        className="favicon"
        src={
          this.state.favorite
            ? "https://img.icons8.com/ios-filled/50/000000/heart-plus.png"
            : "https://img.icons8.com/ios/50/000000/heart-plus.png"
        }
        alt=""
        onClick={this.modalToggle}
      />
              {/* modal */}

              <div className={containerClass}>
              {this.context.user?
              <div>
          <div className="modal-header dark-text">
             <p className="modal-title">Add to collection</p>
            <hr />
          </div>
          <form className="modal-body dark-text flex-column" onSubmit={this.handleSubmit}>
            <select className="custom-select margin-bottom" name="col_id" id="colList" onChange={this.handleChange}>
            <option value="">Pick collection...</option>
            {this.context.collections.map(col => {
              return <option value={col._id}>{col.colTitle}</option>;
            })}
            </select>
            <label htmlFor="colTitle" className="modal-title">Or add to new collection:</label>
            <input
              name="colTitle"
              value={this.state.colTitle}
              onChange={this.handleChange}
              className="chp-modal center custom-select margin-bottom"
              type="text"
            />
            <Button> Add to collection</Button>
            {/* <button className="btn" onClick={this.handleSubmit}>Confirm new collection</button> */}
            {this.state.confirmationMsg}
          </form>
          </div>
          : <div className='center'> <h3 style={{color:'black'}}>Create an account to start saving your favorite games!</h3><Signup h1={false} black={true}/></div>}

        </div>
        <div className={coverClass} onClick={this.modalToggle}></div>
      </div>
    );
  }
}

Favorite.contextType = MyContext;

export default Favorite;
