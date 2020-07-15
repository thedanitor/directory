import React, { Component } from "react";
import "./App.css";
import API from "./utils/API";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import TableHeader from "./components/TableHeader";
import EmployeeRow from "./components/EmployeeRow";

class App extends Component {
  state = {
    result: {},
  };

  populateEmployees = query => {
    API.getEmployees(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Wrapper>
        <Jumbotron />
        <SearchBar />
        <TableHeader />
        <EmployeeRow>
        {/* image={this.state.result.picture.thumbnail} */}

        </EmployeeRow>
      </Wrapper>
    );
  }
}

export default App;
