var expect = require('chai').expect;
var actions = require('../src/actions');

describe('actions', function() {
  describe('addTodo()', function() {
    it('should return object with `type` equals `ADD_TODO`', function() {
      var actual = actions.addTodo();

      expect(actual.type).to.be.equal('ADD_TODO');
    });

    it('should return object with `name` given as first argument', function() {
      var name = 'testName';
      var actual = actions.addTodo(name);

      expect(actual.name).to.be.equal(name);
    });

    it('should add `id` field to action which is automaticly generated', function() {
      var actual = actions.addTodo();

      expect(typeof actual.id).to.be.equal('string');
    });
  });

  describe('toggleAll()', function() {
    it('should return object with `type` equals `TOGGLE_ALL`', function() {
      var actual = actions.toggleAll();

      expect(actual.type).to.be.equal('TOGGLE_ALL');
    });
  });

  describe('deleteTodo()', function() {
    it('should return object with `type` equals `DELETE_TODO`', function() {
      var actual = actions.deleteTodo();

      expect(actual.type).to.be.equal('DELETE_TODO');
    });

    it('should return object with `id` given as first argument`', function() {
      var id = 20;
      var actual = actions.deleteTodo(id);

      expect(actual.id).to.be.equal(id);
    });
  });

  describe('toggleComplete()', function() {
    it('should return object with `type` equals `TOGGLE_COMPLETE`', function() {
      var actual = actions.toggleComplete();

      expect(actual.type).to.be.equal('TOGGLE_COMPLETE');
    });

    it('should return object with `id` given as first argument`', function() {
      var id = 20;
      var actual = actions.toggleComplete(id);

      expect(actual.id).to.be.equal(id);
    });
  });

  describe('changeName()', function() {
    it('should return object with `type` equals `CHANGE_NAME`', function() {
      var actual = actions.changeName(1, 'test');

      expect(actual.type).to.be.equal('CHANGE_NAME');
    });

    it('should return object with `id` given as first argument`', function() {
      var id = 20;
      var actual = actions.changeName(id, 'test');

      expect(actual.id).to.be.equal(id);
    });

    it('should return object with `name` given as second argument`', function() {
      var name = 'testName';
      var actual = actions.changeName(10, name);

      expect(actual.name).to.be.equal(name);
    });

    it('should return object which describes `DELETE_TODO` when `name` is falsey', function() {
      var id = 10;
      var actual = actions.changeName(10);

      expect(actual).to.be.deep.equal(actions.deleteTodo(id));
    });
  });

  describe('FILTER_TYPES', function() {
    it('should include `ALL` filter`', function() {
      expect(actions.FILTER_TYPES.ALL).to.be.equal('ALL');
    });

    it('should include `ACTIVE` filter`', function() {
      expect(actions.FILTER_TYPES.ACTIVE).to.be.equal('ACTIVE');
    });

    it('should include `COMPLETED` filter`', function() {
      expect(actions.FILTER_TYPES.COMPLETED).to.be.equal('COMPLETED');
    });
  });

  describe('changeFilter()', function() {
    it('should return object with `type` equals `CHANGE_FILTER`', function() {
      var actual = actions.changeFilter(actions.FILTER_TYPES.ALL);

      expect(actual.type).to.be.equal('CHANGE_FILTER');
    });

    it('should return object with filter given as first argument', function() {
      var actual = actions.changeFilter(actions.FILTER_TYPES.ALL);

      expect(actual.filter).to.be.equal(actions.FILTER_TYPES.ALL);
    });
  });

  describe('clearCompleted()', function() {
    it('should return object with `type` equals `CLEAR_COMPLETED`', function() {
      var actual = actions.clearCompleted();

      expect(actual.type).to.be.equal('CLEAR_COMPLETED');
    });
  });
});
