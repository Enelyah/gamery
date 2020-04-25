import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import CategorySmall from './CategorySmall'
import images from '../../images'
import Header from '../Header'
import Backtotop from '../Backtotop';

const imgsMap = {
    'abstract': 'https:///img.ur/s/asdlfkasjh.png',
    'adventure': ''
}

class CategoryListing extends Component {
    state = { 
        categories: []
     }

    img = () => {
        var state2=[...this.state.categories];
        state2.forEach((cat,i) => cat.image= images[i].src)
        this.setState({categories:state2})
    }

    componentDidMount = () => {
        axios.get('https://www.boardgameatlas.com/api/game/categories?client_id=FWG6FKSO4N')
          .then(response=> response.data.categories.filter(function(cat) {
            return (
                cat.name === "Abstract" || 
                cat.name === "Adventure" ||
                cat.name === "Animals" ||
                cat.name === "Bluffing" ||
                cat.name === "Card Game" ||
                cat.name === "City Building" ||
                cat.name === "Cooperative" ||
                cat.name === "Deduction" ||
                cat.name === "Dice" ||
                cat.name === "Educational" ||
                cat.name === "Family Game" ||
                cat.name === "Farming" || 
                cat.name === "Horror" ||
                cat.name === "Humor" ||
                cat.name === "Medieval" ||
                cat.name === "Memory" ||
                cat.name === "Mythology" ||
                cat.name === "Party Game" ||
                cat.name === "Puzzle" ||
                cat.name === "RPG" ||
                cat.name === "Sci-Fi" ||
                cat.name === "Strategy" ||
                cat.name === "Wargame" ||
                cat.name === "Western" ||
                cat.name === "Zombies"
            );
        }))
        .then(filter => this.setState({categories: filter}))
        .then(
            this.img
        )
      }

      ;

    render() { 
        return ( 
            <div className = "clp">
                <Header history={this.props.history}>Explore categories</Header>
                <div className="listing">
                    {this.state.categories.map(cat => {return(
                        <CategorySmall id={cat.id} colTitle={cat.name} src={cat.image} />
                     )})}
                </div>
                <Backtotop/>
            </div>
         );
    }
}
 
export default CategoryListing;