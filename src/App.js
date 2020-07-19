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
    filterResult: [],
    search: "",
    sortBy: ""
  };

  componentDidMount() {
    this.populateEmployees();
  }

  populateEmployees = () => {
    API.getEmployees()
      .then(res =>
        this.setState({
          result: res.data.results,
          filterResult: res.data.results,
        })
      )
      .catch(err => console.log(err));
  };

  // handleSortClick = e => {
  //   e.preventDefault();
  //   this.sortList(this.state.sortBy);
  // };

  sortList = (e) => {
    const sortHeader = e.target.id;
    if (this.state.sortBy === sortHeader) {
      return this.setState({
        filterResult: this.state.filterResult.reverse(),
        sortBy: sortHeader
      })
    }

    let sortedList = this.state.result.sort((a, b) => {
      if (sortHeader === "name") {
        return a.name.first < b.name.first ? 1 : -1;
      } else if (sortHeader === "email") {
        return a.email < b.email ? 1 : -1;
      } else {
        return a[sortHeader] < b[sortHeader] ? 1 : -1;
      }
    });
    this.setState({
      filterResult: sortedList,
      sortBy: sortHeader
    })
  };

  handleInputChange = e => {
    this.setState({ search: e.target.value.toLowerCase() });
    this.searchName();
  };

  searchName = () => {
    let nameSearch = this.state.result.filter(employee => {
      let fullName = `${employee.name.first.toLowerCase()} ${employee.name.last.toLowerCase()}`;
      return fullName.includes(this.state.search);
    });
    this.setState({ filterResult: nameSearch });
  };

  render() {
    return (
      <Wrapper>
        <Jumbotron />
        <SearchBar input={this.handleInputChange} search={this.state.search} />
        <Table
          result={this.state.filterResult}
          sortList={this.sortList}
          // handleSortClick={this.handleSortClick}
        />
      </Wrapper>
    );
  }
}

export default App;

//this.state.result.sort((a,b) => return b-a)
//this.state.ascending = true? sort)a-b : sort(b-a)

//button sort handleClick this.setstate !
