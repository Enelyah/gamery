import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Favorite from './Favorite';
import Rating from './Rating'

class GameMedium extends Component {
    state = {  }
    title_short = function(title, length, ending) {
        if (length == null) {
          length = 30;
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

      desc_short = function(desc, length, ending) {
        if (length == null) {
          length = 200;
        }
        if (ending == null) {
          ending = '...';
        }
        if (desc.length > length) {
          return desc.substring(0, length - ending.length) + ending;
        } else {
          return desc;
        }
      };

    render() { 
        
        return ( 
          <div className="block-container game-medium">
            {this.props.fav? <Favorite game_id={this.props.id} />:""}
            <Link to={`/games/${this.props.id}`} className="link ">
             <div className="game-medium flex">
                <div className="game-medium-row-1">
                    <img className="game-medium-img" src={this.props.img} alt=""/>
                </div>
                <div className="game-medium-row-2 title">
                    {this.title_short(this.props.title)}
                    <Rating>{this.props.rating}</Rating>
                </div>
                <div className="game-medium-row-3">
                   <p> {this.desc_short(this.props.description)}</p>
                </div>
                <div className="game-medium-row-4 flex">
                <div className="game-medium-column-1 center">
                {this.props.age}
                </div>
                <div className="game-medium-column-2 center">
                    {this.props.players}
                </div>
                </div>
             </div>
            </Link>
            </div>
         );
    }
}
 
export default GameMedium ;