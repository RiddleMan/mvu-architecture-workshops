var ADD_TODO = 'ADD_TODO';

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
}

module.exports = {
  addTodo: addTodo,
  
  ADD_TODO: ADD_TODO
};
