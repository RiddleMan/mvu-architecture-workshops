var initialState;
module.exports = function(state, action) {
  if(!state)
    state = initialState;

  return state;
};
