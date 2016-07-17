var React = require('react');

var WeaherForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location;
    if (location.value.length > 0) {
      this.props.onSearchRequest(location.value);
      location.value = '';
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="location"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeaherForm;
