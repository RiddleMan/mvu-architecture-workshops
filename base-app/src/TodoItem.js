var $ = require('jquery');

function TodoItem(nextProps) {
  var props = {};
  var prevProps;
  var $el;
  var $toggler;
  var $text;
  var $remove;
  var $editInput;

  //local state
  var isEditing = false;

  function render(nextProps) {
    prevProps = props;
    props = nextProps;

    $el.toggleClass('editing', isEditing);
    $el.toggleClass('completed', props.isCompleted);
    $toggler.prop('checked', props.isCompleted);
    $text.html(props.name);
    $editInput.val(props.name);
  }

  function onNameEditEnabled() {
    isEditing = true;
    render(props);
    $editInput.focus();
  }

  function onNameEditSave(e) {
    props.changeName(e.target.value);
  }

  function onDestroy() {
    props.deleteTodo();
  }

  function onToggle() {
    props.toggleComplete();
  }

  (function init() {
    $el = $(
      '<li>' +
        '<div class="view">' +
          '<input class="toggle" type="checkbox">' +
          '<label></label>' +
          '<button class="destroy"></button>' +
        '</div>' +
        '<input class="edit">' +
      '</li>'
    );

    $toggler = $el.find('.toggle');
    $text = $el.find('label');
    $remove = $el.find('.destroy');
    $editInput = $el.find('.edit');

    $toggler.on('click', onToggle);
    $remove.on('click', onDestroy);
    $text.dblclick(onNameEditEnabled);
    $editInput.blur(onNameEditSave);

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

module.exports = TodoItem;
