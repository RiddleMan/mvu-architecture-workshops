var $ = require('jquery');

function Header(nextProps) {
  var props = {};
  var prevProps;
  var $el;

  function render(nextProps) {
    prevProps = props;
    props = nextProps;
  }

  (function init() {
    $el = $(
      '<header class="header">' +
        '<h1>todos</h1>' +
        '<input class="new-todo" placeholder="What needs to be done?">' +
        '<input class="toggle-all" type="checkbox">' +
      '</header>'
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

module.exports = Header;
