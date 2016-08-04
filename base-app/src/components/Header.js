var $ = require('jquery');

function Header(el, props) {
  var nextProps = props;
  var prevProps;
  var $el;
  var $input;
  var $toggleAll;

  function onKeyUp(e) {
    if(event.which === 13) {
      event.preventDefault();
      console.log(e.target.value);
    }
  }

  function onToggle() {
    
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
  }());

  return {
    el: $el,
    render: function(nextProps) {
      prevProps = props;
      props = nextProps;
    },
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
