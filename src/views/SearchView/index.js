import React, { Component } from "react";

import styled from "styled-components";

const View = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  text-align: center;
  font-size: 25px;
  width: 60%;
`;

const Button = styled.button`
  font-size: 15px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  background-color: transparent;
  color: black;
`;

const Input = styled.input`
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid black;
  font-weight: bold;
  width: 60%;

  &:focus {
    outline: none;
  }
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
          <Title>What's the weather like in...</Title>
          <form action="submit" onSubmit={this.handleSearchFormSubmit}>
            <Container>
              <Input
                required="required"
                type="text"
                onChange={this.handleSearchFieldChange}
              />
              <Button type="submit">Let's See!</Button>
            </Container>
          </form>
        </Container>
      </View>
    );
  }
}

export default SearchView;
