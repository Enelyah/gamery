import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Favorite from './Favorite'


class GameSmall extends Component {
   state ={
     user: this.props.user
   }
    title_short = function(title, length, ending) {
        if (length == null) {
          length = 25;
        }
        if (ending == null) {
          ending = '...';
        }
        if (title.length > length) {
          return title.substring(0, length - ending.length) + ending;
        } else {
          return title;
        }
      };

    render() { 
        
        return ( 
          <div className="block-container">
            <Favorite game_id={this.props.id}/>
            <Link to={`/games/${this.props.id}`} className="link">
             <div className="game-small flex">
                <div className="game-small-row-1">
                    <img className="game-small-img" src={this.props.img} alt=""/>
                </div>
                <h4 className="game-small-row-2">
                    {this.title_short(this.props.title)}
                </h4>
             </div>
            </Link>
            </div>
         );
    }
}
 
export default GameSmall ;