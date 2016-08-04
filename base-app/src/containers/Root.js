var $ = require('jquery');

module.exports = function Root(el) {
  var prevProps = props;
  var $el;
  var $btn;
  var $counter;

  (function init() {
    $el = $(
      '<div>' +
        '<button>Click me!</div>' +
        '<h1>' + props.counter + '</div>' +
      '</div>'
    );

    $counter = $el.find('h1');
    $btn = $el.find('button');
  }());

  return {
    el: $el,
    render: function() {

    }
  }
};

/*
  Parent > Child.render

  Parent decyduje o usunięciu
 */
