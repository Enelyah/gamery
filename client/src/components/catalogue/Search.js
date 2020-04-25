import React, { Component } from "react";
import GameMedium from "./GameMedium.js";
import axios from "axios";



class Search extends Component {
  state = {
    //dans games la donnée de l api
    games: [],
    query: ""
  };

  handleSubmit = (event) => {
    let route;
    event.preventDefault();
    if (this.state.query) {
      route = `https://www.boardgameatlas.com/api/search?name=${this.state.query}&fuzzy_match=true&limit=20&client_id=FWG6FKSO4N `;
    }
    axios
      .get(route)
      .then(response => response.data)
      .then(data => this.setState({ games: data.games }));

  };

  handleQuery = ev => {
    this.setState({
      query: ev.target.value
    });
  };

  resetState = () => {
    this.setState(
    {
      games: [],
      query: ""
      });
    }

  render() {

    return (
      <div className="flex-column">
        <h1 className="center">Search game</h1>
        <form className="flex-column padding-bottom" onSubmit={this.handleSubmit}>
          <input className = "searchbar"
          type="search"
          value={this.state.query}
          onChange={this.handleQuery}
          />
          <button className="btn padding-bottom center">Find</button>
        </form>
        {this.state.games.length>=1 ? 
        <button className="btn padding-bottom" onClick={this.resetState}>New search</button>  : ""}  
        {this.state.games
          ? 
          <div className="align-games align-games-container center">
          {this.state.games.map(game => {
              return (
                <GameMedium 
                  fav={true}
                  title={game.name}
                  img={game.images.small}
                  id={game.id}
                  description={game.description_preview}
                  age={
                    "Age: " +
                    (game.min_age ? game.min_age + "+" : "Not mentioned")
                  }
                  rating={
                    game.average_user_rating
                      ? Math.round(game.average_user_rating * 100) / 100
                      : "No rating yet"
                  }
                  players={
                    game.min_players && game.max_players
                      ? game.min_players + " - " + game.max_players + " players"
                      : "No players info"
                  }
                />
              );
            })}
            </div>
          : "Start typing to see results"}


      </div>
    );
  }
}

export default Search;
