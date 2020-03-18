import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class CollectionSmall extends Component {
    state = {  }

    render() { 
        
        return ( 

            <Link to={`/categories/${this.props.link}/${this.props.colTitle}`} className="link">
             <div className="collection-small flex">
                <div className="collection-small-row-1">
                    <img className="collection-small-img" src={this.props.src} alt=""/>
                </div>
                <h4 className="collection-small-row-2 title">
                    {this.props.colTitle}
                </h4>
             </div>
            </Link>
         );
    }
}
 
 
export default CollectionSmall;