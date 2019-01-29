import React, { Component } from "react";

import styled from "styled-components";

const View = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

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
      <View>
        <Container>
          <div className="Title">How's the weather?</div>
          <form action="submit" onSubmit={this.handleSearchFormSubmit}>
            <Container>
              <input
                required="required"
                type="text"
                onChange={this.handleSearchFieldChange}
              />
              <button type="submit">Search</button>
            </Container>
          </form>
        </Container>
      </View>
    );
  }
}

export default SearchView;
