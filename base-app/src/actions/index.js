var ADD_TODO = 'ADD_TODO';
var TOGGLE_ALL = 'TOGGLE_ALL';
var DELETE_TODO = 'DELETE_TODO';

var TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
var CHANGE_FILTER = 'CHANGE_FILTER';

var CLEAR_COMPLETED = 'CLEAR_COMPLETED';

var FILTER_TYPES = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
};

function addTodo(name) {
  return {
    type: ADD_TODO,
    name: name
  };
}

function toggleAll() {
  return {
    type: TOGGLE_ALL
  };
}

function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id: id
  };
}

function toggleComplete(id) {
  return {
    type: TOGGLE_COMPLETE,
    id: id
  };
}

function changeFilter(filter) {
  return {
    type: CHANGE_FILTER,
    filter: filter
  };
}

function clearCompleted() {
  return {
    type: CLEAR_COMPLETED
  };
}

module.exports = {
  addTodo: addTodo,
  toggleAll: toggleAll,
  deleteTodo: deleteTodo,
  toggleComplete: toggleComplete,
  changeFilter: changeFilter,
  clearCompleted: clearCompleted,

  FILTER_TYPES: FILTER_TYPES,
  ADD_TODO: ADD_TODO,
  TOGGLE_ALL: TOGGLE_ALL,
  DELETE_TODO: DELETE_TODO,
  TOGGLE_COMPLETE: TOGGLE_COMPLETE,
  CHANGE_FILTER: CHANGE_FILTER,
  CLEAR_COMPLETED: CLEAR_COMPLETED
};
