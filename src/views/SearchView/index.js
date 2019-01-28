import React, { Component } from "react";

class SearchView extends Component {
  state = {
    searchQuery: ""
  };

  handleSearchFieldChange = event =>
    this.setState({ searchQuery: event.target.value });

  handleSearchFormSubmit = event => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/search",
      search: `?city=${this.state.searchQuery}`
    });
  };

  render() {
    return (
      <div>
        <div className="Title">How's the weather?</div>
        <form action="submit" onSubmit={this.handleSearchFormSubmit}>
          <input type="text" onChange={this.handleSearchFieldChange} />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchView;
