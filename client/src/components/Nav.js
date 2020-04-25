import React, { Component } from 'react';
import {MyContext} from './MyContext';
import {Link} from 'react-router-dom';

class Nav extends Component {

  render() {
    return (
        <div className="navbar">
            <Link className="picto" to="/">
                {/* <img className="home" src="../../images/imagenav/baseline_home_black_48dp.png" width="40" height="40" alt="home" /> */}
                <img className="picto" src="/images/imagenav/baseline_home_white_48dp.png" alt="home" />
            </Link>
            <Link className="picto" to="/search">
                {/* <img className="search" src="../../images/imagenav/baseline_search_black_48dp.png" width="40" height="40" alt="search" /> */}
                <img className="picto" src="/images/imagenav/baseline_search_white_48dp.png" alt="search" />
            </Link>
            <Link className="picto" to={`/${this.context.user.username}/collections`}>
                {/* <img className="fav" src="../../images/imagenav/baseline_star_border_black_48dp.png" width="40" height="40" alt="fav" /> */}
                <img className="picto" src="/images/imagenav/outline_favorite_white_48dp.png" alt="fav" />
            </Link>
            <Link className="picto" to="/profile">
                {/* <img className="profile" src="../../images/imagenav/baseline_account_circle_black_48dp.png" width="40" height="40" alt="profile" /> */}
                <img className="picto" src="/images/imagenav/baseline_account_circle_white_48dp.png" alt="profile" />
            </Link>
        </div>

    );
  }
}

Nav.contextType = MyContext;

export default Nav;