import React, { Component } from "react";
import "./App.css";
import API from "./utils/API";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

class App extends Component {
  state = {
    result: [],
  };

  componentDidMount() {
    this.populateEmployees();
  }

  populateEmployees = () => {
    API.getEmployees()
      .then(res => this.setState({ result: res.data.results }))
      .catch(err => console.log(err));
  };

  render() {
    console.log("state", this.state.result.length);

    return (
      <Wrapper>
        <Jumbotron />
        <SearchBar />
        <Table result={this.state.result} />
      </Wrapper>
    );
  }
}

export default App;

//this.stat.resulte.sort((a,b) => return b-a)
//this.state.ascending = true? sort)a-b : sort(b-a)

//button sort handleClick this.setstate !
