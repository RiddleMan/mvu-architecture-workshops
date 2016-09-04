var $ = require('jquery');

function TodoItem(nextProps) {
  var props = {};
  var prevProps;
  var $el;

  function render(nextProps) {
    prevProps = props;
    props = nextProps;
  }

  (function init() {
    $el = $(
      '<li>' +
        '<div class="view">' +
          '<input class="toggle" type="checkbox">' +
          '<label></label>' +
          '<button class="destroy"></button>' +
        '</div>' +
        '<input class="edit">' +
      '</li>'
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
}

module.exports = TodoItem;
