var $ = require('jquery');
var actions = require('./actions');
var FILTER_TYPES = actions.FILTER_TYPES;

function Footer(nextProps) {
  var props = {};
  var prevProps;
  var $el;
  var $itemsCount;
  var $filterAll;
  var $filterActive;
  var $filterCompleted;
  var $clearCompleted;

  function render(nextProps) {
    prevProps = props;
    props = nextProps;

    $filterAll.find('a')
      .toggleClass('selected', props.filter === FILTER_TYPES.ALL);

    $filterActive.find('a')
      .toggleClass('selected', props.filter === FILTER_TYPES.ACTIVE);

    $filterCompleted.find('a')
      .toggleClass('selected', props.filter === FILTER_TYPES.COMPLETED);

    $itemsCount.html(props.activeTodosCount);
  }

  function onFilter(filter) {
    props.changeFilter(filter);
  }

  function onClear() {
    props.clearCompleted();
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

    $itemsCount = $el.find('.todo-count-no');
    $filterAll = $el.find('.filter-all');
    $filterActive = $el.find('.filter-active');
    $filterCompleted = $el.find('.filter-completed');
    $clearCompleted = $el.find('.clear-completed');

    $filterAll.on('click', onFilter.bind(null, FILTER_TYPES.ALL));
    $filterActive.on('click', onFilter.bind(null, FILTER_TYPES.ACTIVE));
    $filterCompleted.on('click', onFilter.bind(null, FILTER_TYPES.COMPLETED));

    $clearCompleted.on('click', onClear);

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

module.exports = Footer;
