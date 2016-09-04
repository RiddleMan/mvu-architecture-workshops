var $ = require('jquery');
var TodoItem = require('./TodoItem');

function TodoList(nextProps) {
  var props = {};
  var prevProps;

  function render(nextProps) {
    prevProps = props;
    props = nextProps;
  }

  (function init() {
    $el = $(
      '<section class="main">' +
        '<ul class="todo-list">' +
        '</ul>' +
      '</section>'
    );

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
