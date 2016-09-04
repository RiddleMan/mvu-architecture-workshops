var React = require('react');
var ReactDom = require('react-dom');
var Header = require('./Header');
var List = require('./TodoList');
var Footer = require('./Footer');
var reactRedux = require('react-redux');
var connect = reactRedux.connect;

var actions = require('./actions');

function Root(props) {
  return (
    <div>
      <Header
        addTodo={props.addTodo}
        toggleAll={props.toggleAll}
        isToggled={props.state.isToggled} />
      <List
        deleteTodo={props.deleteTodo}
        toggleComplete={props.toggleComplete}
        changeName={props.changeName}
        todos={props.state.todosByFilter} />
      <Footer
        changeFilter={props.changeFilter}
        clearCompleted={props.clearCompleted}
        activeTodosCount={props.state.activeTodosCount}
        filter={props.state.filter} />
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

module.exports = Root;
