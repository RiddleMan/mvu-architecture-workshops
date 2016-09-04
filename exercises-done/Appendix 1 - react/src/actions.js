var ADD_TODO = 'ADD_TODO';
var TOGGLE_ALL = 'TOGGLE_ALL';
var DELETE_TODO = 'DELETE_TODO';
var TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
var CHANGE_NAME = 'CHANGE_NAME';
var CHANGE_FILTER = 'CHANGE_FILTER';
var CLEAR_COMPLETED = 'CLEAR_COMPLETED';

var FILTER_TYPES = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
};

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function addTodo(name) {
  return {
    type: ADD_TODO,
    name: name,
    id: guid()
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

function changeName(id, name) {
  if(!name)
    return deleteTodo(id);

  return {
    type: CHANGE_NAME,
    id: id,
    name: name
  };
}

function changeFilter(filter) {
  if(filter !== FILTER_TYPES.ALL
    && filter !== FILTER_TYPES.ACTIVE
    && filter !== FILTER_TYPES.COMPLETED)
    throw new Error('Filter need to be a one of `FILTER_TYPES`');

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
  changeName: changeName,

  FILTER_TYPES: FILTER_TYPES,
  ADD_TODO: ADD_TODO,
  TOGGLE_ALL: TOGGLE_ALL,
  DELETE_TODO: DELETE_TODO,
  TOGGLE_COMPLETE: TOGGLE_COMPLETE,
  CHANGE_NAME: CHANGE_NAME,
  CHANGE_FILTER: CHANGE_FILTER,
  CLEAR_COMPLETED: CLEAR_COMPLETED
};
