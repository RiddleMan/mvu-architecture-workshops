var $ = require('jquery');

function Footer(nextProps) {
  var props = {};
  var prevProps;
  var $el;

  function render(nextProps) {
    prevProps = props;
    props = nextProps;
  }

  (function init() {
    $el = $(
      '<footer class="footer">' +
        '<span class="todo-count">' +
          '<strong class="todo-count-no"></strong>' +
          '<span> </span>' +
          '<span>items</span>' +
          '<span> left</span>' +
          '</span>' +
        '<ul class="filters">' +
          '<li class="filter-all">' +
            '<a href="#/">All</a>' +
          '</li>' +
          '<span> </span>' +
          '<li class="filter-active">' +
            '<a href="#/active">Active</a>' +
          '</li>' +
          '<span> </span>' +
          '<li class="filter-completed">' +
            '<a href="#/completed">Completed</a>' +
          '</li>' +
        '</ul>' +
        '<button class="clear-completed">Clear completed</button>' +
      '</footer>'
    );

    render(nextProps);
  }());

  return {
    el: $el,
    render: render,
    destroy: function() {
      $el.remove();
    }
  };
}

module.exports = Footer;
