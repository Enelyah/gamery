import React, { Component } from 'react';
import CarouselGames from './catalogue/CarouselGames';
import CategorySmall from './catalogue/CategorySmall';
import Button from './Button';
import {Link} from 'react-router-dom';
import {MyContext} from './MyContext';
import Search from '../components/catalogue/Search';
import Backtotop from '../components/Backtotop';


class Homepage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="homepage">
                
                <img className='logo header' src="../../images/logo.png" alt=""/>
                {/* <h1 className='header'>Gamery</h1>
                <h2 className='header'>Find and collect games you love</h2> */}
                <Search/>
                <CarouselGames header='Most popular' route = 'https://www.boardgameatlas.com/api/search?client_id=FWG6FKSO4N&order_by=num_user_rating'/>
                <CarouselGames header='Latest releases' route='https://www.boardgameatlas.com/api/search?client_id=FWG6FKSO4N&year_published=2020'/>
                <CarouselGames header='Best rated' route='https://www.boardgameatlas.com/api/search?client_id=FWG6FKSO4N&order_by=average_user_rating'/>
                
                <h3 className="center padding-bottom block">Browse recommended categories</h3>
                <div className="align-cat">
                <CategorySmall id="O0ogzwLUe8" colTitle="Strategy" src="../../images/categories/strategy.jpg"/>
                <CategorySmall id="X8J7RM6dxX" colTitle="Party Game" src="../../images/categories/party2.jpg"/>
                </div>
                <div className="align-cat">
                <CategorySmall id="7rV11PKqME" colTitle="Family Game" src="../../images/categories/family2.jpg"/>
                <CategorySmall id="ge8pIhEUGE" colTitle="Cooperative" src="../../images/categories/cooperativegames1.jpg"/>
                </div>
                <Link className="link-black" to='/categories'>
                <Button>Browse all categories</Button>
                </Link>
                <Backtotop/>
            </div>
         );
    }
}

Homepage.contextType = MyContext;
export default Homepage;