var $ = require('jquery');
var TodoItem = require('./TodoItem');

function TodoList(nextProps) {
  var props = {};
  var prevProps;
  var $el;
  var $list;
  var _instances = [];

  function render(nextProps) {
    prevProps = props;
    props = nextProps;

    // Destroy all previous
    _instances.forEach(function(instance) {
      instance.destroy();
    });

    // create new ones
    _instances = props.todos.map(function(todo, idx) {
      return TodoItem({
        deleteTodo: props.deleteTodo.bind(null, idx),
        toggleComplete: props.toggleComplete.bind(null, idx),
        name: todo.name,
        isCompleted: todo.isCompleted
      });
    });

    // append new ones
    _instances.forEach(function(instance) {
      $list.append(instance.el);
    });
  }

  (function init() {
    $el = $(
      '<section class="main">' +
        '<ul class="todo-list">' +
        '</ul>' +
      '</section>'
    );

    $list = $el.find('.todo-list');

    render(nextProps);
  }());

  return {
    el: $el,
    render: render,
    destroy: function() {
      $el.remove();
    }
  }
};

module.exports = TodoList;
