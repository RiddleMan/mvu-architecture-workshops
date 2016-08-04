var $ = require('jquery');

function Header(nextProps) {
  var props = {};
  var prevProps;
  var $el;
  var $input;
  var $toggleAll;

  function onKeyUp(e) {
    if(event.which === 13) {
      event.preventDefault();
      props.addTodo(e.target.value);
      $input.val('');
    }
  }

  function onToggle() {
    props.toggleAll();
  }

  function render(nextProps) {
    prevProps = props;
    props = nextProps;

    $toggleAll.prop('checked', props.isToggled);
  }

  (function init() {
    $el = $(
      '<header class="header">' +
        '<h1>todos</h1>' +
        '<input class="new-todo" placeholder="What needs to be done?">' +
        '<input class="toggle-all" type="checkbox">' +
      '</header>'
    );

    $input = $el.find('.new-todo');
    $toggleAll = $el.find('.toggle-all');

    $input.on('keyup', onKeyUp);
    $toggleAll.on('change', onToggle);

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

/*
  Parent > Child.render

  Parent decyduje o usunięciu
 */

module.exports = Header;
