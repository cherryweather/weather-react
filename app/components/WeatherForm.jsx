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
          <input type="search" ref="location" placeholder="Search weather by city"/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeaherForm;
