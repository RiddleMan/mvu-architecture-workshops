var $ = require('jquery');
var Header = require('./Header');
var List = require('./TodoList');
var Footer = require('./Footer');
var store = require('./store');
var redux = require('redux');
var actions = require('./actions');

module.exports = function Root() {
  var $el;
  var $btn;
  var $counter;
  var headerComponent;
  var listComponent;
  var footerComponent;

  var bindedActions = redux.bindActionCreators({
    addTodo: actions.addTodo,
    toggleAll: actions.toggleAll,
    deleteTodo: actions.deleteTodo,
    toggleComplete: actions.toggleComplete,
    changeFilter: actions.changeFilter,
    clearCompleted: actions.clearCompleted
  }, store.dispatch);

  function getHeaderProps() {
    var state = store.getState();

    return {
      addTodo: bindedActions.addTodo,
      toggleAll: bindedActions.toggleAll,
      isToggled: state.isToggled
    };
  }

  function getListProps() {
    var state = store.getState();

    return {
      deleteTodo: bindedActions.deleteTodo,
      toggleComplete: bindedActions.toggleComplete,
      todos: state.todosByFilter
    };
  }

  function getFooterProps() {
    var state = store.getState();

    return {
      changeFilter: bindedActions.changeFilter,
      clearCompleted: bindedActions.clearCompleted,
      activeTodosCount: state.activeTodosCount,
      filter: state.filter
    };
  }

  (function init() {
    headerComponent = Header(getHeaderProps());
    listComponent = List(getListProps());
    footerComponent = Footer(getFooterProps());

    $el = $('<div></div>');
    $el.append(headerComponent.el);
    $el.append(listComponent.el);
    $el.append(footerComponent.el);

    store.subscribe(function() {
      headerComponent.render(getHeaderProps());
      listComponent.render(getListProps());
      footerComponent.render(getFooterProps());
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
