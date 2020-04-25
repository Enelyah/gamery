import React, { Component } from "react";


class Backtotop extends Component {
  //scrolbutton
  constructor() {
    super();

    this.state = {
      intervalId: 0,
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <button
        title="Back to top"
        className="scroll"
        onClick={(event) => {
            event.preventDefault();
          this.scrollToTop();
        }}
      >
        <span className="arrow-up glyphicon glyphicon-chevron-up"></span>
        <img className="picto" src="/images/imagenav/outline_expand_less_white_36dp.png" alt="top" />
        
      </button>
    );
  }
}


export default Backtotop;
