var proxyquire = require('proxyquire').noCallThru();
var reducer = proxyquire('../src/reducer', {
  jquery: {
    extend: Object.assign
  }
});
var actions = require('../src/actions');
var expect = require('chai').expect;

var ADD_TODO = actions.ADD_TODO;
var TOGGLE_ALL = actions.TOGGLE_ALL;
var DELETE_TODO = actions.DELETE_TODO;
var TOGGLE_COMPLETE = actions.TOGGLE_COMPLETE;
var CHANGE_NAME = actions.CHANGE_NAME;
var CHANGE_FILTER = actions.CHANGE_FILTER;
var CLEAR_COMPLETED = actions.CLEAR_COMPLETED;
var FILTER_TYPES = actions.FILTER_TYPES;

describe('reducer()', function() {
  it('should return initialState when no state is given', function() {
    var actual = reducer(undefined, {});

    expect(actual).to.be.deep.equal({
      todos: [],
      todosByFilter: [],
      filter: FILTER_TYPES.ALL,
      isToggled: true,
      activeTodosCount: 0
    });
  });

  it('should return same state for uknown actions', function() {
    var state = {};

    var actual = reducer(state, {
      type: 'test'
    });

    expect(actual).to.be.equal(state);
  });

  describe('ADD_TODO', function() {
    it('should add todo with given `name` and `isCompleted` equal `false`', function() {
      var action = {
        type: ADD_TODO,
        name: 'test'
      };

      var actual = reducer(undefined, action);

      expect(actual.todos).to.be.deep.equal([{
        name: 'test',
        isCompleted: false
      }]);
    });

    it('should include new todo in filtered results', function() {
      var action = {
        type: ADD_TODO,
        name: 'test'
      };

      var actual = reducer(undefined, action);

      expect(actual.todosByFilter.length).to.be.equal(1);
      expect(actual.todosByFilter[0]).to.be.deep.equal({
        name: 'test',
        isCompleted: false
      });
    });

    it('should increment `activeTodosCount`', function() {
      var action = {
        type: ADD_TODO,
        name: 'test'
      };

      var actual = reducer(undefined, action);

      expect(actual.activeTodosCount).to.be.equal(1);
    });

    it('should change references of all "touched" objects', function() {
      var initialState = {
        todos: [],
        todosByFilter: [],
        filter: FILTER_TYPES.ALL,
        isToggled: true,
        activeTodosCount: 0
      };
      var action = {
        type: ADD_TODO,
        name: 'test'
      };

      var actual = reducer(initialState, action);

      expect(actual).to.not.be.equal(initialState);
      expect(actual.todos).to.not.be.equal(initialState.todos);
      expect(actual.todosByFilter).to.not.be.equal(initialState.todosByFilter);
      expect(actual.activeTodosCount).to.not.be.equal(initialState.activeTodosCount);
    });
  });

  describe('TOGGLE_ALL', function() {
    it('should toggle all elements to !isToggled state', function() {
      var action = {
        type: TOGGLE_ALL
      };
      var state = {
        todos: [{isCompleted: true}, {isCompleted: true}],
        todosByFilter: [],
        filter: FILTER_TYPES.ALL,
        isToggled: true,
        activeTodosCount: 0
      }

      var actual = reducer(state, action);

      expect(actual.todos).to.be.deep.equal([{isCompleted: false}, {isCompleted: false}]);
    });

    it('should change `isToggled` to opposite value', function() {
      var action = {
        type: TOGGLE_ALL
      };
      var state = {
        todos: [],
        todosByFilter: [],
        filter: FILTER_TYPES.ALL,
        isToggled: true,
        activeTodosCount: 0
      }

      var actual = reducer(state, action);

      expect(actual.isToggled).to.be.false;
    });

    it('should change references of all changed objects', function() {
      var action = {
        type: TOGGLE_ALL
      };
      var state = {
        todos: [{ isCompleted: true }, { isCompleted: false }],
        todosByFilter: [],
        filter: FILTER_TYPES.ALL,
        isToggled: true,
        activeTodosCount: 0
      }

      var actual = reducer(state, action);

      expect(actual).to.be.not.equal(state);
      expect(actual.todos).to.be.not.equal(state.todos);
      expect(actual.todos[0]).to.be.not.equal(state.todos[0]);
      expect(actual.todos[1]).to.be.not.equal(state.todos[1]);
      expect(actual.isToggled).to.be.not.equal(state.isToggled);
      expect(actual.activeTodosCount).to.be.not.equal(state.activeTodosCount);
    });
  });

  describe('DELETE_TODO', function() {
    it('should delete element with specified id/index', function() {
      var action = {
        type: DELETE_TODO,
        id: 1
      };
      var state = {
        todos: [{isCompleted: true}, {isCompleted: true}],
        todosByFilter: [],
        filter: FILTER_TYPES.ALL,
        isToggled: true,
        activeTodosCount: 0
      }

      var actual = reducer(state, action);

      expect(actual.todos).to.be.deep.equal([{isCompleted: true}]);
    });

    it('should not rmeove when there is no todo with specified `id`', function() {
      var action = {
        type: DELETE_TODO,
        id: 10
      };
      var state = {
        todos: [],
        todosByFilter: [],
        filter: FILTER_TYPES.ALL,
        isToggled: true,
        activeTodosCount: 0
      }

      var actual = reducer(state, action);

      expect(actual.todos).to.be.deep.equal([]);
    });

    it('should change references of all changed objects', function() {
      var action = {
        type: DELETE_TODO,
        id: 1
      };
      var state = {
        todos: [{isCompleted: true}, {isCompleted: true}],
        todosByFilter: [],
        filter: FILTER_TYPES.ALL,
        isToggled: true,
        activeTodosCount: 0
      }

      var actual = reducer(state, action);

      expect(actual).to.be.not.equal(state);
      expect(actual.todos).to.be.not.equal(state.todos);
      expect(actual.todos[0]).to.be.equal(state.todos[0]);
      expect(actual.activeTodosCount).to.be.equal(state.activeTodosCount);
    });
  });
});
