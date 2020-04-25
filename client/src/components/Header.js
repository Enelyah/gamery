import React, { Component } from 'react';


class Header extends Component {
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this); // i think you are missing this
     }
     
     goBack(){
         this.props.history.goBack();
     }
     
    render() { 
        return ( 
            <div className="flex margin-top relative" >
                <img className='back-icon' onClick={this.goBack} src="/images/icons/back-icon.png" alt="back"/>
                <div className='center relative' ><h1 >{this.props.children}</h1>
            </div>  </div>
         );
    }
}
 
export default Header;

