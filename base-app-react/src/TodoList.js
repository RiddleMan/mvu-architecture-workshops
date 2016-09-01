var React = require('react');
var TodoItem = require('./TodoItem');

function TodoList(props) {
  return (
    <section className="main">
      <ul className="todo-list">
        {props.todos.map(function(todo, idx) {
          return <TodoItem
            key={idx}
            deleteTodo={props.deleteTodo.bind(null, idx)}
            toggleComplete={props.toggleComplete.bind(null, idx)}
            changeName={props.changeName.bind(null, idx)}
            name={todo.name}
            isCompleted={todo.isCompleted} />
        })}
      </ul>
    </section>
  );
}

module.exports = TodoList;
