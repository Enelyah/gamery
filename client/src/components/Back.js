import React, { Component } from 'react';
import {MyContext} from './MyContext';
import {Link} from 'react-router-dom';

class Back extends Component {

  render() {
    return (
        <div className="backtoback">
            <Link className="back" to="/">
                <img className="picto" src="/images/imagenav/outline_arrow_back_ios_white_18dp.png" alt="back" />
            </Link>
        </div>

    );
  }
}

Back.contextType = MyContext;

export default Back;