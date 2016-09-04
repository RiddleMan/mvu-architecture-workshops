var redux = require('redux');
var reducer = require('./reducer');

module.exports = redux.createStore(reducer);
