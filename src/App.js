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
    searchResult: [],
    search: "",
  };

  componentDidMount() {
    this.populateEmployees();
  }

  populateEmployees = () => {
    API.getEmployees()
      .then(res =>
        this.setState({
          result: res.data.results,
          searchResult: res.data.results,
        })
      )
      .catch(err => console.log(err));
  };

  // sortAscend = () => {
  //   this.state.result.sort((a,b) => {
  //     return b-a;
  //   })
  // }

  handleInputChange = e => {
    this.setState({ search: e.target.value.toLowerCase() });
    this.searchName();
  };

  searchName = () => {
    let nameSearch = this.state.result.filter(employee => {
      let fullName = `${employee.name.first.toLowerCase()} ${employee.name.last.toLowerCase()}`;
      return fullName.includes(this.state.search);
    });
    this.setState({ searchResult: nameSearch });
  };

  render() {
    console.log("state", this.state.result.length);

    return (
      <Wrapper>
        <Jumbotron />
        <SearchBar
          input={this.handleInputChange}
          search={this.state.search}
        />
        <Table result={this.state.searchResult} sortAscend={this.sortAscend} />
      </Wrapper>
    );
  }
}

export default App;

//this.state.result.sort((a,b) => return b-a)
//this.state.ascending = true? sort)a-b : sort(b-a)

//button sort handleClick this.setstate !
