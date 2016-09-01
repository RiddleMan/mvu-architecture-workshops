var React = require('react');
var ReactDom = require('react-dom');
var Header = require('./Header');
var List = require('./TodoList');
var Footer = require('./Footer');
var store = require('./store');
var redux = require('redux');
var reactRedux = require('react-redux');
var Provider = reactRedux.Provider;
var connect = reactRedux.connect;

var actions = require('./actions');

var Root = function(props) {
  return (
    <div>
      <Header
        addTodo={props.addTodo}
        toggleAll={props.toggleAll}
        isToggled={props.isToggled} />
      <List
        deleteTodo={props.deleteTodo}
        toggleComplete={props.toggleComplete}
        changeName={props.changeName}
        todos={props.todosByFilter} />
      <Footer
        changeFilter={props.changeFilter}
        clearCompleted={props.clearCompleted}
        activeTodosCount={props.activeTodosCount}
        filter={props.filter} />
    </div>
  );
}
var mapStateToProps = function(state) {
  return {
    state: state
  };
};

Root = connect(mapStateToProps, {
  addTodo: actions.addTodo,
  toggleAll: actions.toggleAll,
  deleteTodo: actions.deleteTodo,
  toggleComplete: actions.toggleComplete,
  changeFilter: actions.changeFilter,
  clearCompleted: actions.clearCompleted,
  changeName: actions.changeName
})(Root);

ReactDom.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.querySelector('.todoapp')
);
