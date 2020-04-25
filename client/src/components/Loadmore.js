import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck'
//'/node_modules/@babel/runtime/helpers/classCallCheck.js'
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';

var Loadmore =
/*#__PURE__*/
function (_Component) {
  _inherits(Loadmore, _Component);

  function Loadmore(props) {
    var _this;

    _classCallCheck(this, Loadmore);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Loadmore).call(this, props));
    _this.state = {
      visible: props.visible,
      increment: props.increment
    };
    return _this;
  }

  _createClass(Loadmore, [{
    key: "loadmore",
    value: function loadmore() {
      var _this2 = this;

      this.setState(function (prevState) {
        return {
          visible: prevState.visible + _this2.state.increment
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;
      var visible = this.state.visible;
      return React.createElement("div", {
        className: "load-more"
      }, children.slice(0, visible).map(function (e) {
        return e;
      }), children.length > visible ? React.createElement("div", {
        className: "loadmore-btn-container"
      }, React.createElement("button", {
        className: "btn loadmore-btn",
        onClick: function onClick() {
          return _this3.loadmore();
        }
      }, "Load More")) : null);
    }
  }]);

  return Loadmore;
}(Component);

export default Loadmore;