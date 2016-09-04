var $ = require('jquery');
var actions = require('./actions');

var ADD_TODO = actions.ADD_TODO;

var initialState = {};

function reducer(state, action) {
  if(state === undefined)
    state = initialState;

  switch(action.type){
    case ADD_TODO:
      return state;

    default:
      return state;
  }
};


module.exports = reducer;
