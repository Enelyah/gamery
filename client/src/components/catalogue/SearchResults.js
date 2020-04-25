import React, { Component } from "react";
import GameMedium from "./GameMedium.js";
import Header from '../Header'


class SearchResults extends Component {

  render = () => {
    return (
      <div className="flex-column block-container search-detailed">
      <div className="searchdetail flex-column">
      <Header history={this.props.history}>Search Results</Header>

        <button className="btn" onClick={this.resetState}>Start new search</button> 
      </div>
      <div className = "searchlist ">
        {this.props.games.length>=1
          ? this.props.games.map(game => {
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
            })
          : "Run new search - no results"}
      </div>
      </div>
    );
  }
}

export default SearchResults;
