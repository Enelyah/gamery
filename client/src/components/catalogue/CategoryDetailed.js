import React, { Component } from 'react';
import axios from 'axios';
import GameMedium from './GameMedium'
import images from '../../images'
import Header from '../Header'
import Backtotop from '../Backtotop';


class CategoryDetailed extends Component {
    
    state = { 
        collection: []
     };

     img(){ 
         return images.find(x => x.category === this.props.colTitle).src};

     componentDidMount() {
        let route;

        if (this.props.collectionId) {
          route = `https://www.boardgameatlas.com/api/search?categories=${this.props.collectionId}&client_id=FWG6FKSO4N `
        }
        axios.get(route)
          .then(response => response.data)
          .then(data => this.setState({collection: data.games}));
      }
      
    render() { 

        return ( 
            <div>
                <div className="hero-banner" style={{backgroundImage:`url(${this.img()})`}}>                
                </div>
                <Header history={this.props.history}>Category: {this.props.colTitle}</Header>
                <div className="align-games-container">
                <div className="align-games">
                    {this.state.collection.map(game => {return(
                        <GameMedium 
                        fav={true}
                        title={game.name} 
                        img={game.images.small} 
                        id={game.id} 
                        description={game.description_preview} 
                        age={ "Age: " +  (game.min_age ? game.min_age + "+" : "Not mentioned")}
                        rating={game.average_user_rating ? Math.round(game.average_user_rating*100)/100:"No rating yet"} 
                        players={game.min_players && game.max_players ? (game.min_players + " - " + game.max_players + " players") : "No players info"}/>
                     )})}
                </div>
                </div>
                <Backtotop/>
            </div>

         );
    }
}
 
export default CategoryDetailed;