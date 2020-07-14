import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import TableHeader from "./components/TableHeader";

function App() {
  return (
    <Wrapper>
      <Jumbotron />
      <SearchBar />
      <TableHeader />
    </Wrapper>
  );
}

export default App;
