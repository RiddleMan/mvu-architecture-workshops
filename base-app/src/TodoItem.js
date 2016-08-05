var $ = require('jquery');

function TodoItem(nextProps) {
  var props = {};
  var prevProps;
  var $el;
  var $toggler;
  var $text;
  var $remove;

  function render(nextProps) {
    prevProps = props;
    props = nextProps;

    $el.toggleClass('completed', props.isCompleted);
    $toggler.prop('checked', props.isCompleted);
    $text.html(props.name);
  }

  function onDestroy() {
    props.deleteTodo();
  }

  function onToggle() {
    props.toggleComplete();
  }

  (function init() {
    $el = $(
      '<li>' +
        '<div class="view">' +
          '<input class="toggle" type="checkbox">' +
          '<label></label>' +
          '<button class="destroy"></button>' +
        '</div>' +
      '</li>'
    );

    $toggler = $el.find('.toggle');
    $text = $el.find('label');
    $remove = $el.find('.destroy');

    $toggler.on('click', onToggle);
    $remove.on('click', onDestroy);

    render(nextProps);
  }());

  return {
    el: $el,
    render: render,
    destroy: function() {
      $el.remove();
    }
  }
}

module.exports = TodoItem;
