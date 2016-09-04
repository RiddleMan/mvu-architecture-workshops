var $ = require('jquery');
var actions = require('./actions');

var ADD_TODO = actions.ADD_TODO;
var TOGGLE_ALL = actions.TOGGLE_ALL;
var DELETE_TODO = actions.DELETE_TODO;
var TOGGLE_COMPLETE = actions.TOGGLE_COMPLETE;
var CHANGE_NAME = actions.CHANGE_NAME;
var CHANGE_FILTER = actions.CHANGE_FILTER;
var CLEAR_COMPLETED = actions.CLEAR_COMPLETED;
var FILTER_TYPES = actions.FILTER_TYPES;

var initialState = {
  todos: [],
  todosByFilter: [],
  filter: FILTER_TYPES.ALL,
  isToggled: false,
  activeTodosCount: 0
};

function calcActiveCount(todos) {
  return todos.filter(function(todo) {
    return !todo.isCompleted;
  }).length;
}

function filterTodos(todos, filter) {
  if(filter === FILTER_TYPES.ALL)
    return todos;

  return todos
    .filter(function(todo) {
      return (todo.isCompleted && filter === FILTER_TYPES.COMPLETED)
        || (!todo.isCompleted && filter === FILTER_TYPES.ACTIVE);
    });
}

function reducer(state, action) {
  var todos;
  var activeTodosCount;

  if(state === undefined)
    state = initialState;

  switch(action.type){
    case ADD_TODO:
      todos = state.todos
        .concat([{
          id: action.id,
          isCompleted: false,
          name: action.name
        }]);

      return $.extend({}, state, {
        todos: todos,
        todosByFilter: filterTodos(todos, state.filter),
        activeTodosCount: state.activeTodosCount + 1
      });

    case TOGGLE_ALL:
      todos = state.todos.map(function(todo) {
        return $.extend({}, todo, {
          isCompleted: !state.isToggled
        });
      });

      return $.extend({}, state, {
        todos: todos,
        todosByFilter: filterTodos(todos, state.filter),
        isToggled: !state.isToggled,
        activeTodosCount: calcActiveCount(todos)
      });

    case DELETE_TODO:
      todos = state.todos.filter(function(todo) {
        return action.id !== todo.id;
      });

      return $.extend({}, state, {
        todos: todos,
        todosByFilter: filterTodos(todos, state.filter),
        activeTodosCount: calcActiveCount(todos)
      });

    case TOGGLE_COMPLETE:
      todos = state.todos.map(function(todo) {
        if(action.id !== todo.id)
          return todo;

        return $.extend({}, todo, {
          isCompleted: !todo.isCompleted
        });
      });

      return $.extend({}, state, {
        todos: todos,
        todosByFilter: filterTodos(todos, state.filter),
        activeTodosCount: calcActiveCount(todos)
      });

    case CHANGE_NAME:
      todos = state.todos.map(function(todo) {
        if(action.id !== todo.id)
          return todo;

        return $.extend({}, todo, {
          name: action.name
        });
      });

      return $.extend({}, state, {
        todos: todos,
        todosByFilter: filterTodos(todos, state.filter)
      });


    case CHANGE_FILTER:
      return $.extend({}, state, {
        todosByFilter: filterTodos(state.todos, action.filter),
        filter: action.filter
      });

    case CLEAR_COMPLETED:
      todos = state.todos.filter(function(todo) {
        return !todo.isCompleted;
      });

      return $.extend({}, state, {
        todos: todos,
        todosByFilter: filterTodos(todos, state.filter)
      });

    default:
      return state;
  }
};


module.exports = reducer;
