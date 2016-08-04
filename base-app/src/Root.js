var $ = require('jquery');
var Header = require('./Header');
var store = require('./store');
var redux = require('redux');
var actions = require('./actions');

module.exports = function Root() {
  var $el;
  var $btn;
  var $counter;
  var headerComponent;

  function getHeaderProps() {
    var bindedActions = redux.bindActionCreators({
      addTodo: actions.addTodo,
      toggleAll: actions.toggleAll
    }, store.dispatch);
    var state = store.getState();

    return {
      addTodo: bindedActions.addTodo,
      toggleAll: bindedActions.toggleAll,
      isToggled: state.isToggled
    };
  }

  (function init() {
    headerComponent = Header(getHeaderProps());

    $el = $('<div></div>');
    $el.append(headerComponent.el);

    store.subscribe(function() {
      headerComponent.render(getHeaderProps());
    })
  }());

  return {
    el: $el
  };
};

/*
  Parent > Child.render

  Parent decyduje o usunięciu
 */
