var React = require('react');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  onInputChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  onToggle() {
    this.props.toggleAll();
  }

  onKeyUp(e) {
    if(e.which === 13) {
      e.preventDefault();
      this.props.addTodo(e.target.value);
      this.setState({
        value: ''
      });
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          onChange={this.onInputChange.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
          className="new-todo"
          placeholder="What needs to be done?">
        <input
          value={this.props.isToggled}
          onChange={this.onToggle.bind(this)}
          className="toggle-all" type="checkbox">
      </header>
    )
  }
}

module.exports = Header;
