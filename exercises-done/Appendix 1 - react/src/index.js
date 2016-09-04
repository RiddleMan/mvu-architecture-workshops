var React = require('react');
var ReactDom = require('react-dom');
var Root = require('./Root');
var reactRedux = require('react-redux');
var Provider = reactRedux.Provider;

var store = require('./store');

ReactDom.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.querySelector('.todoapp')
);

window.store = store;
