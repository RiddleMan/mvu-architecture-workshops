var React = require('react');

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      value: ''
    };
  }

  onNameEditEnabled() {
    this.setState({
      isEditing: true,
      value: this.props.name
    });
    setTimeout(function() {
      this.editInput.focus();
    }.bind(this), 10);
  }

  onNameEditSave(e) {
    this.props.changeName(e.target.value);
    this.setState({
      isEditing: false
    });
  }

  onKeyUp(e) {
    if(e.which === 13) {
      e.preventDefault();
      this.onNameEditSave(e);
    }
  }

  onEditChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  onDestroy() {
    this.props.deleteTodo();
  }

  onToggle() {
    this.props.toggleComplete();
  }

  render() {
    var className = (this.state.isEditing ? 'editing' : '') + ' ' +
      (this.props.isCompleted ? 'completed' : '');

    return (
      <li className={className}>
        <div className="view">
          <input
            value={this.props.isCompleted}
            onClick={this.onToggle.bind(this)}
            className="toggle"
            type="checkbox" />
          <label
            onDoubleClick={this.onNameEditEnabled.bind(this)}>
            {this.props.name}</label>
          <button
            onClick={this.onDestroy.bind(this)}
            className="destroy"></button>
        </div>
        <input
          onChange={this.onEditChange.bind(this)}
          value={this.state.value}
          ref={function(r) { this.editInput = r; }.bind(this)}
          onBlur={this.onNameEditSave.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
          className="edit" />
      </li>
    );
  }
}

module.exports = TodoItem;
