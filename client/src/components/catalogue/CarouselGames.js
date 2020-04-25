import React, { Component } from 'react';
import GameSmall from './GameSmall'
import axios from 'axios';
import Loadmore from '../Loadmore'


class CarouselGames extends Component {
    state = { 
        blocks: [],
     }

    componentDidMount() {
        axios.get(this.props.route)
          .then(response=> response.data)
          .then(data => this.setState({blocks: data.games}))
      }

    render() { 
        return ( 
           <div className="carousel">
                <h3 className="center padding-bottom">{this.props.header}</h3>
                <div className="carousel-container"> 
                <Loadmore className="flex center load-more-container" visible={8} increment={8} >
                    {this.state.blocks.map(block => {return(
                        <GameSmall title={block.name} img={block.images.small} id={block.id} />
                     )})}
                     </Loadmore>
                </div>
                <div className="carousel-container no-load-more"> 
                    {this.state.blocks.map(block => {return(
                        <GameSmall title={block.name} img={block.images.small} id={block.id} />
                     )})}
                </div>
            </div>
            
         ); 
    }
}
 
export default CarouselGames;