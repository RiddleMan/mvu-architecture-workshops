var $ = require('jquery');
var Header = require('./Header');
var List = require('./TodoList');
var Footer = require('./Footer');
var store = require('./store');
var redux = require('redux');
var actions = require('./actions');

//Only for debugging
window.Header = Header;
window.List = List;
window.Footer = Footer;

module.exports = function Root() {
  var $el;

  (function init() {
    $el = $('<div></div>');
  }());

  return {
    el: $el
  };
};

/*
  Parent > Child.render

  Parent decyduje o usunięciu
 */
