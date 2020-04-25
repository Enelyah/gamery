import React, { Component } from 'react';
import axios from 'axios';
import Favorite from './Favorite'
import Review from './Review'
import Rating from './Rating'
import Header from '../Header'
import Loadmore from '../Loadmore'

class GameDetailed extends Component {
    
    state = { 
        game: {
        },
        user: {},
        reviews: []
     };
     
     

     componentDidMount = () => {
        let route1, route2;
        if (this.props.gameId) {
          route1 = `https://www.boardgameatlas.com/api/search?ids=${this.props.gameId}&client_id=FWG6FKSO4N `
          route2 = `https://www.boardgameatlas.com/api/reviews?limit=12&description_required=true&game_id=${this.props.gameId}&client_id=FWG6FKSO4N`
        }
        axios.get(route1)
          .then(response => response.data)
          .then(data => this.setState({game: data.games[0]}))
        axios.get(route2)
        .then(response => response.data.reviews)
        .then(data => this.setState({reviews: data}))
      }



    render() { 

        var age="Age: " +  (typeof this.state.game.min_age === 'number' ? this.state.game.min_age + "+" : "Not mentioned");
        var rating="Rating: " + (this.state.game.average_user_rating ? Math.round(this.state.game.average_user_rating*100)/100 +"/5":"No rating yet");
        var players= this.state.game.min_players && this.state.game.max_players ? (this.state.game.min_players + " - " + this.state.game.max_players + " players") : "No players info"

        return ( 
            <div >
                <Header className="game-title" history={this.props.history}>{this.state.game.name}</Header>
                <div className="game-detailed-block">
                <div className='block-container margin-bottom center white game-detailed-img-block'>   
                    <Favorite game_id={this.props.gameId} />
                    <img className="game-detailed-img" src={this.state.game.image_url} alt={this.state.game.name}/>
                </div>
                
                <div className="game-detailed-text center">
                <Rating>{this.state.game.average_user_rating}</Rating>
                <a style={{color: 'white'}} href="#reviews">{this.state.game.num_user_ratings} ratings</a>

                <div className="game-medium-row-3 padding-top center">
                    <p>{this.state.game.description_preview}</p>
                </div>
                <div className="game-medium-row-4 flex center">
                <div className="game-medium-column-1">
                <p>{age}</p>
                </div>
                <div className="game-medium-column-2">
                   <p>{players}</p> 
                </div>
                
                </div>
             <div className="padding-bottom">
             <a href={`https://www.google.com/search?tbm=shop&q=${this.state.game.name}`} className="link btn center btn-pdp" >Buy this game</a>
             </div>
             </div>
             </div>
             <div className="game-medium-row-5 flex-column">
                {this.state.reviews.length>=1 && this.state.reviews ?
                <div className = "center reviews">
                <h3 id="reviews">User Reviews</h3>                                
                 <Loadmore className="flex center load-more-container" visible={8} increment={8} style={{display:"auto"}} >

                {this.state.reviews.map(review => 
                        <Review 
                        key={review.id} 
                        review_username={review.user.username} 
                        review_rating={review.rating} 
                        review_desc={review.description}
                        />)
                    }
                    </Loadmore>
                </div>

            : <p>No reviews for this game</p>}
             
             
                </div>
                </div>
         );
    }
}
 
export default GameDetailed;
