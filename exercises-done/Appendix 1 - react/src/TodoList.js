var React = require('react');
var TodoItem = require('./TodoItem');

function TodoList(props) {
  return (
    <section className="main">
      <ul className="todo-list">
        {props.todos.map(function(todo) {
          return <TodoItem
            key={todo.id}
            deleteTodo={props.deleteTodo.bind(null, todo.id)}
            toggleComplete={props.toggleComplete.bind(null, todo.id)}
            changeName={props.changeName.bind(null, todo.id)}
            name={todo.name}
            isCompleted={todo.isCompleted} />
        })}
      </ul>
    </section>
  );
}

module.exports = TodoList;
