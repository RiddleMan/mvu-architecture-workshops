var React = require('react');
var actions = require('./actions');
var FILTER_TYPES = actions.FILTER_TYPES;

function Footer(props) {
  var filterAllClassName = 'filter-all ' +
    (props.filter === FILTER_TYPES.ALL ? 'selected' : '');
  var filterActiveClassName = 'filter-active ' +
    (props.filter === FILTER_TYPES.ACTIVE ? 'selected' : '');
  var filterCompletedClassName = 'filter-completed ' +
    (props.filter === FILTER_TYPES.COMPLETED ? 'selected' : '');


  function onFilter(filter) {
    props.changeFilter(filter);
  }

  function onClear() {
    props.clearCompleted();
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong className="todo-count-no">{props.activeTodosCount}</strong>
        <span> </span>
        <span>items</span>
        <span> left</span>
        </span>
      <ul className="filters">
        <li
          onClick={onFilter.bind(null, FILTER_TYPES.ALL)}
          className={filterAllClassName}>
          <a href="#/">All</a>
        </li>
        <span> </span>
        <li
          onClick={onFilter.bind(null, FILTER_TYPES.ACTIVE)}
          className={filterActiveClassName}>
          <a href="#/active">Active</a>
        </li>
        <span> </span>
        <li
          onClick={onFilter.bind(null, FILTER_TYPES.COMPLETED)}
          className={filterCompletedClassName}>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button
        onClick={onClear}
        className="clear-completed">Clear completed</button>
    </footer>
  );
};

module.exports = Footer;
