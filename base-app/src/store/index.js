var redux = require('redux');
var reducer = require('../reducers');

module.exports = redux.createStore(reducer);
