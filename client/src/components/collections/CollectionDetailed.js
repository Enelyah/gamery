import React, { Component } from 'react';
import axios from 'axios';
import GameMedium from '../catalogue/GameMedium';
import {MyContext} from '../MyContext'
import Header from '../Header'
import {Link} from 'react-router-dom'

class CollectionDetailed extends Component {
    
    state = { 
        collection: "",
        games: []
     };

     

     componentDidMount() {

        axios.create({
            withCredentials: true
          }).get(`${process.env.REACT_APP_APIURL || ""}/api/user/collections/${this.props.collectionId}`)
          .then(response => response.data)
         //.then(data => data.map(col => col.colTitle))
             .then(data => 
                this.setState({collection: data.games.toString()}, function(){
                    if(this.state.collection)
                    {axios.get(`https://www.boardgameatlas.com/api/search?ids=${this.state.collection}&client_id=FWG6FKSO4N `)
                
                    .then(response => response.data)
                    .then(data => this.setState({games:data.games}))}
                    else this.setState({games:[]})
                    
                }))
        //         .then(
        //   axios.get(`https://www.boardgameatlas.com/api/search?ids=${this.state.collection}&client_id=FWG6FKSO4N `)
        //     .then(response => response.data)
        //     .then(data => this.setState({games:data.games}))
        //          ) 
                }
            
        //  componentDidUpdate = () => { 
        // //   let col_api=this.state.collection.toString();
        // //  // console.log(col_api)
        //  axios.get(`https://www.boardgameatlas.com/api/search?ids=${this.state.collection}&client_id=FWG6FKSO4N `)
        //     .then(response => response.data)
        //     .then(data => this.setState({games:data.games}))
        //     }
    //     let route;
    //     route = `https://www.boardgameatlas.com/api/search?ids=${this.props.gameId}&client_id=FWG6FKSO4N `

    //     axios.get(route)
    //       .then(response => response.data)
    //       .then(data => this.setState({collection: data.games}));
    //   }
      
    render() { 

        return ( 
            <div>
                <Header history={this.props.history}>My Collection: <br/>{this.props.colTitle}</Header>
                {
                this.state.games.length>=1?
                <div className="align-games align-games-container center">
                {this.state.games.map(game => 
                    <GameMedium
                    fav={false}
                    title={game.name} 
                    img={game.images.small} 
                    id={game.id} 
                    description={game.description_preview} 
                    age={ "Age: " +  (game.min_age ? game.min_age + "+" : "Not mentioned")}
                    rating={game.average_user_rating ? Math.round(game.average_user_rating*100)/100 :"No rating yet"} 
                    players={game.min_players && game.max_players ? (game.min_players + " - " + game.max_players + " players") : "No players info"}/>
                 )}
            </div>
            : 
            <div className="flex-column">
            <h2 className="center margin-bottom">You haven't added any games to this collection yet !</h2>
            <Link className="link margin-top" to="/"><button className="center margin-top btn">Browse games</button></Link>
            </div>
            }
                
            </div>
            

         );
    }
}
CollectionDetailed.contextType = MyContext;
export default CollectionDetailed;
